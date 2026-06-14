"use client";

import Link from "next/link";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { whatsappUrl } from "@/lib/contact-links";
import { ia30dLeadSchema, type Ia30dLeadInput } from "@/lib/ia30d-lead-schema";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const goalOptions = [
  "Ahorrar tiempo operativo",
  "Mejorar decisiones y procesos",
  "Capacitar al equipo completo",
  "Detectar oportunidades de automatización",
  "Otro objetivo",
];
const aiLevelOptions = [
  "Todavía estamos empezando",
  "Algunas personas ya usan IA",
  "Queremos ordenar y escalar el uso",
  "Ya tenemos proyectos concretos en marcha",
];
const teamSizeOptions = ["1-10 personas", "11-30 personas", "31-80 personas", "Más de 80 personas"];

type OptionField = "primaryGoal" | "aiLevel" | "teamSize";

type StepDef =
  | { kind: "options"; field: OptionField; eyebrow: string; question: string; options: string[] }
  | { kind: "message"; eyebrow: string; question: string }
  | { kind: "contact"; eyebrow: string; question: string };

const steps: StepDef[] = [
  {
    kind: "options",
    field: "primaryGoal",
    eyebrow: "Tu objetivo",
    question: "¿Qué querés lograr primero?",
    options: goalOptions,
  },
  {
    kind: "options",
    field: "aiLevel",
    eyebrow: "Punto de partida",
    question: "¿Dónde está hoy tu equipo con la IA?",
    options: aiLevelOptions,
  },
  {
    kind: "options",
    field: "teamSize",
    eyebrow: "Tu equipo",
    question: "¿De qué tamaño es tu equipo?",
    options: teamSizeOptions,
  },
  {
    kind: "message",
    eyebrow: "Contexto",
    question: "¿Querés sumar algo de contexto?",
  },
  {
    kind: "contact",
    eyebrow: "Tus datos",
    question: "¿Cómo te contacto?",
  },
];

const totalSteps = steps.length;
const inputClass =
  "h-13 w-full rounded-[14px] border border-black/12 bg-white px-4 font-sans text-[16px] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="mt-2 font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#d92d20]">{message}</p>
  );
}

