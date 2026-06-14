"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const videoInterviews = [
  {
    title: "La IA aplicada al trabajo legal",
    person: "Participante del programa",
    company: "Estudio AEVR",
    duration: "01:24",
    quote: "Lo más valioso fue ver herramientas aplicadas a nuestro trabajo diario.",
    image: "/api/brand-photo/Estudio%20AEVR/DSC03879.jpg",
    tone: "Abogados",
  },
  {
    title: "Del diagnóstico a una herramienta concreta",
    person: "Participante del equipo",
    company: "Coldwell Banker Grupo Elite",
    duration: "00:58",
    quote: "Nos llevamos una forma nueva de pensar tareas que antes eran manuales.",
    image: "/api/brand-photo/Coldwell%20Banker%20Grupo%20Elite/V2/DSC03278.jpg",
    tone: "Inmobiliarios",
  },
  {
    title: "Qué cambió después de IA-30D",
    person: "Referente de área",
    company: "Estudio AEVR",
    duration: "01:12",
    quote: "La diferencia estuvo en poder usar IA con nuestro propio contexto.",
    image: "/api/brand-photo/Estudio%20AEVR/DSC03935.jpg",
    tone: "Abogados",
  },
  {
    title: "Por qué recomendaría el programa",
    person: "Participante del programa",
    company: "Coldwell Banker Grupo Elite",
    duration: "00:46",
    quote: "Fue práctico, claro y muy conectado con el día a día del equipo.",
    image: "/api/brand-photo/Coldwell%20Banker%20Grupo%20Elite/V2/DSC03019.jpg",
    tone: "Inmobiliarios",
  },
];

