const assert=require("node:assert/strict");
const {chromium}=require("/tmp/editorial-qa/node_modules/playwright");
const fs=require("node:fs");
fs.mkdirSync("qa-evidence",{recursive:true});
const BASE="http://127.0.0.1:3000";
const paths=["/","/genova","/work/personal-ai-system","/work/vida-2","/work/cauce-commerce-lab","/work/library-network-api","/work/webhook-recovery-lab"];
(async()=>{
 const browser=await chromium.launch({headless:true});
 try{
  for(const width of [320,390,768,1440]){
   for(const lang of ["en","es"]){
    const ctx=await browser.newContext({viewport:{width,height:900},reducedMotion:"reduce"});
    await ctx.route("**/*",route=>route.request().url().startsWith(BASE)||route.request().url().startsWith("data:")?route.continue():route.abort());
    const page=await ctx.newPage(),errors=[];
    page.on("pageerror",e=>errors.push(String(e)));
    for(const path of paths){
      const resp=await page.goto(BASE+path+"?lang="+lang);
      assert.equal(resp.status(),200,path);
      assert.equal(await page.locator("html").getAttribute("lang"),lang);
      await page.locator("h1").first().waitFor({state:"visible"});
      const dimensions=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,body:document.body.scrollWidth,client:document.documentElement.clientWidth}));
      assert.ok(dimensions.scroll<=dimensions.client+1&&dimensions.body<=dimensions.client+1,JSON.stringify({path,width,lang,dimensions}));
      assert.ok(await page.locator("h1").first().textContent());
      if(path==="/"){
        assert.equal(await page.locator("[data-stage-tone]").count(),3);
        await page.evaluate(()=>document.fonts.ready);
        assert.ok(await page.evaluate(()=>[...document.fonts].some(f=>f.family.replace(/"/g,"")==="Manrope Variable"&&f.status==="loaded")&&[...document.fonts].some(f=>f.family.replace(/"/g,"")==="Instrument Serif"&&f.status==="loaded")));
        assert.equal(await page.locator('[data-stage-tone="pas"]').evaluate(e=>getComputedStyle(e).animationName),"none");
        if(width===1440){const box=await page.locator('[data-stage-tone="pas"]').boundingBox();assert.ok(box.y+box.height<=900,JSON.stringify(box));}
        assert.ok(await page.locator("#capabilities").count());
        assert.ok(await page.locator('a[href*="/pas-explorer/explorer/index.html"]').count());
        assert.ok(await page.locator('a[href*="/genova"]').count());
        assert.equal(await page.locator("[data-method-wire]").count(),5);
        const bg=await page.locator("[data-editorial-header]").evaluate(el=>getComputedStyle(el).backgroundColor);
        assert.equal(bg,"rgb(8, 8, 8)");
        if(width<=980){
          const menu=page.locator("[data-editorial-menu]");
          await menu.locator("summary").click();
          assert.equal(await menu.evaluate(e=>e.open),true);
          await page.keyboard.press("Escape");
          await page.waitForFunction(()=>!document.querySelector("[data-editorial-menu]").open);
        }
      }
      if(path==="/genova"){
        for(const title of ["Contexto.Psi","Madí Bienestar","Estudio Starik","Baterías Sur"])assert.ok(await page.getByRole("heading",{name:title,exact:true}).count(),title);
      }
      if(path==="/work/personal-ai-system"){
        assert.ok(await page.locator("details").count()>=7);
        assert.ok(await page.locator('a[href*="/pas-explorer/explorer/index.html"]').count());
        const details=page.locator("details").first();
        await details.locator("summary").click();
        assert.equal(await details.evaluate(e=>e.open),true);
      }
      assert.equal(errors.length,0,errors.join("\n"));
      if(path==="/"||path==="/genova") {
        for(const img of await page.locator("img").all()){await img.scrollIntoViewIfNeeded();await img.evaluate(async e=>{await e.decode();if(!e.naturalWidth)throw Error("Image missing: "+e.currentSrc)});}
        await page.evaluate(()=>window.scrollTo({top:0,behavior:"instant"}));
        if(path==="/") await page.waitForFunction(()=>!document.querySelector("[data-editorial-header]").hasAttribute("data-compact"));
      }
      if([390,1440].includes(width)&&lang==="en") await page.screenshot({path:"qa-evidence/"+width+"-"+(path==="/"?"home":path.split("/").pop())+".png",fullPage:path==="/"});
      console.log("PASS",width,lang,path);
    }
    await ctx.close();
   }
  }
  const ctx=await browser.newContext({viewport:{width:1440,height:900}});
  await ctx.route("**/*",route=>route.request().url().startsWith(BASE)?route.continue():route.abort());
  const page=await ctx.newPage();
  await page.goto(BASE+"/");
  const anim=await page.locator('[data-stage-tone="pas"]').evaluate(el=>getComputedStyle(el).animationName);
  assert.notEqual(anim,"none");
  await page.locator('[data-stage-tone="pas"]').evaluate(async el=>{await Promise.allSettled(el.getAnimations({subtree:true}).map(a=>a.finished))});
  await page.evaluate(()=>window.scrollTo({top:500,behavior:"instant"}));
  await page.waitForFunction(()=>document.querySelector("[data-editorial-header]").hasAttribute("data-compact"));
  await page.evaluate(()=>window.scrollTo({top:0,behavior:"instant"}));
  await page.waitForFunction(()=>!document.querySelector("[data-editorial-header]").hasAttribute("data-compact"));
  await page.locator('[data-editorial-header] a[href="/?lang=es"]').first().click();
  await page.waitForFunction(()=>document.documentElement.lang==="es");
  assert.match(await page.locator("h1").textContent(),/Construyo software/);
  await page.locator('[data-editorial-header] a[href="/genova?lang=es"]').first().click();
  await page.waitForURL("**/genova?lang=es");
  assert.equal(await page.locator("html").getAttribute("lang"),"es");
  const explorer=await page.request.get(BASE+"/pas-explorer/explorer/index.html?lang=es");
  assert.equal(explorer.status(),200);
  const cv=await page.request.get(BASE+"/Francisco_Vitar_CV_ATS_V1.pdf");
  assert.equal(cv.status(),200);
  await ctx.close();
  console.log("EDITORIAL_V13_BROWSER_PASS");
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
