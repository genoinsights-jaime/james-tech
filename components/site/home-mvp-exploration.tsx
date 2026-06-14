"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";

type Variant = "portal" | "narrative" | "hybrid";

const variantMeta: Record<
  Variant,
  {
    eyebrow: string;
    title: string;
    description: string;
    personaLabel: string;
    empresaLabel: string;
    notes: string[];
  }
> = {
  portal: {
    eyebrow: "MVP 01",
    title: "Dos avenidas claras desde el primer scroll.",
    description:
      "La home se comporta como una portada de ecosistema: el usuario entra y entiende rápido si viene por crecimiento personal o por transformación empresarial.",
    personaLabel: "Ir a Personas",
    empresaLabel: "Ir a Empresas",
    notes: [
      "Muy clara para navegación.",
      "Escalable para sumar ofertas nuevas.",
      "Menos narrativa, más portal.",
    ],
  },
  narrative: {
    eyebrow: "MVP 02",
    title: "Primero marca y visión, después Personas y Empresas.",
    description:
      "La home abre con una idea madre de Mentalidad IA. La división en avenidas aparece después, con una entrada más editorial y más premium.",
    personaLabel: "Explorar universo Personas",
    empresaLabel: "Explorar universo Empresas",
    notes: [
      "Más marca, más atmósfera.",
      "Más aspiracional y menos directa.",
      "Ideal si querés posicionamiento fuerte.",
    ],
  },
  hybrid: {
    eyebrow: "MVP 03",
    title: "Una sola home fuerte con bifurcación integrada.",
    description:
      "La home mantiene un hero único de marca y ya integra la división Personas/Empresas en la misma primera pantalla, sin partir el relato.",
    personaLabel: "Ver ruta Personas",
    empresaLabel: "Ver ruta Empresas",
    notes: [
      "Balancea claridad y marca.",
      "Se siente más moderna e interactiva.",
      "Probablemente la más flexible para iterar.",
    ],
  },
};

const variantOrder: Variant[] = ["portal", "narrative", "hybrid"];

