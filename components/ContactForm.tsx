"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { business, whatsappUrl } from "@/lib/business";
import { services } from "@/lib/services";

const serviceOptions = [
  ...services.map((s) => s.name),
  "Asistencia en carretera",
  "Accesorios y recambios",
  "Otra consulta",
];

type Form = {
  nombre: string;
  telefono: string;
  vehiculo: string;
  servicio: string;
  mensaje: string;
};

const empty: Form = {
  nombre: "",
  telefono: "",
  vehiculo: "",
  servicio: serviceOptions[0],
  mensaje: "",
};

/**
 * Formulario de cita sin backend: compone el mensaje y lo abre en
 * WhatsApp o en el cliente de correo del usuario. No simula un envío
 * que no ocurre.
 */
export default function ContactForm() {
  const [form, setForm] = useState<Form>(empty);
  const [touched, setTouched] = useState(false);

  const valid = form.nombre.trim().length > 1 && form.mensaje.trim().length > 3;

  const composed = useMemo(() => {
    const lines = [
      `Hola Garaje ESLA, soy ${form.nombre.trim() || "(nombre)"}.`,
      "",
      `Servicio: ${form.servicio}`,
      form.vehiculo.trim() ? `Vehículo: ${form.vehiculo.trim()}` : null,
      form.telefono.trim() ? `Mi teléfono: ${form.telefono.trim()}` : null,
      "",
      form.mensaje.trim() || "(cuéntanos qué le pasa al coche)",
    ].filter(Boolean);
    return lines.join("\n");
  }, [form]);

  const waHref = whatsappUrl(composed);
  const mailHref = `mailto:${business.email}?subject=${encodeURIComponent(
    `Solicitud de cita · ${form.servicio}`
  )}&body=${encodeURIComponent(composed)}`;

  const update = (k: keyof Form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const guard = (e: React.MouseEvent) => {
    if (!valid) {
      e.preventDefault();
      setTouched(true);
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-steel bg-graphite p-7 md:p-10"
      aria-labelledby="form-titulo"
    >
      <div className="flex items-center gap-3">
        <span aria-hidden className="h-px w-8 bg-accent" />
        <span className="label">Solicitud de cita</span>
      </div>

      <h2 id="form-titulo" className="display mt-5 text-4xl text-chrome md:text-5xl">
        Cuéntanos qué necesitas
      </h2>

      <p className="mt-4 max-w-md text-sm leading-relaxed text-silver">
        Rellena los campos y elige cómo enviarlo. Se abrirá WhatsApp o tu
        programa de correo con el mensaje ya escrito, para que lo revises antes
        de enviarlo.
      </p>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="nombre" className="label block">
            Nombre <span className="text-accent">*</span>
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            value={form.nombre}
            onChange={update("nombre")}
            aria-invalid={touched && form.nombre.trim().length <= 1}
            className="field mt-2.5"
            placeholder="Tu nombre"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="telefono" className="label block">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.telefono}
            onChange={update("telefono")}
            className="field mt-2.5"
            placeholder="Para devolverte la llamada"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="vehiculo" className="label block">
            Vehículo
          </label>
          <input
            id="vehiculo"
            name="vehiculo"
            type="text"
            value={form.vehiculo}
            onChange={update("vehiculo")}
            className="field mt-2.5"
            placeholder="Marca, modelo y año"
          />
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="servicio" className="label block">
            Servicio
          </label>
          <select
            id="servicio"
            name="servicio"
            value={form.servicio}
            onChange={update("servicio")}
            className="field mt-2.5 appearance-none bg-[length:0.7rem] bg-[right_1rem_center] bg-no-repeat pr-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 10 6%22 fill=%22%238e959f%22><path d=%22M0 0h10L5 6z%22/></svg>')]"
          >
            {serviceOptions.map((o) => (
              <option key={o} value={o} className="bg-panel">
                {o}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="label block">
            Qué le pasa al coche <span className="text-accent">*</span>
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            required
            value={form.mensaje}
            onChange={update("mensaje")}
            aria-invalid={touched && form.mensaje.trim().length <= 3}
            className="field mt-2.5 resize-y"
            placeholder="Un ruido al frenar, la luz del motor encendida, la revisión de los 100.000 km…"
          />
        </div>
      </div>

      {touched && !valid && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="mt-5 border-l-2 border-accent pl-3 text-sm text-chrome"
        >
          Necesitamos al menos tu nombre y una breve descripción.
        </motion.p>
      )}

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={guard}
          aria-disabled={!valid}
          className={`group relative inline-flex flex-1 items-center justify-center overflow-hidden px-7 py-4 transition-all duration-300 ${
            valid
              ? "bg-accent hover:-translate-y-0.5"
              : "cursor-not-allowed bg-steel"
          }`}
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 ease-out group-hover:translate-x-full"
          />
          <span className="display-tight relative text-xl tracking-wide text-white">
            Enviar por WhatsApp
          </span>
        </a>

        <a
          href={mailHref}
          onClick={guard}
          aria-disabled={!valid}
          className={`inline-flex flex-1 items-center justify-center border px-7 py-4 transition-colors duration-300 ${
            valid
              ? "border-steel-2 hover:border-chrome"
              : "cursor-not-allowed border-steel text-silver"
          }`}
        >
          <span className="display-tight text-xl tracking-wide text-chrome">
            Enviar por email
          </span>
        </a>
      </div>

      <p className="mt-6 font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-steel-2">
        Tus datos no se guardan en esta web: el mensaje se abre directamente en
        WhatsApp o en tu programa de correo.
      </p>
    </form>
  );
}
