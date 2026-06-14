"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Reveal } from "@/components/site/reveal";
import { TransitionLink } from "@/components/site/transition-link";

type ArchitectureVariant =
  | "portal-curado"
  | "manifiesto"
  | "ecosistema"
  | "minimal";

type ManifiestoHeroMode = "default" | "forced-break" | "smaller";
type RenderMode = "exploration" | "home";

const variantOrder: ArchitectureVariant[] = [
  "portal-curado",
  "manifiesto",
  "ecosistema",
  "minimal",
];

const meta: Record<
  ArchitectureVariant,
  {
    label: string;
    eyebrow: string;
    title: string;
    description: string;
    method: string;
    notes: string[];
  }
> = {
  "portal-curado": {
    label: "Portal Curado",
    eyebrow: "Opcion 01",
    title: "Una home que ordena y deriva rapido.",
    description:
      "Mentalidad IA se presenta como paraguas, divide enseguida entre Personas y Empresas y despues agrega contexto, prueba social y una cara humana.",
    method: "Tarjetas + bloques editoriales",
    notes: [
      "La mas clara comercialmente.",
      "Escala bien para sumar rutas nuevas.",
      "No sobrecarga con demasiada arquitectura.",
    ],
  },
  manifiesto: {
    label: "Manifiesto + Navegacion",
    eyebrow: "Opcion 02",
    title: "Marca primero, sistema despues.",
    description:
      "La home abre con una idea madre de Mentalidad IA, construye posicionamiento y luego ordena Personas, Empresas, programas y credibilidad.",
    method: "Split + storytelling",
    notes: [
      "Se siente mas premium y mas autoral.",
      "Te deja contar por que existe Mentalidad IA.",
      "Necesita copy fuerte para rendir bien.",
    ],
  },
  ecosistema: {
    label: "Ecosistema de Entrada",
    eyebrow: "Opcion 03",
    title: "Mostrar como se conectan las piezas.",
    description:
      "La home explica el ecosistema visualmente: Mentalidad IA como capa visible, Personas y Empresas como rutas, IA 30D como programa y Geno Insights como consultoria B2B externa.",
    method: "Split + ecosystem strip",
    notes: [
      "Muy util para explicar el paraguas.",
      "Aporta mucha claridad estrategica.",
      "Hay que cuidar que no se vuelva demasiado explicativa.",
    ],
  },
  minimal: {
    label: "Home Minima + Paginas Fuertes",
    eyebrow: "Opcion 04",
    title: "La home hace poco y deriva bien.",
    description:
      "La portada se concentra en orientar, presentar a Jaime y activar la siguiente accion. La profundidad vive en las paginas hijas.",
    method: "Hero + derivacion directa",
    notes: [
      "Muy limpia y moderna.",
      "Le saca peso a la home.",
      "Puede sentirse un poco corta si queres mas relato.",
    ],
  },
};

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <Image src="/assets/favicon.png" alt="Mentalidad IA" width={38} height={38} className="h-10 w-10" />
      <div>
        <p className="font-sans text-[19px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[24px]">
          Mentalidad IA
        </p>
      </div>
    </div>
  );
}

function SiteNav() {
  const pathname = usePathname();
  const items = [
    { href: "/", label: "Home" },
    { href: "/personas", label: "Personas" },
    { href: "/empresas", label: "Empresas" },
    { href: "/sobre-mi", label: "Sobre Mi" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="flex flex-wrap items-center gap-3">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
        <TransitionLink
          key={item.label}
          href={item.href}
          className={`rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.15em] transition-colors ${
            active
              ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
              : "border-white/15 bg-white/5 text-white/78 hover:border-white/35 hover:text-white"
          }`}
        >
          {item.label}
        </TransitionLink>
        );
      })}
    </nav>
  );
}

function VariantNav({ current }: { current: ArchitectureVariant }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {variantOrder.map((variant) => {
        const active = variant === current;
        return (
          <TransitionLink
            key={variant}
            href={`/mvp-home/${variant}`}
            className={`rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.15em] transition-colors ${
              active
                ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                : "border-white/15 bg-white/5 text-white/70 hover:border-white/35 hover:text-white"
            }`}
          >
            {meta[variant].label}
          </TransitionLink>
        );
      })}
    </div>
  );
}

