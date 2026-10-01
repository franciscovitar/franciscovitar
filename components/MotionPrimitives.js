"use client";

import { motion } from "framer-motion";

export const MOTION = {
  ease: {
    enter: [0.22, 1, 0.36, 1],
  },
  duration: {
    micro: 0.2,
    reveal: 0.52,
    hero: 0.64,
  },
  distance: {
    subtle: 14,
    reveal: 22,
  },
  stagger: {
    tight: 0.06,
    group: 0.08,
  },
};

const ELEMENTS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  header: motion.header,
  footer: motion.footer,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  dl: motion.dl,
  ul: motion.ul,
};

function offsetFor(direction, distance) {
  if (direction === "left") return { x: -distance, y: 0 };
  if (direction === "right") return { x: distance, y: 0 };
  if (direction === "down") return { x: 0, y: -distance };
  return { x: 0, y: distance };
}

export function Reveal({
  as = "div",
  className,
  children,
  direction = "up",
  distance = MOTION.distance.reveal,
  delay = 0,
  duration = MOTION.duration.reveal,
  amount = 0.16,
  once = true,
  load = false,
  scale = 1,
  ...props
}) {
  const Component = ELEMENTS[as] || motion.div;
  const offset = offsetFor(direction, distance);
  const hidden = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
    scale,
  };
  const visible = { opacity: 1, x: 0, y: 0, scale: 1 };
  const transition = {
    duration,
    delay,
    ease: MOTION.ease.enter,
  };

  if (load) {
    return (
      <Component
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
        {...props}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once, amount }}
      transition={transition}
      {...props}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({
  as = "div",
  className,
  children,
  delay = 0,
  stagger = MOTION.stagger.group,
  amount = 0.14,
  once = true,
  load = false,
  ...props
}) {
  const Component = ELEMENTS[as] || motion.div;
  const variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
      },
    },
  };

  const triggerProps = load
    ? { animate: "visible" }
    : {
        whileInView: "visible",
        viewport: { once, amount },
      };

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      {...triggerProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export function StaggerItem({
  as = "div",
  className,
  children,
  direction = "up",
  distance = MOTION.distance.subtle,
  duration = MOTION.duration.reveal,
  scale = 1,
  ...props
}) {
  const Component = ELEMENTS[as] || motion.div;
  const offset = offsetFor(direction, distance);

  const variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: MOTION.ease.enter,
      },
    },
  };

  return (
    <Component
      className={className}
      variants={variants}
      {...props}
    >
      {children}
    </Component>
  );
}
