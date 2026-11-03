# Garaje ESLA — sitio web

Sitio web del taller mecánico **Garaje ESLA** (Marbella, Málaga).

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Motion (framer-motion).

## Desarrollo

```bash
npm install
npm run dev
```

## Compilación

```bash
npm run build
npm start
```

## Datos del negocio

Todos los datos del taller viven en un único sitio: [`lib/business.ts`](lib/business.ts)
y [`lib/services.ts`](lib/services.ts). Si cambia un teléfono, una dirección o un
servicio, se cambia ahí y se propaga a toda la web (incluidos los datos
estructurados y los enlaces de WhatsApp).

## Criterio de honestidad

Este sitio no inventa nada sobre el negocio. Todo lo publicado procede del
sitio web anterior del taller (`garajeesla.wixsite.com/garajeesla`), consultado
el 3 de noviembre de 2026.

En concreto:

- **No hay** certificaciones, premios, reseñas, valoraciones ni estadísticas de
  clientes, porque no constaban en el sitio anterior.
- **No hay** logotipos de marcas ni de fabricantes. Los cuatro proveedores que
  se listan (Navarro Hermanos, Recambios Europa, Cotocar, Lomeña) sí figuran en
  el sitio anterior y aparecen sólo como texto, indicando su procedencia.
- La frase «más de 30 años reparando coches» procede literalmente de la página
  *Nuestro taller* del sitio anterior.

### Horario — pendiente de confirmación

El sitio anterior publica **dos horarios distintos y contradictorios**:

| Fuente | Lunes a viernes | Sábado |
| --- | --- | --- |
| Pie de página | 09:00–20:00 | 09:00–14:00 |
| Página *Contacto* | 09:00–14:00 y 16:00–20:00 | 09:00–13:00 |

Se publica la versión de la página *Contacto* por ser la más específica, y
siempre acompañada de una nota visible de «horario pendiente de confirmación».

Por el mismo motivo **no se declara `openingHoursSpecification` en los datos
estructurados** (JSON-LD): no conviene que los buscadores muestren un horario
sin verificar. En cuanto el taller confirme el horario real, basta con
actualizar `hours` en `lib/business.ts`, quitar `hoursNote` y añadir el bloque
de horario al JSON-LD de `app/layout.tsx`.

## Imágenes

| Archivo | Origen | Uso |
| --- | --- | --- |
| `public/img/taller-01.jpg` | Fotografía real del taller | Galería, Open Graph |
| `public/img/taller-02.jpg` | Fotografía real del taller | Galería |
| `public/img/taller-03.jpg` | Fotografía real del taller | Galería (*Nuestro taller*) |
| `public/img/rep-01.jpg` | Imagen de banco (biblioteca de Wix) | Hero — **etiquetada en pantalla como «Imagen representativa»** |
| `public/img/rep-03.jpg` | Imagen de banco (biblioteca de Wix) | Sin uso actualmente |

Cualquier imagen que no sea del propio taller debe llevar la etiqueta
«Imagen representativa» visible, como hace el hero.

## Formulario de contacto

El formulario **no tiene backend y no guarda datos**. Compone el mensaje y lo
abre en WhatsApp o en el cliente de correo del usuario, que es quien envía. No
simula un envío que no ocurre.

## SEO

- Metadatos y Open Graph en español, orientados a «taller mecánico en Marbella».
- JSON-LD `AutoRepair` con dirección, teléfono, email, redes y catálogo de
  servicios (sin horario, ver arriba).
- `app/sitemap.ts` y `app/robots.ts` generan `sitemap.xml` y `robots.txt`.
- `SITE_URL` en `lib/business.ts` debe apuntar al dominio definitivo.
