"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import AnimatedHeadline from "./AnimatedHeadline";
import { business, waGeneral } from "@/lib/business";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, reduce ? 1.06 : 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-22%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="noise relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-10 pt-28 md:pb-16"
    >
      {/* Capa fotográfica */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 z-0">
        <Image
          src="/img/rep-01.jpg"
          alt="Mecánico trabajando bajo un vehículo en un taller"
          fill
          priority
          sizes="100vw"
          className="grade-cinema object-cover object-center"
        />
      </motion.div>

      {/* Graduación cinematográfica */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-t from-ink via-ink/62 to-ink/42"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(130%_85%_at_50%_0%,transparent_8%,rgba(7,8,10,0.78)_88%)]"
      />
      {/* Luz de borde roja, muy contenida */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.4 }}
        className="absolute inset-y-0 right-0 z-0 w-1/3 bg-[linear-gradient(to_left,rgba(213,18,28,0.16),transparent)]"
      />
      <div aria-hidden className="grid-overlay absolute inset-0 z-0 opacity-45" />

      {/* Reglas verticales de precisión */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="shell relative h-full">
          <div className="absolute inset-y-0 left-[var(--gutter)] w-px bg-white/[0.07]" />
          <div className="absolute inset-y-0 right-[var(--gutter)] w-px bg-white/[0.07]" />
        </div>
      </div>

      <motion.div style={{ y: contentY, opacity: fade }} className="shell relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-7 flex items-center gap-3"
        >
          <span aria-hidden className="h-px w-6 shrink-0 bg-accent sm:w-10" />
          <span className="label text-[0.5625rem] leading-relaxed tracking-[0.15em] sm:text-[0.6875rem] sm:tracking-[0.22em]">
            Marbella · Calle Alonso Bazán 12
          </span>
        </motion.div>

        <AnimatedHeadline
          lines={["Tu coche.", "En buenas manos."]}
          delay={0.3}
          className="display max-w-[22ch] text-[clamp(3rem,13vw,10.5rem)] text-chrome [text-wrap:balance]"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col gap-8 border-t border-steel pt-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-silver md:text-lg">
            Taller mecánico en Marbella. Mantenimiento, averías, neumáticos, chapa y
            pintura. Te explicamos qué le pasa a tu coche antes de tocarlo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={waGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center overflow-hidden bg-accent px-8 py-4 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
              <span className="display-tight relative text-xl tracking-wide text-white">
                Pedir cita por WhatsApp
              </span>
            </a>
            <a
              href={business.phoneHref}
              className="group inline-flex items-center justify-center gap-2.5 border border-steel-2 px-8 py-4 transition-colors duration-300 hover:border-chrome"
            >
              <span className="display-tight text-xl tracking-wide text-chrome">
                {business.phoneDisplay}
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            href="/servicios"
            className="group flex items-center gap-3 font-mono text-[0.625rem] uppercase tracking-[0.2em] text-silver transition-colors hover:text-chrome"
          >
            <span className="flex size-7 items-center justify-center border border-steel-2 transition-colors group-hover:border-accent">
              <motion.span
                aria-hidden
                animate={reduce ? {} : { y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-chrome"
              >
                ↓
              </motion.span>
            </span>
            Ver los servicios
          </Link>
          <p className="font-mono text-[0.5625rem] uppercase tracking-[0.18em] text-steel-2">
            Imagen representativa
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
