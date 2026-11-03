import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business, SITE_URL } from "@/lib/business";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-tech",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Garaje ESLA · Taller mecánico en Marbella",
    template: "%s · Garaje ESLA",
  },
  description:
    "Taller mecánico en Marbella. Mantenimiento general, aceite y frenos, diagnóstico y reparación de averías, neumáticos, baterías, chapa y pintura. Calle Alonso Bazán 12. Pide cita por teléfono o WhatsApp.",
  keywords: [
    "taller mecánico en Marbella",
    "taller mecánico Marbella",
    "mecánico Marbella",
    "reparación de averías Marbella",
    "cambio de aceite Marbella",
    "chapa y pintura Marbella",
    "pre-ITV Marbella",
    "neumáticos Marbella",
    "Garaje ESLA",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: business.name,
    title: "Garaje ESLA · Taller mecánico en Marbella",
    description:
      "Tu coche, en buenas manos. Taller mecánico en Marbella: mantenimiento, averías, neumáticos, chapa y pintura. Calle Alonso Bazán 12.",
    images: [
      {
        url: "/img/taller-01.jpg",
        width: 1600,
        height: 720,
        alt: "Interior del taller Garaje ESLA en Marbella",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garaje ESLA · Taller mecánico en Marbella",
    description:
      "Tu coche, en buenas manos. Taller mecánico en Marbella. Calle Alonso Bazán 12.",
    images: ["/img/taller-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#07080a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${SITE_URL}/#garaje-esla`,
  name: business.name,
  description:
    "Taller mecánico en Marbella: mantenimiento general, aceite y frenos, diagnóstico y reparación de averías, neumáticos y baterías, chapa y pintura.",
  url: SITE_URL,
  telephone: "+34952779454",
  email: business.email,
  image: `${SITE_URL}/img/taller-01.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Alonso Bazán, 12",
    postalCode: business.postalCode,
    addressLocality: business.city,
    addressRegion: business.province,
    addressCountry: "ES",
  },
  areaServed: { "@type": "City", name: "Marbella" },
  sameAs: [
    business.social.facebook,
    business.social.twitter,
    business.social.instagram,
  ],
  // NOTA: no se declara openingHoursSpecification a propósito. El horario
  // no está confirmado (el sitio actual publica dos versiones distintas) y
  // no queremos que los buscadores muestren un horario sin verificar.
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de taller",
    itemListElement: [
      "Mantenimiento general",
      "Aceite, frenos y revisiones",
      "Diagnóstico y reparación de averías",
      "Neumáticos y baterías",
      "Chapa y pintura",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <SiteHeader />
        <main id="contenido">{children}</main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
