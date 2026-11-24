const assert=require("node:assert/strict");
const fs=require("node:fs");
const {chromium,webkit}=require("/tmp/editorial-qa/node_modules/playwright");
const BASE="http://127.0.0.1:3000";
const paths=["/work/cauce-commerce-lab"];
fs.mkdirSync("qa-evidence",{recursive:true});
(async()=>{
 const failures=[];
 for(const [name,engine] of [["chromium",chromium],["webkit",webkit]]){
 const browser=await engine.launch({headless:true});
 try{
 for(const width of (name==="chromium"?[320,390,768,1440]:[390,1440]))for(const lang of ["en","es"]){
 const ctx=await browser.newContext({viewport:{width,height:900},reducedMotion:"reduce",hasTouch:width<760,isMobile:name==="webkit"&&width<760});
 await ctx.route("**/*",r=>r.request().url().startsWith(BASE)||r.request().url().startsWith("data:")?r.continue():r.abort());
 const page=await ctx.newPage(),errors=[];page.on("pageerror",e=>errors.push(String(e)));
 for(const path of paths){try{
 errors.length=0;const res=await page.goto(BASE+path+"?lang="+lang);assert.equal(res.status(),200);
 assert.equal(await page.locator("html").getAttribute("lang"),lang);
 await page.locator("h1").first().waitFor({state:"visible"});
 const checks=await page.evaluate(()=>({titles:[...document.querySelectorAll(".ep h1,.ep h2,.ep h3,.ep h4")].map(e=>e.textContent.trim()).filter(t=>t.endsWith(".")),emojiLinks:[...document.querySelectorAll(".ep a")].map(e=>e.textContent.trim()).filter(t=>t.includes("↗")),scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,body:document.body.scrollWidth}));
 assert.equal(checks.titles.length,0,JSON.stringify(checks.titles));assert.equal(checks.emojiLinks.length,0,JSON.stringify(checks.emojiLinks));assert.ok(checks.scroll<=checks.client+1&&checks.body<=checks.client+1,JSON.stringify(checks));
 assert.equal(await page.locator(".brand-short").textContent(),"FV");
 assert.equal(await page.locator(".brand-long").textContent(),"Francisco Vitar");
 assert.ok(await page.locator("svg.ui-arrow").count());
 if(path==="/"){
 assert.equal(await page.locator(".genova-word").textContent(),"Genova");
 assert.equal(await page.locator(".method-steps li").count(),5);
 assert.equal(await page.locator(".stage-tile").count(),3);
 assert.equal(await page.locator(".project-row").count(),4);
 assert.equal(await page.locator(".stage-tile.pas").evaluate(e=>getComputedStyle(e).animationName),"none");
 assert.equal(await page.locator(".mask").first().evaluate(e=>getComputedStyle(e).overflow),"visible");
 if(width<=760){const menu=page.locator("[data-prototype-menu]");await menu.locator("summary").click();assert.ok(await menu.evaluate(e=>e.open));await page.keyboard.press("Escape");await page.waitForFunction(()=>!document.querySelector("[data-prototype-menu]").open);}
 if(lang==="en"&&[390,1440].includes(width)){await page.locator(".method-loop").screenshot({path:"qa-evidence/"+name+"-"+width+"-method.png"});await page.locator(".genova-feature").screenshot({path:"qa-evidence/"+name+"-"+width+"-genova.png"});await page.evaluate(()=>scrollTo(0,0));await page.screenshot({path:"qa-evidence/"+name+"-"+width+"-hero.png"});}
 }else if(path==="/genova"){assert.equal(await page.locator("h1").textContent(),"Genova");assert.equal(await page.locator(".client-grid .client").count(),4);}
 else {assert.ok(await page.locator(".case-detail").count()); const detail=page.locator(".case-detail");await detail.locator("summary").click();assert.equal(await detail.evaluate(e=>e.open),true);assert.ok(await detail.locator("svg.ui-arrow").count());if(path.includes("personal-ai-system"))assert.ok(await page.locator("#pas-architecture").count());}
 assert.equal(errors.length,0,errors.join("\n"));console.log("PASS",name,width,lang,path);
 }catch(e){failures.push({name,width,lang,path,error:String(e)});console.error("FAIL",name,width,lang,path,String(e));}}
 await ctx.close();
 }
 const ctx=await browser.newContext({viewport:{width:1440,height:900}});
 const page=await ctx.newPage();await page.goto(BASE+"/");
 assert.ok(parseFloat(await page.locator(".hero .mask>em").evaluate(e=>getComputedStyle(e).animationDuration))>=1.8);
 await page.evaluate(()=>scrollTo({top:500,behavior:"instant"}));await page.waitForFunction(()=>document.querySelector(".nav-shell").classList.contains("compact"));
 assert.equal(await page.locator(".brand-short").isVisible(),true);
 await ctx.close();
 }finally{await browser.close();}
 }
 fs.writeFileSync("qa-evidence/results.json",JSON.stringify(failures,null,2));assert.equal(failures.length,0,JSON.stringify(failures));console.log("EDITORIAL_POLISH_PASS");
})().catch(e=>{console.error(e);process.exitCode=1});
