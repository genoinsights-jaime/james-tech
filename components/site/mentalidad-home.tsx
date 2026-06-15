"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { RotatingVerb } from "@/components/site/rotating-verb";
import { Footer, Header } from "@/components/site/home-page";

const instagramUrl = "https://www.instagram.com/jamestech.ai/";
const linkedinUrl = "https://www.linkedin.com/in/jaimechevallier/";
const contactUrl = "/empresas/ia-30d/contacto";

const aboutChips = ["Co-Founder Geno Insights", "Creador IA-30D", "Universidad Austral", "Ex-Mercado Libre"];

const testimonials = [
  {
    client: "Coldwell Banker Grupo Elite",
    author: "Adriana González",
    quote: "La IA no vino a reemplazarnos, vino a ayudarnos y hacernos la vida más fácil.",
  },
  {
    client: "Estudio AEVR",
    author: "Pendiente",
    quote: "Testimonio en camino.",
  },
  {
    client: "CENSER",
    author: "Pendiente",
    quote: "Testimonio en camino.",
  },
  {
    client: "T&T Marine",
    author: "Pendiente",
    quote: "Testimonio en camino.",
  },
];

function RouteCard({
  title,
  description,
  label,
  href,
  highlighted = false,
}: {
  title: string;
  description: string;
  label: string;
  href: string;
  highlighted?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-[28px] border p-6 transition-[transform,border-color,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 md:p-8 ${
        highlighted
          ? "border-[var(--color-primary)] bg-[color:rgba(5,108,242,0.14)] hover:bg-[color:rgba(5,108,242,0.2)]"
          : "border-white/12 bg-white/[0.05] hover:border-[var(--color-primary)] hover:bg-[color:rgba(5,108,242,0.12)]"
      }`}
    >
      <div className="flex min-h-[180px] flex-col justify-between gap-6">
        <div className="space-y-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/72">{label}</p>
          <span className="block max-w-[11ch] font-sans text-[32px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[44px]">
            {title}
          </span>
          <p className="max-w-[42ch] text-[16px] leading-[1.55] text-white/85 md:text-[18px]">{description}</p>
        </div>
        <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Ver →</span>
      </div>
    </Link>
  );
}

function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="bg-white px-5 py-16 text-black md:px-6 md:py-24 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Confianza</p>

          <div className="mt-6 min-h-[220px] md:mt-8 md:min-h-[300px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={active}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="max-w-[20ch] font-sans text-[30px] font-medium italic leading-[1.12] tracking-[-0.03em] md:max-w-[24ch] md:text-[56px] md:leading-[1.04]">
                  “{current.quote}”
                </p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-black/55 md:text-[12px]">
                  {current.author} · {current.client}
                </p>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex snap-x gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-10 md:flex-wrap [&::-webkit-scrollbar]:hidden">
            {testimonials.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.client}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  className={`shrink-0 snap-start rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-black/15 bg-transparent text-black/65 hover:border-[var(--color-primary)] hover:text-black"
                  }`}
                >
                  {item.client}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EmpresasSection() {
  return (
    <section className="bg-black px-5 py-14 text-white md:px-6 md:py-16 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="grid grid-cols-1 gap-8 xl:grid-cols-[1.28fr_0.72fr] xl:items-start">
          <div className="order-2 space-y-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 md:p-7 xl:order-1">
            <p className="max-w-[58ch] text-[18px] leading-[1.55] text-white/85 md:text-[21px]">
              Mentalidad IA reúne cursos, programas y acompañamiento para traducir la IA en adopción real, autonomía y productividad para personas y equipos.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link href="/empresas/ia-30d" className="jt-card-dark group flex h-full flex-col rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">IA-30D</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Programa intensivo para instalar IA en el día a día del equipo.
                </p>
                <span className="jt-card-dark-accent mt-auto inline-block pt-5 font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver programa →
                </span>
              </Link>
              <a
                href="https://cursos.jamestech.pro/pensar-con-chatgpt"
                target="_blank"
                rel="noreferrer"
                className="jt-card-dark group flex h-full flex-col rounded-[22px] p-4"
              >
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">Cursos</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Pensar con ChatGPT: usá la IA con criterio y método para trabajar, aprender y crear mejor.
                </p>
                <span className="jt-card-dark-accent mt-auto inline-block pt-5 font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver curso →
                </span>
              </a>
              <a
                href="https://www.genoinsights.com/es"
                target="_blank"
                rel="noreferrer"
                className="jt-card-dark group flex h-full flex-col rounded-[22px] p-4"
              >
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">Consultoría</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Acompañamiento para pensar procesos, oportunidades y adopción con foco B2B.
                </p>
                <span className="mt-auto flex items-end justify-end pt-5">
                  <Image
                    src="/assets/geno-logo-white.png"
                    alt="Geno Insights"
                    width={84}
                    height={41}
                    className="h-auto w-[80px] opacity-75 transition group-hover:opacity-100"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="order-1 space-y-4 xl:order-2 xl:text-right">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">3 avenidas de IA</p>
            <h2 className="max-w-[10ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] text-white md:text-[58px] md:leading-[0.95] xl:ml-auto">
              Integrar IA con impacto real.
            </h2>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 md:py-16 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="max-w-[760px] space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Sobre Jaime</p>
          <h2 className="max-w-[16ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] md:text-[58px] md:leading-[0.95]">
            La cara visible del ecosistema.
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-[0.82fr_1.18fr] xl:items-stretch">
          <Reveal className="relative min-h-[440px] overflow-hidden rounded-[24px] border border-black/8 bg-[#f3f5f8]">
            <Image
              src="/assets/about-jaime.jpg"
              alt="Jaime Chevallier Boutell"
              fill
              sizes="(max-width: 1279px) 100vw, 40vw"
              className="object-cover object-[center_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.8))] p-5 md:p-6">
              <p className="font-sans text-[22px] font-semibold leading-[1.1] tracking-[-0.03em] text-white md:text-[26px]">
                Jaime Chevallier Boutell
              </p>
              <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-white/75">
                Co-Founder Geno Insights · Creador IA-30D
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex flex-col gap-6 rounded-[24px] border border-black/10 bg-[#f7f7f7] p-6 md:p-8">
            <p className="text-[18px] leading-[1.6] text-black/82 md:text-[21px]">
              En Mercado Libre vivió de primera mano cómo la IA puede multiplicar la productividad de un equipo. Hoy ayuda a empresas y profesionales de LATAM a convertir la inteligencia artificial en su ventaja competitiva, con criterio, estructura y método.
            </p>

            <div className="flex flex-wrap gap-2">
              {aboutChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-black/12 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-black/65"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["Divulgación", "Contenido y presencia en redes."],
                ["Formación", "Cursos, experiencias y aprendizaje aplicado."],
                ["Transformación", "Programas y trabajo con empresas."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-[18px] border border-black/10 bg-white p-4">
                  <p className="font-sans text-[18px] font-semibold tracking-[-0.04em] text-black">{title}</p>
                  <p className="mt-2 text-[14px] leading-[1.45] text-black/68">{copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-1">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-black transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:!text-white"
              >
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-black transition hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:!text-white"
              >
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="bg-black px-5 py-14 text-white md:px-6 md:py-16 xl:px-10">
      <div className="mx-auto max-w-[1300px] rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
        <Reveal className="grid grid-cols-1 gap-8 xl:grid-cols-[1fr_0.9fr] xl:items-end">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Contacto</p>
            <h2 className="max-w-[12ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] text-white md:text-[58px] md:leading-[0.95]">
              Elegí la conversación que mejor te sirva.
            </h2>
            <p className="max-w-[48ch] text-[16px] leading-[1.55] text-white/72 md:text-[18px]">
              Tanto si querés aprender IA por tu cuenta como si querés llevarla a tu equipo, hay una salida simple y accionable.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link href="/personas" className="rounded-[24px] border border-white/12 bg-white/[0.04] px-5 py-6 transition-colors hover:border-white/30">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">Personas</p>
              <p className="mt-5 font-sans text-[26px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Quiero aprender IA</p>
            </Link>
            <Link
              href={contactUrl}
              className="rounded-[24px] border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-6 transition-colors hover:bg-[#0a4fb5]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/82">Empresas</p>
              <p className="mt-5 font-sans text-[26px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Llevarlo a mi equipo</p>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function MentalidadHome() {
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
            className="object-cover object-center opacity-28"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.28),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.92))]" />
          <div className="absolute inset-0 opacity-50 mix-blend-screen">
            <Image src="/assets/grain-background.avif" alt="" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
        </div>

        <div className="relative mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-12">
          <Reveal className="max-w-[950px] space-y-5 md:space-y-6">
            <h1 className="font-sans text-[40px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:text-[80px] md:leading-[0.94] xl:text-[116px] xl:leading-[0.92]">
              <span className="block">Aprender IA para</span>
              <RotatingVerb />
              <span className="block">mejor.</span>
            </h1>
            <p className="max-w-[56ch] text-[17px] leading-[1.55] text-white/88 md:text-[21px]">
              Inteligencia artificial con criterio para personas, equipos y empresas.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <RouteCard
              title="Personas"
              label="Ruta 01"
              href="/personas"
              description="Cursos, contenido y recursos para aprender a pensar, aplicar y crecer con IA en la práctica."
            />
            <RouteCard
              title="Empresas"
              label="Ruta 02"
              href="/empresas/ia-30d"
              highlighted
              description="Programas y experiencias para incorporar IA con criterio en equipos, procesos y decisiones."
            />
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
      <EmpresasSection />
      <AboutSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
