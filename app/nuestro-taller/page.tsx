import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import TechGrid from "@/components/TechGrid";
import FinalCTA from "@/components/FinalCTA";
import { business, mapsDirectionsUrl } from "@/lib/business";
import { suppliers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nuestro taller",
  description:
    "Garaje ESLA lleva más de 30 años reparando coches en Marbella. Taller mecánico en Calle Alonso Bazán 12, con clientela de Marbella y de fuera.",
  alternates: { canonical: "/nuestro-taller" },
};

const photos = [
  {
    src: "/img/taller-01.jpg",
    cap: "Zona de entrada y estacionamiento de vehículos",
  },
  {
    src: "/img/taller-02.jpg",
    cap: "Puestos de trabajo y vehículos en reparación",
  },
  {
    src: "/img/taller-03.jpg",
    cap: "Almacén de recambios y equipos de taller",
  },
];

export default function NuestroTallerPage() {
  return (
    <>
      <PageHeader
        eyebrow="01 · El taller"
        lines={["Más de 30 años", "reparando coches"]}
        intro="Un taller mecánico de Marbella con oficio largo: lo que sabemos lo hemos aprendido coche a coche."
      />

      <section className="relative overflow-hidden py-24 md:py-32">
        <TechGrid className="opacity-45" />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <span className="label">Cómo trabajamos</span>
            </div>
            <h2 className="display mt-6 text-[clamp(2rem,5.5vw,4rem)] text-chrome">
              Trato directo,
              <br />
              sin rodeos
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-chrome md:text-xl">
              Nos dedicamos a la mecánica del automóvil y a los valores que van
              con ella: servicio personalizado, trabajo eficiente y hablar claro
              con quien nos deja su coche.
            </p>
            <p className="mt-6 text-base leading-relaxed text-silver">
              A lo largo de estos años hemos fidelizado a una clientela tanto de
              Marbella como de fuera, y nos alegra recibir a gente nueva para
              intentar resolver lo que les esté dando problemas con su vehículo.
            </p>

            <ul className="mt-12 border-t border-steel">
              {[
                {
                  n: "01",
                  t: "Lo miramos primero",
                  d: "Diagnosticamos antes de desmontar nada y te contamos qué hemos encontrado.",
                },
                {
                  n: "02",
                  t: "Te lo explicamos",
                  d: "Qué le pasa, qué implica arreglarlo y qué pasa si se deja para más adelante.",
                },
                {
                  n: "03",
                  t: "Decides tú",
                  d: "Con la información delante. Nosotros no empezamos sin tu visto bueno.",
                },
              ].map((step, i) => (
                <Reveal as="li" key={step.n} delay={0.08 * i}>
                  <div className="group flex gap-5 border-b border-steel py-6 transition-colors">
                    <span className="font-mono text-[0.625rem] tracking-[0.22em] text-accent">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="display-tight text-xl text-chrome md:text-2xl">
                        {step.t}
                      </h3>
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-silver">
                        {step.d}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <Divider label="Fotografías" />

      {/* ---------- Ensayo fotográfico real ---------- */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-[16ch] text-[clamp(2.25rem,7vw,5.5rem)] text-chrome">
              El taller, tal cual
            </h2>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-silver">
              Fotografías reales de Calle Alonso Bazán 12. Un taller de trabajo,
              no un escaparate.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
            {photos.map((p, i) => (
              <Reveal
                key={p.src}
                delay={i * 0.1}
                className={i === 0 ? "md:col-span-2" : ""}
              >
                <figure className="group relative overflow-hidden border border-steel">
                  <div
                    className={`relative overflow-hidden bg-ink ${
                      i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.cap}
                      fill
                      sizes={i === 0 ? "92vw" : "(min-width: 768px) 46vw, 92vw"}
                      className="grade-soft object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"
                    />
                  </div>
                  <figcaption className="flex items-baseline gap-3 border-t border-steel px-5 py-4">
                    <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-silver">
                      {p.cap}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <p className="mt-8 font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-steel-2">
              Fotografías del propio taller, tomadas del sitio web actual de
              Garaje ESLA.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Dónde ---------- */}
      <section className="relative overflow-hidden border-y border-steel bg-graphite py-24 md:py-32">
        <TechGrid className="opacity-40" />
        <div className="shell relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <span className="label">Ubicación</span>
            </div>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] text-chrome">
              Cómo llegar
            </h2>
            <address className="mt-9 not-italic">
              <span className="display-tight block text-3xl text-chrome md:text-4xl">
                {business.street}
              </span>
              <span className="mt-2 block text-base text-silver">
                {business.postalCode} {business.city} ({business.province})
              </span>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-accent px-6 py-3.5"
              >
                <span className="display-tight text-lg text-white">
                  Abrir en Google Maps
                </span>
                <span
                  aria-hidden
                  className="text-white transition-transform duration-500 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2.5 border border-steel-2 px-6 py-3.5 transition-colors hover:border-chrome"
              >
                <span className="display-tight text-lg text-chrome">
                  Pedir cita
                </span>
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="overflow-hidden border border-steel">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  "Calle Alonso Bazán 12, 29602 Marbella, Málaga"
                )}&output=embed`}
                title="Mapa de la ubicación de Garaje ESLA en Calle Alonso Bazán 12, Marbella"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[340px] w-full grayscale-[0.85] contrast-[1.1] invert-[0.92] hue-rotate-180 md:h-[420px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Proveedores ---------- */}
      <section className="py-16 md:py-24">
        <div className="shell">
          <Reveal>
            <p className="label">Trabajamos con</p>
            <ul className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
              {suppliers.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-tight text-xl text-silver transition-colors hover:text-chrome md:text-2xl"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-steel-2">
              Proveedores indicados en el sitio actual del taller.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
