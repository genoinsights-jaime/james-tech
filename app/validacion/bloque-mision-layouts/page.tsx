"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { aboutValues } from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function PageIntro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Validacion
      </p>
      <h1 className="max-w-[1100px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[66px]">
        Disposiciones posibles para el bloque completo de Mision + Valores.
      </h1>
      <p className="max-w-[960px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68">
        Mantengo el mismo contenido y una lógica similar de cards desplegables, pero exploro cómo
        distribuir mejor el espacio en desktop para que el bloque se sienta más coherente y más
        aprovechado.
      </p>
    </section>
  );
}

function BlockHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <div className="space-y-3">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">{eyebrow}</p>
      <h2 className="font-sans text-[28px] font-semibold leading-[0.96] tracking-[-0.05em] text-black md:text-[42px]">
        {title}
      </h2>
      <p className="max-w-[840px] font-sans text-[17px] leading-[1.55] tracking-[-0.02em] text-black/64">
        {note}
      </p>
    </div>
  );
}

function DemoShell({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4 rounded-[30px] border border-black/8 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-6 md:py-6">
      <div className="space-y-2">
        <h3 className="font-sans text-[24px] font-semibold tracking-[-0.04em] text-black">{title}</h3>
        <p className="max-w-[720px] font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      {children}
    </div>
  );
}

function MissionText() {
  return (
    <div className="space-y-8">
      <h4 className="max-w-[980px] font-sans text-[44px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[84px]">
        Mi misión. Hacer que la IA sea tu ventaja competitiva
      </h4>
      <p className="max-w-[860px] font-sans text-[18px] leading-[1.6] tracking-[-0.02em] text-black/72 md:text-[22px]">
        Ayudo a personas y empresas a implementar tecnología de forma práctica, con impacto real
        en la eficiencia operativa y resultados concretos, dejando equipos autónomos y sin
        dependencia externa.
      </p>
    </div>
  );
}

function GlowAccordionList({
  compact = false,
}: {
  compact?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {aboutValues.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.title}
            className={`overflow-hidden rounded-[30px] border transition-all duration-300 ${
              isOpen
                ? "border-[#4F82FF]/20 bg-[radial-gradient(circle_at_top_left,rgba(79,130,255,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,247,255,0.96))] shadow-[0_24px_60px_rgba(79,130,255,0.08)]"
                : "border-black/8 bg-[linear-gradient(180deg,rgba(250,250,251,1),rgba(245,246,248,0.98))]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              className={`flex w-full items-start gap-4 text-left ${compact ? "px-5 py-5 md:px-6 md:py-6" : "px-6 py-6 md:px-7 md:py-7"}`}
              aria-expanded={isOpen}
            >
              <div className="space-y-3">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                  Valor
                </p>
                <span
                  className={`font-sans font-semibold leading-[1.02] tracking-[-0.04em] text-black ${
                    compact ? "text-[24px] md:text-[28px]" : "text-[26px] md:text-[32px]"
                  }`}
                >
                  {item.title}
                </span>
              </div>
              <div className="ml-auto mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#4F82FF]/18 bg-[#4F82FF]/8">
                <span className="font-sans text-[28px] font-light leading-none text-[#4F82FF]">
                  {isOpen ? "×" : "+"}
                </span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: smoothEase }}
                  className="overflow-hidden"
                >
                  <div className={compact ? "px-5 pb-5 md:px-6 md:pb-6" : "px-6 pb-6 md:px-7 md:pb-7"}>
                    <div className="rounded-[20px] border border-black/6 bg-white/72 p-5 md:p-6">
                      <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}

function HighlightCard() {
  return (
    <div className="rounded-[30px] border border-[#4F82FF]/16 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] p-6 shadow-[0_18px_50px_rgba(79,130,255,0.08)] md:p-7">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Enfoque
      </p>
      <p className="mt-5 font-sans text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[34px]">
        Enseñar IA con criterio, autonomía y contexto real.
      </p>
      <p className="mt-5 font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68">
        Estos tres valores son la base desde la cual diseño programas, capacitaciones e
        implementaciones para personas y empresas.
      </p>
    </div>
  );
}

export default function BloqueMisionLayoutsPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-16">
        <PageIntro />

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 01"
            title="Dos columnas compensadas"
            note="La más cercana a lo que ya tenés, pero usando mejor el ancho: misión a la izquierda y valores con un ancho más protagonista a la derecha."
          />
          <DemoShell
            title="Más balance lateral"
            note="Reduce el vacío de la izquierda y hace que la columna de valores tenga más presencia."
          >
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(520px,0.85fr)] xl:items-start">
              <MissionText />
              <GlowAccordionList />
            </div>
          </DemoShell>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 02"
            title="Mision arriba, valores abajo"
            note="Hace que el bloque respire mejor en desktop usando el ancho para el título y dejando las cards en una segunda capa."
          />
          <DemoShell
            title="Jerarquia vertical"
            note="Ideal si querés que la misión sea la protagonista y los valores entren después como refuerzo."
          >
            <div className="space-y-10">
              <MissionText />
              <GlowAccordionList compact />
            </div>
          </DemoShell>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 03"
            title="Mision + tarjeta de enfoque + valores"
            note="Divide el bloque en tres capas y usa el vacío para introducir una pieza intermedia que ordena la lectura."
          />
          <DemoShell
            title="Bloque más construido"
            note="Hace que el espacio libre trabaje a favor de la narrativa en vez de sentirse vacío."
          >
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_440px]">
              <div className="space-y-8">
                <MissionText />
                <HighlightCard />
              </div>
              <GlowAccordionList compact />
            </div>
          </DemoShell>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 04"
            title="Cards embebidas en la grilla"
            note="La misión y los valores se sienten más parte del mismo sistema. La grilla integra mejor ambos lados."
          />
          <DemoShell
            title="Más sistema, menos dos bloques separados"
            note="Aprovecha mejor el desktop si querés que todo el bloque se vea más integrado."
          >
            <div className="grid gap-6 xl:grid-cols-12 xl:items-start">
              <div className="xl:col-span-7">
                <MissionText />
              </div>
              <div className="xl:col-span-5">
                <GlowAccordionList compact />
              </div>
            </div>
          </DemoShell>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 05"
            title="Intro compacta + valores dominantes"
            note="Le saca protagonismo al párrafo y se lo da a los valores, para que la sección se sienta más dinámica."
          />
          <DemoShell
            title="Valores al frente"
            note="Puede servir si querés que el ojo vaya más rápido a las tres piezas clickeables."
          >
            <div className="grid gap-8 xl:grid-cols-[420px_minmax(0,1fr)] xl:items-start">
              <div className="space-y-6">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                  Mision
                </p>
                <h4 className="font-sans text-[38px] font-semibold leading-[0.94] tracking-[-0.05em] text-black md:text-[56px]">
                  Hacer que la IA sea tu ventaja competitiva.
                </h4>
                <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68">
                  Implementar tecnología con impacto real, equipos autónomos y sin dependencia externa.
                </p>
              </div>
              <GlowAccordionList />
            </div>
          </DemoShell>
        </section>
      </div>
    </main>
  );
}
