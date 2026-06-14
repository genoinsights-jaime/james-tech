"use client";

import Image from "next/image";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";

import { aboutValues } from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const valuePhotos = [
  {
    src: "/api/brand-photo/Coldwell%20Banker%20Grupo%20Elite/V2/DSC03290.jpg",
    alt: "Equipo reunido luego de una jornada de trabajo",
  },
  {
    src: "/api/brand-photo/Estudio%20AEVR/DSC03890.jpg",
    alt: "Presentacion practica frente a un equipo",
  },
  {
    src: "/assets/about-jaime-dsc03808-blur.png",
    alt: "Jaime presentando frente a una audiencia",
  },
];

function SectionTag({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-black">
      <span className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#4F82FF]" />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

function OptionShell({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6 border-t border-black/10 pt-10">
      <div className="space-y-2">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Alternativa</p>
        <h2 className="font-sans text-[30px] font-semibold leading-[0.96] tracking-[-0.05em] text-black md:text-[46px]">
          {title}
        </h2>
        <p className="max-w-[780px] font-sans text-[17px] leading-[1.52] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      {children}
    </section>
  );
}

function IntroBlock() {
  return (
    <header className="flex flex-col gap-7 md:gap-9">
      <SectionTag label="SOBRE MI" />
      <h3 className="max-w-[1120px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px]">
        Mi misión: Hacer que la IA sea tu ventaja competitiva
      </h3>
      <p className="max-w-[860px] font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/72 md:text-[20px]">
        Te ayudo a llevar IA a tu equipo de forma práctica, con foco en productividad, mejores decisiones y resultados medibles para tu empresa.
      </p>
      <h4 className="font-sans text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[36px]">
        Los valores que guían mi trabajo.
      </h4>
    </header>
  );
}

function CompactText({ item }: { item: (typeof aboutValues)[number] }) {
  return (
    <div className="flex min-h-[176px] flex-1 flex-col gap-4 px-5 py-5 md:min-h-[190px] md:px-6 md:py-6">
      <h5 className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:min-h-[44px] md:text-[30px]">
        {item.title}
      </h5>
      <p className="font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/66 md:text-[18px]">
        {item.description}
      </p>
    </div>
  );
}

function TimedRevealCard({
  item,
  photo,
  isOpen,
}: {
  item: (typeof aboutValues)[number];
  photo: (typeof valuePhotos)[number];
  isOpen: boolean;
}) {
  return (
    <motion.article
      animate={{ y: isOpen ? -6 : 0 }}
      transition={{ duration: 0.9, ease: smoothEase }}
      className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]"
    >
      <CompactText item={item} />
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 245 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 1.25, ease: smoothEase }}
        className="relative overflow-hidden bg-[#f3f5f8]"
      >
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
      </motion.div>
    </motion.article>
  );
}

function TimedRevealOption() {
  const ref = useRef<HTMLDivElement>(null);
  const isOpen = useInView(ref, { amount: 0.46, once: true });

  return (
    <div ref={ref} className="space-y-9 bg-white py-6">
      <IntroBlock />
      <div className="grid items-stretch gap-4 xl:grid-cols-3">
        {aboutValues.map((item, index) => (
          <TimedRevealCard key={item.title} item={item} photo={valuePhotos[index]} isOpen={isOpen} />
        ))}
      </div>
    </div>
  );
}

function HoverRevealOption() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="space-y-9 bg-white py-6">
      <IntroBlock />
      <div className="grid items-stretch gap-4 xl:grid-cols-3">
        {aboutValues.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <motion.article
              key={item.title}
              tabIndex={0}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              animate={{ y: isOpen ? -6 : 0 }}
              transition={{ duration: 0.45, ease: smoothEase }}
              className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)] outline-none"
            >
              <CompactText item={item} />
              <motion.div
                initial={false}
                animate={{ height: isOpen ? 245 : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.62, ease: smoothEase }}
                className="relative overflow-hidden bg-[#f3f5f8]"
              >
                <Image src={valuePhotos[index].src} alt={valuePhotos[index].alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function ClipRevealCard({
  item,
  photo,
  progress,
}: {
  item: (typeof aboutValues)[number];
  photo: (typeof valuePhotos)[number];
  progress: MotionValue<number>;
}) {
  const clipPath = useTransform(progress, [0.12, 0.52], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const imageOpacity = useTransform(progress, [0.12, 0.22], [0, 1]);
  const imageScale = useTransform(progress, [0.12, 0.52], [1.08, 1]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
      <CompactText item={item} />
      <div className="relative h-[245px] overflow-hidden bg-[#f3f5f8]">
        <motion.div style={{ clipPath, opacity: imageOpacity }} className="absolute inset-0 overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="relative h-full w-full">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

function ScrollClipOption() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 42%"],
  });

  return (
    <div ref={ref} className="space-y-9 bg-white py-6">
      <IntroBlock />
      <div className="grid items-stretch gap-4 xl:grid-cols-3">
        {aboutValues.map((item, index) => (
          <ClipRevealCard key={item.title} item={item} photo={valuePhotos[index]} progress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}

function StripRevealOption() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 72%", "end 40%"],
  });
  const clipPath = useTransform(scrollYProgress, [0.12, 0.6], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const imageY = useTransform(scrollYProgress, [0.12, 0.6], [28, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.12, 0.24], [0, 1]);

  return (
    <div ref={ref} className="space-y-9 bg-white py-6">
      <IntroBlock />
      <div className="grid border-y border-black/10 md:grid-cols-3">
        {aboutValues.map((item, index) => (
          <article key={item.title} className={`py-6 md:px-6 ${index > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""}`}>
            <h5 className="font-sans text-[25px] font-semibold leading-[1] tracking-[-0.045em] text-black md:min-h-[54px] md:text-[31px]">
              {item.title}
            </h5>
            <p className="mt-4 font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/62 md:text-[18px]">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <motion.div style={{ clipPath, opacity: imageOpacity, y: imageY }} className="grid gap-4 overflow-hidden md:grid-cols-3">
        {valuePhotos.map((photo) => (
          <div key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#f3f5f8]">
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function SobreMiAperturaFotosPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-14">
        <header className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion IA 30D</p>
          <h1 className="max-w-[1120px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px]">
            Alternativas para abrir las fotos.
          </h1>
          <p className="max-w-[900px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/64">
            La página real queda estable. Acá probamos maneras de recuperar progresividad sin volver a romper la fluidez del scroll.
          </p>
        </header>

        <OptionShell
          title="1. Apertura por entrada"
          note="Las cards arrancan compactas y las fotos se abren una vez cuando la sección entra en pantalla. No depende del scroll píxel a píxel."
        >
          <TimedRevealOption />
        </OptionShell>

        <OptionShell
          title="2. Apertura por hover"
          note="La sección se mantiene compacta. La foto aparece solo cuando el usuario se para sobre una tarjeta."
        >
          <HoverRevealOption />
        </OptionShell>

        <OptionShell
          title="3. Cortina con espacio reservado"
          note="El scroll controla una cortina visual, pero la altura de la tarjeta no cambia. Debería sentirse más fluido."
        >
          <ScrollClipOption />
        </OptionShell>

        <OptionShell
          title="4. Tira visual inferior"
          note="Los valores quedan compactos y las fotos aparecen como una franja visual debajo. Es menos mágico, pero muy estable."
        >
          <StripRevealOption />
        </OptionShell>
      </div>
    </main>
  );
}
