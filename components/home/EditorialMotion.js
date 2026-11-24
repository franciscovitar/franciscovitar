"use client";
import { useEffect } from "react";

export default function EditorialMotion() {
  useEffect(() => {
    const header = document.querySelector("[data-editorial-header]");
    const targets = [...document.querySelectorAll("[data-editorial-reveal]")];
    const updateHeader = () => {
      if (header) header.toggleAttribute("data-compact", window.scrollY > 120);
    };
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    // All content is visible by default. Only animate newly intersecting sections.
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    let io;
    const start = () => {
      io?.disconnect();
      if (mq.matches || !("IntersectionObserver" in window)) return;
      io = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute("data-editorial-visible", "");
          io.unobserve(entry.target);
        }
      }, { threshold: 0.04, rootMargin: "0px 0px -4% 0px" });
      targets.filter(el => !el.hasAttribute("data-editorial-visible")).forEach(el => io.observe(el));
    };
    start();
    mq.addEventListener("change", start);
    return () => {
      io?.disconnect();
      mq.removeEventListener("change", start);
      window.removeEventListener("scroll", updateHeader);
    };
  }, []);
  return null;
}
