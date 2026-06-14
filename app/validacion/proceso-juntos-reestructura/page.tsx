"use client";

import Image from "next/image";
import { useState } from "react";

import { principleCards } from "@/lib/site-content";

const discoveryDetails = [
  "Visita presencial para ver como trabaja el equipo en su contexto real.",
  "Mapeo de areas, roles y oportunidades concretas de adopcion.",
  "Investigacion del rubro y del modelo de negocio antes de disenar las sesiones.",
];

const ia30dDetails = [
  "Cuatro sesiones presenciales con contenido variable segun el grupo y el nivel de adopcion.",
  "Trabajo practico por areas para que cada equipo construya algo que pueda seguir usando.",
  "Seguimiento entre sesiones para transformar ideas en herramientas concretas.",
];

const autonomyDetails = [
  "No nos guardamos la metodologia: dejamos criterios, mentalidad y herramientas para seguir iterando.",
  "El programa llega hasta prototipos y primeras implementaciones utiles para el equipo.",
  "Si un proyecto necesita integracion, mantenimiento o escala, se abre una continuidad opcional.",
];

function SectionTag({ label, tone = "light" }: { label: string; tone?: "light" | "dark" }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] ${tone === "dark" ? "text-white" : "text-black"}`}>
      <span className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#4F82FF]" />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

function ProcessCard({
  step,
  title,
  description,
  artIndex,
  children,
}: {
  step: string;
  title: string;
  description: string;
  artIndex: number;
  children?: React.ReactNode;
}) {
  const card = principleCards[artIndex];

  return (
    <article className="flex min-h-[520px] flex-col rounded-[8px] border border-black/10 bg-[#F4F5F7] p-5 text-center md:p-6 xl:p-7">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <SectionTag label={step} />
        </div>
        <div className="group relative mx-auto mt-7 h-[116px] w-[116px] md:h-[142px] md:w-[142px] xl:h-[156px] xl:w-[156px]">
          <Image
            src={card?.asset ?? "/assets/circle.avif"}
            alt={card?.alt ?? ""}
            fill
            sizes="(max-width: 809px) 116px, (max-width: 1279px) 142px, 156px"
            className="object-contain transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-95 group-hover:grayscale"
          />
        </div>
        <h3 className="mt-7 font-sans text-[29px] font-semibold leading-[1.02] text-black md:text-[34px]">{title}</h3>
        <p className="mx-auto mt-4 max-w-[360px] font-sans text-[17px] leading-[1.45] text-black/66 md:min-h-[168px] md:text-[19px]">{description}</p>
      </div>
      {children}
    </article>
  );
}

function StepExpandable({ title, items, initiallyOpen = false }: { title: string; items: string[]; initiallyOpen?: boolean }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="mt-6 border-t border-black/10 pt-5 text-left">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 rounded-[8px] px-2 py-2 text-left transition hover:bg-white/70"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3474E9]">{title}</span>
        <span
          className={`h-0 w-0 border-l-[6px] border-r-[6px] border-t-[9px] border-l-transparent border-r-transparent border-t-[#3474E9] transition-transform ${isOpen ? "" : "-rotate-90"}`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="space-y-3 px-2 pb-1 pt-3">
            {items.map((item) => (
              <li key={item} className="grid grid-cols-[18px_1fr] gap-3 font-sans text-[14px] leading-[1.4] text-black/70 md:text-[15px]">
                <span className="mt-[6px] h-[7px] w-[7px] rounded-full bg-[#3474E9]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {initiallyOpen ? <p className="mt-4 px-2 text-center font-sans text-[13px] italic leading-[1.45] text-black/45">
        Solo avanzamos si el programa puede generar un impacto real.
      </p> : null}
    </div>
  );
}

function GenoLogo({
  src,
  className = "",
  sizes = "320px",
}: {
  src: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt="Geno Insights" fill sizes={sizes} className="object-contain" />
    </div>
  );
}

function GenoContinuityBanner() {
  const copy =
    "Geno Insights es mi consultora de datos y automatizacion con IA. Entra cuando un prototipo del programa necesita convertirse en una solucion mas robusta: con datos ordenados, integraciones, automatizaciones e IA en produccion.";
  const executiveTitle = "Cuando un prototipo necesita convertirse en sistema.";

  return (
    <section className="mt-12 border-y border-[#020E26]/14 py-7 text-[#020E26]">
      <article className="grid gap-6 md:grid-cols-[220px_1fr_auto] md:items-center">
        <GenoLogo src="/assets/geno-logo-positivo-color-trim.png" className="h-[64px] w-[220px]" sizes="220px" />
        <div className="space-y-2">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF8C4E]">Geno Insights · Continuidad opcional</p>
          <h3 className="max-w-[760px] font-sans text-[22px] font-semibold leading-[1.12] md:text-[32px]">{executiveTitle}</h3>
          <p className="max-w-[820px] font-sans text-[15px] leading-[1.5] text-[#020E26]/62 md:text-[17px]">{copy}</p>
        </div>
        <a
          href="https://www.genoinsights.com/es"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center justify-center rounded-full border border-[#020E26] bg-white px-5 py-3 font-sans text-[14px] font-semibold text-[#020E26] transition hover:border-[#FF8C4E] hover:bg-[#FF8C4E] hover:text-[#020E26] md:justify-self-end"
        >
          Ver Geno Insights
        </a>
      </article>
    </section>
  );
}

export default function ProcesoJuntosReestructuraPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 md:py-14 xl:px-10">
      <section className="mx-auto max-w-[1320px]">
        <div className="mb-9 flex flex-col gap-4 border-b border-black/10 pb-8 md:mb-12 md:pb-10">
          <SectionTag label="VALIDACION" />
          <div className="grid gap-5 xl:grid-cols-[1fr_0.62fr] xl:items-end">
            <h1 className="font-sans text-[56px] font-semibold leading-[0.92] text-black md:text-[96px] xl:text-[126px]">
              Nuestro Proceso Juntos<span className="text-[#3474E9]">.</span>
            </h1>
            <p className="max-w-[620px] font-sans text-[18px] leading-[1.48] text-black/62 md:text-[22px] xl:justify-self-end">
              Alternativa para explicar que IA-30D no es solo cuatro sesiones: empieza con una semana de relevamiento, se ejecuta con acompanamiento practico y deja una continuidad opcional para proyectos que quieran crecer.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-7 xl:gap-9">
          <ProcessCard
            step="PASO 1"
            title="Discovery"
            artIndex={0}
            description="No llego con una receta enlatada. Antes de empezar, me tomo una semana para entender tu equipo, tu operacion y tu contexto."
          >
            <StepExpandable title="La semana incluye" items={discoveryDetails} initiallyOpen />
          </ProcessCard>

          <ProcessCard
            step="PASO 2"
            title="IA 30D"
            artIndex={1}
            description="Cuatro sesiones presenciales disenadas para tu equipo. Acompano a cada persona en su nivel para que cada area se lleve algo concreto que pueda seguir usando."
          >
            <StepExpandable title="Durante el programa" items={ia30dDetails} />
            <div className="mt-auto pt-7">
              <span className="inline-flex rounded-full bg-[#EAF2FF] px-4 py-2 font-sans text-[14px] font-semibold text-[#3474E9]">
                El momento "esto si me sirve"
              </span>
            </div>
          </ProcessCard>

          <ProcessCard
            step="PASO 3"
            title="Autonomia IA"
            artIndex={2}
            description="No te hacemos dependiente. Te damos la mentalidad y las herramientas para que la IA sea parte natural del dia a dia, con la puerta abierta si un proyecto necesita ir mas lejos."
          >
            <StepExpandable title="Que queda instalado" items={autonomyDetails} />
          </ProcessCard>
        </div>

        <GenoContinuityBanner />
      </section>
    </main>
  );
}
