"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { getPhotoUrl } from "@/lib/brand-photo-url";
import { aboutValues } from "@/lib/site-content";

const visualValues = [
  {
    title: aboutValues[0].title,
    description: aboutValues[0].description,
    phrase: "La IA acompaña a los equipos, no los reemplaza.",
    detail:
      "Cuando la implementación está bien hecha, el equipo recupera tiempo, conserva criterio y puede enfocarse en lo que de verdad mueve el negocio.",
    photo: "Coldwell Banker Grupo Elite/V2/DSC03290.jpg",
    note: "Grupo completo y energía humana real.",
  },
  {
    title: aboutValues[1].title,
    description: aboutValues[1].description,
    phrase: "Lo implementado tiene que quedarse en el equipo.",
    detail:
      "La meta no es que el programa dependa de mí, sino que el equipo pueda sostener, mejorar y escalar lo aprendido por su cuenta.",
    photo: "Estudio AEVR/DSC03890.jpg",
    note: "Explicación aplicada y transferencia concreta.",
  },
  {
    title: aboutValues[2].title,
    description: aboutValues[2].description,
    phrase: "Cada contexto pide una forma propia de aplicar IA.",
    detail:
      "No trabajo con recetas fijas. Ajusto el enfoque según el rubro, el nivel del equipo y el momento real de la organización.",
    photo: "CENSER - Gen 1/DSC03808_blur.png",
    note: "La misma imagen que hoy ya sostiene el bloque de Sobre mi.",
  },
];

function Intro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion</p>
      <h1 className="max-w-[1180px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[68px]">
        Variantes para el bloque de mision + valores usando fotos y frases para llenar mejor el espacio en desktop.
      </h1>
      <p className="max-w-[980px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
        Mantengo los mismos tres valores, pero pruebo maneras de darles más cuerpo visual usando
        fotos del banco y una frase corta por cada uno. La idea es decidir primero la disposición,
        no todavía el detalle fino del copy.
      </p>
    </section>
  );
}

function SectionHeader({
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
      <p className="max-w-[900px] font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/62">
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
    <div className="space-y-4 rounded-[32px] border border-black/8 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-7 md:py-7">
      <div className="space-y-2">
        <h3 className="font-sans text-[24px] font-semibold tracking-[-0.04em] text-black">{title}</h3>
        <p className="max-w-[760px] font-sans text-[16px] leading-[1.54] tracking-[-0.02em] text-black/62">
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
      <h4 className="max-w-[22ch] font-sans text-[44px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[84px]">
        Mi misión. Hacer que la IA sea tu ventaja competitiva
      </h4>
      <p className="max-w-[860px] font-sans text-[18px] leading-[1.6] tracking-[-0.02em] text-black/72 md:text-[22px]">
        Ayudo a personas y empresas a incorporar inteligencia artificial de forma práctica, con
        impacto real en su trabajo, sus decisiones y sus resultados.
      </p>
    </div>
  );
}

