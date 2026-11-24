"use client";
import {useEffect} from "react";
const partSelectors=[
 ".feature-copy",".feature-visual",".project-meta",".project-visual",
 ".genova-word",".genova-feature>div:first-child p",".genova-services>div",
 ".client-line a",".method-diagram",".method-steps li",".principles>div",
 ".skill-table>div",".about-grid>*"
].join(",");
export default function PrototypeMotion(){
 useEffect(()=>{
  const root=document.querySelector(".ep");if(!root)return;
  const nav=root.querySelector("[data-prototype-nav]"),menu=root.querySelector("[data-prototype-menu]");
  const sync=()=>nav?.classList.toggle("compact",window.scrollY>120);
  const close=e=>{if(!menu?.open)return;if(e.type==="keydown"&&e.key==="Escape"){menu.open=false;menu.querySelector("summary")?.focus()}else if(e.type==="click"&&(!menu.contains(e.target)||e.target.closest("a")))menu.open=false};
  root.querySelectorAll(".mini-cards,.mini-list,.store-items,.event-flow,.event-log,.book-list,.genova-services,.principles,.skill-table,.three,.client-line>div:last-child").forEach(e=>[...e.children].forEach((c,i)=>c.style.setProperty("--i",i)));
  const parts=new Set(root.querySelectorAll(partSelectors));
  const targets=[...new Set([...root.querySelectorAll(".reveal"),...parts])];
  const mq=window.matchMedia("(prefers-reduced-motion: reduce)");
  const visited=new WeakSet();let io;
  const reveal=el=>{if(visited.has(el))return;visited.add(el);if(!mq.matches){if(el.classList.contains("reveal"))el.classList.add("visible");if(parts.has(el))el.classList.add("part-visible")}io?.unobserve(el)};
  const start=()=>{io?.disconnect();if(mq.matches||!("IntersectionObserver" in window)){targets.forEach(el=>visited.add(el));return}
   io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)reveal(e.target)}),{threshold:0,rootMargin:"-72px 0px 12px 0px"});
   targets.filter(el=>!visited.has(el)).forEach(el=>io.observe(el));
  };
  start();mq.addEventListener("change",start);
  sync();window.addEventListener("scroll",sync,{passive:true});document.addEventListener("keydown",close);document.addEventListener("click",close);
  return()=>{io?.disconnect();mq.removeEventListener("change",start);window.removeEventListener("scroll",sync);document.removeEventListener("keydown",close);document.removeEventListener("click",close)};
 },[]);
 return null;
}
