import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import TechGrid from "@/components/TechGrid";
import ServiceCards from "@/components/ServiceCards";
import MaintenanceGrid from "@/components/MaintenanceGrid";
import FinalCTA from "@/components/FinalCTA";
import { business, hours, hoursNote, mapsDirectionsUrl } from "@/lib/business";
import { suppliers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Taller mecánico en Marbella",
  description:
    "Garaje ESLA, taller mecánico en Marbella. Mantenimiento general, aceite y frenos, diagnóstico de averías, neumáticos, baterías, chapa y pintura. Calle Alonso Bazán 12. Cita por teléfono o WhatsApp.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---------- Intro ---------- */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <TechGrid className="opacity-50" />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <span className="label">El taller</span>
            </div>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.5rem)] text-chrome">
              Más de 30 años
              <br />
              reparando coches
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-chrome md:text-xl">
              Somos un taller mecánico dedicado a dar el mejor servicio posible a
              tu vehículo, con buen trato y teniendo en cuenta lo que necesitas.
            </p>
            <p className="mt-6 text-base leading-relaxed text-silver">
              A lo largo de estos años hemos ido fidelizando a una clientela
              tanto de Marbella como de fuera, y nos gusta recibir a quien llega
              nuevo para intentar resolver lo que le esté dando problemas con su
              coche.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-px border-t border-l border-steel sm:grid-cols-3">
              {[
                { k: "Dirección", v: "Calle Alonso Bazán 12" },
                { k: "Población", v: "29602 Marbella" },
                { k: "Provincia", v: "Málaga" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="border-b border-r border-steel px-5 py-6"
                >
                  <dt className="label text-[0.5625rem]">{item.k}</dt>
                  <dd className="display-tight mt-2 text-lg text-chrome">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>

            <Link
              href="/nuestro-taller"
              className="group mt-9 inline-flex items-center gap-3 border-b border-steel-2 pb-2 transition-colors hover:border-accent"
            >
              <span className="display-tight text-xl text-chrome">
                Conoce el taller
              </span>
              <span
                aria-hidden
                className="text-accent transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <Divider label="Servicios" />

      {/* ---------- Tarjetas de servicio con profundidad ---------- */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="display max-w-[16ch] text-[clamp(2.5rem,7.5vw,6rem)] text-chrome">
                Lo que hacemos
              </h2>
              <p className="max-w-sm text-base leading-relaxed text-silver">
                Del mantenimiento de siempre a la avería que no sabes de dónde
                sale. Pincha en cualquiera para ver el detalle.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* ---------- Fotografía real del taller ---------- */}
      <section className="relative overflow-hidden border-y border-steel bg-graphite py-24 md:py-32">
        <TechGrid className="opacity-40" />
        <div className="shell relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <span className="label">Dentro del taller</span>
            </div>
            <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.25rem,6vw,4.75rem)] text-chrome">
              Así es por dentro
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-silver">
              Fotografías reales del taller en Calle Alonso Bazán. Sin montajes:
              es el sitio al que vas a llevar el coche.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {[
              { src: "/img/taller-01.jpg", cap: "Zona de entrada y estacionamiento de vehículos" },
              { src: "/img/taller-02.jpg", cap: "Puestos de trabajo y vehículos en reparación" },
            ].map((photo, i) => (
              <Reveal key={photo.src} delay={i * 0.12}>
                <figure className="group relative overflow-hidden border border-steel">
                  <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                    <Image
                      src={photo.src}
                      alt={photo.cap}
                      fill
                      sizes="(min-width: 768px) 46vw, 92vw"
                      className="grade-soft object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent"
                    />
                  </div>
                  <figcaption className="flex items-baseline gap-3 border-t border-steel px-5 py-4">
                    <span className="font-mono text-[0.5625rem] tracking-[0.2em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-silver">
                      {photo.cap}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Rejilla de mantenimiento ---------- */}
      <section className="py-24 md:py-32">
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  <span className="label">Mantenimiento</span>
                </div>
                <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.5rem,7.5vw,6rem)] text-chrome">
                  Todo en un sitio
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-silver">
                Cada celda abre WhatsApp con el mensaje ya escrito para ese
                servicio.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 md:mt-20">
            <MaintenanceGrid />
          </div>
        </div>
      </section>

      <Divider label="Horario" />

      {/* ---------- Horario + ubicación ---------- */}
      <section className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)] text-chrome">
              Cuándo abrimos
            </h2>
            <dl className="mt-10 border-t border-steel">
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-baseline justify-between gap-6 border-b border-steel py-5"
                >
                  <dt className="display-tight text-2xl text-chrome">{h.days}</dt>
                  <dd className="text-right">
                    {h.ranges.map((r) => (
                      <span
                        key={r}
                        className="block font-mono text-sm tabular-nums text-silver"
                      >
                        {r}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-silver">
              {hoursNote}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="display text-[clamp(2.25rem,6vw,4.5rem)] text-chrome">
              Dónde estamos
            </h2>
            <address className="mt-10 not-italic">
              <span className="display-tight block text-3xl text-chrome">
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
                className="group inline-flex items-center gap-2.5 border border-steel-2 px-6 py-3.5 transition-colors hover:border-accent"
              >
                <span className="display-tight text-lg text-chrome">
                  Cómo llegar
                </span>
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-500 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2.5 border border-steel-2 px-6 py-3.5 transition-colors hover:border-accent"
              >
                <span className="display-tight text-lg text-chrome">
                  {business.phoneDisplay}
                </span>
              </a>
            </div>

            <div className="mt-10 overflow-hidden border border-steel">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  "Calle Alonso Bazán 12, 29602 Marbella, Málaga"
                )}&output=embed`}
                title="Mapa de la ubicación de Garaje ESLA en Calle Alonso Bazán 12, Marbella"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[280px] w-full grayscale-[0.85] contrast-[1.1] invert-[0.92] hue-rotate-180 md:h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Proveedores ---------- */}
      <section className="border-t border-steel py-16 md:py-20">
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