function OptionOne() {
  const [active, setActive] = useState(0);
  const item = visualValues[active];

  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid gap-6 xl:grid-cols-[minmax(420px,0.8fr)_minmax(0,1.2fr)] xl:items-stretch">
        <div className="space-y-4">
          {visualValues.map((value, index) => (
            <button
              key={value.title}
              type="button"
              onClick={() => setActive(index)}
              className={`w-full rounded-[28px] border p-5 text-left transition-all duration-300 md:p-6 ${
                active === index
                  ? "border-[#4F82FF]/18 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] shadow-[0_16px_36px_rgba(79,130,255,0.08)]"
                  : "border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,246,249,0.98))]"
              }`}
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
              <p className="mt-4 font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[32px]">
                {value.title}
              </p>
              <p className="mt-4 font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/62">
                {value.description}
              </p>
            </button>
          ))}
        </div>

        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="overflow-hidden rounded-[32px] border border-black/8 bg-white shadow-[0_18px_42px_rgba(0,0,0,0.06)]"
        >
          <div className="grid h-full gap-0 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
            <div className="flex flex-col justify-between gap-6 p-6 md:p-7">
              <div className="space-y-4">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Lectura visual</p>
                <p className="font-sans text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-black md:text-[40px]">
                  {item.phrase}
                </p>
                <p className="max-w-[34ch] font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/62">
                  {item.note}
                </p>
              </div>
            </div>
            <div className="relative min-h-[320px] overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getPhotoUrl(item.photo)}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

function OptionTwo() {
  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid gap-4 xl:grid-cols-3">
        {visualValues.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getPhotoUrl(item.photo)} alt={item.title} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4 p-5 md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
              <p className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[30px]">
                {item.title}
              </p>
              <p className="font-sans text-[18px] italic leading-[1.34] tracking-[-0.025em] text-black/84">
                {item.phrase}
              </p>
              <p className="font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/62">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function OptionFour() {
  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid items-stretch gap-4 xl:grid-cols-3">
        {visualValues.map((item) => (
          <article
            key={item.title}
            className="flex h-full flex-col overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]"
          >
            <div className="flex min-h-[236px] flex-1 flex-col space-y-4 p-5 md:min-h-[258px] md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
              <p className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[30px]">
                {item.title}
              </p>
              <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68 md:text-[19px]">
                {item.description}
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getPhotoUrl(item.photo)} alt={item.title} className="h-full w-full object-cover" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function OptionThree() {
  const [active, setActive] = useState(0);
  const item = visualValues[active];

  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.05fr)_minmax(460px,0.95fr)] xl:items-start">
        <div className="space-y-4">
          {visualValues.map((value, index) => (
            <button
              key={value.title}
              type="button"
              onClick={() => setActive(index)}
              className={`grid w-full gap-5 rounded-[28px] border p-5 text-left transition-all duration-300 md:grid-cols-[170px_minmax(0,1fr)] md:p-6 ${
                active === index
                  ? "border-[#4F82FF]/18 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] shadow-[0_16px_36px_rgba(79,130,255,0.08)]"
                  : "border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,246,249,0.98))]"
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={getPhotoUrl(value.photo)} alt={value.title} className="h-full w-full object-cover" />
              </div>
              <div className="space-y-3">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
                <p className="font-sans text-[24px] font-semibold leading-[1.04] tracking-[-0.04em] text-black md:text-[30px]">
                  {value.title}
                </p>
                <p className="font-sans text-[17px] italic leading-[1.34] tracking-[-0.025em] text-black/84">
                  {value.phrase}
                </p>
              </div>
            </button>
          ))}
        </div>

        <motion.aside
          key={item.title}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(248,250,255,0.98),rgba(242,245,252,0.94))] p-6 shadow-[0_18px_42px_rgba(0,0,0,0.06)] md:p-7"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Idea fuerza</p>
          <p className="mt-4 font-sans text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] text-black md:text-[44px]">
            {item.phrase}
          </p>
          <p className="mt-5 font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/64">
            {item.description}
          </p>
        </motion.aside>
      </div>
    </div>
  );
}

function OptionFive() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid items-start gap-4 xl:grid-cols-3">
        {visualValues.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={item.title}
              layout
              className={`overflow-hidden rounded-[30px] border bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)] transition-shadow duration-300 ${
                isOpen
                  ? "border-[#4F82FF]/16 shadow-[0_22px_46px_rgba(79,130,255,0.08)]"
                  : "border-black/8"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full flex-col text-left"
              >
                <div className="space-y-4 px-5 pb-4 pt-5 md:px-6 md:pb-5 md:pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4F82FF]/20 bg-[#F2F6FF] font-sans text-[28px] leading-none tracking-[-0.04em] text-[#4F82FF]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <p className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[30px]">
                    {item.title}
                  </p>
                  <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68 md:text-[19px]">
                    {item.description}
                  </p>
                </div>

                <motion.div
                  layout
                  className={`relative overflow-hidden bg-black transition-all duration-300 ${
                    isOpen ? "aspect-[4/3]" : "aspect-[4/2.4]"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getPhotoUrl(item.photo)}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </motion.div>
              </button>

              <motion.div
                layout
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="space-y-4 border-t border-black/8 px-5 py-5 md:px-6">
                  <p className="font-sans text-[20px] italic leading-[1.38] tracking-[-0.025em] text-black/86">
                    {item.phrase}
                  </p>
                  <p className="font-sans text-[16px] leading-[1.58] tracking-[-0.02em] text-black/64">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function OptionSix() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-10">
      <MissionText />
      <div className="grid items-start gap-4 xl:grid-cols-3">
        {visualValues.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.article
              key={item.title}
              layout
              className={`overflow-hidden rounded-[30px] border bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)] transition-shadow duration-300 ${
                isOpen
                  ? "border-[#4F82FF]/16 shadow-[0_22px_46px_rgba(79,130,255,0.08)]"
                  : "border-black/8"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left"
              >
                <div className="space-y-4 px-5 pb-5 pt-5 md:px-6 md:pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Valor</p>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#4F82FF]/20 bg-[#F2F6FF] font-sans text-[28px] leading-none tracking-[-0.04em] text-[#4F82FF]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                  <p className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[30px]">
                    {item.title}
                  </p>
                </div>
              </button>

              <motion.div
                layout
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="grid gap-0 border-t border-black/8 md:grid-rows-[auto_220px]">
                  <div className="space-y-4 px-5 py-5 md:px-6">
                    <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68 md:text-[19px]">
                      {item.description}
                    </p>
                    <p className="font-sans text-[20px] italic leading-[1.38] tracking-[-0.025em] text-black/86">
                      {item.phrase}
                    </p>
                    <p className="font-sans text-[16px] leading-[1.58] tracking-[-0.02em] text-black/64">
                      {item.detail}
                    </p>
                  </div>
                  <div className="relative overflow-hidden bg-black">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getPhotoUrl(item.photo)}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

export default function ValoresConFotosPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-16">
        <Intro />

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 01"
            title="Accordion + panel visual lateral"
            note="Mantiene bastante del sistema actual, pero llena el vacío con una pieza visual grande a la derecha que cambia según el valor activo."
          />
          <DemoShell
            title="La más cercana a lo que ya tenés"
            note="Sirve si querés evolucionar el bloque actual sin romper del todo su lógica."
          >
            <OptionOne />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 02"
            title="Tres cards editoriales"
            note="Abandona el accordion y convierte los valores en tres piezas más visuales, cada una con foto, frase y apoyo textual."
          />
          <DemoShell
            title="Más compacto y más visual"
            note="Aprovecha bien el ancho de desktop y da a cada valor una identidad propia."
          >
            <OptionTwo />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 03"
            title="Lista con thumbnails + manifiesto lateral"
            note="Cada valor ya muestra foto y frase, y el panel derecho refuerza la idea principal del valor activo."
          />
          <DemoShell
            title="Más construido y más narrativo"
            note="Llena el espacio derecho, pero sigue dejando a los tres valores como navegación clara."
          >
            <OptionThree />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 04"
            title="Tres cards editoriales invertidas"
            note="Mantiene la lógica compacta y visual, pero prioriza primero el texto y deja la imagen como cierre visual de cada card."
          />
          <DemoShell
            title="Texto arriba, imagen abajo"
            note="Útil si querés que primero se lea la idea y después la foto acompañe, en vez de abrir cada card desde lo visual."
          >
            <OptionFour />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 05"
            title="Cards editoriales invertidas + despliegue inferior"
            note="Los tres valores arrancan cerrados. Al clickear, la card crece hacia abajo y usa el espacio extra para mostrar más detalle sin separar artificialmente texto e imagen."
          />
          <DemoShell
            title="Misma familia visual, pero desplegable"
            note="Es la variante más cercana a la opción 04, con apertura interna y sin dejar aire muerto en el medio."
          >
            <OptionFive />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 06"
            title="Cards editoriales invertidas + apertura completa"
            note="También parte de la opción 04, pero cuando una card se abre muestra el texto y la foto como una pieza más completa y más protagonista."
          />
          <DemoShell
            title="Más cuerpo cuando se abre"
            note="Sirve si querés que el estado abierto se sienta más rico y justifique mejor el espacio adicional."
          >
            <OptionSix />
          </DemoShell>
        </section>
      </div>
    </main>
  );
}
