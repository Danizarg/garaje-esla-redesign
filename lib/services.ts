/**
 * Servicios reales tomados del sitio actual de Garaje ESLA.
 * Los textos descriptivos se han reescrito, pero cada servicio listado
 * aparece en el sitio original. No se ha añadido ningún servicio inventado.
 */

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "mantenimiento-general",
    index: "01",
    name: "Mantenimiento general",
    short: "Mecánica general y mantenimiento preventivo, incluida la pre-ITV.",
    description:
      "Mecánica general y mantenimiento preventivo para que tu coche llegue a cada revisión sin sorpresas. Realizamos inspecciones del vehículo punto por punto y preparamos la pre-ITV y la ITV.",
    points: [
      "Mecánica general",
      "Mantenimiento preventivo por kilometraje",
      "Inspección completa del vehículo",
      "Preparación de pre-ITV e ITV",
    ],
  },
  {
    slug: "aceite-frenos-revisiones",
    index: "02",
    name: "Aceite, frenos y revisiones",
    short: "Cambio de aceite y filtros, revisión de frenos y puntos de seguridad.",
    description:
      "El aceite y los frenos marcan la diferencia entre un coche que responde y uno que avisa tarde. Cambiamos aceite y filtros y revisamos el sistema de frenado completo.",
    points: [
      "Cambio de aceite y filtros",
      "Revisión de pastillas y discos",
      "Comprobación de niveles",
      "Revisión de puntos de seguridad",
    ],
  },
  {
    slug: "diagnostico-averias",
    index: "03",
    name: "Diagnóstico y reparación de averías",
    short: "Localizamos la avería y te explicamos qué pasa antes de tocar nada.",
    description:
      "Una avería inesperada es frustrante. Diagnosticamos el problema, te contamos qué hemos encontrado y qué implica repararlo, y a partir de ahí decides tú. Incluye reparación de motor.",
    points: [
      "Diagnóstico de averías",
      "Reparación de motor",
      "Revisión completa o reparación puntual",
      "Presupuesto antes de intervenir",
    ],
  },
  {
    slug: "neumaticos-baterias",
    index: "04",
    name: "Neumáticos y baterías",
    short: "Cambio y rotación de neumáticos, revisión y sustitución de batería.",
    description:
      "Los neumáticos son el único punto de contacto con el asfalto y la batería es lo que separa arrancar de no arrancar. Nos ocupamos de los dos.",
    points: [
      "Cambio de neumáticos",
      "Rotación de neumáticos",
      "Revisión de batería y sistema de arranque",
      "Sustitución de batería",
    ],
  },
  {
    slug: "chapa-y-pintura",
    index: "05",
    name: "Chapa y pintura",
    short: "Reparación de carrocería y trabajos de pintura.",
    description:
      "Reparación de chapa y trabajos de pintura para devolver la carrocería a su sitio, desde el roce de aparcamiento hasta daños de mayor entidad.",
    points: [
      "Reparación de chapa",
      "Trabajos de pintura",
      "Daños de aparcamiento",
      "Recuperación de carrocería",
    ],
  },
];

/** Servicios adicionales mencionados en el sitio actual. */
export const extras = [
  {
    index: "06",
    name: "Asistencia en carretera",
    short:
      "Servicio de remolque para averías inesperadas fuera del taller.",
  },
  {
    index: "07",
    name: "Accesorios y recambios",
    short:
      "Gestionamos la adquisición de piezas y accesorios para tu vehículo.",
  },
] as const;

/** Proveedores con los que trabaja el taller, según su sitio actual. */
export const suppliers = [
  { name: "Navarro Hermanos", url: "https://navarrohermanos.es/" },
  { name: "Recambios Europa", url: "https://www.recambioseuropa.com/" },
  { name: "Cotocar", url: "https://cotocar.com/" },
  { name: "Lomeña", url: "http://www.lomena.es/" },
] as const;
