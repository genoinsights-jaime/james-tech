"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { aboutValues } from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Variant =
  | "minimal"
  | "accent-line"
  | "soft-glow"
  | "editorial"
  | "blueprint"
  | "segmented";

function PageIntro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Validacion
      </p>
      <h1 className="max-w-[1080px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[66px]">
        Variantes del accordion actual, con los tres valores cerrados por default.
      </h1>
      <p className="max-w-[920px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68">
        Acá no cambio la mecánica: siguen siendo tres items verticales, cerrados por default, y
        al clickear se despliega el detalle. Lo único que cambia es la estética visual.
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

function getVariantStyles(variant: Variant, isOpen: boolean) {
  switch (variant) {
    case "minimal":
      return {
        shell:
          "rounded-[28px] border border-black/8 bg-[var(--color-gray-bg)]",
        button:
          "px-6 py-6 md:px-7 md:py-7",
        title:
          "font-sans text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[36px]",
        symbol: "font-sans text-[38px] font-light leading-none text-[#4F82FF]",
        contentWrap: "px-6 pb-6 md:px-7 md:pb-7",
        contentBox: "rounded-[20px] border border-black/8 bg-white/74 p-5 md:p-6",
      };
    case "accent-line":
      return {
        shell: `relative overflow-hidden rounded-[28px] border ${
          isOpen ? "border-[#4F82FF]/24 bg-[rgba(244,247,255,0.98)]" : "border-black/8 bg-[var(--color-gray-bg)]"
        }`,
        topLine: "absolute inset-x-0 top-0 h-[3px] bg-[#4F82FF]",
        button: "px-6 py-6 pt-7 md:px-7 md:py-7 md:pt-8",
        title:
          "font-sans text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[36px]",
        symbol: "font-sans text-[34px] font-light leading-none text-[#4F82FF]",
        contentWrap: "px-6 pb-6 md:px-7 md:pb-7",
        contentBox: "rounded-[20px] border border-[#4F82FF]/12 bg-white/76 p-5 md:p-6",
      };
    case "soft-glow":
      return {
        shell: `rounded-[30px] border ${
          isOpen
            ? "border-[#4F82FF]/20 bg-[radial-gradient(circle_at_top_left,rgba(79,130,255,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(243,247,255,0.96))] shadow-[0_24px_60px_rgba(79,130,255,0.08)]"
            : "border-black/8 bg-[linear-gradient(180deg,rgba(250,250,251,1),rgba(245,246,248,0.98))]"
        }`,
        button: "px-6 py-6 md:px-7 md:py-7",
        title:
          "font-sans text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[36px]",
        symbolWrap:
          "flex h-11 w-11 items-center justify-center rounded-full border border-[#4F82FF]/18 bg-[#4F82FF]/8",
        symbol: "font-sans text-[28px] font-light leading-none text-[#4F82FF]",
        contentWrap: "px-6 pb-6 md:px-7 md:pb-7",
        contentBox: "rounded-[20px] border border-black/6 bg-white/72 p-5 md:p-6",
      };
    case "editorial":
      return {
        shell: `rounded-[28px] border ${
          isOpen
            ? "border-black/12 bg-[linear-gradient(180deg,rgba(246,248,252,0.98),rgba(239,243,252,0.92))]"
            : "border-black/8 bg-white"
        }`,
        button: "px-6 py-6 md:px-8 md:py-7",
        title:
          "font-sans text-[30px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[40px]",
        symbol: "font-sans text-[36px] font-light leading-none text-[#4F82FF]",
        contentWrap: "px-6 pb-6 md:px-8 md:pb-7",
        contentBox: "border-t border-black/8 pt-5",
      };
    case "blueprint":
      return {
        shell: `rounded-[26px] border ${
          isOpen
            ? "border-[#4F82FF]/30 bg-[linear-gradient(180deg,rgba(242,247,255,0.98),rgba(235,242,255,0.98))]"
            : "border-black/10 bg-white"
        }`,
        customGrid: isOpen,
        button: "px-6 py-6 md:px-7 md:py-7",
        title:
          "font-sans text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[36px]",
        symbol: "font-mono text-[18px] leading-none text-[#4F82FF]",
        contentWrap: "px-6 pb-6 md:px-7 md:pb-7",
        contentBox: "border-t border-[#4F82FF]/16 pt-5",
      };
    case "segmented":
      return {
        shell: `rounded-[30px] border ${
          isOpen ? "border-[#4F82FF]/24 bg-[rgba(246,249,255,0.98)]" : "border-black/8 bg-[var(--color-gray-bg)]"
        }`,
        button: "px-4 py-4 md:px-5 md:py-5",
        buttonInner:
          "rounded-[22px] border border-black/6 bg-white/72 px-4 py-4 md:px-5 md:py-5",
        title:
          "font-sans text-[27px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[34px]",
        symbol: "font-sans text-[34px] font-light leading-none text-[#4F82FF]",
        contentWrap: "px-4 pb-4 md:px-5 md:pb-5",
        contentBox:
          "rounded-[22px] border border-[#4F82FF]/12 bg-white/84 px-4 py-5 md:px-5 md:py-5",
      };
  }
}

