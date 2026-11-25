"use client";
import { useLayoutEffect } from "react";
import { prepareScrollReveals } from "./prepareScrollReveals";

export default function EditorialMotion() {
  useLayoutEffect(() => {
    const header = document.querySelector("[data-editorial-header]");
    const targets = [...document.querySelectorAll("[data-editorial-reveal]")];
    const updateHeader = () => {
      if (header) header.toggleAttribute("data-compact", window.scrollY > 120);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    const menu = header?.querySelector("[data-editorial-menu]");
    const closeMenu = event => {
      if (!menu?.open) return;
      if (event.type === "keydown" && event.key === "Escape") {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      } else if (event.type === "click" && (!menu.contains(event.target) || event.target.closest("a"))) {
        menu.open = false;
      }
    };
    document.addEventListener("keydown", closeMenu);
    document.addEventListener("click", closeMenu);
    const stopReveals = prepareScrollReveals(targets, element => element.setAttribute("data-editorial-visible", ""));
    return () => {
      stopReveals();
      window.removeEventListener("scroll", updateHeader);
      document.removeEventListener("keydown", closeMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);
  return null;
}
