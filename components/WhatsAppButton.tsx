"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { business, waGeneral } from "@/lib/business";

/** Botón flotante de cita por WhatsApp. Aparece tras el primer scroll. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.94 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-50 md:bottom-8 md:right-8"
        >
          <a
            href={waGeneral}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            onFocus={() => setExpanded(true)}
            onBlur={() => setExpanded(false)}
            className="group flex items-center gap-0 overflow-hidden border border-steel-2 bg-panel/95 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.9)] backdrop-blur transition-colors hover:border-accent"
            aria-label={`Pedir cita por WhatsApp al ${business.whatsappDisplay}`}
          >
            <span className="relative flex size-12 shrink-0 items-center justify-center bg-accent md:size-14">
              <span
                aria-hidden
                className="absolute inset-0 animate-ping bg-accent/40 [animation-duration:2.6s]"
              />
              <svg
                viewBox="0 0 24 24"
                className="relative size-6 fill-white md:size-7"
                aria-hidden
              >
                <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.07 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35M12.04 21.5h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.21-3.59.94.96-3.5-.23-.36a9.43 9.43 0 0 1-1.45-5.05c0-5.22 4.26-9.47 9.5-9.47 2.54 0 4.92.99 6.71 2.78a9.4 9.4 0 0 1 2.78 6.7c0 5.22-4.26 9.49-9.49 9.49M20.46 3.53A11.76 11.76 0 0 0 12.04 0C5.52 0 .2 5.31.2 11.84c0 2.09.55 4.13 1.59 5.93L.1 24l6.37-1.67a11.8 11.8 0 0 0 5.66 1.44h.01c6.52 0 11.83-5.31 11.84-11.84a11.77 11.77 0 0 0-3.46-8.4" />
              </svg>
            </span>
            <motion.span
              initial={false}
              animate={{ width: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <span className="block px-4 text-left">
                <span className="label block text-[0.625rem] label-accent">
                  Pedir cita
                </span>
                <span className="display-tight block text-lg leading-none text-chrome">
                  {business.whatsappDisplay}
                </span>
              </span>
            </motion.span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
