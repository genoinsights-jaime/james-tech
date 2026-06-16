"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { RotatingHeadline } from "@/components/site/rotating-headline";
import { Footer, Header } from "@/components/site/home-page";

const contactUrl = "/empresas/ia-30d/contacto?from=empresas";
const ia30dUrl = "/empresas/ia-30d";
const genoUrl = "https://www.genoinsights.com/es";

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
        className={`max-w-[16ch] font-sans text-[32px] font-semibold leading-[1.0] tracking-[-0.05em] md:text-[62px] md:leading-[0.95] ${
          invert ? "text-white" : "text-black"
        } ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-[56ch] text-[16px] leading-[1.5] md:text-[19px] ${invert ? "text-white/80" : "text-black/80"} ${
            descriptionClassName ?? ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function EmpresasPage() {
  return (
    <main className="bg-black">
      <Header />

      <section id="hero" className="relative overflow-hidden bg-black px-5 pb-14 pt-[120px] text-white md:px-6 md:pb-16 xl:px-10 xl:pt-[150px]">
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
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">Empresas</p>
            <h1 className="font-sans text-[40px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:max-w-[15ch] md:text-[78px] md:leading-[0.94] xl:text-[104px]">
              <RotatingHeadline phrases={["La IA ya es parte de tu empresa.", "¿La estás integrando con criterio?"]} />
            </h1>
            <p className="max-w-[52ch] text-[18px] leading-[1.45] text-white/88 md:text-[22px]">
              Bien integrada, la IA se convierte en una ventaja competitiva concreta para tu equipo y tus procesos.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f6f8] px-5 py-12 text-black md:px-6 md:py-16 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Cómo se trabaja"
            title="Dos frentes para mover la aguja."
            description="Abordamos la implementación de IA desde dos frentes complementarios: tu equipo y tus procesos."
            descriptionClassName="max-w-[58ch]"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal>
              <Link href={ia30dUrl} className="jt-card-light group flex h-full flex-col rounded-[26px] p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">El equipo · IA-30D</p>
                <p className="mt-4 font-sans text-[28px] font-semibold leading-[1.0] tracking-[-0.04em] text-black md:text-[34px]">
                  Trabajar las personas
                </p>
                <p className="mt-3 max-w-[48ch] text-[16px] leading-[1.5] text-black/82 md:text-[19px]">
                  IA-30D es nuestro programa de capacitación en IA para equipos. En pocas semanas, tu gente pasa de mirar la IA de afuera a usarla con criterio, lenguaje común y método propio.
                </p>
                <span className="jt-card-light-accent mt-auto inline-block pt-6 font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver programa →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <a href={genoUrl} target="_blank" rel="noreferrer" className="jt-card-light group flex h-full flex-col rounded-[26px] p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">La operación · Consultoría</p>
                <p className="mt-4 font-sans text-[28px] font-semibold leading-[1.0] tracking-[-0.04em] text-black md:text-[34px]">
                  Trabajar los procesos
                </p>
                <p className="mt-3 max-w-[48ch] text-[16px] leading-[1.5] text-black/82 md:text-[19px]">
                  Geno Insights es nuestra consultora de datos e IA. Ahí automatizamos procesos de punta a punta: ordenamos tus datos, conectamos tus sistemas y dejamos la IA funcionando en producción.
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <span className="jt-card-light-accent font-mono text-[12px] uppercase tracking-[0.16em]">Abrir Geno Insights →</span>
                  <Image
                    src="/assets/geno-logo-black.png"
                    alt="Geno Insights"
                    width={120}
                    height={59}
                    className="h-auto w-[104px]"
                  />
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 text-white md:px-6 md:py-24 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <Reveal className="flex flex-col items-center gap-7 rounded-[32px] border border-[var(--color-primary)] bg-[color:rgba(5,108,242,0.12)] p-8 text-center md:p-14">
            <div className="space-y-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Empecemos</p>
              <h2 className="mx-auto max-w-[20ch] font-sans text-[32px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:text-[48px] md:leading-[0.97]">
                Conversemos sobre tu empresa.
              </h2>
              <p className="mx-auto max-w-[56ch] text-[16px] leading-[1.5] text-white/80 md:text-[19px]">
                Empezamos con una reunión de discovery para entender tu contexto y definir juntos dónde la IA puede aportar más valor en tu operación.
              </p>
            </div>
            <Link
              href={contactUrl}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-7 py-4 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] !text-white transition hover:bg-white hover:!text-black"
            >
              Agendar discovery <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-black md:px-6 md:py-20 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-black/8 bg-[#f3f5f8] sm:aspect-[3/4] xl:aspect-[4/5]">
              <Image
                src="/assets/jaime-coldwell.jpg"
                alt="Jaime Chevallier dando una sesión de IA-30D en Coldwell Banker Grupo Elite"
                fill
                sizes="(max-width: 1280px) 100vw, 520px"
                className="object-cover object-[center_32%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.8))] p-5 md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/85">Sesión IA-30D · Coldwell Banker Grupo Elite</p>
              </div>
            </Reveal>
            <Reveal delay={0.06} className="flex flex-col justify-center gap-5 rounded-[28px] border border-black/10 bg-[#f7f7f7] p-6 md:p-8">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">De primera mano</p>
              <p className="font-sans text-[18px] font-medium italic leading-[1.4] tracking-[-0.02em] text-black md:text-[22px]">
                “En Mercado Libre vi a mi equipo multiplicar por tres su productividad con IA en dos meses. Salí de una operación enorme para llevar esa transformación a las empresas de LATAM que todavía la están evaluando.”
              </p>
              <p className="text-[16px] leading-[1.5] text-black/72 md:text-[19px]">
                Mis clientes son las empresas que creen en la implementación de nueva tecnología como medio para diferenciarse. Doy herramientas y conocimiento para acelerar la adopción y generar autonomía.
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-black/55">
                Jaime Chevallier Boutell — Co-Founder Geno Insights · Creador de IA-30D
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
