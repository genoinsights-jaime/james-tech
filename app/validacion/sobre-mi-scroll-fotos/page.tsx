"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import { aboutValues } from "@/lib/site-content";

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

function RevealingValueCard({
  item,
  photo,
  scrollProgress,
}: {
  item: (typeof aboutValues)[number];
  photo: (typeof valuePhotos)[number];
  scrollProgress: MotionValue<number>;
}) {
  const start = 0.24;
  const end = 0.48;
  const imageHeight = useTransform(scrollProgress, (progress) => {
    if (progress <= start) {
      return 0;
    }

    if (progress >= end) {
      return 245;
    }

    return ((progress - start) / (end - start)) * 245;
  });
  const imageOpacity = useTransform(scrollProgress, (progress) => {
    if (progress <= start) {
      return 0;
    }

    if (progress >= end) {
      return 1;
    }

    return (progress - start) / (end - start);
  });
  const cardLift = useTransform(scrollProgress, (progress) => {
    if (progress <= start) {
      return 0;
    }

    if (progress >= end) {
      return -8;
    }

    return ((progress - start) / (end - start)) * -8;
  });

  return (
    <motion.article
      style={{ y: cardLift }}
      className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]"
    >
      <div className="flex min-h-[178px] flex-1 flex-col gap-4 px-5 py-5 md:min-h-[190px] md:px-6 md:py-6">
        <h2 className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:min-h-[44px] md:text-[30px]">
          {item.title}
        </h2>
        <p className="font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/66 md:text-[18px]">
          {item.description}
        </p>
      </div>

      <motion.div style={{ height: imageHeight, opacity: imageOpacity }} className="relative overflow-hidden bg-[#f3f5f8]">
        <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
      </motion.div>
    </motion.article>
  );
}

export default function SobreMiScrollFotosValidationPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const contentY = useTransform(scrollYProgress, (progress) => {
    if (progress <= 0.42) {
      return 0;
    }

    if (progress >= 1) {
      return -70;
    }

    return ((progress - 0.42) / (1 - 0.42)) * -70;
  });

  return (
    <main className="min-h-screen bg-white text-black">
      <section ref={sectionRef} className="relative min-h-[114vh] px-5 py-10 md:px-10 md:py-12">
        <motion.div style={{ y: contentY }} className="sticky top-8 mx-auto flex max-w-[1300px] flex-col gap-10">
          <header className="flex flex-col gap-8 md:gap-10">
            <SectionTag label="SOBRE MI" />

            <div className="flex flex-col gap-7">
              <h1 className="max-w-[1120px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px] xl:text-[82px]">
                Mi misión: Hacer que la IA sea tu ventaja competitiva
              </h1>

              <p className="max-w-[860px] font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/72 md:text-[20px]">
                Te ayudo a llevar IA a tu equipo de forma práctica, con foco en productividad, mejores decisiones y resultados medibles para tu empresa.
              </p>

              <h2 className="font-sans text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[36px]">
                Los valores que guían mi trabajo.
              </h2>
            </div>
          </header>

          <div className="grid items-start gap-4 xl:grid-cols-3">
            {aboutValues.map((item, index) => (
              <RevealingValueCard
                key={item.title}
                item={item}
                photo={valuePhotos[index]}
                scrollProgress={scrollYProgress}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <div className="h-[8vh]" />
    </main>
  );
}
