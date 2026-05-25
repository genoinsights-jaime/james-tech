"use client";

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { whatsappUrl } from "@/lib/contact-links";
import { ia30dLeadSchema, type Ia30dLeadInput } from "@/lib/ia30d-lead-schema";

const teamSizeOptions = ["1-10 personas", "11-30 personas", "31-80 personas", "Más de 80 personas"];
const aiLevelOptions = [
  "Todavía estamos empezando",
  "Algunas personas ya usan IA",
  "Queremos ordenar y escalar el uso",
  "Ya tenemos proyectos concretos en marcha",
];
const goalOptions = [
  "Ahorrar tiempo operativo",
  "Mejorar decisiones y procesos",
  "Capacitar al equipo completo",
  "Detectar oportunidades de automatización",
  "Otro objetivo",
];

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d92d20]">{message}</p>;
}

export function Ia30dLeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Ia30dLeadInput>({
    resolver: zodResolver(ia30dLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      role: "",
      teamSize: "",
      aiLevel: "",
      primaryGoal: "",
      message: "",
      source: "ia-30d-cta",
      website: "",
      privacy: false,
    },
  });

  const onSubmit = async (values: Ia30dLeadInput) => {
    setServerError("");

    const response = await fetch("/api/ia30d-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as { message?: string } | null;
      setServerError(body?.message || "No se pudo enviar el formulario. Probá de nuevo.");
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[36px] border border-black/10 bg-[#F7F8FA] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:p-8">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Formulario enviado
        </p>
        <h2 className="mt-5 max-w-[12ch] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[58px]">
          Ya recibí tus datos.
        </h2>
        <p className="mt-5 max-w-[52ch] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68">
          Te voy a escribir para coordinar el próximo paso. Si querés acelerar la conversación, podés abrir WhatsApp ahora.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#53d467] px-6 py-3 font-sans text-[15px] font-semibold text-black transition hover:bg-[#48c85b]"
          >
            Escribirme por WhatsApp
          </a>
          <Link
            href="/empresas/ia-30d"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[var(--color-primary)] px-6 py-3 font-sans text-[15px] font-semibold text-white transition"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 z-0 origin-left scale-x-0 rounded-full bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
            <span className="relative z-10 text-white">Volver a IA-30D</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[36px] border border-black/10 bg-[#F7F8FA] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:p-8"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Nombre</span>
          <input
            type="text"
            autoComplete="name"
            placeholder="Tu nombre completo"
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("name")}
          />
          <FieldError message={errors.name?.message} />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Email</span>
          <input
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("email")}
          />
          <FieldError message={errors.email?.message} />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">WhatsApp</span>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="+54 9 ..."
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("whatsapp")}
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Empresa</span>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("company")}
          />
          <FieldError message={errors.company?.message} />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Rol</span>
          <input
            type="text"
            autoComplete="organization-title"
            placeholder="Director, socio, gerente..."
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("role")}
          />
        </label>

        <label className="block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Tamaño del equipo</span>
          <select
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition focus:border-[var(--color-primary)]"
            {...register("teamSize")}
          >
            <option value="">Seleccionar</option>
            {teamSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Dónde están hoy con IA</span>
          <select
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition focus:border-[var(--color-primary)]"
            {...register("aiLevel")}
          >
            <option value="">Seleccionar</option>
            {aiLevelOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Qué querés lograr primero</span>
          <select
            className="h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition focus:border-[var(--color-primary)]"
            {...register("primaryGoal")}
          >
            <option value="">Seleccionar</option>
            {goalOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">Mensaje opcional</span>
          <textarea
            rows={4}
            placeholder="Contame brevemente qué está pasando en tu equipo o qué te gustaría resolver."
            className="w-full resize-none rounded-[18px] border border-black/12 bg-white px-4 py-4 font-sans text-[16px] leading-[1.45] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
            {...register("message")}
          />
          <FieldError message={errors.message?.message} />
        </label>
      </div>

      <input type="hidden" {...register("source")} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      <label className="mt-5 grid grid-cols-[18px_minmax(0,1fr)] gap-3">
        <input
          type="checkbox"
          className="mt-[2px] h-[18px] w-[18px] accent-[var(--color-primary)]"
          {...register("privacy")}
        />
        <span className="font-sans text-[13px] leading-[1.45] text-black/58">
          Acepto que me contacten por estos datos para conversar sobre IA-30D. Ver{" "}
          <Link href="/privacy-policy" className="text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black">
            Política de Privacidad
          </Link>
          .
        </span>
      </label>
      <FieldError message={errors.privacy?.message} />

      {serverError ? (
        <p className="mt-4 rounded-[14px] border border-[#d92d20]/20 bg-[#d92d20]/8 px-4 py-3 font-sans text-[14px] font-medium text-[#b42318]">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 font-sans text-[16px] font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-55"
      >
        {isSubmitting ? "Enviando..." : "Enviar datos"}
      </button>
    </form>
  );
}
