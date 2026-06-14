"use client";

import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/site/reveal";
import { Footer, Header } from "@/components/site/home-page";

const courseUrl = "https://curso.jamestech.pro/pages/pensar-con-chatgpt";
const instagramUrl = "https://www.instagram.com/jamestech.ai/";
const contactUrl = "/empresas/ia-30d/contacto";

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
          <h2 className="max-w-[11ch] font-sans text-[32px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[44px]">
            {title}
          </h2>
          <p className="max-w-[42ch] text-[16px] leading-[1.55] text-white/85 md:text-[18px]">{description}</p>
        </div>
        <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Ver →</span>
      </div>
    </Link>
  );
}

function PersonasSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 md:py-16 xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="grid grid-cols-1 gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Personas</p>
            <h2 className="max-w-[9ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] md:text-[58px] md:leading-[0.95]">
              Aprender IA para pensar y hacer mejor.
            </h2>
          </div>
          <div className="space-y-5 rounded-[28px] border border-black/10 bg-[#f7f7f7] p-6 md:p-7">
            <p className="max-w-[58ch] text-[18px] leading-[1.55] text-black/82 md:text-[21px]">
              Para personas, Mentalidad IA se organiza alrededor de un curso principal, contenido en redes y futuros recursos para seguir profundizando con criterio.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <a href={courseUrl} target="_blank" rel="noreferrer" className="jt-card-light block h-full rounded-[22px] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Curso destacado</p>
                <p className="mt-4 font-sans text-[20px] font-semibold tracking-[-0.04em] text-black">Pensar con ChatGPT</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-black/72">
                  Una introducción práctica para usar IA con más claridad, criterio y aplicación concreta.
                </p>
                <span className="jt-card-light-accent mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">Ver curso</span>
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="jt-card-light block h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-black">Instagram</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-black/72">
                  Ideas, marcos y divulgación sobre IA aplicada, con foco actual en redes.
                </p>
                <span className="jt-card-light-accent mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">Ver Instagram</span>
              </a>
              <div className="jt-card-light h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-black">Recursos</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-black/72">
                  Guías, materiales y herramientas complementarias para acompañar el aprendizaje.
                </p>
                <span className="mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-black/45">Próximamente</span>
              </div>
            </div>
            <Link href="/personas" className="inline-block font-mono text-[12px] uppercase tracking-[0.16em] !text-[var(--color-primary)]">
              Explorar Personas →
            </Link>
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
        <Reveal className="grid grid-cols-1 gap-8 xl:grid-cols-[0.72fr_1.28fr] xl:items-start">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Empresas</p>
            <h2 className="max-w-[10ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] text-white md:text-[58px] md:leading-[0.95]">
              Integrar IA con impacto real en equipos.
            </h2>
          </div>
          <div className="space-y-5 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 md:p-7">
            <p className="max-w-[58ch] text-[18px] leading-[1.55] text-white/85 md:text-[21px]">
              Para empresas, Mentalidad IA reúne programas, experiencias y acompañamiento para traducir la IA en adopción real, autonomía y productividad.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="jt-card-dark h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">IA-30D</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Programa intensivo para instalar IA en el día a día del equipo.
                </p>
                <Link href="/empresas/ia-30d" className="jt-card-dark-accent mt-5 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver programa
                </Link>
              </div>
              <div className="jt-card-dark h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">Capacitaciones</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Espacios para adquirir lenguaje común, criterio y mejores prácticas.
                </p>
              </div>
              <div className="jt-card-dark h-full rounded-[22px] p-4">
                <p className="font-sans text-[20px] font-semibold tracking-[-0.04em] text-white">Consultoría</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-white/82">
                  Acompañamiento para pensar procesos, oportunidades y adopción con foco B2B.
                </p>
              </div>
            </div>
            <Link href="/empresas/ia-30d" className="inline-block font-mono text-[12px] uppercase tracking-[0.16em] !text-[var(--color-primary)]">
              Ver IA-30D →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-white px-5 py-14 text-black md:px-6 md:py-16 xl:px-10">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 xl:grid-cols-[0.72fr_1.28fr]">
        <Reveal className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Sobre Jaime</p>
          <h2 className="max-w-[9ch] font-sans text-[36px] font-semibold leading-[0.97] tracking-[-0.05em] md:text-[58px] md:leading-[0.95]">
            La cara visible del ecosistema.
          </h2>
        </Reveal>
        <Reveal delay={0.08} className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-6 md:p-7">
          <p className="max-w-[58ch] text-[18px] leading-[1.6] text-black/88 md:text-[21px]">
            Jaime traduce inteligencia artificial a lenguaje, herramientas y procesos concretos. James Tech vive como identidad de redes y divulgación; Mentalidad IA organiza la experiencia visible del ecosistema.
          </p>
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              ["Divulgación", "Contenido y presencia en redes."],
              ["Formación", "Cursos, experiencias y aprendizaje aplicado."],
              ["Transformación", "Programas y trabajo con empresas."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-[22px] border border-black/10 bg-white p-4">
                <p className="font-sans text-[19px] font-semibold tracking-[-0.04em] text-black">{title}</p>
                <p className="mt-3 text-[15px] leading-[1.5] text-black/72">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>
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
            <Link href={contactUrl} className="rounded-[24px] border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-6 transition-colors hover:bg-black">
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
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">Mentalidad IA</p>
            <h1 className="font-sans text-[40px] font-semibold leading-[1.0] tracking-[-0.05em] text-white md:max-w-[13ch] md:text-[78px] md:leading-[0.94] xl:text-[118px] xl:leading-[0.92]">
              Aprender, aplicar y evolucionar con IA.
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

      <PersonasSection />
      <EmpresasSection />
      <AboutSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
