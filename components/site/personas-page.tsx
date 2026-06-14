"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { Reveal } from "@/components/site/reveal";
import { Footer, Header } from "@/components/site/home-page";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const rotatingVerbs = ["pensar", "crear", "trabajar", "decidir", "comunicar"];
// Longest verb, used as an invisible spacer so the line keeps a fixed height
// while the visible (absolutely positioned) verb cross-fades.
const longestVerb = rotatingVerbs.reduce((a, b) => (b.length > a.length ? b : a), "");

function RotatingVerb() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % rotatingVerbs.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="relative block text-[var(--color-primary)]">
      <span aria-hidden="true" className="invisible">
        {longestVerb}
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className="absolute left-0 top-0"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "0.5em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-0.5em" }}
          transition={{ duration: 0.42, ease: smoothEase }}
        >
          {rotatingVerbs[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  invert = false,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  invert?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <Reveal className="space-y-3">
      <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">{eyebrow}</p>
      <h2
        className={`max-w-[14ch] font-sans text-[32px] font-semibold leading-[1.0] tracking-[-0.05em] md:text-[62px] md:leading-[0.95] ${
          invert ? "text-white" : "text-black"
        } ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-[52ch] text-[15px] leading-[1.5] md:text-[16px] ${invert ? "text-white/80" : "text-black/80"} ${
            descriptionClassName ?? ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

const audienceItems = [
  "Escuchan de IA todo el tiempo, pero no saben por dónde empezar.",
  "Quieren usar ChatGPT con criterio, no copiar prompts sueltos.",
  "Buscan una base práctica para pensar y trabajar mejor con IA.",
];

const courseUrl = "https://curso.jamestech.pro/pages/pensar-con-chatgpt";

const courseStats = [
  { value: "37+", label: "Clases en video" },
  { value: "7", label: "Módulos (+2 en camino)" },
  { value: "24", label: "Meses de acceso" },
  { value: "7", label: "Días de garantía" },
];

const courseModules = [
  { title: "La Mentalidad", description: "El framework A·P·I para interactuar con la IA con intención." },
  { title: "Dominá la herramienta", description: "Configurá y personalizá ChatGPT para que trabaje a tu manera." },
  { title: "El Framework IDEA", description: "Un método estructurado para lograr resultados consistentes." },
  { title: "Aprender con IA", description: "Usá la IA como tutor personal para aprender más rápido." },
  { title: "Investigar con IA", description: "Investigación y análisis profundos, con criterio." },
  { title: "Crear imágenes con IA", description: "Generá imágenes profesionales desde cero." },
  { title: "Crear texto con IA", description: "Canvas y el framework REC para escribir mejor." },
  { title: "Proyectos y GPTs", description: "Proyectos por nivel y GPTs personalizados.", upcoming: true },
];

const courseIncludes = [
  "37+ clases en video con acceso inmediato",
  "Guías descargables y prácticas por sección",
  "Quizzes interactivos y apuntes completos",
  "Un GPT del curso que te acompaña",
  "Acceso por 24 meses con todas las actualizaciones",
];

export function PersonasPage() {
  return (
    <main className="bg-black">
      <Header />

      <section className="relative overflow-hidden bg-black px-5 pb-14 pt-[120px] text-white md:px-6 md:pb-16 xl:px-10 xl:pt-[150px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black" />
          <Image
            src="/assets/hero-background.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-24"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.26),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.92))]" />
          <div className="absolute inset-0 opacity-50 mix-blend-screen">
            <Image src="/assets/grain-background.avif" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
        </div>

        <div className="relative mx-auto max-w-[1300px]">
          <Reveal className="max-w-[980px] space-y-5 md:space-y-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">Personas</p>
            <h1 className="font-sans text-[38px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:text-[80px] md:leading-[0.95] xl:text-[112px]">
              <span className="block">Aprender IA para</span>
              <RotatingVerb />
              <span className="block">mejor.</span>
            </h1>
            <p className="max-w-[58ch] text-[17px] leading-[1.55] text-white/88 md:text-[21px]">
              Una ruta para incorporar inteligencia artificial con criterio propio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-10 text-black md:px-6 md:py-12 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Curso principal"
            title="Una primera puerta clara."
            description="La ruta arranca con un curso ya publicado para usar ChatGPT con más claridad y criterio."
            descriptionClassName="max-w-[54ch]"
          />
          <div className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="flex flex-col rounded-[24px] border border-[var(--color-primary)] bg-[#edf5ff] p-5 md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Pensar con ChatGPT</p>
              <h3 className="mt-4 max-w-[18ch] font-sans text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] md:text-[52px] md:leading-[0.98]">
                Dejá de improvisar. Usá ChatGPT con método.
              </h3>
              <p className="mt-3 max-w-[46ch] text-[16px] leading-[1.5] text-black/82 md:text-[17px]">
                El curso para trabajar mejor, aprender más rápido y crear con propósito.
              </p>
              <a
                href={courseUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] !text-white transition hover:bg-black"
              >
                Ver curso <span aria-hidden="true">→</span>
              </a>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[24px] border border-black/10 bg-[#f7f7f7] p-5 md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Para quién</p>
              <div className="mt-4 space-y-2.5">
                {audienceItems.map((item) => (
                  <div key={item} className="rounded-[16px] border border-black/10 bg-white px-4 py-3">
                    <p className="text-[15px] leading-[1.45] text-black/80">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f8] px-5 py-12 text-black md:px-6 md:py-16 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="El curso en detalle"
            title="Pensar con ChatGPT, por dentro."
            description="Aprendé a usar ChatGPT con criterio, estructura y método: para trabajar mejor, aprender más rápido y crear con propósito."
            descriptionClassName="max-w-[60ch]"
          />

          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {courseStats.map((stat) => (
              <Reveal key={stat.label} className="rounded-[18px] border border-black/8 bg-white p-5">
                <p className="font-sans text-[34px] font-semibold leading-none tracking-[-0.04em] text-[var(--color-primary)] md:text-[44px]">
                  {stat.value}
                </p>
                <p className="mt-2 font-sans text-[14px] leading-[1.3] text-black/66">{stat.label}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1.4fr_1fr]">
            <Reveal className="rounded-[24px] border border-black/8 bg-white p-5 md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Qué vas a aprender</p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {courseModules.map((module, index) => (
                  <div key={module.title} className="rounded-[16px] border border-black/8 bg-[#f7f8fa] p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[12px] font-semibold text-[var(--color-primary)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {module.upcoming ? (
                        <span className="rounded-full bg-black/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-black/50">
                          Próximamente
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 font-sans text-[17px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">
                      {module.title}
                    </p>
                    <p className="mt-1 text-[14px] leading-[1.4] text-black/62">{module.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="flex flex-col gap-4">
              <Reveal className="rounded-[24px] border border-black/8 bg-white p-5 md:p-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Qué recibís</p>
                <ul className="mt-4 space-y-2.5">
                  {courseIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] leading-[1.4] text-black/80">
                      <span className="mt-[2px] grid h-4 w-4 shrink-0 place-items-center rounded-full bg-[var(--color-primary)]">
                        <svg viewBox="0 0 20 20" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
                          <path d="M4 10.5l4 4 8-9" stroke="white" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.06} className="rounded-[24px] border border-[var(--color-primary)] bg-black p-6 text-white">
                <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Precio de lanzamiento</p>
                <div className="mt-3 flex items-end gap-3">
                  <span className="font-sans text-[44px] font-semibold leading-none tracking-[-0.04em]">USD 37</span>
                  <span className="pb-1 font-sans text-[18px] text-white/40 line-through">USD 97</span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.5] text-white/70">
                  Pago único, sin suscripción. Garantía de 7 días sin preguntas.
                </p>
                <a
                  href={courseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] !text-white transition hover:bg-white hover:!text-black"
                >
                  Entrar al curso · USD 37 <span aria-hidden="true">→</span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-6 md:py-16 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Contenido y recursos"
            title="Una ruta que también se construye en público."
            description="El frente de contenido vive hoy principalmente en Instagram. TikTok y los recursos complementarios existen como siguiente capa de crecimiento, pero todavía no están desplegados."
            invert
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <Reveal>
              <a
                href="https://www.instagram.com/jamestech.ai/"
                target="_blank"
                rel="noreferrer"
                className="jt-card-dark group block rounded-[26px] p-6"
              >
                <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Instagram</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/84">
                  Ideas, marcos y divulgación sobre IA aplicada, con foco actual en una consistencia inicial de contenido
                  en redes.
                </p>
                <span className="jt-card-dark-accent mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white">
                  Ver Instagram
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[26px] border border-white/8 bg-white/[0.02] p-6">
              <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white/62">TikTok</p>
              <p className="mt-3 text-[16px] leading-[1.55] text-white/52">
                La idea de expansión ya existe, pero hoy está en etapa cero. La presencia se va a construir como una nueva
                capa de divulgación.
              </p>
              <span className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/32">
                Próximamente
              </span>
            </Reveal>
            <Reveal delay={0.12} className="rounded-[26px] border border-white/8 bg-white/[0.02] p-6">
              <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white/62">Recursos</p>
              <p className="mt-3 text-[16px] leading-[1.55] text-white/52">
                Guías, materiales y formatos complementarios para acompañar el aprendizaje y bajar la práctica a tierra.
              </p>
              <span className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/32">
                Próximamente
              </span>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
