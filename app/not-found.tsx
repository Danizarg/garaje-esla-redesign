import Link from "next/link";
import { business } from "@/lib/business";

export default function NotFound() {
  return (
    <section className="noise relative flex min-h-[80svh] items-center overflow-hidden bg-ink pt-24">
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(213,18,28,0.1),transparent)]"
      />
      <div className="shell relative">
        <div className="flex items-center gap-3">
          <span aria-hidden className="h-px w-10 bg-accent" />
          <span className="label">Error 404</span>
        </div>
        <h1 className="display mt-7 max-w-[14ch] text-[clamp(2.75rem,10vw,8rem)] text-chrome">
          Esta página no existe
        </h1>
        <p className="mt-7 max-w-md text-base leading-relaxed text-silver">
          El enlace que has seguido no lleva a ningún sitio. Vuelve al inicio o
          llámanos directamente.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-accent px-8 py-4"
          >
            <span className="display-tight text-xl tracking-wide text-white">
              Volver al inicio
            </span>
          </Link>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center border border-steel-2 px-8 py-4 transition-colors hover:border-chrome"
          >
            <span className="display-tight text-xl tracking-wide text-chrome">
              {business.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
