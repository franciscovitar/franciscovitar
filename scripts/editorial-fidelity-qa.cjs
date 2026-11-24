const assert=require("node:assert/strict");
const fs=require("node:fs");
const {chromium}=require("/tmp/editorial-qa/node_modules/playwright");
const BASE="http://127.0.0.1:3000",fixture=fs.readFileSync("scripts/fixtures/editorial-v13-home.html","utf8");
fs.mkdirSync("qa-evidence",{recursive:true});
const paths=["/","/genova","/work/personal-ai-system","/work/vida-2","/work/cauce-commerce-lab","/work/webhook-recovery-lab","/work/library-network-api"];
const selectors=[".hero h1",".hero-description",".stage",".stage-tile.pas",".stage-tile.vida",".stage-tile.cauce",".feature",".feature h3",".feature-metrics",".project-row:nth-of-type(1)",".project-row:nth-of-type(2)",".project-row:nth-of-type(3)",".project-row:nth-of-type(4)",".genova-feature",".client-line",".method-grid",".principles h3",".skill-table",".about-grid","footer h2",".footer-bottom"];
async function geometry(page){return page.evaluate(selectors=>Object.fromEntries(selectors.map(sel=>{const e=document.querySelector(sel);if(!e)return [sel,null];const b=e.getBoundingClientRect(),s=getComputedStyle(e);return [sel,{w:b.width,h:b.height,x:b.x,fontSize:s.fontSize,fontWeight:s.fontWeight,lineHeight:s.lineHeight,letterSpacing:s.letterSpacing}]})),selectors)}
(async()=>{
 const browser=await chromium.launch({headless:true}); const failures=[],comparison=[];
 try{
  for(const width of [320,390,768,1440])for(const lang of ["en","es"]){
   const ctx=await browser.newContext({viewport:{width,height:900},reducedMotion:"reduce"});
   await ctx.route("**/*",r=>r.request().url().startsWith(BASE)||r.request().url().startsWith("data:")?r.continue():r.abort());
   const page=await ctx.newPage(),errors=[];page.on("pageerror",e=>errors.push(String(e)));
   for(const path of paths){
    try{
     errors.length=0; const res=await page.goto(BASE+path+"?lang="+lang);
     assert.equal(res.status(),200);assert.equal(await page.locator("html").getAttribute("lang"),lang);
     await page.locator("h1").first().waitFor({state:"visible"});
     await page.evaluate(()=>document.fonts.ready);
     const dims=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,body:document.body.scrollWidth,client:document.documentElement.clientWidth}));
     assert.ok(dims.scroll<=dims.client+1&&dims.body<=dims.client+1,JSON.stringify(dims));
     assert.equal(await page.locator("h1").count(),1);
     assert.ok((await page.locator(".brand-long").textContent()).includes("Francisco Vitar"));
     if(path==="/"){
      assert.equal(await page.locator(".stage-tile").count(),3);
      assert.equal(await page.locator(".project-row").count(),4);
      assert.equal(await page.locator(".project-visual").count(),5);
      assert.equal(await page.locator(".project-row img").count(),0);
      assert.equal(await page.locator(".stage .mini-list>div").count(),3);
      assert.equal(await page.locator(".event-flow>div").count(),5);
      assert.equal(await page.locator(".book-list>div").count(),3);
      assert.equal(await page.locator(".client-line a").count(),4);
      assert.equal(await page.locator(".about-grid").count(),1);
      assert.equal(await page.locator(".stage-tile.pas").evaluate(e=>getComputedStyle(e).animationName),"none");
      assert.ok(await page.locator('a[href*="/pas-explorer/explorer/index.html"]').count());
      if(width<=760){const menu=page.locator("[data-prototype-menu]");await menu.locator("summary").click();assert.ok(await menu.evaluate(e=>e.open));await page.keyboard.press("Escape");await page.waitForFunction(()=>!document.querySelector("[data-prototype-menu]").open);}
      const ref=await ctx.newPage();await ref.setContent(fixture);
      if(lang==="es")await ref.evaluate(()=>document.querySelectorAll("[data-en][data-es]").forEach(e=>e.textContent=e.dataset.es));
      await ref.evaluate(()=>document.fonts.ready);
      const a=await geometry(ref),b=await geometry(page);
      for(const sel of selectors){assert.ok(a[sel]&&b[sel],sel);for(const k of ["w","h","x"]){const delta=Math.abs(a[sel][k]-b[sel][k]);const tolerance=Math.max(5,Math.abs(a[sel][k])*.035);if(delta>tolerance)comparison.push({width,lang,sel,k,expected:a[sel][k],actual:b[sel][k],delta,tolerance})}for(const k of ["fontSize","fontWeight","lineHeight","letterSpacing"])if(a[sel][k]!==b[sel][k])comparison.push({width,lang,sel,k,expected:a[sel][k],actual:b[sel][k]});}
      if([390,1440].includes(width)){await ref.screenshot({path:"qa-evidence/reference-"+width+"-"+lang+".png",fullPage:true});await page.screenshot({path:"qa-evidence/candidate-"+width+"-"+lang+".png",fullPage:true});}
      await ref.close();
     }else if(path==="/genova"){
      assert.equal(await page.locator(".client-grid .client").count(),4);
      assert.equal(await page.locator(".draft-cases").count(),0);
      const d=page.locator(".evidence-disclosure");await d.locator("summary").click();
      assert.equal(await d.locator("img").count(),5);
      for(const img of await d.locator("img").all()){await img.scrollIntoViewIfNeeded();await img.evaluate(async e=>{e.loading="eager";await e.decode();if(!e.naturalWidth)throw Error("image unavailable")});}
      await d.locator("summary").click();
     }else{
      assert.equal(await page.locator(".case-art .visual").count(),1);
      assert.ok(await page.locator(".case-detail").count());
      if(path.includes("personal-ai-system")){assert.ok(await page.locator("#pas-architecture").count());assert.ok(await page.locator("details").count()>=7);assert.ok(await page.locator('a[href*="/pas-explorer/explorer/index.html"]').count());}
     }
     if(path!=="/"&&[390,1440].includes(width)&&lang==="en")await page.screenshot({path:"qa-evidence/"+width+"-"+path.split("/").pop()+".png",fullPage:false});
     assert.equal(errors.length,0,errors.join("\n"));console.log("PASS_ROUTE",width,lang,path);
    }catch(e){failures.push({width,lang,path,error:String(e)});console.error("FAIL_ROUTE",width,lang,path,String(e));await page.screenshot({path:"qa-evidence/fail-"+width+"-"+lang+"-"+(path==="/"?"home":path.split("/").pop())+".png",fullPage:true}).catch(()=>{});}
   }await ctx.close();
  }
  const ctx=await browser.newContext({viewport:{width:1440,height:900}});const page=await ctx.newPage();await page.goto(BASE+"/");
  assert.notEqual(await page.locator(".stage-tile.pas").evaluate(e=>getComputedStyle(e).animationName),"none");
  await page.evaluate(()=>scrollTo({top:500,behavior:"instant"}));await page.waitForFunction(()=>document.querySelector(".nav-shell").classList.contains("compact"));assert.equal(await page.locator(".brand-short").isVisible(),true);
  await page.evaluate(()=>scrollTo({top:0,behavior:"instant"}));await page.waitForFunction(()=>!document.querySelector(".nav-shell").classList.contains("compact"));
  await page.locator('.nav-right a[aria-label="Cambiar idioma"]').click();await page.waitForFunction(()=>document.documentElement.lang==="es");
  await page.locator(".nav-links").getByText("Genova",{exact:true}).click();await page.waitForURL("**/genova?lang=es");
  assert.equal(await page.locator("html").getAttribute("lang"),"es");
  assert.equal((await page.request.get(BASE+"/Francisco_Vitar_CV_ATS_V1.pdf")).status(),200);
  assert.equal((await page.request.get(BASE+"/pas-explorer/explorer/index.html?lang=es")).status(),200);
  await ctx.close();
  fs.writeFileSync("qa-evidence/comparison.json",JSON.stringify({comparison,failures},null,2));console.log("COMPARISON",JSON.stringify(comparison));assert.equal(failures.length,0,JSON.stringify(failures));assert.equal(comparison.length,0,"Reference geometry/style differences; inspect comparison.json");console.log("EDITORIAL_FIDELITY_PASS");
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