function OptionCard({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`group flex w-full items-center gap-4 rounded-[16px] border px-4 py-4 text-left transition duration-200 md:px-5 ${
        selected
          ? "border-[var(--color-primary)] bg-[color:rgba(5,108,242,0.06)] shadow-[0_8px_24px_rgba(5,108,242,0.1)]"
          : "border-black/12 bg-white hover:border-black/30"
      }`}
    >
      <span
        aria-hidden="true"
        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border transition ${
          selected ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white" : "border-black/20 text-transparent"
        }`}
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
          <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="font-sans text-[16px] font-medium leading-[1.3] tracking-[-0.02em] text-black md:text-[17px]">
        {label}
      </span>
    </button>
  );
}

export function Ia30dLeadForm() {
  const reduceMotion = useReducedMotion();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
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

  const current = steps[step];
  const isLast = step === totalSteps - 1;

  const goNext = () => {
    setDirection(1);
    setStep((value) => Math.min(value + 1, totalSteps - 1));
  };

  const goBack = () => {
    setDirection(-1);
    setStep((value) => Math.max(value - 1, 0));
  };

  const selectOption = (field: OptionField, option: string) => {
    const currentValue = watch(field);
    setValue(field, currentValue === option ? "" : option, { shouldDirty: true });
  };

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
      <div className="rounded-[28px] border border-black/10 bg-[#F7F8FA] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:rounded-[36px] md:p-8">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Formulario enviado
        </p>
        <h2 className="mt-5 max-w-[12ch] font-sans text-[40px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[58px]">
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
      className="rounded-[28px] border border-black/10 bg-[#F7F8FA] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.06)] md:rounded-[36px] md:p-8"
      noValidate
    >
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
          {current.eyebrow}
        </p>
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/40">
          Paso {step + 1} / {totalSteps}
        </p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/8">
        <motion.div
          className="h-full rounded-full bg-[var(--color-primary)]"
          initial={false}
          animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          transition={{ duration: 0.45, ease: smoothEase }}
        />
      </div>

      <div className="relative mt-7 min-h-[336px] md:min-h-[300px]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={step}
            custom={direction}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction * -36 }}
            transition={{ duration: 0.32, ease: smoothEase }}
          >
            <h2 className="font-sans text-[26px] font-semibold leading-[1.08] tracking-[-0.04em] text-black md:text-[32px]">
              {current.question}
            </h2>

            {current.kind === "options" ? (
              <div className="mt-6 flex flex-col gap-3">
                {current.options.map((option) => (
                  <OptionCard
                    key={option}
                    label={option}
                    selected={watch(current.field) === option}
                    onSelect={() => selectOption(current.field, option)}
                  />
                ))}
                <p className="mt-1 font-sans text-[13px] text-black/45">Opcional. Podés continuar sin elegir.</p>
              </div>
            ) : null}

            {current.kind === "message" ? (
              <div className="mt-6">
                <textarea
                  rows={6}
                  placeholder="Contame brevemente qué está pasando en tu equipo o qué te gustaría resolver."
                  className="w-full resize-none rounded-[18px] border border-black/12 bg-white px-4 py-4 font-sans text-[16px] leading-[1.45] text-black outline-none transition placeholder:text-black/34 focus:border-[var(--color-primary)]"
                  {...register("message")}
                />
                <FieldError message={errors.message?.message} />
                <p className="mt-2 font-sans text-[13px] text-black/45">Opcional, pero ayuda a preparar mejor la conversación.</p>
              </div>
            ) : null}

            {current.kind === "contact" ? (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">
                    Nombre
                  </span>
                  <input type="text" autoComplete="name" placeholder="Tu nombre completo" className={inputClass} {...register("name")} />
                  <FieldError message={errors.name?.message} />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">
                    Email
                  </span>
                  <input type="email" autoComplete="email" placeholder="tu@email.com" className={inputClass} {...register("email")} />
                  <FieldError message={errors.email?.message} />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">
                    Empresa
                  </span>
                  <input
                    type="text"
                    autoComplete="organization"
                    placeholder="Nombre de tu empresa"
                    className={inputClass}
                    {...register("company")}
                  />
                  <FieldError message={errors.company?.message} />
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">
                    Rol
                  </span>
                  <input
                    type="text"
                    autoComplete="organization-title"
                    placeholder="Director, socio, gerente..."
                    className={inputClass}
                    {...register("role")}
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-black/56">
                    WhatsApp
                  </span>
                  <input type="tel" autoComplete="tel" placeholder="+54 9 ..." className={inputClass} {...register("whatsapp")} />
                </label>

                <label className="mt-1 grid grid-cols-[18px_minmax(0,1fr)] gap-3 md:col-span-2">
                  <input type="checkbox" className="mt-[2px] h-[18px] w-[18px] accent-[var(--color-primary)]" {...register("privacy")} />
                  <span className="font-sans text-[13px] leading-[1.45] text-black/58">
                    Acepto que me contacten por estos datos para conversar sobre IA-30D. Ver{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-black underline decoration-black/30 underline-offset-4 transition hover:decoration-black"
                    >
                      Política de Privacidad
                    </Link>
                    .
                  </span>
                </label>
                <div className="md:col-span-2">
                  <FieldError message={errors.privacy?.message} />
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>

      <input type="hidden" {...register("source")} />
      <input type="hidden" {...register("teamSize")} />
      <input type="hidden" {...register("aiLevel")} />
      <input type="hidden" {...register("primaryGoal")} />
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register("website")} />

      {serverError ? (
        <p className="mt-5 rounded-[14px] border border-[#d92d20]/20 bg-[#d92d20]/8 px-4 py-3 font-sans text-[14px] font-medium text-[#b42318]">
          {serverError}
        </p>
      ) : null}

      <div className="mt-7 flex items-center justify-between gap-3">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-3 font-sans text-[15px] font-semibold text-black/70 transition hover:border-black/40 hover:text-black"
          >
            <span aria-hidden="true">←</span> Atrás
          </button>
        ) : (
          <span />
        )}

        {isLast ? (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 font-sans text-[16px] font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-55"
          >
            {isSubmitting ? "Enviando..." : "Enviar datos"}
          </button>
        ) : (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-3 font-sans text-[16px] font-semibold text-white transition hover:bg-black"
          >
            Continuar <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </form>
  );
}
