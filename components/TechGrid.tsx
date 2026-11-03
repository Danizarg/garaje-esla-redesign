"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * Rejilla técnica de fondo con líneas que se desplazan al hacer scroll.
 * Decorativa: aria-hidden y sin coste de layout.
 */
export default function TechGrid({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const lineX = useTransform(scrollYProgress, [0, 1], ["-12%", reduce ? "-12%" : "12%"]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div style={{ y }} className="grid-overlay absolute -inset-y-24 inset-x-0 opacity-70" />
      <motion.div
        style={{ x: lineX }}
        className="absolute inset-y-0 left-1/4 w-px bg-gradient-to-b from-transparent via-steel to-transparent"
      />
      <motion.div
        style={{ x: lineX }}
        className="absolute inset-y-0 left-2/3 w-px bg-gradient-to-b from-transparent via-steel to-transparent"
      />
    </div>
  );
}
