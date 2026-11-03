"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { business, waGeneral } from "@/lib/business";

/**
 * CTA final con efecto de reflejo de luz: una banda especular recorre el
 * bloque al hacer scroll, y sigue al cursor en escritorio.
 */
export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const sweep = useTransform(scrollYProgress, [0, 1], ["-45%", "145%"]);

  const mx = useMotionValue(50);
  const mxSpring = useSpring(mx, { stiffness: 120, damping: 28, mass: 0.4 });
  const glowX = useTransform(mxSpring, (v) => `${v}%`);

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
      }}
      className="noise relative overflow-hidden border-y border-steel bg-graphite"
    >
      {/* Reflejo especular que recorre el bloque con el scroll */}
      <motion.div
        aria-hidden
        style={{ x: sweep }}
        className="pointer-events-none absolute inset-y-0 w-[45%] skew-x-[-14deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.055),rgba(255,255,255,0.11),rgba(255,255,255,0.055),transparent)]"
      />
      {/* Luz que sigue al cursor */}
      <motion.div
        aria-hidden
        style={{ left: glowX }}
        className="pointer-events-none absolute top-0 h-full w-[34rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(213,18,28,0.16),transparent)]"
      />
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-45" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
      />

      <div className="shell relative py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-accent" />
            <span className="label">Reserva</span>
          </div>

          <h2 className="display mt-7 max-w-[14ch] text-[clamp(2.75rem,10vw,8rem)] text-chrome">
            Pide cita hoy
          </h2>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-silver md:text-lg">
            Llámanos o escríbenos por WhatsApp. Nos cuentas qué le pasa al coche y
            te decimos cuándo podemos verlo.
          </p>

          <div className="mt-12 grid gap-px border border-steel sm:grid-cols-2 lg:max-w-3xl">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border-b border-steel bg-panel p-8 transition-colors duration-500 hover:bg-panel-2 sm:border-b-0 sm:border-r"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="label label-accent">WhatsApp</span>
              <span className="display-tight mt-4 block text-3xl text-chrome md:text-4xl">
                {business.whatsappDisplay}
              </span>
              <span className="mt-4 flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-silver">
                Mensaje prerrellenado
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>

            <a
              href={business.phoneHref}
              className="group relative overflow-hidden bg-panel p-8 transition-colors duration-500 hover:bg-panel-2"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="label label-accent">Teléfono</span>
              <span className="display-tight mt-4 block text-3xl text-chrome md:text-4xl">
                {business.phoneDisplay}
              </span>
              <span className="mt-4 flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-silver">
                Llamada directa
                <span
                  aria-hidden
                  className="transition-transform duration-500 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