function SectionTag({ label }: { label: string }) {
  return (
    <div className="jt-section-tag text-black">
      <Image src="/assets/blue_triangle.svg" alt="" width={10} height={10} aria-hidden="true" className="shrink-0" />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

function PlayButton({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`grid rounded-full bg-white/92 text-[#3474E9] shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md transition group-hover:scale-105 ${
        large ? "h-[74px] w-[74px]" : "h-[56px] w-[56px]"
      } place-items-center`}
    >
      <span
        className={`ml-1 h-0 w-0 border-y-transparent border-l-[#3474E9] ${
          large ? "border-y-[15px] border-l-[24px]" : "border-y-[11px] border-l-[18px]"
        }`}
      />
    </span>
  );
}

function VideoSurface({
  image,
  title,
  duration,
  featured = false,
}: {
  image: string;
  title: string;
  duration: string;
  featured?: boolean;
}) {
  return (
    <div className={`group relative overflow-hidden rounded-[28px] bg-black ${featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
      <Image src={image} alt={title} fill sizes={featured ? "(max-width: 1023px) 100vw, 820px" : "(max-width: 1023px) 100vw, 420px"} className="object-cover opacity-82 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-72" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,38,0.08),rgba(2,14,38,0.58))]" />
      <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/24 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/86 backdrop-blur-md">
        Vimeo placeholder
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-black/72">
        {duration}
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <PlayButton large={featured} />
      </div>
    </div>
  );
}

const transitionOptions = [
  {
    label: "Opción 1",
    title: "Fade editorial",
    description: "Cambio suave, elegante y casi invisible. Es la más sobria.",
    animation: "animate-[interview-fade_760ms_ease_both]",
  },
  {
    label: "Opción 2",
    title: "Slide lateral",
    description: "El contenido entra levemente desde la derecha. Se siente más dinámico.",
    animation: "animate-[interview-slide_760ms_cubic-bezier(0.22,1,0.36,1)_both]",
  },
  {
    label: "Opción 3",
    title: "Zoom suave",
    description: "La imagen aparece con un acercamiento sutil, más cinematográfico.",
    animation: "animate-[interview-zoom_820ms_cubic-bezier(0.22,1,0.36,1)_both]",
  },
];

function RotatingInterviewOption({ option }: { option: (typeof transitionOptions)[number] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const featured = videoInterviews[activeIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % videoInterviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="border-t border-black/10 pt-8 xl:pt-10">
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#3474E9]">{option.label}</p>
          <h2 className="mt-2 font-sans text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] md:text-[48px]">{option.title}</h2>
        </div>
        <p className="max-w-[420px] font-sans text-[16px] leading-[1.45] tracking-[-0.02em] text-black/58 md:text-right md:text-[18px]">
          {option.description}
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.38fr)_minmax(320px,0.62fr)] lg:items-stretch">
        <article className="rounded-[36px] border border-black/8 bg-[#F7F8FA] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.07)] md:p-4">
          <div key={`${option.label}-${featured.title}-video`} className={option.animation}>
            <VideoSurface image={featured.image} title={featured.title} duration={featured.duration} featured />
          </div>
        </article>

        <aside className="flex flex-col justify-between rounded-[36px] border border-black/8 bg-black px-6 py-7 text-white md:px-8 md:py-8">
          <div key={`${option.label}-${featured.title}-copy`} className={option.animation}>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4F82FF]">Entrevista destacada</p>
            <h3 className="mt-5 font-sans text-[36px] font-semibold leading-[0.98] tracking-[-0.055em] md:text-[48px]">
              {featured.title}
            </h3>
            <p className="mt-5 font-sans text-[20px] italic leading-[1.38] tracking-[-0.03em] text-white/76">"{featured.quote}"</p>
          </div>
          <div className="mt-8 border-t border-white/14 pt-5">
            <p className="font-sans text-[16px] font-semibold text-white">{featured.person}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-white/46">{featured.company}</p>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {videoInterviews.map((interview, index) => (
                <button
                  key={interview.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition ${index === activeIndex ? "bg-[#4F82FF]" : "bg-white/18 hover:bg-white/36"}`}
                  aria-label={`Ver entrevista: ${interview.title}`}
                />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default function EntrevistasVideoPage() {

  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 md:py-14 xl:px-10">
      <section className="mx-auto max-w-[1320px]">
        <div className="border-b border-black/10 pb-8 md:pb-10">
          <SectionTag label="VALIDACION" />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.52fr] xl:items-end">
            <h1 className="font-sans text-[54px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[90px] xl:text-[116px]">
              Entrevistas que muestran el cambio<span className="text-[#3474E9]">.</span>
            </h1>
            <p className="max-w-[560px] font-sans text-[18px] leading-[1.48] tracking-[-0.02em] text-black/62 md:text-[21px] xl:justify-self-end">
              Tres alternativas para mostrar un único video principal rotativo. Cada 5 segundos cambia la entrevista destacada y su frase icónica.
            </p>
          </div>
        </div>

        <div className="space-y-12 pt-8 xl:space-y-14 xl:pt-10">
          {transitionOptions.map((option) => (
            <RotatingInterviewOption key={option.label} option={option} />
          ))}
        </div>

        <section className="mt-5 rounded-[30px] border border-[#3474E9]/16 bg-[linear-gradient(180deg,rgba(245,248,255,0.98),rgba(238,243,252,0.94))] px-5 py-5 md:px-7">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3474E9]">Cómo funcionaría con Vimeo</p>
          <p className="mt-2 max-w-[980px] font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/64 md:text-[18px]">
            Cada card puede abrir un modal con el embed de Vimeo, o reemplazar el thumbnail por el reproductor al hacer click. Los thumbnails se pueden exportar desde Vimeo o subir como imágenes optimizadas para mantener la página liviana.
          </p>
        </section>
      </section>
      <style jsx global>{`
        @keyframes interview-fade {
          from {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes interview-slide {
          from {
            opacity: 0;
            transform: translate3d(24px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes interview-zoom {
          from {
            opacity: 0;
            transform: scale(1.025);
            filter: blur(3px);
          }
          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }
      `}</style>
    </main>
  );
}