function Summary({ current }: { current: ArchitectureVariant }) {
  const item = meta[current];

  return (
    <section className="bg-black px-5 pb-10 text-white md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-6 rounded-[30px] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-[1.2fr_0.8fr] md:p-8">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
              {item.eyebrow}
            </p>
            <h1 className="max-w-[11ch] font-sans text-[48px] font-semibold leading-[0.92] tracking-[-0.06em] md:text-[78px] xl:text-[104px]">
              {item.title}
            </h1>
            <p className="max-w-[60ch] text-[16px] leading-[1.5] text-white/72 md:text-[18px]">
              {item.description}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[24px] border border-white/10 bg-black/40 p-5">
            <div className="space-y-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">Resolucion visual</p>
              <p className="text-[18px] font-medium leading-[1.35] text-white">{item.method}</p>
              <ul className="space-y-2 text-[15px] leading-[1.45] text-white/72">
                {item.notes.map((note) => (
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

function RouteCard({
  title,
  description,
  label,
  href,
  highlighted = false,
  ctaLabel,
}: {
  title: string;
  description: string;
  label: string;
  href: string;
  highlighted?: boolean;
  ctaLabel?: string;
}) {
  return (
    <TransitionLink
      href={href}
      className={`group relative overflow-hidden rounded-[28px] border p-6 backdrop-blur-sm transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-8 ${
        highlighted
          ? "border-[var(--color-primary)] bg-[var(--color-primary)]/12 md:border-white/12 md:bg-white/6 md:hover:border-[var(--color-primary)] md:hover:bg-[var(--color-primary)]/12"
          : "border-white/12 bg-white/6 md:hover:border-[var(--color-primary)] md:hover:bg-[var(--color-primary)]/12"
      }`}
    >
      <div
        className={`absolute inset-0 origin-left scale-x-100 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.34),rgba(5,108,242,0.14)_38%,transparent_70%)] transition-[opacity,transform] duration-420 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          highlighted
            ? "opacity-80 md:scale-x-[0.96] md:opacity-50 md:group-hover:scale-x-100 md:group-hover:opacity-92"
            : "opacity-55 md:scale-x-[0.96] md:opacity-44 md:group-hover:scale-x-100 md:group-hover:opacity-92"
        }`}
      />
      <div className="relative flex min-h-[220px] flex-col justify-between">
        <div className="space-y-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/72 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:text-white/84">{label}</p>
          <h2 className="max-w-[11ch] font-sans text-[34px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[44px]">
            {title}
          </h2>
          <p className="max-w-[42ch] text-[17px] leading-[1.55] text-white/88 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-[19px] md:group-hover:text-white/94">
            {description}
          </p>
        </div>
        <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:text-white">
          {ctaLabel ?? "Ver"}
        </span>
      </div>
    </TransitionLink>
  );
}

function Hero({
  current,
  manifiestoHeroMode = "default",
}: {
  current: ArchitectureVariant;
  manifiestoHeroMode?: ManifiestoHeroMode;
  mode?: RenderMode;
}) {
  if (current === "portal-curado") {
    return (
      <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
        <Reveal className="space-y-5">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Mentalidad IA
          </p>
          <h1 className="max-w-[10ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[92px] xl:text-[126px]">
            Elegi la puerta de entrada correcta.
          </h1>
          <p className="max-w-[42ch] text-[18px] leading-[1.55] text-white/88 md:text-[21px]">
            Una home pensada para orientar rapido entre formacion para personas y transformacion con IA para empresas.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-4 md:grid-cols-2">
          <RouteCard
            title="Personas"
            description="Cursos, contenido y recursos para incorporar IA con criterio propio."
            label="Ruta 01"
            href="/personas"
          />
          <RouteCard
            title="Empresas"
            description="Programas, consultoria y capacitacion para integrar IA en equipos y procesos."
            label="Ruta 02"
            href="/empresas"
            highlighted
          />
        </Reveal>
      </div>
    );
  }

  if (current === "manifiesto") {
    const titleClassName =
      manifiestoHeroMode === "smaller"
        ? "max-w-[12ch] font-sans text-[52px] font-semibold leading-[0.94] tracking-[-0.06em] text-white md:text-[82px] xl:text-[114px]"
        : "max-w-[11ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[94px] xl:text-[130px]";

    return (
      <div className="space-y-10">
        <Reveal className="max-w-[950px] space-y-6">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Mentalidad IA
          </p>
          <h1 className={titleClassName}>
            {manifiestoHeroMode === "forced-break" ? (
              <>
                <span className="block">Aprender, aplicar y evolucionar</span>
                <span className="block">con IA.</span>
              </>
            ) : (
              "Aprender, aplicar y evolucionar con IA."
            )}
          </h1>
          <p className="max-w-[58ch] text-[18px] leading-[1.55] text-white/88 md:text-[21px]">
            Inteligencia artificial con criterio para personas, equipos y empresas.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-4 md:grid-cols-2">
          <RouteCard
            title="Personas"
            description="Cursos, contenido y recursos para aprender a pensar, aplicar y crecer con IA en la practica."
            label="Ruta 01"
            href="/personas"
            ctaLabel="Ver"
          />
          <RouteCard
            title="Empresas"
            description="Programas y experiencias para incorporar IA con criterio en equipos, procesos y decisiones."
            label="Ruta 02"
            href="/empresas"
            highlighted
            ctaLabel="Ver"
          />
        </Reveal>
      </div>
    );
  }

  if (current === "ecosistema") {
    return (
      <div className="space-y-10">
        <Reveal className="max-w-[900px] space-y-6">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Mentalidad IA
          </p>
          <h1 className="max-w-[10ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[94px] xl:text-[130px]">
            Un ecosistema con varias puertas, una misma idea.
          </h1>
          <p className="max-w-[56ch] text-[18px] leading-[1.55] text-white/88 md:text-[21px]">
            Mentalidad IA articula contenido, formacion y trabajo con empresas bajo una misma capa visible, con rutas distintas segun el tipo de necesidad.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/12 bg-white/6 p-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/55">Mapa rapido</p>
            <div className="mt-8 grid gap-3">
              {[
                "Mentalidad IA",
                "Personas",
                "Empresas",
                "IA 30D",
                "Geno Insights",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-[20px] border px-4 py-4 text-[15px] ${
                    index === 0
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/12 text-white"
                      : "border-white/10 bg-black/25 text-white/88"
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <RouteCard
              title="Personas"
              description="La ruta de cursos, recursos y divulgacion."
              label="Ruta 01"
              href="/personas"
            />
            <RouteCard
              title="Empresas"
              description="La ruta de programas, capacitacion e implementacion."
              label="Ruta 02"
              href="/empresas"
              highlighted
            />
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr] xl:items-end">
      <Reveal className="space-y-5">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Mentalidad IA
        </p>
        <h1 className="max-w-[10ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[92px] xl:text-[126px]">
          Una home minima para elegir bien a donde ir.
        </h1>
        <p className="max-w-[40ch] text-[18px] leading-[1.55] text-white/88 md:text-[21px]">
          La portada orienta, presenta a Jaime y te lleva rapido a la pagina correcta. El detalle vive en las rutas hijas.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="grid gap-4">
        <Link
          href="/personas"
          className="rounded-[26px] border border-white/12 bg-white/6 px-6 py-5 text-white transition-colors hover:bg-white/10"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">Ir a Personas</p>
          <p className="mt-5 font-sans text-[32px] font-semibold leading-[0.96] tracking-[-0.05em]">Cursos y contenido</p>
        </Link>
        <Link
          href="/empresas"
          className="rounded-[26px] border border-[var(--color-primary)] bg-[var(--color-primary)]/12 px-6 py-5 text-white transition-colors hover:bg-[var(--color-primary)]/18"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">Ir a Empresas</p>
          <p className="mt-5 font-sans text-[32px] font-semibold leading-[0.96] tracking-[-0.05em]">Programas y consultoria</p>
        </Link>
      </Reveal>
    </div>
  );
}

function PersonasSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Personas
            </p>
            <h2 className="max-w-[8ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
              Aprender IA para pensar y hacer mejor.
            </h2>
          </div>
          <div className="space-y-5 rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
            <p className="max-w-[56ch] text-[19px] leading-[1.6] text-black/90 md:text-[23px]">
              Mentalidad IA para personas hoy se organiza alrededor de un curso principal, contenido en redes y futuros recursos para seguir profundizando con criterio.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <a
                href="https://curso.jamestech.pro/pages/pensar-con-chatgpt"
                className="jt-card-light block h-full rounded-[22px] p-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Curso destacado</p>
                <p className="mt-4 font-sans text-[20px] font-semibold tracking-[-0.04em]">Pensar con ChatGPT</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                  Una introduccion practica para empezar a usar IA con mas claridad, criterio y aplicacion concreta.
                </p>
                <span className="jt-card-light-accent mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver curso
                </span>
              </a>
              <a
                href="https://www.instagram.com/jamestech.ai/"
                target="_blank"
                rel="noreferrer"
                className="jt-card-light block h-full rounded-[22px] p-4"
              >
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em]">Instagram</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                  Ideas, marcos y divulgacion para seguir el proceso en redes, con foco actual en Instagram.
                </p>
                <span className="jt-card-light-accent mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver Instagram
                </span>
              </a>
              <div className="jt-card-light h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em]">Recursos</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                  Guias, materiales y herramientas complementarias para acompanar el aprendizaje.
                </p>
                <span className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-black/54">
                  Proximamente
                </span>
              </div>
            </div>
            <Link
              href="/personas"
              className="inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]"
            >
              Explorar Personas
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EmpresasSection() {
  return (
    <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Empresas
            </p>
            <h2 className="max-w-[8ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
              Integrar IA con impacto real en equipos y procesos.
            </h2>
          </div>
          <div className="space-y-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-7">
            <p className="max-w-[56ch] text-[19px] leading-[1.6] text-white/90 md:text-[23px]">
              Mentalidad IA para empresas reune programas, experiencias y acompanamiento para traducir inteligencia artificial en adopcion real, autonomia y productividad.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="jt-card-dark h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em]">IA 30D</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/90">
                  Programa intensivo para instalar IA en el dia a dia del equipo.
                </p>
                <Link
                  href="/empresas/ia-30d"
                  className="jt-card-dark-accent mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white"
                >
                  Ver programa
                </Link>
              </div>
              {[
                ["Capacitaciones", "Espacios para adquirir lenguaje comun, criterio y mejores practicas."],
                ["Consultoria", "Acompanamiento para pensar procesos, oportunidades y adopcion con foco B2B."],
              ].map(([title, copy]) => (
                <div key={title} className="jt-card-dark h-full rounded-[22px] p-4">
                  <p className="font-sans text-[20px] font-semibold tracking-[-0.04em]">{title}</p>
                  <p className="mt-3 text-[16px] leading-[1.55] text-white/84">{copy}</p>
                </div>
              ))}
            </div>
            <Link
              href="/empresas"
              className="inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]"
            >
              Ver Empresas
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhatWeDo({ current }: { current: ArchitectureVariant }) {
  const title =
    current === "manifiesto"
      ? "Una misma idea aplicada en contextos distintos."
      : current === "ecosistema"
        ? "El paraguas ordena, no confunde."
        : "Lo que hace Mentalidad IA.";

  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr] xl:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Que es Mentalidad IA
            </p>
            <h2 className="max-w-[9ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
              {title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Personas", "Formacion, recursos y contenido para incorporar IA con criterio."],
              ["Empresas", "Capacitacion, programas e implementacion para equipos y lideres."],
              ["Consultoria", "Una capa B2B conectada con Geno Insights para procesos mas profundos."],
            ].map(([heading, copy], index) => (
              <div key={heading} className={`rounded-[24px] border p-5 ${index === 1 ? "border-[var(--color-primary)] bg-[#edf5ff]" : "border-black/10 bg-[#f7f7f7]"}`}>
                <p className="font-sans text-[22px] font-semibold leading-[1] tracking-[-0.04em]">{heading}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Offers({ current }: { current: ArchitectureVariant }) {
  const showEcosystemStrip = current === "ecosistema";

  return (
    <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px] space-y-8">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Programas y rutas
            </p>
            <h2 className="max-w-[11ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
              Las formas concretas en las que entra la oferta.
            </h2>
          </div>
          <p className="max-w-[42ch] text-[17px] leading-[1.55] text-white/84">
            La home no necesita explicarlo todo, pero si mostrar que el ecosistema ya tiene vehiculos concretos.
          </p>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          <Reveal className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Empresas</p>
            <h3 className="mt-7 font-sans text-[30px] font-semibold leading-[0.98] tracking-[-0.04em]">IA 30D</h3>
            <p className="mt-3 text-[16px] leading-[1.55] text-white/86">
              Programa intensivo para traducir IA en habitos, autonomia y productividad del equipo.
            </p>
            <Link href="/empresas/ia-30d" className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/88">
              Ver programa
            </Link>
          </Reveal>
          <Reveal delay={0.06} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Personas</p>
            <h3 className="mt-7 font-sans text-[30px] font-semibold leading-[0.98] tracking-[-0.04em]">Cursos y contenido</h3>
            <p className="mt-3 text-[16px] leading-[1.55] text-white/86">
              Formatos pensados para aprender IA, usarla mejor y desarrollar criterio propio en el tiempo.
            </p>
            <Link href="/personas" className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/88">
              Ver ruta
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">B2B</p>
            <h3 className="mt-7 font-sans text-[30px] font-semibold leading-[0.98] tracking-[-0.04em]">Geno Insights</h3>
            <p className="mt-3 text-[16px] leading-[1.55] text-white/86">
              La capa consultiva para proyectos empresariales mas profundos y transformaciones con mayor complejidad.
            </p>
            <a
              href="https://www.genoinsights.com/es"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/88"
            >
              Abrir sitio
            </a>
          </Reveal>
        </div>

        {showEcosystemStrip ? (
          <Reveal delay={0.16} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Ecosistema</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Mentalidad IA", "Personas", "Empresas", "IA 30D", "Geno Insights", "James Tech"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-black/30 px-4 py-2 font-mono text-[12px] uppercase tracking-[0.14em] text-white/88"
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function AboutJaime() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
      <div className="mx-auto grid max-w-[1300px] gap-8 xl:grid-cols-[0.72fr_1.28fr]">
        <Reveal className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Sobre Jaime
          </p>
          <h2 className="max-w-[8ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
            La cara visible del ecosistema.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
          <p className="max-w-[58ch] text-[19px] leading-[1.6] text-black/90 md:text-[23px]">
            Jaime traduce inteligencia artificial a lenguaje, herramientas y procesos concretos. James Tech vive como identidad de redes y divulgacion; Mentalidad IA organiza la experiencia visible del ecosistema.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Divulgacion", "Contenido y presencia en redes."],
              ["Formacion", "Cursos, experiencias y aprendizaje aplicado."],
              ["Transformacion", "Programas y trabajo con empresas."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[22px] border border-black/10 bg-white p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em]">{title}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">{copy}</p>
              </div>
            ))}
          </div>
          <Link
            href="/sobre-mi"
            className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]"
          >
            Ver Sobre Mi
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
      <div className="mx-auto max-w-[1300px] rounded-[32px] border border-black/10 bg-[#f5f8fd] p-7 md:p-10">
        <Reveal className="grid gap-8 xl:grid-cols-[1fr_0.9fr] xl:items-end">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Contacto
            </p>
            <h2 className="max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
              Elegi la conversacion que mejor te sirva ahora.
            </h2>
            <p className="max-w-[48ch] text-[17px] leading-[1.55] text-black/84">
              Tanto si queres aprender IA por tu cuenta como si queres llevarla a tu equipo, la home puede terminar con una salida simple y accionable.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/contacto" className="rounded-[24px] border border-black/10 bg-white px-5 py-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/62">Personas</p>
              <p className="mt-4 font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">Ir a Contacto</p>
            </Link>
            <Link href="/empresas/ia-30d" className="rounded-[24px] border border-[var(--color-primary)] bg-[var(--color-primary)] text-white px-5 py-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/82">Empresas</p>
              <p className="mt-4 font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">Quiero llevarlo a mi equipo</p>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomeArchitectureMvp({
  variant,
  manifiestoHeroMode = "default",
  mode = "exploration",
}: {
  variant: ArchitectureVariant;
  manifiestoHeroMode?: ManifiestoHeroMode;
  mode?: RenderMode;
}) {
  return (
    <main id="top" className="min-h-screen bg-black">
      <section className="relative overflow-hidden px-5 pb-14 pt-[110px] text-white md:px-6 xl:px-10 xl:pt-[120px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <Image
            src="/assets/hero-background.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-28"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.28),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.92))]" />
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
            <BrandMark />
            {mode === "exploration" ? <VariantNav current={variant} /> : <SiteNav />}
          </div>
          <Hero current={variant} manifiestoHeroMode={manifiestoHeroMode} mode={mode} />
        </div>
      </section>

      {mode === "exploration" ? <Summary current={variant} /> : null}
      {mode === "exploration" ? <WhatWeDo current={variant} /> : null}
      {mode === "home" ? <PersonasSection /> : null}
      {mode === "home" ? <EmpresasSection /> : null}
      {mode === "exploration" ? <Offers current={variant} /> : null}
      <AboutJaime />
      <ContactSection />
    </main>
  );
}
