"use client";

import { motion } from "framer-motion";

/**
 * Transición de página. App Router remonta este template en cada
 * navegación, así que basta con animar la entrada.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
