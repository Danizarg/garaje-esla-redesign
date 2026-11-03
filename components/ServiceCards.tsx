"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { services } from "@/lib/services";

/**
 * Tarjeta con profundidad 3D accionada por scroll: la tarjeta se endereza
 * y se eleva a medida que entra en el viewport.
 */
function Card({ index, total }: { index: number; total: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const service = services[index];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 0.8"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 11, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 56, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [reduce ? 1 : 0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [0, 1]);

  return (
    <li ref={ref} style={{ perspective: "1400px" }}>
      <motion.div
        style={{ rotateX, y, scale, opacity, transformOrigin: "center bottom" }}
      >
        <Link
          href={`/servicios#${service.slug}`}
          className="group relative block overflow-hidden border border-steel bg-panel transition-colors duration-500 hover:border-steel-2"
        >
          {/* Barra de acento que crece en hover */}
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
          />
          {/* Brillo de luz controlada */}
          <span
            aria-hidden
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(255,255,255,0.055),transparent)]"
          />

          <div className="relative flex flex-col gap-6 p-7 md:p-9">
            <div className="flex items-start justify-between gap-6">
              <span className="font-mono text-[0.625rem] tracking-[0.22em] text-accent">
                {service.index}
              </span>
              <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-steel-2">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            <h3 className="display-tight max-w-[14ch] text-3xl text-chrome transition-colors duration-300 group-hover:text-white md:text-4xl">
              {service.name}
            </h3>

            <p className="max-w-sm text-sm leading-relaxed text-silver">
              {service.short}
            </p>

            <div className="mt-2 flex items-center gap-3 border-t border-steel pt-5">
              <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-silver transition-colors duration-300 group-hover:text-chrome">
                Ver detalle
              </span>
              <span
                aria-hidden
                className="h-px flex-1 bg-steel transition-colors duration-500 group-hover:bg-accent"
              />
              <span
                aria-hidden
                className="text-chrome transition-transform duration-500 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </li>
  );
}

export default function ServiceCards() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Card key={s.slug} index={i} total={services.length} />
      ))}
    </ul>
  );
}
