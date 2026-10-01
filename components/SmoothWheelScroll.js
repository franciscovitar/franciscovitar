"use client";

import { useEffect } from "react";

export default function SmoothWheelScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");

    if (reducedMotion.matches || !finePointer.matches) return undefined;

    let current = window.scrollY;
    let target = window.scrollY;
    let frame = 0;
    let animating = false;

    const clampTarget = () => {
      const max = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      target = Math.min(max, Math.max(0, target));
    };

    const animate = () => {
      const delta = target - current;
      current += delta * 0.14;
      window.scrollTo(0, current);

      if (Math.abs(delta) > 0.6) {
        frame = window.requestAnimationFrame(animate);
      } else {
        current = target;
        window.scrollTo(0, target);
        animating = false;
        frame = 0;
      }
    };

    const onWheel = (event) => {
      if (event.ctrlKey || event.metaKey) return;

      event.preventDefault();
      target += event.deltaY * 0.58;
      clampTarget();

      if (!animating) {
        current = window.scrollY;
        animating = true;
        frame = window.requestAnimationFrame(animate);
      }
    };

    const onScroll = () => {
      if (!animating) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
