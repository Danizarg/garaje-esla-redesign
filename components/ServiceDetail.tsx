"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { services } from "@/lib/services";
import { waForService } from "@/lib/business";

/**
 * Detalle de servicio interactivo. En escritorio funciona como índice
 * con panel; en móvil, como acordeón apilado. El indicador de selección
 * se desplaza con layoutId.
 */
export default function ServiceDetail() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const service = services[active];

  return (
    <div className="grid gap-px border border-steel bg-steel lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
      {/* Índice */}
      <div className="bg-graphite">
        <ul role="tablist" aria-label="Servicios del taller" className="flex flex-col">
          {services.map((s, i) => {
            const selected = i === active;
            return (
              <li key={s.slug} id={s.slug} className="scroll-mt-28">
                <button
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${s.slug}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className="group relative flex w-full items-center gap-5 border-b border-steel px-6 py-6 text-left transition-colors duration-400 hover:bg-panel md:px-8 md:py-7"
                >
                  {selected && (
                    <motion.span
                      layoutId="service-marker"
                      aria-hidden
                      className="absolute left-0 top-0 h-full w-[3px] bg-accent"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 420, damping: 38 }
                      }
                    />
                  )}
                  <span
                    className={`font-mono text-[0.625rem] tracking-[0.22em] transition-colors duration-300 ${
                      selected ? "text-accent" : "text-steel-2 group-hover:text-silver"
                    }`}
                  >
                    {s.index}
                  </span>
                  <span
                    className={`display-tight flex-1 text-2xl transition-all duration-400 md:text-3xl ${
                      selected
                        ? "translate-x-1 text-chrome"
                        : "text-silver group-hover:translate-x-1 group-hover:text-chrome"
                    }`}
                  >
                    {s.name}
                  </span>
                  <span
                    aria-hidden
                    className={`text-sm transition-all duration-400 ${
                      selected
                        ? "translate-x-0 text-accent opacity-100"
                        : "-translate-x-2 text-silver opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Panel */}
      <div className="relative overflow-hidden bg-panel">
        <div aria-hidden className="grid-overlay absolute inset-0 opacity-50" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_8%,rgba(213,18,28,0.1),transparent)]"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={service.slug}
            id={`panel-${service.slug}`}
            role="tabpanel"
            tabIndex={0}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col justify-between gap-10 p-8 md:p-12 lg:min-h-[32rem]"
          >
            <div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                <span className="label">Servicio {service.index}</span>
              </div>

              <h3 className="display mt-6 max-w-[12ch] text-[clamp(2.25rem,5.5vw,4rem)] text-chrome">
                {service.name}
              </h3>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-silver">
                {service.description}
              </p>

              <ul className="mt-9 grid gap-px border-t border-steel sm:grid-cols-2">
                {service.points.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
                    className="flex items-start gap-3 border-b border-steel py-4 pr-4"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.45rem] size-1 shrink-0 bg-accent"
                    />
                    <span className="text-sm leading-relaxed text-chrome">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <a
              href={waForService(service.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex w-full items-center justify-between gap-4 overflow-hidden border border-steel-2 px-6 py-5 transition-colors duration-400 hover:border-accent sm:w-auto"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <span className="display-tight relative text-xl tracking-wide text-chrome transition-colors duration-300 group-hover:text-white">
                Pedir cita para este servicio
              </span>
              <span
                aria-hidden
                className="relative text-chrome transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
