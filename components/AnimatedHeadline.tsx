"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  lines: string[];
  className?: string;
  delay?: number;
};

/**
 * Tipografía animada por palabras con máscara por línea.
 * Las palabras suben desde detrás de la línea anterior, como un marcador
 * mecánico. El texto completo queda en el DOM para lectores de pantalla.
 */
export default function AnimatedHeadline({ lines, className = "", delay = 0 }: Props) {
  const reduce = useReducedMotion();

  return (
    <h1 className={className}>
      <span className="sr-only">{lines.join(" ")}</span>
      <span aria-hidden>
        {lines.map((line, li) => (
          <span key={li} className="block overflow-hidden py-[0.06em]">
            <span className="flex flex-wrap gap-x-[0.26em]">
              {line.split(" ").map((word, wi) => (
                <motion.span
                  key={`${li}-${wi}`}
                  className="inline-block"
                  initial={
                    reduce ? { opacity: 0 } : { opacity: 0, y: "105%", rotateX: -55 }
                  }
                  animate={{ opacity: 1, y: "0%", rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: delay + li * 0.11 + wi * 0.055,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ transformOrigin: "bottom center" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </span>
        ))}
      </span>
    </h1>
  );
}