function StyledAccordion({ variant }: { variant: Variant }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {aboutValues.map((item, index) => {
        const isOpen = openIndex === index;
        const styles = getVariantStyles(variant, isOpen);

        return (
          <article
            key={`${variant}-${item.title}`}
            className={styles.shell}
            style={
              variant === "blueprint" && styles.customGrid
                ? {
                    backgroundImage:
                      "linear-gradient(180deg,rgba(242,247,255,0.98),rgba(235,242,255,0.98)), linear-gradient(rgba(79,130,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,130,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "auto, 22px 22px, 22px 22px",
                  }
                : undefined
            }
          >
            {variant === "accent-line" ? <div className={styles.topLine} /> : null}

            <button
              type="button"
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
              className={`w-full text-left ${styles.button}`}
              aria-expanded={isOpen}
            >
              <div className={styles.buttonInner ?? ""}>
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-3">
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                      Valor {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className={styles.title}>{item.title}</h4>
                  </div>

                  {styles.symbolWrap ? (
                    <div className={styles.symbolWrap}>
                      <span className={styles.symbol}>{isOpen ? "×" : "+"}</span>
                    </div>
                  ) : (
                    <span className={styles.symbol}>{variant === "blueprint" ? (isOpen ? "[×]" : "[+]") : isOpen ? "×" : "+"}</span>
                  )}
                </div>
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
                  <div className={styles.contentWrap}>
                    <div className={styles.contentBox}>
                      <p className="max-w-[940px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/70">
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

function ValidationCard({
  title,
  note,
  variant,
}: {
  title: string;
  note: string;
  variant: Variant;
}) {
  return (
    <div className="space-y-4 rounded-[28px] border border-black/8 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-6 md:py-6">
      <div className="space-y-2">
        <h3 className="font-sans text-[24px] font-semibold tracking-[-0.04em] text-black">{title}</h3>
        <p className="max-w-[700px] font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      <StyledAccordion variant={variant} />
    </div>
  );
}

export default function ValoresIAAccordionValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-14">
        <PageIntro />

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 01"
            title="Minimal pulida"
            note="La versión más cercana a lo que ya tenés, pero con más presencia, mejor espaciado y un desplegable más cuidado."
          />
          <ValidationCard
            title="Accordion claro y limpio"
            note="Sirve si querés evolucionar la sección sin romper demasiado la gramática actual."
            variant="minimal"
          />
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 02"
            title="Linea de acento"
            note="Misma mecánica, pero con una identidad más marcada arriba de cada card. Se siente más diseñada sin ser excesiva."
          />
          <ValidationCard
            title="Acento superior"
            note="La línea azul hace que cada valor tenga más carácter incluso cuando está cerrado."
            variant="accent-line"
          />
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 03"
            title="Glow suave"
            note="La opción más premium. Fondo claro, profundidad sutil y apertura más amable."
          />
          <ValidationCard
            title="Profundidad liviana"
            note="Aporta más clima visual, pero mantiene una lectura clara y ordenada."
            variant="soft-glow"
          />
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 04"
            title="Editorial"
            note="Más peso tipográfico y más sensación de manifiesto. La apertura se siente menos UI y más narrativa."
          />
          <ValidationCard
            title="Más manifiesto"
            note="Puede funcionar si querés que estos valores se sientan como principios rectores, no solo como features."
            variant="editorial"
          />
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 05"
            title="Blueprint"
            note="La más técnica. Misma mecánica, pero con una lectura más de sistema y estructura."
          />
          <ValidationCard
            title="Sistema visible"
            note="Útil si querés una estética más metodológica y menos emocional."
            variant="blueprint"
          />
        </section>

        <section className="space-y-6">
          <BlockHeader
            eyebrow="Opcion 06"
            title="Segmentada"
            note="Sigue siendo el mismo accordion, pero con una capa interna que hace que la card se sienta más producto y más construida."
          />
          <ValidationCard
            title="Capa interior"
            note="Una forma de sumar más diseño sin cambiar nada de la lógica actual."
            variant="segmented"
          />
        </section>
      </div>
    </main>
  );
}
