const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs/promises");
const { chromium, firefox, webkit } = require("/tmp/final-portfolio-qa/node_modules/playwright");
const base = "http://127.0.0.1:3000";
const site = "https://franvitar.genovasite.com";
const pdf = "/Francisco_Vitar_CV_ATS_V2.pdf";
const routes = ["/","/cv","/genova","/work/personal-ai-system","/work/vida-2","/work/cauce-commerce-lab","/work/webhook-recovery-lab","/work/library-network-api"];
const expectedPdfHash = "6823e5900905fb66930a9bb563cfd93c8ee68021dc6c06ac78f0fecefddb578a";

function canonicalUrlForComparison(value) {
  // URL serialization normalizes the equivalent host forms `https://host`
  // and `https://host/`, while preserving different hosts, paths and queries.
  return new URL(value).href;
}

assert.equal(canonicalUrlForComparison(site), canonicalUrlForComparison(`${site}/`));
assert.notEqual(canonicalUrlForComparison(site), canonicalUrlForComparison("https://example.com/"));
assert.notEqual(canonicalUrlForComparison(site), canonicalUrlForComparison(`${site}/genova`));
assert.notEqual(canonicalUrlForComparison(site), canonicalUrlForComparison(`${site}?lang=es`));

(async () => {
 const response=await fetch(base+pdf);
 assert.equal(response.status,200);
 assert.match(response.headers.get("content-type"),/application\/pdf/);
 assert.equal(crypto.createHash("sha256").update(Buffer.from(await response.arrayBuffer())).digest("hex"),expectedPdfHash);
 assert.equal((await fetch(base+"/Francisco_Vitar_CV_ATS_V1.pdf")).status,200);
 const robots=await (await fetch(base+"/robots.txt")).text();
 assert.ok(robots.includes(site+"/sitemap.xml"));
 const sitemap=await (await fetch(base+"/sitemap.xml")).text();
 for(const path of routes) for(const lang of ["en","es"]) {
   const url=site+path+(lang==="es"?"?lang=es":"");
   assert.ok(sitemap.includes(url),url);
 }
 console.log("PDF_HASH_AND_SITEMAP_PASS");
 const failures=[];let passed=0;
 for(const [name,engine] of [["chromium",chromium],["firefox",firefox],["webkit",webkit]]) {
  const browser=await engine.launch({headless:true});
  try{
  for(const width of (name==="chromium"?[390]:[390,1440])) for(const lang of ["en","es"]) {
   const ctx=await browser.newContext({viewport:{width,height:900},reducedMotion:"reduce",hasTouch:width<760});
   await ctx.route("**/*",r=>r.request().url().startsWith(base)||r.request().url().startsWith("data:")?r.continue():r.abort());
   const page=await ctx.newPage();
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   for(const path of routes) {try{
    errors.length=0;
    const suffix=lang==="es"?"?lang=es":"";
    const res=await page.goto(base+path+suffix,{waitUntil:"domcontentloaded",timeout:15000});
    assert.equal(res.status(),200);
    await page.locator("h1").first().waitFor({state:"visible",timeout:10000});
    await page.locator('link[rel="canonical"]').first().waitFor({state:"attached",timeout:10000});
    assert.equal(await page.locator("html").getAttribute("lang"),lang);
    assert.equal(
      canonicalUrlForComparison(await page.locator('link[rel="canonical"]').last().getAttribute("href")),
      canonicalUrlForComparison(site+path+suffix),
      `Canonical URL mismatch for ${path}${suffix}`
    );
    const checks=await page.evaluate(()=>({scroll:document.documentElement.scrollWidth,client:document.documentElement.clientWidth,links:[...document.querySelectorAll("a[href]")].map(a=>a.getAttribute("href"))}));
    assert.ok(checks.scroll<=checks.client+1,JSON.stringify(checks));
    assert.ok(checks.links.includes("/Francisco_Vitar_CV_ATS_V2.pdf"),"Missing CV V2 link");
    assert.ok(!checks.links.includes("/Francisco_Vitar_CV_ATS_V1.pdf"),"Legacy CV link");
    if(path==="/"||path==="/work/vida-2"){
     assert.ok(checks.links.includes("https://github.com/franciscovitar/vida-2-0-demo"),"Missing independent demo source");
     assert.ok(!checks.links.includes("https://github.com/franciscovitar/vida-2.0"),"Original source link still present");
    }
    if(path==="/cv"){
      const downloadLink=page.locator('a[download][href="/Francisco_Vitar_CV_ATS_V2.pdf"]');
      assert.equal(await downloadLink.count(),1);
      assert.equal(await page.locator("h1").textContent().then(t=>t.endsWith(".")),false);
      const [download]=await Promise.all([page.waitForEvent("download"),downloadLink.click()]);
      assert.equal(download.suggestedFilename(),"Francisco_Vitar_CV_ATS_V2.pdf");
      const downloadedPdf=await fs.readFile(await download.path());
      assert.equal(crypto.createHash("sha256").update(downloadedPdf).digest("hex"),expectedPdfHash);
    }
    if(path==="/"&&width===390){
      const menu=page.locator("[data-prototype-menu]");
      await menu.locator("summary").click();
      assert.ok(await menu.evaluate(e=>e.open));
      await page.keyboard.press("Escape");
      await page.waitForFunction(()=>!document.querySelector("[data-prototype-menu]").open,{},{timeout:5000});
    }

    // Next.js can have an in-flight Link prefetch when the next route starts.
    // Let those requests settle per route; do not hide resulting page errors.
    await page.waitForLoadState("networkidle",{timeout:10000});

    if(name==="webkit"&&path==="/genova"&&lang==="es"){
      const toEnglish=page.locator('a[aria-label="Switch language"]');
      assert.equal(await toEnglish.getAttribute("href"),"/genova");
      await Promise.all([page.waitForNavigation({waitUntil:"domcontentloaded"}),toEnglish.click()]);
      assert.equal(await page.locator("html").getAttribute("lang"),"en");
      assert.equal(canonicalUrlForComparison(await page.locator('link[rel="canonical"]').last().getAttribute("href")),canonicalUrlForComparison(site+"/genova"));
      await page.waitForLoadState("networkidle",{timeout:10000});

      const toSpanish=page.locator('a[aria-label="Cambiar idioma"]');
      assert.equal(await toSpanish.getAttribute("href"),"/genova?lang=es");
      await Promise.all([page.waitForNavigation({waitUntil:"domcontentloaded"}),toSpanish.click()]);
      assert.equal(await page.locator("html").getAttribute("lang"),"es");
      assert.equal(canonicalUrlForComparison(await page.locator('link[rel="canonical"]').last().getAttribute("href")),canonicalUrlForComparison(site+"/genova?lang=es"));
      await page.waitForLoadState("networkidle",{timeout:10000});
    }

    assert.equal(errors.length,0,errors.join("\n"));
    passed++;console.log("PASS",name,width,lang,path);
   }catch(e){failures.push({name,width,lang,path,error:String(e)});console.error("FAIL",name,width,lang,path,String(e));}}
   await ctx.close();
  }
  }finally{await browser.close();}
 }
 console.log("MATRIX_RESULT",JSON.stringify({passed,failed:failures.length,failures}));
 assert.equal(failures.length,0);
 console.log("FINAL_INTEGRATION_PASS");
})().catch(e=>{console.error(e);process.exitCode=1;});
