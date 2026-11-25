"use client";
import {useLayoutEffect} from "react";
import {prepareScrollReveals} from "../home/prepareScrollReveals";
export default function PrototypeMotion(){
 useLayoutEffect(()=>{
  const root=document.querySelector(".ep");if(!root)return;
  const nav=root.querySelector("[data-prototype-nav]"),menu=root.querySelector("[data-prototype-menu]");
  const sync=()=>nav?.classList.toggle("compact",window.scrollY>120);
  const close=e=>{if(!menu?.open)return;if(e.type==="keydown"&&e.key==="Escape"){menu.open=false;menu.querySelector("summary")?.focus()}else if(e.type==="click"&&(!menu.contains(e.target)||e.target.closest("a")))menu.open=false};
  root.querySelectorAll(".mini-cards,.mini-list,.store-items,.event-flow,.event-log,.book-list,.genova-services,.principles,.skill-table,.three,.client-line>div:last-child").forEach(e=>[...e.children].forEach((c,i)=>c.style.setProperty("--i",i)));
  root.querySelectorAll(".method-diagram svg").forEach(e=>[...e.querySelectorAll(":scope > rect,:scope > text")].forEach((c,i)=>c.style.setProperty("--i",Math.floor(i/2))));
  const targets=[...root.querySelectorAll(".reveal")];
  const stopReveals=prepareScrollReveals(targets,element=>element.classList.add("visible"));
  sync();window.addEventListener("scroll",sync,{passive:true});document.addEventListener("keydown",close);document.addEventListener("click",close);
  return()=>{stopReveals();window.removeEventListener("scroll",sync);document.removeEventListener("keydown",close);document.removeEventListener("click",close)};
 },[]);
 return null;
}
