"use client";

import { motion } from "framer-motion";
import AnimatedHeadline from "./AnimatedHeadline";

type Props = {
  eyebrow: string;
  lines: string[];
  intro?: string;
};

/** Cabecera de página interior: misma tipografía animada que el hero. */
export default function PageHeader({ eyebrow, lines, intro }: Props) {
  return (
    <section className="noise relative overflow-hidden border-b border-steel bg-ink pb-16 pt-32 md:pb-24 md:pt-44">
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(213,18,28,0.1),transparent)]"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="shell relative h-full">
          <div className="absolute inset-y-0 left-[var(--gutter)] w-px bg-white/[0.06]" />
          <div className="absolute inset-y-0 right-[var(--gutter)] w-px bg-white/[0.06]" />
        </div>
      </div>

      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 flex items-center gap-3"
        >
          <span aria-hidden className="h-px w-10 bg-accent" />
          <span className="label">{eyebrow}</span>
        </motion.div>

        <AnimatedHeadline
          lines={lines}
          delay={0.15}
          className="display max-w-[16ch] text-[clamp(2.75rem,10vw,8rem)] text-chrome"
        />

        {intro ? (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 max-w-xl border-t border-steel pt-7 text-base leading-relaxed text-silver md:text-lg"
          >
            {intro}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
