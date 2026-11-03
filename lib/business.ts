/**
 * Fuente única de verdad para los datos del negocio.
 *
 * TODO dato de este archivo procede del sitio actual de Garaje ESLA
 * (garajeesla.wixsite.com/garajeesla), consultado el 3 de noviembre de 2026.
 * No se ha inventado ningún dato, certificación, reseña ni estadística.
 */

export const business = {
  name: "Garaje ESLA",
  legalName: "Garaje ESLA",
  tagline: "Taller mecánico en Marbella",
  street: "Calle Alonso Bazán, nº 12",
  postalCode: "29602",
  city: "Marbella",
  province: "Málaga",
  country: "ES",
  get fullAddress() {
    return `${this.street}, ${this.postalCode} ${this.city} (${this.province})`;
  },
  phoneDisplay: "952 77 94 54",
  phoneHref: "tel:+34952779454",
  whatsappDisplay: "669 111 832",
  whatsappNumber: "34669111832",
  email: "garciaantonio18@gmail.com",
  social: {
    facebook: "https://www.facebook.com/GarajeESLA/",
    twitter: "https://twitter.com/GarajeEsla",
    instagram: "https://instagram.com/garajesla",
  },
} as const;

/** Coordenadas aproximadas de Marbella centro — sólo para centrar el mapa. */
export const mapsQuery = encodeURIComponent(
  "Calle Alonso Bazán 12, 29602 Marbella, Málaga"
);

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
export const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

/**
 * HORARIO — PENDIENTE DE CONFIRMACIÓN.
 *
 * El sitio actual publica dos horarios distintos y contradictorios:
 *   · Pie de página:  Lun-Vie 09:00–20:00  ·  Sáb 09:00–14:00
 *   · Página Contacto: Lun-Vie 09:00–14:00 y 16:00–20:00  ·  Sáb 09:00–13:00
 *
 * Se publica la versión detallada (jornada partida) por ser la más específica,
 * siempre con la etiqueta de pendiente de confirmación visible en la web.
 * Por el mismo motivo NO se declara el horario en los datos estructurados
 * (JSON-LD): no queremos que Google muestre un horario sin verificar.
 */
export const hoursUnconfirmed = true;

export const hours = [
  { days: "Lunes a viernes", ranges: ["09:00 – 14:00", "16:00 – 20:00"] },
  { days: "Sábado", ranges: ["09:00 – 13:00"] },
  { days: "Domingo", ranges: ["Cerrado"] },
] as const;

export const hoursNote =
  "Horario pendiente de confirmación: el sitio actual del taller publica dos versiones distintas. Confirma por teléfono o WhatsApp antes de desplazarte.";

/** Mensajes de WhatsApp prerrellenados. */
export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const waGeneral = whatsappUrl(
  "Hola Garaje ESLA, me gustaría pedir cita para mi vehículo. ¿Qué disponibilidad tenéis?"
);

export function waForService(serviceName: string) {
  return whatsappUrl(
    `Hola Garaje ESLA, me gustaría pedir cita para "${serviceName}". ¿Qué disponibilidad tenéis?`
  );
}

export const SITE_URL = "https://garaje-esla-redesign.vercel.app";
