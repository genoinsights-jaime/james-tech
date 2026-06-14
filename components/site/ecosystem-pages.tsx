"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { Reveal } from "@/components/site/reveal";
import { TransitionLink } from "@/components/site/transition-link";
import { aboutValues, processSteps } from "@/lib/site-content";

function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/personas", label: "Personas" },
    { href: "/empresas", label: "Empresas" },
    { href: "/sobre-mi", label: "Sobre Mi" },
    { href: "/contacto", label: "Contacto" },
  ];

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
            className="object-cover object-center opacity-24"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.26),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.92))]" />
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
            <div className="flex items-center gap-3">
              <Image src="/assets/favicon.png" alt="Mentalidad IA" width={38} height={38} className="h-10 w-10" />
              <div>
                <p className="font-sans text-[19px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[24px]">
                  Mentalidad IA
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap items-center gap-3">
              {navItems.map((item) => {
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
          </div>

          <Reveal className="max-w-[980px] space-y-6">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">{eyebrow}</p>
            <h1 className="max-w-[11ch] font-sans text-[56px] font-semibold leading-[0.92] tracking-[-0.06em] text-white md:text-[94px] xl:text-[130px]">
              {title}
            </h1>
            <p className="max-w-[58ch] text-[18px] leading-[1.55] text-white/88 md:text-[21px]">{description}</p>
          </Reveal>
        </div>
      </section>

      {children}
    </main>
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
        className={`max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px] ${
          invert ? "text-white" : "text-black"
        } ${titleClassName ?? ""}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`max-w-[50ch] text-[17px] leading-[1.55] ${invert ? "text-white/84" : "text-black/84"} ${
            descriptionClassName ?? ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PersonasPage() {
  return (
    <PageShell
      eyebrow="Personas"
      title="Aprender IA para pensar, crear y trabajar mejor."
      description="Una ruta para incorporar inteligencia artificial con criterio propio, empezando por un curso base, contenido en redes y futuros recursos para seguir profundizando."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Curso principal"
            title="Una primera puerta clara: Pensar con ChatGPT."
            description="Hoy la ruta Personas se organiza alrededor de un curso ya publicado, pensado como base practica para empezar a usar ChatGPT con mas claridad y mejor criterio."
            titleClassName="max-w-[13ch] xl:max-w-[14ch]"
            descriptionClassName="max-w-[58ch]"
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="rounded-[28px] border border-[var(--color-primary)] bg-[#edf5ff] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Pensar con ChatGPT</p>
              <h3 className="mt-6 max-w-[11ch] font-sans text-[40px] font-semibold leading-[0.96] tracking-[-0.05em] md:text-[56px]">
                Empezar a pensar mejor con una herramienta que ya esta cambiando el trabajo cotidiano.
              </h3>
              <p className="mt-5 max-w-[42ch] text-[18px] leading-[1.6] text-black/86">
                Una introduccion practica para quienes quieren usar ChatGPT con mas claridad, mejores preguntas y aplicaciones concretas desde el primer tramo del recorrido.
              </p>
              <a
                href="https://curso.jamestech.pro/pages/pensar-con-chatgpt"
                className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]"
              >
                Ver curso
              </a>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Para quien</p>
              <div className="mt-6 space-y-4">
                {[
                  "Personas que escuchan hablar de IA todo el tiempo, pero todavia no encontraron una forma clara de empezar.",
                  "Profesionales y curiosos que quieren usar ChatGPT con mas criterio, no solo copiar prompts sueltos.",
                  "Perfiles principiantes que buscan una base practica para aprender a pensar y trabajar mejor con IA.",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/10 bg-white p-4">
                    <p className="text-[16px] leading-[1.55] text-black/82">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Contenido y recursos"
            title="Una ruta que tambien se construye en publico."
            description="El frente de contenido vive hoy principalmente en Instagram. TikTok y los recursos complementarios existen como siguiente capa de crecimiento, pero todavia no estan desplegados."
            invert
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal>
              <a
                href="https://www.instagram.com/jamestech.ai/"
                target="_blank"
                rel="noreferrer"
                className="jt-card-dark group block rounded-[26px] p-6"
              >
                <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">Instagram</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/84">
                  Ideas, marcos y divulgacion sobre IA aplicada, con foco actual en una consistencia inicial de contenido en redes.
                </p>
                <span className="jt-card-dark-accent mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white">
                  Ver Instagram
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[26px] border border-white/8 bg-white/[0.02] p-6">
              <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white/62">TikTok</p>
              <p className="mt-3 text-[16px] leading-[1.55] text-white/52">
                La idea de expansion ya existe, pero hoy esta en etapa cero. La presencia se va a construir como una nueva capa de divulgacion.
              </p>
              <span className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/32">
                Proximamente
              </span>
            </Reveal>
            <Reveal delay={0.12} className="rounded-[26px] border border-white/8 bg-white/[0.02] p-6">
              <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white/62">Recursos</p>
              <p className="mt-3 text-[16px] leading-[1.55] text-white/52">
                Guias, materiales y formatos complementarios para acompanar el aprendizaje y bajar la practica a tierra.
              </p>
              <span className="mt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-white/32">
                Proximamente
              </span>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function PensarConChatGPTPage() {
  return (
    <PageShell
      eyebrow="Curso"
      title="Pensar con ChatGPT."
      description="Una primera landing local para el curso ya publicado: una introduccion practica para aprender a usar ChatGPT con mas claridad, mejores preguntas y aplicaciones concretas."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Curso base"
            title="Una puerta de entrada simple, clara y usable."
            description="Pensado para personas que estan empezando y quieren incorporar ChatGPT de una forma mas ordenada, mas inteligente y mas practica."
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="rounded-[28px] border border-[var(--color-primary)] bg-[#edf5ff] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Que te llevas</p>
              <div className="mt-6 space-y-4">
                {[
                  "Una forma mas clara de pensar que tipo de preguntas conviene hacerle a ChatGPT.",
                  "Primeros usos concretos para estudiar, trabajar y ordenar mejor ideas con IA.",
                  "Una base practica para pasar de la curiosidad a una relacion mas util con la herramienta.",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/10 bg-white p-4">
                    <p className="text-[16px] leading-[1.55] text-black/82">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Para quien es</p>
              <div className="mt-6 space-y-4">
                {[
                  "Principiantes que quieren empezar bien, sin sobrecarga ni tecnicismos innecesarios.",
                  "Personas que escuchan hablar de IA todo el tiempo, pero todavia no encontraron una practica concreta.",
                  "Perfiles que quieren usar ChatGPT con criterio, no solo repetir formulas sueltas.",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/10 bg-white p-4">
                    <p className="text-[16px] leading-[1.55] text-black/82">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function InmersionIAPage() {
  return (
    <PageShell
      eyebrow="Empresas"
      title="Inmersion IA."
      description="Programa 1:1 para incorporar inteligencia artificial al trabajo y al uso personal, con un recorrido guiado, practica aplicada y materiales para seguir despues."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Programa"
            title="Una inmersion esencial, pensada a medida."
            description="Una propuesta personalizada para ordenar tu contexto, incorporar IA con criterio y llevarla a situaciones reales de trabajo, aprendizaje o uso personal."
            titleClassName="max-w-[13ch] xl:max-w-[14ch]"
            descriptionClassName="max-w-[60ch]"
          />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal className="rounded-[28px] border border-[var(--color-primary)] bg-[#edf5ff] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Que resuelve</p>
              <div className="mt-6 space-y-4">
                {[
                  "Bajar la IA a tu contexto concreto, en vez de aprenderla en abstracto.",
                  "Construir un marco claro para trabajar mejor con herramientas como ChatGPT.",
                  "Salir con prompts maestros, protocolos de uso y una forma mas autonoma de seguir.",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/10 bg-white p-4">
                    <p className="text-[16px] leading-[1.55] text-black/82">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.06} className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Formato</p>
              <div className="mt-6 space-y-4">
                {[
                  "Discovery inicial para entender tu contexto y diseñar el recorrido.",
                  "Cuatro sesiones de trabajo semanales con marco, practica y casos propios.",
                  "Sesion de cierre para consolidar aprendizajes y definir como seguir.",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/10 bg-white p-4">
                    <p className="text-[16px] leading-[1.55] text-black/82">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Como trabajamos"
            title="Un proceso corto, guiado y aplicable."
            description="La idea no es solo entender herramientas, sino incorporarlas con una estructura que puedas sostener solo despues del programa."
            invert
            titleClassName="max-w-[12ch] xl:max-w-[13ch]"
            descriptionClassName="max-w-[58ch]"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {[
              ["01", "Discovery", "Entiendo tu contexto y diseño el programa a tu medida."],
              ["02", "4 sesiones de trabajo", "Marco mas practica con tus casos, preparacion personalizada y materiales descargables."],
              ["03", "Sesion de cierre", "Consolidamos lo aprendido y definimos como seguis solo."],
              ["04", "Documento final", "Un PDF consolidado con contenido del programa, prompts maestros y protocolos de uso."],
              ["05", "Soporte por email", "Un tramo posterior para resolver dudas puntuales y acompanar el cierre del proceso."],
            ].map(([number, title, copy], index) => (
              <Reveal key={number} delay={index * 0.05} className="jt-card-dark rounded-[26px] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">{number}</p>
                <p className="mt-5 font-sans text-[24px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">{title}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/84">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px] rounded-[30px] border border-black/10 bg-[#f7f7f7] p-7">
          <Reveal className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
            <div className="space-y-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Salida</p>
              <h2 className="max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] md:text-[62px]">
                Una inmersion para salir con criterio y sistema propio.
              </h2>
            </div>
            <p className="max-w-[52ch] text-[18px] leading-[1.6] text-black/84">
              Esta pagina es una primera sintesis del programa. Si queres, el proximo paso puede ser transformar este material en una landing mas comercial o mas editorial segun como quieras presentar la oferta.
            </p>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

function VisualShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
      <div className="grid gap-8 xl:grid-cols-[0.42fr_0.58fr] xl:items-center">
        <div className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Cierre visual</p>
          <h3 className="max-w-[11ch] font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[48px]">
            {title}
          </h3>
          <p className="max-w-[34ch] text-[17px] leading-[1.55] text-white/82">
            {description}
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/50 p-4 md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,108,242,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(5,108,242,0.12),transparent_34%)]" />
          <div className="relative h-[340px] md:h-[420px]">
            {children}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function MotionCanvas({
  draw,
}: {
  draw: (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number,
  ) => void;
}) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = parent.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = (now: number) => {
      const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));
      ctx.clearRect(0, 0, width, height);
      draw(ctx, width, height, now * 0.001);
      frame = requestAnimationFrame(render);
    };

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, [draw]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full" />;
}

function SpectralTideEnding() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(5,108,242,0.22),transparent_30%),radial-gradient(circle_at_80%_68%,rgba(5,108,242,0.16),transparent_26%)]" />
      <MotionCanvas
        draw={(ctx, width, height, time) => {
          ctx.fillStyle = "rgba(0,0,0,0.02)";
          ctx.fillRect(0, 0, width, height);

          const waves = 5;
          for (let i = 0; i < waves; i++) {
            const yBase = height * (0.24 + i * 0.14);
            const amplitude = 18 + i * 6;
            const phase = time * (0.9 + i * 0.12);

            ctx.beginPath();
            for (let x = -40; x <= width + 40; x += 8) {
              const y =
                yBase +
                Math.sin(x * 0.011 + phase) * amplitude +
                Math.cos(x * 0.004 - phase * 1.6) * 10;
              if (x === -40) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }

            ctx.strokeStyle = i % 2 === 0 ? "rgba(5,108,242,0.72)" : "rgba(255,255,255,0.24)";
            ctx.lineWidth = i % 2 === 0 ? 2.2 : 1.1;
            ctx.shadowColor = i % 2 === 0 ? "rgba(5,108,242,0.35)" : "transparent";
            ctx.shadowBlur = i % 2 === 0 ? 18 : 0;
            ctx.stroke();
          }

          for (let i = 0; i < 22; i++) {
            const px = ((i * 71.3 + time * 48 * (i % 3 === 0 ? 1 : -1)) % (width + 80)) - 40;
            const py = height * (0.3 + (i % 6) * 0.1) + Math.sin(time * 1.8 + i) * 18;
            const r = 1.5 + (i % 3);
            ctx.beginPath();
            ctx.arc(px, py, r, 0, Math.PI * 2);
            ctx.fillStyle = i % 4 === 0 ? "rgba(255,255,255,0.82)" : "rgba(5,108,242,0.86)";
            ctx.shadowColor = "rgba(5,108,242,0.45)";
            ctx.shadowBlur = 12;
            ctx.fill();
          }
        }}
      />
    </div>
  );
}

function GeometricTideEnding() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(5,108,242,0.18),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(5,108,242,0.12),transparent_26%)]" />
      <MotionCanvas
        draw={(ctx, width, height, time) => {
          ctx.fillStyle = "rgba(0,0,0,0.02)";
          ctx.fillRect(0, 0, width, height);

          const bands = 4;
          for (let i = 0; i < bands; i++) {
            const yBase = height * (0.25 + i * 0.16);
            const phase = time * (0.75 + i * 0.11);
            const amp = 14 + i * 6;

            ctx.beginPath();
            for (let x = -50; x <= width + 50; x += 26) {
              const wave =
                Math.sin(x * 0.011 + phase) * amp +
                Math.cos(x * 0.006 - phase * 1.4) * 8;
              const y = yBase + wave;
              if (x === -50) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }

            ctx.strokeStyle = i % 2 === 0 ? "rgba(5,108,242,0.58)" : "rgba(255,255,255,0.18)";
            ctx.lineWidth = i % 2 === 0 ? 1.6 : 1;
            ctx.shadowColor = i % 2 === 0 ? "rgba(5,108,242,0.28)" : "transparent";
            ctx.shadowBlur = i % 2 === 0 ? 12 : 0;
            ctx.stroke();
          }

          const cols = 10;
          const rows = 5;
          for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
              const px = width * (0.1 + col * 0.085);
              const py =
                height * (0.22 + row * 0.14) +
                Math.sin(time * 1.3 + col * 0.55 + row * 0.7) * 12;
              const size = 10 + ((row + col) % 3) * 4;
              const rot = time * 0.35 + col * 0.22 - row * 0.18;

              ctx.save();
              ctx.translate(px, py);
              ctx.rotate(rot);
              ctx.strokeStyle = col % 2 === 0 ? "rgba(5,108,242,0.44)" : "rgba(255,255,255,0.18)";
              ctx.lineWidth = 1;
              ctx.strokeRect(-size / 2, -size / 2, size, size);
              ctx.restore();
            }
          }

          for (let i = 0; i < 18; i++) {
            const px = ((i * 81 + time * 30) % (width + 60)) - 30;
            const py = height * (0.24 + (i % 5) * 0.14) + Math.cos(time * 1.4 + i) * 10;
            ctx.beginPath();
            ctx.arc(px, py, 1.8, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.78)";
            ctx.shadowColor = "rgba(5,108,242,0.34)";
            ctx.shadowBlur = 10;
            ctx.fill();
          }
        }}
      />
    </div>
  );
}

function HelixTideEnding() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_30%,rgba(5,108,242,0.18),transparent_28%),radial-gradient(circle_at_74%_62%,rgba(5,108,242,0.14),transparent_24%)]" />
      <MotionCanvas
        draw={(ctx, width, height, time) => {
          ctx.fillStyle = "rgba(0,0,0,0.018)";
          ctx.fillRect(0, 0, width, height);

          const centerY = height / 2;
          const startX = width * 0.12;
          const endX = width * 0.88;
          const length = endX - startX;
          const turns = 2.6;

          ctx.beginPath();
          for (let i = 0; i <= 220; i++) {
            const t = i / 220;
            const x = startX + length * t;
            const y = centerY + Math.sin(t * Math.PI * 2 * turns + time * 1.3) * 68;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = "rgba(5,108,242,0.72)";
          ctx.lineWidth = 2.1;
          ctx.shadowColor = "rgba(5,108,242,0.34)";
          ctx.shadowBlur = 18;
          ctx.stroke();

          ctx.beginPath();
          for (let i = 0; i <= 220; i++) {
            const t = i / 220;
            const x = startX + length * t;
            const y = centerY + Math.sin(t * Math.PI * 2 * turns + Math.PI + time * 1.3) * 68;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.strokeStyle = "rgba(255,255,255,0.26)";
          ctx.lineWidth = 1.3;
          ctx.stroke();

          for (let i = 0; i <= 24; i++) {
            const t = i / 24;
            const x = startX + length * t;
            const y1 = centerY + Math.sin(t * Math.PI * 2 * turns + time * 1.3) * 68;
            const y2 = centerY + Math.sin(t * Math.PI * 2 * turns + Math.PI + time * 1.3) * 68;

            ctx.beginPath();
            ctx.moveTo(x, y1);
            ctx.lineTo(x, y2);
            ctx.strokeStyle = "rgba(255,255,255,0.12)";
            ctx.lineWidth = 1;
            ctx.stroke();

            const frontBlue = Math.cos(t * Math.PI * 2 * turns + time * 1.3);
            const frontWhite = Math.cos(t * Math.PI * 2 * turns + Math.PI + time * 1.3);

            ctx.beginPath();
            ctx.arc(x, y1, frontBlue > 0 ? 4.4 : 2.4, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(5,108,242,0.88)";
            ctx.shadowColor = "rgba(5,108,242,0.36)";
            ctx.shadowBlur = 12;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(x, y2, frontWhite > 0 ? 4.2 : 2.2, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.86)";
            ctx.shadowColor = "rgba(255,255,255,0.12)";
            ctx.shadowBlur = 8;
            ctx.fill();
          }

          for (let i = 0; i < 3; i++) {
            const yBase = height * (0.22 + i * 0.24);
            ctx.beginPath();
            for (let x = -40; x <= width + 40; x += 10) {
              const y = yBase + Math.sin(x * 0.012 + time * (0.7 + i * 0.1)) * (10 + i * 2);
              if (x === -40) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = "rgba(5,108,242,0.16)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }}
      />
    </div>
  );
}

function KineticHaloEnding() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[22px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,108,242,0.12),transparent_44%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_62%)]" />
      <MotionCanvas
        draw={(ctx, width, height, time) => {
          const cx = width / 2;
          const cy = height / 2;
          const radius = Math.min(width, height) * 0.22;
          const dots = 220;

          const projected: { x: number; y: number; z: number }[] = [];

          for (let i = 0; i < dots; i++) {
            const t = (i / dots) * Math.PI * 2;
            const p = Math.acos(1 - 2 * ((i + 0.5) / dots));
            let x = Math.sin(p) * Math.cos(t);
            let y = Math.cos(p);
            let z = Math.sin(p) * Math.sin(t);

            const ay = time * 0.55;
            const ax = Math.sin(time * 0.4) * 0.35;

            let dx = x * Math.cos(ay) - z * Math.sin(ay);
            let dz = x * Math.sin(ay) + z * Math.cos(ay);
            let dy = y * Math.cos(ax) - dz * Math.sin(ax);
            dz = y * Math.sin(ax) + dz * Math.cos(ax);
            x = dx;
            y = dy;
            z = dz;

            const scale = 1 / (1.9 - z * 0.8);
            projected.push({
              x: cx + x * radius * 1.9 * scale,
              y: cy + y * radius * 1.9 * scale,
              z,
            });
          }

          projected.sort((a, b) => a.z - b.z);

          for (let i = 0; i < projected.length; i++) {
            const a = projected[i];
            if (i % 9 !== 0) continue;
            const b = projected[(i + 7) % projected.length];
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "rgba(5,108,242,0.16)";
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }

          for (const point of projected) {
            const size = 1.2 + (point.z + 1) * 1.8;
            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
            ctx.fillStyle = point.z > 0.15 ? "rgba(255,255,255,0.9)" : "rgba(5,108,242,0.82)";
            ctx.shadowColor = "rgba(5,108,242,0.3)";
            ctx.shadowBlur = point.z > 0.15 ? 16 : 8;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(cx, cy, radius * 1.72, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(255,255,255,0.08)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(5,108,242,0.22)";
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }}
      />
    </div>
  );
}

export function EmpresasFinalesMvpPage() {
  return (
    <PageShell
      eyebrow="Empresas"
      title="Dos finales con movimiento real."
      description="Prototipos mas espectaculares para el cierre de Empresas: piezas con animacion generativa, presencia cinematografica y una sensacion mas viva de tecnologia premium."
    >
      <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px] space-y-8">
          <VisualShell
            title="Marea espectral"
            description="Una superficie de energia con ondas, brillo y particulas en deriva. Mas cinematica, mas emocional, menos literal."
          >
            <SpectralTideEnding />
          </VisualShell>
          <VisualShell
            title="Marea geometrica"
            description="La misma familia visual, pero con una capa mas estructurada: grilla viva, formas geométricas y señal en movimiento."
          >
            <GeometricTideEnding />
          </VisualShell>
          <VisualShell
            title="Helice abstracta"
            description="Una variacion mas elaborada, entre marea y DNA: una doble estructura viva, tecnologica y mas escultorica."
          >
            <HelixTideEnding />
          </VisualShell>
          <VisualShell
            title="Halo cinetico"
            description="Un cuerpo abstracto de puntos y conexiones que rota y respira. Mas tecnologico, mas sistema, mas espectacular."
          >
            <KineticHaloEnding />
          </VisualShell>
        </div>
      </section>
    </PageShell>
  );
}

export function EmpresasPage() {
  return (
    <PageShell
      eyebrow="Empresas"
      title="Incorporar IA con impacto real en equipos y procesos."
      description="Una primera version de la ruta empresas: programas, capacitaciones y consultoria para pasar de la exploracion a la integracion sostenible."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Formatos"
            title="Tres formas concretas de trabajar con empresas."
            description="La propuesta combina experiencias formativas, programas intensivos y consultoria para distintos niveles de madurez."
            titleClassName="max-w-[13ch] xl:max-w-[14ch]"
            descriptionClassName="max-w-[60ch]"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal>
              <Link
                href="/empresas/ia-30d"
                className="jt-card-light block h-full rounded-[26px] p-6"
              >
              <div className="flex h-full flex-col">
                <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">IA 30D</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                  Programa intensivo para instalar IA en habitos, lenguaje y productividad del equipo en un periodo corto.
                </p>
                <span className="jt-card-light-accent mt-auto pt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">
                  Ver programa
                </span>
              </div>
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <Link
                href="/empresas/inmersion-ia"
                className="jt-card-light block h-full rounded-[26px] p-6"
              >
                <div className="flex h-full flex-col">
                  <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">Inmersion IA</p>
                  <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                    Programa 1:1 para incorporar IA a tu trabajo y a tu uso personal con un recorrido guiado y aplicado.
                  </p>
                  <span className="jt-card-light-accent mt-auto pt-6 inline-block font-mono text-[12px] uppercase tracking-[0.16em]">
                    Ver programa
                  </span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href="https://www.genoinsights.com/es"
                target="_blank"
                rel="noreferrer"
                className="jt-card-light block h-full rounded-[26px] p-6"
              >
                <div className="flex h-full flex-col">
                  <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">Consultoria</p>
                  <p className="mt-3 text-[16px] leading-[1.55] text-black/82">
                    Acompanamiento para pensar procesos, detectar fricciones y convertir IA en una capacidad de negocio.
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                    <span className="jt-card-light-accent font-mono text-[12px] uppercase tracking-[0.16em]">
                      Abrir Geno Insights
                    </span>
                    <Image
                      src="/assets/geno-insights-logo.png"
                      alt="Geno Insights"
                      width={120}
                      height={28}
                      className="h-auto w-[110px]"
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Proceso"
            title="Del discovery a la autonomia."
            description="La experiencia actual del sitio ya deja ver un proceso claro para trabajar con organizaciones. Lo reutilizo aca como primera base."
            invert
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.06} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">{step.number}</p>
                <p className="mt-6 font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">{step.title}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/84">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 pb-18 pt-4 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <Reveal className="space-y-6 rounded-[34px] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="space-y-3">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Cierre visual
              </p>
              <h2 className="max-w-[9ch] font-sans text-[42px] font-semibold leading-[0.95] tracking-[-0.05em] text-white md:text-[62px]">
                Una capa viva para cerrar con más presencia.
              </h2>
              <p className="max-w-[50ch] text-[17px] leading-[1.55] text-white/82">
                Una primera integración de `Marea espectral` al final de Empresas: energía, movimiento y una sensación más cinematográfica para cerrar la ruta.
              </p>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-black/55 p-4 md:p-6">
              <div className="relative h-[360px] md:h-[460px]">
                <SpectralTideEnding />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

export function SobreMiPage() {
  return (
    <PageShell
      eyebrow="Sobre Mi"
      title="La persona que conecta tecnologia, criterio y aplicacion."
      description="Una primera version inferida desde el contexto disponible: Jaime como cara visible del ecosistema, James Tech como identidad de redes y Mentalidad IA como capa publica del proyecto."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-8 xl:grid-cols-[0.7fr_1.3fr]">
          <SectionHeader
            eyebrow="Rol"
            title="Tres capas de una misma construccion."
            description="Esta pagina resume como conviven tu marca personal, el paraguas Mentalidad IA y el trabajo con empresas."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Jaime", "La persona y la voz que traduce IA a lenguaje, criterio y accion."],
              ["James Tech", "La identidad asociada a redes, contenido y presencia publica."],
              ["Mentalidad IA", "La capa visible que organiza la experiencia completa del ecosistema."],
            ].map(([title, copy], index) => (
              <Reveal key={title} delay={index * 0.06} className="rounded-[26px] border border-black/10 bg-[#f7f7f7] p-6">
                <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em]">{title}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-black/82">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-14 text-white md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Principios"
            title="La filosofia ya aparece en el contenido existente."
            description="Reutilizo los principios que ya estaban presentes en la landing de IA 30D para darle una primera voz coherente a esta pagina."
            invert
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {aboutValues.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6">
                <p className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.04em] text-white">{item.title}</p>
                <p className="mt-3 text-[16px] leading-[1.55] text-white/84">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function ContactoPage() {
  return (
    <PageShell
      eyebrow="Contacto"
      title="Elegir una buena conversacion tambien es parte del proceso."
      description="Una primera version de la pagina de contacto separando la intencion de personas y empresas, sin perder una salida general para consultas."
    >
      <section className="bg-white px-5 py-14 text-black md:px-6 xl:px-10">
        <div className="mx-auto max-w-[1300px]">
          <SectionHeader
            eyebrow="Empezar"
            title="Dos caminos principales segun lo que necesites."
            description="Si tu interes es personal o formativo, la ruta es una. Si queres llevar IA a un equipo o empresa, la conversacion cambia."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal className="rounded-[28px] border border-black/10 bg-[#f7f7f7] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Personas</p>
              <h2 className="mt-8 max-w-[10ch] font-sans text-[36px] font-semibold leading-[0.96] tracking-[-0.05em]">
                Quiero aprender IA, explorar cursos o recibir recursos.
              </h2>
              <TransitionLink href="/personas" className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Ver ruta Personas
              </TransitionLink>
            </Reveal>
            <Reveal delay={0.08} className="rounded-[28px] border border-[var(--color-primary)] bg-[#edf5ff] p-7">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">Empresas</p>
              <h2 className="mt-8 max-w-[10ch] font-sans text-[36px] font-semibold leading-[0.96] tracking-[-0.05em]">
                Quiero conversar sobre programas, capacitaciones o IA 30D para mi equipo.
              </h2>
              <TransitionLink href="/empresas/ia-30d" className="mt-8 inline-block font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
                Ver IA 30D
              </TransitionLink>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
