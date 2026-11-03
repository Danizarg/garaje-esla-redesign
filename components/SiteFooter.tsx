import Link from "next/link";
import {
  business,
  hours,
  hoursNote,
  mapsDirectionsUrl,
} from "@/lib/business";
import { services } from "@/lib/services";

const socials = [
  { href: business.social.facebook, label: "Facebook" },
  { href: business.social.twitter, label: "Twitter" },
  { href: business.social.instagram, label: "Instagram" },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-steel bg-graphite">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4 lg:gap-10">
        <div>
          <span className="display block text-4xl leading-none text-chrome">ESLA</span>
          <p className="label mt-3">Taller mecánico · Marbella</p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-silver">
            Un taller de barrio en el centro de Marbella. Te decimos qué le pasa a
            tu coche y qué cuesta arreglarlo, antes de tocarlo.
          </p>
          <ul className="mt-6 flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 items-center border border-steel px-3 font-mono text-[0.625rem] uppercase tracking-[0.15em] text-silver transition-colors hover:border-accent hover:text-chrome"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label label-accent">Servicios</h2>
          <ul className="mt-5 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicios#${s.slug}`}
                  className="text-sm text-silver transition-colors hover:text-chrome"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li className="text-sm text-silver">Asistencia en carretera</li>
            <li className="text-sm text-silver">Accesorios y recambios</li>
          </ul>
        </div>

        <div>
          <h2 className="label label-accent">Contacto</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <span className="label block text-[0.5625rem]">Teléfono</span>
              <a
                href={business.phoneHref}
                className="display-tight text-xl text-chrome transition-colors hover:text-accent"
              >
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="label block text-[0.5625rem]">WhatsApp</span>
              <a
                href={`https://wa.me/${business.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="display-tight text-xl text-chrome transition-colors hover:text-accent"
              >
                {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <span className="label block text-[0.5625rem]">Email</span>
              <a
                href={`mailto:${business.email}`}
                className="break-all text-silver transition-colors hover:text-chrome"
              >
                {business.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label label-accent">Dónde estamos</h2>
          <address className="mt-5 not-italic text-sm leading-relaxed text-silver">
            {business.street}
            <br />
            {business.postalCode} {business.city} ({business.province})
          </address>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 border-b border-steel-2 pb-1 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-chrome transition-colors hover:border-accent"
          >
            Cómo llegar
            <span aria-hidden>↗</span>
          </a>

          <h2 className="label label-accent mt-8">Horario</h2>
          <dl className="mt-4 space-y-1.5 text-sm">
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-silver">{h.days}</dt>
                <dd className="text-right text-chrome">
                  {h.ranges.map((r) => (
                    <span key={r} className="block tabular-nums">
                      {r}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 border-l-2 border-accent pl-3 text-xs leading-relaxed text-silver">
            {hoursNote}
          </p>
        </div>
      </div>

      <div className="border-t border-steel">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-silver sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. Todos los derechos
            reservados.
          </p>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.18em]">
            {business.city} · {business.province} · España
          </p>
        </div>
      </div>
    </footer>
  );
}
