"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

import { aboutValues } from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Mode = "hover" | "click";

function SectionIntro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Validacion
      </p>
      <h1 className="max-w-[1120px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[66px]">
        Variantes horizontales para mostrar tus tres valores.
      </h1>
      <p className="max-w-[980px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68">
        Acá están las cinco direcciones que imaginamos, todas con las tres cards una al lado de la
        otra. En cada caso vas a ver dos comportamientos: uno que responde a `hover` y otro que
        responde a `click`.
      </p>
    </section>
  );
}

function DemoFrame({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-4 rounded-[28px] border border-black/8 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-6 md:py-6">
      <div className="space-y-2">
        <h4 className="font-sans text-[24px] font-semibold tracking-[-0.04em] text-black">{title}</h4>
        <p className="max-w-[640px] font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      {children}
    </div>
  );
}

function VariantSection({
  eyebrow,
  title,
  note,
  children,
}: {
  eyebrow: string;
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">{eyebrow}</p>
        <h2 className="font-sans text-[28px] font-semibold leading-[0.96] tracking-[-0.05em] text-black md:text-[42px]">
          {title}
        </h2>
        <p className="max-w-[860px] font-sans text-[17px] leading-[1.55] tracking-[-0.02em] text-black/64">
          {note}
        </p>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">{children}</div>
    </section>
  );
}

function useActiveIndex(mode: Mode) {
  const [clickActive, setClickActive] = useState(2);
  const [hoverActive, setHoverActive] = useState(2);

  const activeIndex = mode === "hover" ? hoverActive : clickActive;
  const setActiveIndex = mode === "hover" ? setHoverActive : setClickActive;

  return { activeIndex, setActiveIndex };
}

function baseCardInteraction(
  mode: Mode,
  index: number,
  activeIndex: number,
  setActiveIndex: (index: number) => void,
) {
  const isActive = activeIndex === index;

  return {
    isActive,
    buttonProps:
      mode === "hover"
        ? {
            onMouseEnter: () => setActiveIndex(index),
            onFocus: () => setActiveIndex(index),
          }
        : {
            onClick: () => setActiveIndex(index),
          },
  };
}

function SharedCardContent({
  item,
  index,
}: {
  item: (typeof aboutValues)[number];
  index: number;
}) {
  return (
    <>
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4F82FF]">
        Valor {String(index + 1).padStart(2, "0")}
      </p>
      <h5 className="font-sans text-[24px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[30px]">
        {item.title}
      </h5>
    </>
  );
}

function TriptychExpandable({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

        return (
          <motion.button
            key={`${mode}-${item.title}`}
            type="button"
            layout
            transition={{ duration: 0.35, ease: smoothEase }}
            className={`overflow-hidden rounded-[26px] border text-left transition-colors duration-300 ${
              isActive
                ? "border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(239,243,252,0.98),rgba(229,237,255,0.96))]"
                : "border-black/8 bg-[var(--color-gray-bg)]"
            }`}
            {...buttonProps}
          >
            <div className="space-y-4 px-5 py-5 md:px-6 md:py-6">
              <SharedCardContent item={item} index={index} />
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: smoothEase }}
                    className="overflow-hidden font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/68"
                  >
                    {item.description}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}

