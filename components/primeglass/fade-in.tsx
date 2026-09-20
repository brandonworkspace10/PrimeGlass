"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const directionMap = {
    up: { y: 28, x: 0 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = reduceMotion ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] };
  const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

  return (
    <motion.div
      animate={animate}
      className={className}
      initial={initial}
      ref={ref}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
