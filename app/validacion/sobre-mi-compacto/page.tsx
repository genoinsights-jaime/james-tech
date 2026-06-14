"use client";

import Image from "next/image";
import { useState } from "react";

import { aboutValues } from "@/lib/site-content";

const valuePhotos = [
  {
    src: "/api/brand-photo/Coldwell%20Banker%20Grupo%20Elite/V2/DSC03290.jpg",
    alt: "Equipo trabajando en una jornada presencial",
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
    <section className="space-y-5 border-t border-black/10 pt-9">
      <div className="space-y-2">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Alternativa</p>
        <h2 className="font-sans text-[30px] font-semibold leading-[0.96] tracking-[-0.05em] text-black md:text-[46px]">
          {title}
        </h2>
        <p className="max-w-[760px] font-sans text-[17px] leading-[1.52] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      {children}
    </section>
  );
}

function EditorialCompact() {
  return (
    <div className="bg-white py-6">
      <div className="space-y-9">
        <SectionTag label="SOBRE MI" />

        <div className="grid gap-7 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <h3 className="max-w-[980px] font-sans text-[48px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[82px]">
            Mi misión: Hacer que la IA sea tu ventaja competitiva
          </h3>
          <p className="max-w-[620px] font-sans text-[19px] leading-[1.46] tracking-[-0.025em] text-black/68 md:text-[24px]">
            Te ayudo a llevar IA a tu equipo de forma práctica, con foco en productividad, mejores decisiones y resultados medibles para tu empresa.
          </p>
        </div>

        <div className="grid border-y border-black/10 md:grid-cols-3">
          {aboutValues.map((item, index) => (
            <article
              key={item.title}
              className={`py-6 md:px-6 ${index > 0 ? "border-t border-black/10 md:border-l md:border-t-0" : ""}`}
            >
              <p className="font-sans text-[25px] font-semibold leading-[1] tracking-[-0.045em] text-black md:min-h-[54px] md:text-[31px]">
                {item.title}
              </p>
              <p className="mt-4 font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/62 md:text-[18px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function HoverPhotoCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-white py-6">
      <div className="space-y-9">
        <SectionTag label="SOBRE MI" />

        <div className="grid gap-7 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="space-y-5">
            <h3 className="max-w-[850px] font-sans text-[46px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[76px]">
              Mi misión: Hacer que la IA sea tu ventaja competitiva
            </h3>
            <p className="max-w-[680px] font-sans text-[18px] leading-[1.48] tracking-[-0.02em] text-black/66 md:text-[22px]">
              Te ayudo a llevar IA a tu equipo de forma práctica, con foco en productividad, mejores decisiones y resultados medibles para tu empresa.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-[1fr_0.72fr]">
            <div className="flex flex-col border-y border-black/10">
              {aboutValues.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <article
                    key={item.title}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    tabIndex={0}
                    className="border-b border-black/10 py-5 outline-none last:border-b-0"
                  >
                    <p
                      className={`font-sans text-[25px] leading-[1] tracking-[-0.045em] transition-colors duration-300 md:text-[32px] ${
                        isActive ? "font-semibold text-black" : "font-normal text-black/58"
                      }`}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`mt-3 max-w-[620px] font-sans text-[16px] leading-[1.48] tracking-[-0.02em] transition-colors duration-300 md:text-[18px] ${
                        isActive ? "text-black/68" : "text-black/42"
                      }`}
                    >
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-[22px] bg-[#f3f5f8] md:min-h-full">
              {valuePhotos.map((photo, index) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1279px) 100vw, 360px"
                  className={`object-cover object-center transition-opacity duration-500 ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SobreMiCompactoValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-12">
        <header className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion IA 30D</p>
          <h1 className="max-w-[1120px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px]">
            Alternativas compactas para la sección “Sobre mi”.
          </h1>
          <p className="max-w-[860px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/64">
            Dos direcciones para reducir altura: una editorial sin fotos y otra con valores comprimidos donde la foto aparece por hover.
          </p>
        </header>

        <OptionShell
          title="Editorial compacta sin fotos"
          note="La opción más limpia y premium: misión + copy en dos columnas y valores como statements separados por líneas."
        >
          <EditorialCompact />
        </OptionShell>

        <OptionShell
          title="Valores comprimidos con foto en hover"
          note="Mantiene apoyo visual, pero evita tres tarjetas altas. La lectura vive a la izquierda y la imagen cambia al pasar por cada valor."
        >
          <HoverPhotoCards />
        </OptionShell>
      </div>
    </main>
  );
}
