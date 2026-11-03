"use client";

import { motion } from "framer-motion";

/** Divisor animado: la hairline se dibuja de izquierda a derecha al entrar. */
export default function Divider({ label }: { label?: string }) {
  return (
    <div className="shell">
      <div className="flex items-center gap-5 py-px">
        {label ? (
          <span className="label shrink-0 whitespace-nowrap">{label}</span>
        ) : null}
        <motion.span
          aria-hidden
          className="block h-px flex-1 origin-left bg-steel"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <span aria-hidden className="size-1 shrink-0 bg-accent" />
      </div>
    </div>
  );
}
