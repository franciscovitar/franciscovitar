const assert=require("node:assert/strict");
const fs=require("node:fs");
const {chromium,webkit,firefox}=require("/tmp/editorial-qa/node_modules/playwright");
const BASE="http://127.0.0.1:3000";
const paths=["/","/genova","/work/personal-ai-system","/work/vida-2","/work/cauce-commerce-lab","/work/webhook-recovery-lab","/work/library-network-api","/cv","/work/la-mediterranea-store"];
fs.mkdirSync("qa-evidence",{recursive:true});
const failures=[],passed=[],links=new Set();
async function safe(fn,tag){try{await fn();passed.push(tag);console.log("PASS",tag)}catch(e){failures.push({tag,error:String(e)});console.error("FAIL",tag,String(e))}}
async function check(page,w,path,lang){
 const res=await page.goto(BASE+path+"?lang="+lang);assert.equal(res.status(),200);
 assert.equal(await page.locator("html").getAttribute("lang"),lang);
 await page.locator("h1").first().waitFor({state:"visible"});
 await page.evaluate(()=>document.fonts.ready);
 const report=await page.evaluate(()=>{
 const W=document.documentElement.clientWidth;
 const visible=e=>e.getClientRects().length&&getComputedStyle(e).visibility!=="hidden"&&getComputedStyle(e).display!=="none";
 const selectors=".ep .nav,.ep .nav-right,.ep .brand,.ep .nav-links,.ep .section-head,.ep .hero-copy,.ep .stage,.ep .stage-tile,.ep .feature,.ep .project-row,.ep .project-visual,.ep .genova-feature,.ep .client,.ep .method-diagram,.ep .skill-table,.ep .about-grid,.ep .footer-bottom,.ep .inner-hero,.ep .case-meta,main h1,main h2,main h3,main a";
 const bad=[...document.querySelectorAll(selectors)].filter(visible).map(e=>{const r=e.getBoundingClientRect();return {name:e.tagName+" "+String(e.className).slice(0,70),left:r.left,right:r.right,text:e.textContent.slice(0,60)}}).filter(r=>r.left< -2||r.right>W+2);
 const dup=[...document.querySelectorAll("[id]")].map(e=>e.id).filter((x,i,a)=>a.indexOf(x)!==i);
 const a=[...document.querySelectorAll("a[href]")].map(e=>({href:e.href,target:e.target,rel:e.rel,label:e.getAttribute("aria-label")||e.textContent.trim()}));
 return {W,scroll:document.documentElement.scrollWidth,body:document.body.scrollWidth,bad,dup,a,titles:[...document.querySelectorAll("main h1,main h2,main h3,main h4")].map(e=>e.textContent.trim()).filter(t=>t.endsWith(".")),emoji:a.filter(x=>x.label.includes("↗"))}
 });
 assert.ok(report.scroll<=report.W+1&&report.body<=report.W+1,JSON.stringify(report));
 assert.equal(report.bad.length,0,JSON.stringify(report.bad));assert.equal(report.dup.length,0,JSON.stringify(report.dup));
 assert.equal(report.titles.length,0,JSON.stringify(report.titles));assert.equal(report.emoji.length,0,JSON.stringify(report.emoji));
 for(const a of report.a){const u=new URL(a.href);if(u.origin===BASE)links.add(u.pathname+u.search+u.hash);assert.ok(["http:","https:","mailto:"].includes(u.protocol));if(a.target==="_blank")assert.match(a.rel,/noopener|noreferrer/)}
 assert.equal(await page.locator("h1").count(),1);
 if(path==="/"){
 assert.equal(await page.locator(".stage-tile").count(),3);assert.equal(await page.locator(".project-row").count(),4);
 assert.equal(await page.locator(".stage-footer a>span").isVisible(),true);
 assert.equal(await page.locator(".method-steps li").count(),5);
 assert.equal(await page.locator(".hero .mask>em").evaluate(e=>getComputedStyle(e).animationName),"none");
 if(w<=760){const menu=page.locator("[data-prototype-menu]");await menu.locator("summary").click();assert.ok(await menu.evaluate(e=>e.open));await page.keyboard.press("Escape");await page.waitForFunction(()=>!document.querySelector("[data-prototype-menu]").open);}
 }else if(path==="/genova"){
 const d=page.locator(".evidence-disclosure");await d.locator("summary").click();assert.equal(await d.locator("img").count(),5);
 for(const img of await d.locator("img").all()){await img.evaluate(async e=>{e.loading="eager";await e.decode();if(!e.naturalWidth)throw Error("image decode")})}
 await d.locator("summary").click();
 }else if(path.includes("/work/")){
 assert.ok(await page.locator(".case-detail").count());
 if(path.includes("personal-ai-system"))assert.ok(await page.locator("#pas-architecture").count());
 const d=page.locator(".case-detail");await d.locator("summary").click();assert.ok(await d.evaluate(e=>e.open));await d.locator("summary").click();
 if(path.includes("la-mediterranea-store"))assert.ok(page.url().includes("/work/cauce-commerce-lab"));
 }
}
(async()=>{
for(const [name,engine,widths] of [["chromium",chromium,[320,360,390,414,600,760,761,768,820,1024,1280,1440,1920]],["webkit",webkit,[320,390,430,768,1024,1440]],["firefox",firefox,[320,390,768,1440]]]){
 const browser=await engine.launch({headless:true});
 try{
 for(const w of widths)for(const lang of ["en","es"]){
 const ctx=await browser.newContext({viewport:{width:w,height:900},reducedMotion:"reduce",hasTouch:w<=760});
 await ctx.route("**/*",r=>r.request().url().startsWith(BASE)||r.request().url().startsWith("data:")?r.continue():r.abort());
 const page=await ctx.newPage(),errors=[];page.on("pageerror",e=>errors.push(String(e)));
 for(const path of paths)await safe(async()=>{errors.length=0;await check(page,w,path,lang);assert.equal(errors.length,0,errors.join("\n"));if(lang==="en"&&[390,1440].includes(w)&&["/","/genova","/work/personal-ai-system","/cv"].includes(path)){await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:"qa-evidence/"+name+"-"+w+"-"+(path==="/"?"home":path.split("/").pop())+".png",fullPage:path==="/"});}},name+" "+w+" "+lang+" "+path);
 await ctx.close();
 }
 // Real animations: verify original hero values, post-hero durations and independent mobile reveal.
 for(const w of [390,1440])await safe(async()=>{
 const ctx=await browser.newContext({viewport:{width:w,height:850},hasTouch:w<760});
 const p=await ctx.newPage();await p.goto(BASE+"/");
 const original=await p.locator(".hero .mask>em").evaluate(e=>{const s=getComputedStyle(e);return [s.animationName,s.animationDuration,s.animationDelay,s.animationTimingFunction]});
 assert.deepEqual(original,["curtain",w<=760?"1.42s":"1.86s","0.56s","cubic-bezier(0.25, 0.65, 0.18, 1)"]);
 const h=p.locator("#projects .section-head");await h.evaluate(e=>e.scrollIntoView({block:"center",behavior:"instant"}));await p.waitForFunction(()=>document.querySelector("#projects .section-head").classList.contains("visible"));
 const duration=await h.locator("h2").evaluate(e=>parseFloat(getComputedStyle(e).animationDuration));assert.ok(duration>=2.2);
 const art=p.locator(".project-row .project-visual").last();await art.evaluate(e=>e.scrollIntoView({block:"center",behavior:"instant"}));await p.waitForFunction(()=>[...document.querySelectorAll(".project-row .project-visual")].at(-1).classList.contains("part-visible"));
 assert.ok(await art.evaluate(e=>parseFloat(getComputedStyle(e).animationDuration)>=2.1));
 await p.emulateMedia({reducedMotion:"reduce"});assert.equal(await art.evaluate(e=>getComputedStyle(e).animationName),"none");
 await ctx.close();
 },name+" "+w+" motion");
 // Mobile landscape and touch menu scroll/focus, local anchor journey.
 await safe(async()=>{
 const ctx=await browser.newContext({viewport:{width:667,height:375},hasTouch:true,reducedMotion:"reduce"});const p=await ctx.newPage();await p.goto(BASE+"/?lang=es");const menu=p.locator("[data-prototype-menu]");await menu.locator("summary").click();assert.ok(await menu.evaluate(e=>e.open));
 const list=menu.locator("#mobile-menu");const r=await list.boundingBox();assert.ok(r.y+r.height<=377,JSON.stringify(r));await list.getByText("Sobre mí",{exact:true}).click();await p.waitForURL("**/?lang=es#about");assert.equal(await menu.evaluate(e=>e.open),false);assert.ok(await p.locator("#about").evaluate(e=>e.getBoundingClientRect().top)>=55);
 await ctx.close();
 },name+" landscape navigation");
 // No JavaScript: content remains readable and links are ordinary anchors.
 await safe(async()=>{const ctx=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:850},reducedMotion:"reduce"});const p=await ctx.newPage();await p.goto(BASE+"/");assert.equal(await p.locator("#contact h2").isVisible(),true);assert.equal(await p.locator(".project-row").count(),4);await ctx.close()},name+" no-js");
 }finally{await browser.close()}
}
const b=await chromium.launch();try{const p=await b.newPage();
 for(const href of links)await safe(async()=>{const u=new URL(href,BASE);const res=await p.request.get(u.origin+u.pathname+u.search);assert.equal(res.status(),200);if(u.hash&&!u.pathname.endsWith(".pdf")){await p.goto(u.origin+u.pathname+u.search);assert.ok(await p.evaluate(id=>!!document.getElementById(id),decodeURIComponent(u.hash.slice(1))),href)}}, "local link "+href);
 await safe(async()=>{const res=await p.request.get(BASE+"/Francisco_Vitar_CV_ATS_V1.pdf");assert.equal(res.status(),200);assert.equal((await res.body()).subarray(0,4).toString(),"%PDF");const x=await p.request.get(BASE+"/pas-explorer/explorer/index.html?lang=es");assert.equal(x.status(),200)}, "CV and Explorer");
}finally{await b.close()}
fs.writeFileSync("qa-evidence/results.json",JSON.stringify({passed,failures,links:[...links]},null,2));console.log("SUMMARY",JSON.stringify({passed:passed.length,failed:failures.length}));assert.equal(failures.length,0,JSON.stringify(failures));console.log("EDITORIAL_FINAL_PASS");
})().catch(e=>{console.error(e);process.exitCode=1});
