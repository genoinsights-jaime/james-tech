"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { aboutValues } from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SectionIntro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Validacion
      </p>
      <h1 className="max-w-[1080px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[66px]">
        Variantes de la seccion de valores sobre fondo claro.
      </h1>
      <p className="max-w-[920px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68">
        Mantengo la idea de que se pueda hacer click y abrir, pero exploro maneras más grandes,
        más visuales y más integradas al sistema nuevo, sin irnos al fondo negro.
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
      <p className="max-w-[760px] font-sans text-[17px] leading-[1.55] tracking-[-0.02em] text-black/64">
        {note}
      </p>
    </div>
  );
}

function ValueAccordionCard({
  title,
  description,
  index,
  variant = "default",
}: {
  title: string;
  description: string;
  index: number;
  variant?: "default" | "spacious" | "visual";
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  const shellClassName =
    variant === "visual"
      ? "rounded-[28px] border border-[#4F82FF]/14 bg-[linear-gradient(180deg,rgba(239,243,252,0.96),rgba(246,248,252,0.98))] shadow-[0_24px_70px_rgba(0,0,0,0.06)]"
      : "rounded-[24px] border border-black/8 bg-[var(--color-gray-bg)]";

  return (
    <article className={shellClassName}>
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className={`flex w-full items-start justify-between gap-6 text-left ${
          variant === "spacious"
            ? "px-6 py-6 md:px-8 md:py-8"
            : variant === "visual"
              ? "px-6 py-6 md:px-7 md:py-7"
              : "px-5 py-5 md:px-6 md:py-6"
        }`}
        aria-expanded={isOpen}
      >
        <div className="space-y-3">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
            Valor {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className={`font-sans font-semibold tracking-[-0.045em] text-black ${
              variant === "spacious"
                ? "max-w-[640px] text-[34px] leading-[0.98] md:text-[48px]"
                : variant === "visual"
                  ? "max-w-[620px] text-[30px] leading-[1] md:text-[42px]"
                  : "max-w-[560px] text-[28px] leading-[1.02] md:text-[36px]"
            }`}
          >
            {title}
          </h3>
        </div>

        <div className="flex items-center gap-4 pt-1">
          {variant === "visual" ? (
            <div className="hidden h-12 w-12 rounded-full border border-[#4F82FF]/18 bg-[#4F82FF]/8 md:flex md:items-center md:justify-center">
              <div className="h-2.5 w-2.5 rounded-full bg-[#4F82FF]" />
            </div>
          ) : null}
          <span className="font-sans text-[34px] font-light leading-none text-[#4F82FF]">
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
            transition={{ duration: 0.35, ease: smoothEase }}
            className="overflow-hidden"
          >
            <div
              className={`${
                variant === "spacious"
                  ? "px-6 pb-6 md:px-8 md:pb-8"
                  : variant === "visual"
                    ? "px-6 pb-6 md:px-7 md:pb-7"
                    : "px-5 pb-5 md:px-6 md:pb-6"
              }`}
            >
              <div
                className={`rounded-[20px] ${
                  variant === "visual"
                    ? "border border-[#4F82FF]/14 bg-white/72 p-5 md:p-6"
                    : "border border-black/8 bg-white/72 p-5 md:p-6"
                }`}
              >
                <p className="max-w-[760px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/72 md:text-[19px]">
                  {description}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}

export default function ValoresIAClaroValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-16">
        <SectionIntro />

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 01"
            title="Accordion grande y limpia"
            note="Es la evolución más natural de lo que ya tenés. Mantiene la interacción actual, pero con más presencia y mejor lectura."
          />
          <div className="space-y-4">
            {aboutValues.map((item, index) => (
              <ValueAccordionCard
                key={`clean-${item.title}`}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 02"
            title="Cards más grandes y aireadas"
            note="Acá cada valor se siente más importante. Está más cerca de una landing premium que de un simple acordeón."
          />
          <div className="space-y-5">
            {aboutValues.map((item, index) => (
              <ValueAccordionCard
                key={`spacious-${item.title}`}
                title={item.title}
                description={item.description}
                index={index}
                variant="spacious"
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 03"
            title="Interactive cards con más gesto visual"
            note="Sigue siendo fondo claro, pero cada tarjeta se siente más diseñada. Puede funcionar si querés un punto medio entre claridad y marca."
          />
          <div className="space-y-5">
            {aboutValues.map((item, index) => (
              <ValueAccordionCard
                key={`visual-${item.title}`}
                title={item.title}
                description={item.description}
                index={index}
                variant="visual"
              />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 04"
            title="Dos columnas con lectura más editorial"
            note="Una variante más compuesta. A la izquierda, el nombre del valor; a la derecha, el desarrollo que se abre."
          />
          <div className="space-y-4">
            {aboutValues.map((item, index) => (
              <EditorialValueRow
                key={`editorial-${item.title}`}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function EditorialValueRow({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <article className="overflow-hidden rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(246,248,252,0.98),rgba(239,243,252,0.92))]">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="grid w-full gap-5 px-6 py-6 text-left md:grid-cols-[minmax(0,1fr)_60px] md:items-start md:px-8 md:py-7"
        aria-expanded={isOpen}
      >
        <div className="grid gap-5 md:grid-cols-[140px_minmax(0,1fr)] md:gap-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
            [{String(index + 1).padStart(2, "0")}]
          </p>
          <h3 className="max-w-[820px] font-sans text-[32px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[44px]">
            {title}
          </h3>
        </div>
        <span className="justify-self-end font-sans text-[34px] font-light leading-none text-[#4F82FF]">
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 border-t border-black/8 px-6 py-6 md:grid-cols-[140px_minmax(0,1fr)] md:px-8 md:py-7">
              <div />
              <p className="max-w-[860px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/72 md:text-[19px]">
                {description}
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
