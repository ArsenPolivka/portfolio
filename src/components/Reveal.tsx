"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for staggering siblings. */
  delay?: number;
  as?: "div" | "li" | "article";
}

/** Subtle fade + slide-in when the element scrolls into view. Respects reduced motion. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  // Reduced motion is handled globally by <MotionConfig reducedMotion="user">: transforms are
  // skipped and only the opacity fade remains. Same markup on server and client (no hydration mismatch).
  const Component = m[as];

  return (
    <Component
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
