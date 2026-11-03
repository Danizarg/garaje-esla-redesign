"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services, extras } from "@/lib/services";
import { waForService } from "@/lib/business";

type Item = { index: string; name: string; short: string; slug?: string };

const items: Item[] = [
  ...services.map((s) => ({
    index: s.index,
    name: s.name,
    short: s.short,
    slug: s.slug,
  })),
  ...extras.map((e) => ({ index: e.index, name: e.name, short: e.short })),
];

/**
 * Rejilla de mantenimiento. Celdas separadas por hairlines reales
 * (sin bordes dobles) y revelado escalonado.
 */
export default function MaintenanceGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-l border-steel">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.li
            key={item.name}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              delay: (i % 3) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-b border-r border-steel"
          >
            <a
              href={waForService(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-full min-h-[13rem] flex-col justify-between gap-6 p-7 transition-colors duration-500 hover:bg-panel md:min-h-[15rem] md:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-y-100"
              />

              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[0.625rem] tracking-[0.22em] text-steel-2 transition-colors duration-300 group-hover:text-accent">
                  {item.index}
                </span>
                <span
                  aria-hidden
                  className="font-mono text-xs text-steel-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 translate-x-[-6px]"
                >
                  WhatsApp ↗
                </span>
              </div>

              <div>
                <h3 className="display-tight text-2xl text-chrome md:text-[1.75rem]">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-silver">
                  {item.short}
                </p>
              </div>
            </a>
          </motion.li>
        ))}

        {/* Celda final: invitación */}
        <motion.li
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-r border-steel bg-panel/40"
        >
          <div className="flex h-full min-h-[13rem] flex-col justify-between gap-6 p-7 md:min-h-[15rem] md:p-8">
            <span className="font-mono text-[0.625rem] tracking-[0.22em] text-accent">
              ··
            </span>
            <div>
              <h3 className="display-tight text-2xl text-chrome md:text-[1.75rem]">
                ¿No lo ves aquí?
              </h3>
              <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-silver">
                Cuéntanos qué le pasa a tu coche. Si no es algo que hagamos, te lo
                decimos claramente.
              </p>
            </div>
          </div>
        </motion.li>
      </ul>
    </div>
  );
}
