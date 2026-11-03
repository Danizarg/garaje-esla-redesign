import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Divider from "@/components/Divider";
import TechGrid from "@/components/TechGrid";
import ServiceDetail from "@/components/ServiceDetail";
import MaintenanceGrid from "@/components/MaintenanceGrid";
import FinalCTA from "@/components/FinalCTA";
import PageHeader from "@/components/PageHeader";
import { extras } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicios del taller",
  description:
    "Servicios de Garaje ESLA en Marbella: mantenimiento general y pre-ITV, cambio de aceite y revisión de frenos, diagnóstico y reparación de averías, neumáticos y baterías, chapa y pintura.",
  alternates: { canonical: "/servicios" },
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="02 · Servicios"
        lines={["Qué hacemos", "con tu coche"]}
        intro="Mantenimiento, averías, neumáticos, chapa y pintura. Elige un servicio para ver qué incluye y pedir cita directamente."
      />

      <Divider label="Detalle" />

      <section className="py-20 md:py-28">
        <div className="shell">
          <ServiceDetail />
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-steel bg-graphite py-24 md:py-32">
        <TechGrid className="opacity-40" />
        <div className="shell relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-8 bg-accent" />
              <span className="label">Índice completo</span>
            </div>
            <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.25rem,6.5vw,5rem)] text-chrome">
              Todo lo que cubrimos
            </h2>
          </Reveal>

          <div className="mt-14">
            <MaintenanceGrid />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="display text-[clamp(2rem,5.5vw,4rem)] text-chrome">
              Además
            </h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-steel">
              {extras.map((e, i) => (
                <Reveal as="li" key={e.name} delay={i * 0.1}>
                  <div className="border-b border-steel py-7">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[0.625rem] tracking-[0.22em] text-accent">
                        {e.index}
                      </span>
                      <h3 className="display-tight text-2xl text-chrome md:text-3xl">
                        {e.name}
                      </h3>
                    </div>
                    <p className="mt-3 max-w-md pl-10 text-sm leading-relaxed text-silver">
                      {e.short}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <p className="mt-8 font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-steel-2">
                Todos los servicios listados figuran en el sitio actual del
                taller. No se ha añadido ninguno que no ofrezcan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
