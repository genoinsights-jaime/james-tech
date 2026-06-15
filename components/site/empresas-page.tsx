"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { RotatingHeadline } from "@/components/site/rotating-headline";
import { Footer, Header } from "@/components/site/home-page";
import { processSteps } from "@/lib/site-content";

const contactUrl = "/empresas/ia-30d/contacto";
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
          className={`max-w-[52ch] text-[19px] leading-[1.4] md:text-[24px] md:leading-[1.35] ${invert ? "text-white/80" : "text-black/80"} ${
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
              <RotatingHeadline phrases={["La IA ya entró a tu empresa.", "¿Alguien la está dirigiendo?"]} />
            </h1>
            <p className="max-w-[40ch] text-[19px] leading-[1.4] text-white/88 md:text-[24px]">
              Hoy es ventaja competitiva. Mañana, supervivencia.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f5f6f8] px-5 py-12 text-black md:px-6 md:py-16 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Cómo se trabaja"
            title="Dos frentes para mover la aguja."
            description="La IA rinde cuando avanzan a la par las dos puntas: las personas que la usan todos los días y los procesos donde se apoya."
            descriptionClassName="max-w-[58ch]"
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal>
              <Link href={ia30dUrl} className="jt-card-light group flex h-full flex-col rounded-[26px] p-6 md:p-7">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">El equipo · IA-30D</p>
                <p className="mt-4 font-sans text-[28px] font-semibold leading-[1.0] tracking-[-0.04em] text-black md:text-[34px]">
                  Trabajar las personas
                </p>
                <p className="mt-3 max-w-[40ch] text-[19px] leading-[1.4] text-black/82 md:text-[24px] md:leading-[1.35]">
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
                <p className="mt-3 max-w-[40ch] text-[19px] leading-[1.4] text-black/82 md:text-[24px] md:leading-[1.35]">
                  Geno Insights es nuestra consultora de datos e IA. Ahí automatizamos procesos de punta a punta: ordenamos tus datos, conectamos tus sistemas y dejamos la IA funcionando en producción, no en un piloto.
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

      <section className="bg-black px-5 py-14 text-white md:px-6 md:py-16 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Proceso"
            title="Del discovery a la autonomía."
            description="Un recorrido claro: entender tu contexto, transformar la forma de trabajar y dejar al equipo operando solo."
            descriptionClassName="max-w-[58ch]"
            invert
          />
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.06}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">{step.number}</p>
                <p className="mt-6 font-sans text-[26px] font-semibold leading-[1.0] tracking-[-0.04em] text-white md:text-[28px]">
                  {step.title}
                </p>
                <p className="mt-3 text-[19px] leading-[1.4] text-white/84 md:text-[24px] md:leading-[1.35]">{step.description}</p>
              </Reveal>
            ))}
          </div>
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
              <p className="font-sans text-[24px] font-medium italic leading-[1.3] tracking-[-0.02em] text-black md:text-[30px]">
                “En Mercado Libre vi a mi equipo multiplicar por tres su productividad con IA en dos meses. Salí de una operación enorme para llevar esa transformación a las empresas de LATAM que todavía la están evaluando.”
              </p>
              <p className="text-[20px] leading-[1.4] text-black/72 md:text-[26px] md:leading-[1.35]">
                Lo que busco con cada empresa es concreto: que el equipo y los procesos queden funcionando con IA por su cuenta, con criterio propio.
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-black/55">
                Jaime Chevallier Boutell — Co-Founder Geno Insights · Creador de IA-30D
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 pb-16 pt-2 text-white md:px-6 md:pb-24 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <Reveal className="flex flex-col gap-6 rounded-[32px] border border-[var(--color-primary)] bg-[color:rgba(5,108,242,0.12)] p-6 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="space-y-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Empecemos</p>
              <h2 className="max-w-[18ch] font-sans text-[32px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:text-[48px] md:leading-[0.97]">
                La ventana se mide en meses, no en años.
              </h2>
              <p className="max-w-[54ch] text-[19px] leading-[1.4] text-white/80 md:text-[24px] md:leading-[1.35]">
                Las empresas que se mueven hoy son las que en 2027 van a estar jugando otro partido. Arrancamos con una reunión de discovery para entender tu contexto y ver si el programa puede generar un impacto real.
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

      <Footer />
    </main>
  );
}