function VariantNav({ current }: { current: Variant }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variantOrder.map((variant) => {
        const active = variant === current;
        return (
          <Link
            key={variant}
            href={`/mvp/${variant}`}
            className={`rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors ${
              active
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            {variant}
          </Link>
        );
      })}
    </div>
  );
}

function MentalidadMark() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/assets/favicon.png" alt="Mentalidad IA" width={36} height={36} className="h-9 w-9" />
      <span className="font-sans text-[18px] font-semibold tracking-[-0.04em] text-white md:text-[22px]">
        Mentalidad IA
      </span>
    </div>
  );
}

function HeroSplitCards({
  personaLabel,
  empresaLabel,
  current,
}: {
  personaLabel: string;
  empresaLabel: string;
  current: Variant;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Link
        href="#personas"
        className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 p-6 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 md:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.24),transparent_55%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex min-h-[230px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/60">Personas</span>
            <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
              cursos + contenido
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="max-w-[12ch] font-sans text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[44px]">
              Aprender, experimentar y aplicar IA en tu día a día.
            </h2>
            <p className="max-w-[44ch] text-[15px] leading-[1.45] text-white/70 md:text-[17px]">
              Cursos, recursos y divulgación para personas que quieren entender la IA con criterio y llevarla a la práctica.
            </p>
          </div>
          <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {personaLabel}
          </span>
        </div>
      </Link>

      <Link
        href="#empresas"
        className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1 md:p-8 ${
          current === "portal"
            ? "border-[var(--color-primary)] bg-[var(--color-primary)]/14"
            : "border-white/12 bg-white/6"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(5,108,242,0.36),transparent_55%)] opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex min-h-[230px] flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/60">Empresas</span>
            <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">
              programas + consultoría
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="max-w-[11ch] font-sans text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[44px]">
              Integrar IA con impacto real en equipos y procesos.
            </h2>
            <p className="max-w-[44ch] text-[15px] leading-[1.45] text-white/70 md:text-[17px]">
              Capacitaciones, acompañamiento estratégico y programas como IA 30D para convertir la adopción en resultados medibles.
            </p>
          </div>
          <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {empresaLabel}
          </span>
        </div>
      </Link>
    </div>
  );
}

function VariantSummary({ current }: { current: Variant }) {
  const meta = variantMeta[current];

  return (
    <section className="bg-black px-5 pb-10 text-white md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-6 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.25fr_0.75fr] md:p-8">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
              {meta.eyebrow}
            </p>
            <h1 className="max-w-[12ch] font-sans text-[48px] font-semibold leading-[0.92] tracking-[-0.06em] md:text-[82px] xl:text-[110px]">
              {meta.title}
            </h1>
            <p className="max-w-[60ch] text-[16px] leading-[1.5] text-white/72 md:text-[18px]">
              {meta.description}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[24px] border border-white/10 bg-black/40 p-5">
            <div className="space-y-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">
                Qué evaluar en esta opción
              </p>
              <ul className="space-y-2 text-[15px] leading-[1.45] text-white/74">
                {meta.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <VariantNav current={current} />
          </div>
        </div>
      </div>
    </section>
  );
}

function NarrativeIntro() {
  return (
    <Reveal className="max-w-[900px]">
      <div className="space-y-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Mentalidad IA
        </p>
        <h1 className="max-w-[12ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[92px] xl:text-[128px]">
          Un ecosistema para aprender, aplicar y escalar IA.
        </h1>
        <p className="max-w-[54ch] text-[17px] leading-[1.5] text-white/72 md:text-[20px]">
          Mentalidad IA organiza dos rutas claras: una para personas que quieren incorporar inteligencia artificial en su práctica y otra para empresas que buscan impacto operativo y estratégico.
        </p>
      </div>
    </Reveal>
  );
}

function PortalIntro() {
  return (
    <div className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-end">
      <Reveal className="space-y-5">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Mentalidad IA
        </p>
        <h1 className="max-w-[10ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[92px] xl:text-[128px]">
          Elegí por dónde querés entrar.
        </h1>
        <p className="max-w-[44ch] text-[17px] leading-[1.5] text-white/72 md:text-[20px]">
          Un sitio pensado para separar con claridad dos necesidades distintas: formación para personas y transformación para empresas.
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <HeroSplitCards personaLabel="Ver Personas" empresaLabel="Ver Empresas" current="portal" />
      </Reveal>
    </div>
  );
}

function HybridIntro() {
  return (
    <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
      <Reveal className="space-y-5">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Mentalidad IA
        </p>
        <h1 className="max-w-[11ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[92px] xl:text-[128px]">
          Una misma visión, dos rutas de entrada.
        </h1>
        <p className="max-w-[46ch] text-[17px] leading-[1.5] text-white/72 md:text-[20px]">
          La home presenta una sola narrativa central y deja visible desde el primer impacto si el visitante viene como persona o como empresa.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="grid gap-4">
        <Link
          href="#personas"
          className="rounded-[28px] border border-white/12 bg-white/6 p-6 transition-colors hover:bg-white/10"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">Ruta 01</p>
          <h2 className="mt-10 font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
            Personas
          </h2>
          <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.45] text-white/68">
            Cursos, contenido y herramientas para aprender a usar IA con criterio propio.
          </p>
        </Link>
        <Link
          href="#empresas"
          className="rounded-[28px] border border-[var(--color-primary)] bg-[var(--color-primary)]/12 p-6 transition-colors hover:bg-[var(--color-primary)]/18"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">Ruta 02</p>
          <h2 className="mt-10 font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
            Empresas
          </h2>
          <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.45] text-white/68">
            Programas, capacitación y consultoría para integrar IA en equipos y procesos.
          </p>
        </Link>
      </Reveal>
    </div>
  );
}

function PersonasEmpresasSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
      <div className="mx-auto grid max-w-[1300px] gap-8 xl:grid-cols-2">
        <Reveal id="personas" className="rounded-[28px] border border-black/10 bg-[#f4f7fb] p-7">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Personas
          </p>
          <h2 className="mt-8 max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[58px]">
            Aprender IA y convertirla en práctica real.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.5] text-black/70">
            Cursos online, contenidos y recursos para quienes quieren incorporar IA en su forma de pensar, crear y trabajar.
          </p>
        </Reveal>

        <Reveal id="empresas" delay={0.08} className="rounded-[28px] border border-black/10 bg-black p-7 text-white">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Empresas
          </p>
          <h2 className="mt-8 max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[58px]">
            Diseñar adopción, capacidades y resultados con IA.
          </h2>
          <p className="mt-4 max-w-[48ch] text-[16px] leading-[1.5] text-white/70">
            Capacitaciones, consultoría y programas como IA 30D para organizaciones que quieren pasar de la curiosidad a la implementación.
          </p>
          <div className="mt-10 rounded-[22px] border border-white/10 bg-white/6 p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/50">Destacado</p>
            <p className="mt-2 font-sans text-[28px] font-semibold leading-[1] tracking-[-0.04em]">IA 30D</p>
            <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.45] text-white/65">
              Una ruta intensiva para instalar IA en el día a día del equipo con foco en autonomía, criterio y productividad.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeMvpExploration({ variant }: { variant: Variant }) {
  const meta = variantMeta[variant];

  return (
    <main className="min-h-screen bg-black">
      <section className="relative overflow-hidden px-5 pb-14 pt-[110px] text-white md:px-6 xl:px-10 xl:pt-[120px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <Image
            src="/assets/hero-background.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.28),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.25),rgba(0,0,0,0.92))]" />
          <div className="absolute inset-0 opacity-50 mix-blend-screen">
            <Image
              src="/assets/grain-background.avif"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1300px] flex-col gap-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <MentalidadMark />
            <VariantNav current={variant} />
          </div>

          {variant === "portal" ? <PortalIntro /> : null}
          {variant === "narrative" ? <NarrativeIntro /> : null}
          {variant === "hybrid" ? <HybridIntro /> : null}

          {variant === "narrative" ? (
            <Reveal delay={0.08}>
              <HeroSplitCards
                personaLabel={meta.personaLabel}
                empresaLabel={meta.empresaLabel}
                current={variant}
              />
            </Reveal>
          ) : null}
        </div>
      </section>

      <VariantSummary current={variant} />
      <PersonasEmpresasSection />
    </main>
  );
}
