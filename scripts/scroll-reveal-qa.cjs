const assert = require("node:assert/strict");
const { chromium, firefox, webkit } = require("/tmp/final-portfolio-qa/node_modules/playwright");
const base = "http://127.0.0.1:3000";
const pending = "[data-scroll-reveal-pending]";
(async () => {
 for (const engine of [chromium, firefox, webkit]) {
  const browser = await engine.launch();
  try {
   for (const width of [390, 1440]) {
    for (const path of ["/", "/genova?lang=es", "/work/personal-ai-system"]) {
     const page = await browser.newPage({viewport:{width,height:800}, reducedMotion:"no-preference"});
     const errors = []; page.on("pageerror", e => errors.push(String(e)));
     await page.goto(base+path, {waitUntil:"networkidle"});
     await page.locator(pending).first().waitFor({state:"attached"});
     const target = page.locator(pending).first();
     const before = await target.evaluate(el => ({opacity:getComputedStyle(el).opacity,top:el.getBoundingClientRect().top}));
     assert.equal(before.opacity,"0"); assert.ok(before.top>=800);
     const initiallyVisible = await page.locator("[data-scroll-reveal-done]").evaluateAll(els=>els.filter(el=>el.getBoundingClientRect().top<800).every(el=>!el.classList.contains("visible")&&!el.hasAttribute("data-editorial-visible")));
     assert.ok(initiallyVisible);
     // Keep a reference because the pending selector stops matching on entry.
     const handle=await target.elementHandle();
     await handle.evaluate(el=>el.scrollIntoView({block:"center",behavior:"instant"}));
     await page.waitForFunction(el=>el.hasAttribute("data-scroll-reveal-done")&&!el.hasAttribute("data-scroll-reveal-pending"),handle);
     assert.ok(await handle.evaluate(el=>el.classList.contains("visible")||el.hasAttribute("data-editorial-visible")));
     await page.waitForFunction(el=>getComputedStyle(el).opacity==="1",handle);
     await page.evaluate(()=>window.scrollTo({top:0,behavior:"instant"}));
     await handle.evaluate(el=>el.scrollIntoView({block:"center",behavior:"instant"}));
     assert.ok(await handle.evaluate(el=>!el.hasAttribute("data-scroll-reveal-pending")));
     await page.emulateMedia({reducedMotion:"reduce"});
     await page.waitForFunction(()=>!document.querySelector("[data-scroll-reveal-pending]"));
     assert.equal(errors.length,0,errors.join("\n"));
     await page.close();
     console.log("MOTION_PASS",engine.name(),width,path);
    }
   }
   const context=await browser.newContext({javaScriptEnabled:false});
   const page=await context.newPage();
   await page.goto(base+"/");
   assert.equal(await page.locator(".section-head.reveal").first().evaluate(el=>getComputedStyle(el).opacity),"1");
   assert.equal(await page.locator(pending).count(),0);
   await context.close();
  } finally { await browser.close(); }
 }
 console.log("MOTION_REGRESSION_PASS");
})().catch(error=>{console.error(error);process.exitCode=1;});
