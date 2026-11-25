// Only animate content that has not already been painted in the viewport.
// Server HTML stays readable if hydration or IntersectionObserver is unavailable.
export function prepareScrollReveals(targets, activate) {
  if (!("IntersectionObserver" in window)) return () => {};
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pending = new Set();
  const finish = (element, animate) => {
    if (!pending.delete(element)) return;
    observer.unobserve(element);
    element.removeAttribute("data-scroll-reveal-pending");
    element.setAttribute("data-scroll-reveal-done", "");
    if (animate) activate(element);
  };
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) finish(entry.target, !motion.matches && !entry.target.matches(":focus-within") && !entry.target.closest(".low-motion"));
    }
  }, { threshold: 0 });
  const finishAll = () => {
    for (const element of pending) finish(element, false);
  };
  const onMotionChange = () => { if (motion.matches) finishAll(); };
  const onFocus = event => {
    for (const element of pending) {
      if (element.contains(event.target)) finish(element, false);
    }
  };
  for (const element of targets) {
    if (element.hasAttribute("data-scroll-reveal-done")) continue;
    const rect = element.getBoundingClientRect();
    // Never hide an already visible or passed section, even on late hydration,
    // restored scroll positions or direct anchor navigation.
    if (motion.matches || element.closest(".low-motion") || rect.top < window.innerHeight || !rect.height || element.matches(":focus-within")) {
      element.setAttribute("data-scroll-reveal-done", "");
      continue;
    }
    pending.add(element);
    element.setAttribute("data-scroll-reveal-pending", "");
    observer.observe(element);
  }
  motion.addEventListener("change", onMotionChange);
  document.addEventListener("focusin", onFocus);
  return () => {
    observer.disconnect();
    for (const element of pending) element.removeAttribute("data-scroll-reveal-pending");
    pending.clear();
    motion.removeEventListener("change", onMotionChange);
    document.removeEventListener("focusin", onFocus);
  };
}