function SlidingRail({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);
  const activeItem = aboutValues[activeIndex];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {aboutValues.map((item, index) => {
          const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

          return (
            <button
              key={`${mode}-${item.title}`}
              type="button"
              className={`rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                isActive
                  ? "translate-x-[-4px] border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(239,243,252,0.98),rgba(229,237,255,0.96))] shadow-[0_18px_40px_rgba(79,130,255,0.12)]"
                  : "border-black/8 bg-[var(--color-gray-bg)]"
              }`}
              {...buttonProps}
            >
              <div className="space-y-3">
                <SharedCardContent item={item} index={index} />
              </div>
            </button>
          );
        })}
      </div>

      <motion.div
        key={`${mode}-${activeItem.title}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: smoothEase }}
        className="rounded-[24px] border border-[#4F82FF]/18 bg-[linear-gradient(180deg,rgba(246,248,252,1),rgba(239,243,252,0.96))] px-5 py-5 md:px-6 md:py-6"
      >
        <div className="grid gap-4 md:grid-cols-[160px_minmax(0,1fr)]">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
            Desarrollo
          </p>
          <div className="space-y-3">
            <h5 className="font-sans text-[28px] font-semibold leading-[1] tracking-[-0.04em] text-black">
              {activeItem.title}
            </h5>
            <p className="max-w-[920px] font-sans text-[17px] leading-[1.58] tracking-[-0.02em] text-black/70">
              {activeItem.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FlapCards({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

        return (
          <div key={`${mode}-${item.title}`} className="relative">
            <button
              type="button"
              className={`relative z-10 w-full rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(239,243,252,0.98),rgba(229,237,255,0.96))]"
                  : "border-black/8 bg-[var(--color-gray-bg)]"
              }`}
              {...buttonProps}
            >
              <div className="space-y-3">
                <SharedCardContent item={item} index={index} />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div
                  initial={{ opacity: 0, x: 16, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 16, y: -10 }}
                  transition={{ duration: 0.28, ease: smoothEase }}
                  className="relative z-0 mt-3 rounded-[22px] border border-[#4F82FF]/16 bg-white px-4 py-4 shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
                >
                  <p className="font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/68">
                    {item.description}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function SteppedHierarchy({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);
        const scaleClass = isActive ? "md:translate-y-0" : index === 2 ? "md:translate-y-2" : "md:translate-y-5";

        return (
          <button
            key={`${mode}-${item.title}`}
            type="button"
            className={`rounded-[26px] border px-5 py-5 text-left transition-all duration-300 ${scaleClass} ${
              isActive
                ? "border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(239,243,252,0.98),rgba(229,237,255,0.96))] shadow-[0_20px_42px_rgba(79,130,255,0.12)]"
                : "border-black/8 bg-[var(--color-gray-bg)]"
            }`}
            {...buttonProps}
          >
            <div className="space-y-4">
              <SharedCardContent item={item} index={index} />
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: smoothEase }}
                    className="overflow-hidden font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/68"
                  >
                    {item.description}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function EditorialPanels({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);
  const activeItem = useMemo(() => aboutValues[activeIndex], [activeIndex]);

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        {aboutValues.map((item, index) => {
          const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

          return (
            <button
              key={`${mode}-${item.title}`}
              type="button"
              className={`rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
                isActive
                  ? "border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(239,243,252,0.98),rgba(229,237,255,0.96))]"
                  : "border-black/8 bg-[var(--color-gray-bg)]"
              }`}
              {...buttonProps}
            >
              <div className="space-y-3">
                <SharedCardContent item={item} index={index} />
              </div>
            </button>
          );
        })}
      </div>

      <motion.div
        key={`${mode}-${activeItem.title}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: smoothEase }}
        className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(246,248,252,0.98),rgba(239,243,252,0.92))] px-5 py-5 md:px-7 md:py-7"
      >
        <div className="grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
            Valor activo
          </p>
          <div className="space-y-4">
            <h5 className="font-sans text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[48px]">
              {activeItem.title}
            </h5>
            <p className="max-w-[960px] font-sans text-[18px] leading-[1.6] tracking-[-0.02em] text-black/68">
              {activeItem.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AccentLineAccordion({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

        return (
          <button
            key={`${mode}-${item.title}`}
            type="button"
            className={`relative overflow-hidden rounded-[26px] border px-5 py-5 text-left transition-all duration-300 ${
              isActive
                ? "border-[#4F82FF]/28 bg-[linear-gradient(180deg,rgba(245,248,255,1),rgba(237,243,255,0.98))] shadow-[0_18px_38px_rgba(79,130,255,0.10)]"
                : "border-black/8 bg-[var(--color-gray-bg)]"
            }`}
            {...buttonProps}
          >
            <div className={`absolute inset-x-0 top-0 h-[3px] bg-[#4F82FF] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-40"}`} />
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 pt-2">
                <div className="space-y-3">
                  <SharedCardContent item={item} index={index} />
                </div>
                <span className="font-sans text-[30px] font-light leading-none text-[#4F82FF]">
                  {isActive ? "×" : "+"}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: smoothEase }}
                    className="overflow-hidden font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/68"
                  >
                    {item.description}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function SoftGlowAccordion({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

        return (
          <button
            key={`${mode}-${item.title}`}
            type="button"
            className={`rounded-[28px] border px-5 py-5 text-left transition-all duration-300 ${
              isActive
                ? "border-[#4F82FF]/26 bg-[radial-gradient(circle_at_top_left,rgba(79,130,255,0.14),transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.98),rgba(242,246,255,0.96))] shadow-[0_20px_50px_rgba(79,130,255,0.10)]"
                : "border-black/8 bg-[linear-gradient(180deg,rgba(250,250,251,1),rgba(245,246,248,0.98))]"
            }`}
            {...buttonProps}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <SharedCardContent item={item} index={index} />
                </div>
                <div className={`mt-1 h-10 w-10 shrink-0 rounded-full border transition-colors duration-300 ${isActive ? "border-[#4F82FF]/24 bg-[#4F82FF]/10" : "border-black/8 bg-white/80"} flex items-center justify-center`}>
                  <span className="font-sans text-[26px] font-light leading-none text-[#4F82FF]">
                    {isActive ? "×" : "+"}
                  </span>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: smoothEase }}
                    className="overflow-hidden"
                  >
                    <div className="rounded-[18px] border border-black/6 bg-white/72 p-4">
                      <p className="font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/68">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function BlueprintAccordion({ mode }: { mode: Mode }) {
  const { activeIndex, setActiveIndex } = useActiveIndex(mode);

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {aboutValues.map((item, index) => {
        const { isActive, buttonProps } = baseCardInteraction(mode, index, activeIndex, setActiveIndex);

        return (
          <button
            key={`${mode}-${item.title}`}
            type="button"
            className={`rounded-[24px] border px-5 py-5 text-left transition-all duration-300 ${
              isActive
                ? "border-[#4F82FF]/32 bg-[linear-gradient(180deg,rgba(242,247,255,0.98),rgba(235,242,255,0.98))]"
                : "border-black/10 bg-white"
            }`}
            style={{
              backgroundImage: isActive
                ? "linear-gradient(180deg,rgba(242,247,255,0.98),rgba(235,242,255,0.98)), linear-gradient(rgba(79,130,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,130,255,0.06) 1px, transparent 1px)"
                : "linear-gradient(180deg,rgba(255,255,255,1),rgba(250,250,251,0.98))",
              backgroundSize: isActive ? "auto, 22px 22px, 22px 22px" : undefined,
            }}
            {...buttonProps}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <SharedCardContent item={item} index={index} />
                </div>
                <span className="font-mono text-[18px] leading-none text-[#4F82FF]">
                  {isActive ? "[×]" : "[+]"}
                </span>
              </div>
              <AnimatePresence initial={false}>
                {isActive ? (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28, ease: smoothEase }}
                    className="overflow-hidden border-t border-[#4F82FF]/16 pt-4 font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/70"
                  >
                    {item.description}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default function ValoresIAHorizontalPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-16">
        <SectionIntro />

        <VariantSection
          eyebrow="Opcion 01"
          title="Triptico expandible"
          note="Las tres cards viven juntas y al activarse una se transforma en la más rica. Es la versión más directa de tu idea."
        >
          <DemoFrame title="Hover" note="El detalle aparece al pasar el mouse por cada valor.">
            <TriptychExpandable mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="El detalle se fija al clickear cada card.">
            <TriptychExpandable mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 02"
          title="Carril deslizante"
          note="Las cards funcionan como selección y el contenido aparece en un panel vivo debajo. Tiene más sensación de movimiento."
        >
          <DemoFrame title="Hover" note="La card activa cambia con hover y el panel acompaña.">
            <SlidingRail mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La card activa se fija por click y el panel queda estable.">
            <SlidingRail mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 03"
          title="Cards con solapa"
          note="Cada valor abre un desarrollo propio justo debajo. Se siente más táctil y más producto."
        >
          <DemoFrame title="Hover" note="La solapa aparece al pasar por la card.">
            <FlapCards mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La solapa responde a click y queda anclada.">
            <FlapCards mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 04"
          title="Escalera horizontal"
          note="Misma fila, pero con una jerarquía visual más compuesta. La activa gana peso y altura."
        >
          <DemoFrame title="Hover" note="La composición cambia levemente con hover.">
            <SteppedHierarchy mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La jerarquía visual se define por click.">
            <SteppedHierarchy mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 05"
          title="Paneles editoriales"
          note="Las tres cards navegan un único panel compartido de detalle. Es la más limpia y más editorial."
        >
          <DemoFrame title="Hover" note="La selección y el panel cambian al pasar el mouse.">
            <EditorialPanels mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La selección queda fija al clickear.">
            <EditorialPanels mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 06"
          title="Accordion con linea de acento"
          note="Misma mecánica base, pero con una identidad más clara arriba de cada card. Es sobria y bastante aplicable."
        >
          <DemoFrame title="Hover" note="La card se activa al pasar el mouse y conserva la apertura interna.">
            <AccentLineAccordion mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La apertura se fija con click, igual que tu lógica actual.">
            <AccentLineAccordion mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 07"
          title="Accordion con glow suave"
          note="Mis-ma mecánica, pero con un tratamiento más premium y liviano. Mantiene el fondo claro y suma profundidad."
        >
          <DemoFrame title="Hover" note="El glow aparece al hover y el detalle se abre dentro de la card.">
            <SoftGlowAccordion mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La card queda activa con click y sostiene el desarrollo.">
            <SoftGlowAccordion mode="click" />
          </DemoFrame>
        </VariantSection>

        <VariantSection
          eyebrow="Opcion 08"
          title="Accordion blueprint"
          note="Misma lógica, pero con una estética más técnica y estructurada. Puede servir si querés una sensación más sistema y menos editorial."
        >
          <DemoFrame title="Hover" note="La grilla y el desarrollo aparecen al pasar el mouse.">
            <BlueprintAccordion mode="hover" />
          </DemoFrame>
          <DemoFrame title="Click" note="La selección queda anclada al clickear.">
            <BlueprintAccordion mode="click" />
          </DemoFrame>
        </VariantSection>
      </div>
    </main>
  );
}
