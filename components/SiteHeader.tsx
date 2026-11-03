"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { business } from "@/lib/business";

const nav = [
  { href: "/", label: "Inicio", index: "01" },
  { href: "/nuestro-taller", label: "Nuestro taller", index: "02" },
  { href: "/servicios", label: "Servicios", index: "03" },
  { href: "/contacto", label: "Contacto", index: "04" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? "border-b border-steel bg-ink/90 backdrop-blur-xl"
            : "border-b border-transparent bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
          <Link href="/" className="group flex items-baseline gap-2.5" aria-label="Garaje ESLA — inicio">
            <span className="display text-2xl leading-none text-chrome md:text-3xl">
              ESLA
            </span>
            <span
              aria-hidden
              className="hidden h-4 w-px bg-steel-2 transition-colors group-hover:bg-accent sm:block"
            />
            <span className="label hidden text-[0.625rem] sm:block">
              Taller · Marbella
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className="group relative px-4 py-2"
                >
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-steel-2 transition-colors group-hover:text-accent">
                      {item.index}
                    </span>
                    <span
                      className={`display-tight text-base tracking-wide transition-colors ${
                        active ? "text-chrome" : "text-silver group-hover:text-chrome"
                      }`}
                    >
                      {item.label}
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`absolute inset-x-4 bottom-0 h-px origin-left bg-accent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={business.phoneHref}
              className="group hidden items-center gap-2.5 border border-steel px-4 py-2.5 transition-colors hover:border-accent md:flex"
            >
              <svg viewBox="0 0 24 24" className="size-3.5 fill-accent" aria-hidden>
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
              </svg>
              <span className="display-tight text-base tracking-wide text-chrome">
                {business.phoneDisplay}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="flex size-10 items-center justify-center border border-steel transition-colors hover:border-accent lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 block h-px w-full bg-chrome transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-full bg-chrome transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-full bg-chrome transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 z-40 bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <nav aria-label="Navegación móvil" className="shell flex flex-col pt-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    className="flex items-baseline gap-4 border-b border-steel py-5"
                  >
                    <span className="font-mono text-[0.625rem] tracking-[0.2em] text-accent">
                      {item.index}
                    </span>
                    <span className="display text-4xl text-chrome">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href={business.phoneHref}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.45 }}
                className="mt-8 flex items-center justify-center gap-3 bg-accent px-6 py-4"
              >
                <span className="display-tight text-xl text-white">
                  Llamar · {business.phoneDisplay}
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
