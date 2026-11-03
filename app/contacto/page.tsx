import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import ContactForm from "@/components/ContactForm";
import FinalCTA from "@/components/FinalCTA";
import {
  business,
  hours,
  hoursNote,
  mapsDirectionsUrl,
  waGeneral,
} from "@/lib/business";

export const metadata: Metadata = {
  title: "Contacto y cita previa",
  description:
    "Pide cita en Garaje ESLA, taller mecánico en Marbella. Teléfono 952 77 94 54, WhatsApp 669 111 832. Calle Alonso Bazán 12, 29602 Marbella (Málaga).",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="03 · Contacto"
        lines={["Hablamos", "de tu coche"]}
        intro="Llámanos, escríbenos por WhatsApp o rellena el formulario. Te respondemos en horario de taller."
      />

      <section className="py-20 md:py-28">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Datos */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-accent" />
                <span className="label">Datos de contacto</span>
              </div>

              <ul className="mt-9 border-t border-steel">
                <li className="border-b border-steel py-6">
                  <span className="label block text-[0.5625rem]">Teléfono</span>
                  <a
                    href={business.phoneHref}
                    className="display mt-2 block text-4xl text-chrome transition-colors hover:text-accent md:text-5xl"
                  >
                    {business.phoneDisplay}
                  </a>
                  <span className="mt-2 block font-mono text-[0.625rem] tracking-[0.15em] text-steel-2">
                    Pulsa para llamar
                  </span>
                </li>

                <li className="border-b border-steel py-6">
                  <span className="label block text-[0.5625rem]">WhatsApp</span>
                  <a
                    href={waGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display mt-2 block text-4xl text-chrome transition-colors hover:text-accent md:text-5xl"
                  >
                    {business.whatsappDisplay}
                  </a>
                  <span className="mt-2 block font-mono text-[0.625rem] tracking-[0.15em] text-steel-2">
                    Abre el chat con el mensaje escrito
                  </span>
                </li>

                <li className="border-b border-steel py-6">
                  <span className="label block text-[0.5625rem]">Email</span>
                  <a
                    href={`mailto:${business.email}`}
                    className="display-tight mt-2 block break-all text-xl text-chrome transition-colors hover:text-accent md:text-2xl"
                  >
                    {business.email}
                  </a>
                </li>

                <li className="border-b border-steel py-6">
                  <span className="label block text-[0.5625rem]">Dirección</span>
                  <address className="mt-2 not-italic">
                    <span className="display-tight block text-xl text-chrome md:text-2xl">
                      {business.street}
                    </span>
                    <span className="mt-1 block text-sm text-silver">
                      {business.postalCode} {business.city} ({business.province})
                    </span>
                  </address>
                  <a
                    href={mapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 border-b border-steel-2 pb-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-chrome transition-colors hover:border-accent"
                  >
                    Cómo llegar
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-500 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12">
                <div className="flex items-center gap-3">
                  <span aria-hidden className="h-px w-8 bg-accent" />
                  <span className="label">Horario</span>
                </div>
                <dl className="mt-7 border-t border-steel">
                  {hours.map((h) => (
                    <div
                      key={h.days}
                      className="flex items-baseline justify-between gap-6 border-b border-steel py-4"
                    >
                      <dt className="display-tight text-xl text-chrome">
                        {h.days}
                      </dt>
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
                <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-silver">
                  {hoursNote}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Divider label="Ubicación" />

      <section className="py-20 md:py-28">
        <div className="shell">
          <Reveal>
            <h2 className="display max-w-[14ch] text-[clamp(2.25rem,7vw,5.5rem)] text-chrome">
              Calle Alonso Bazán 12
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-silver">
              En el centro de Marbella. Si vienes por primera vez, llámanos y te
              decimos dónde dejar el coche.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-12 overflow-hidden border border-steel">
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  "Calle Alonso Bazán 12, 29602 Marbella, Málaga"
                )}&output=embed`}
                title="Mapa de la ubicación de Garaje ESLA en Calle Alonso Bazán 12, Marbella"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[360px] w-full grayscale-[0.85] contrast-[1.1] invert-[0.92] hue-rotate-180 md:h-[480px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
