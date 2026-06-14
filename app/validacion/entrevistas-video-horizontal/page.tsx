"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const interviews = [
  {
    title: "Cuando la IA empieza a ahorrar tiempo real",
    person: "Adriana Gonzalez",
    company: "Coldwell Banker Grupo Elite",
    quote: "La inteligencia artificial no vino para reemplazarnos, vino para ayudarnos y hacernos la vida más fácil.",
    image: "/assets/ia30d-testimonials/adriana-gonzalez-cb-elite.jpg",
    youtubeId: "uXOj9c6JPVg",
  },
  {
    title: "Una herramienta para ordenar el día a día",
    person: "Jimena Santisteban",
    company: "Coldwell Banker Grupo Elite",
    quote: "Más que un programa, es un aliado para usar en el día a día.",
    image: "/assets/ia30d-testimonials/jimena-santisteban-cb-elite.jpg",
    youtubeId: "DyVah4YXAkQ",
  },
  {
    title: "Un programa adaptado a tu equipo",
    person: "Eduardo Esnaola",
    company: "Estudio AEVR",
    quote: "Te involucraste muy personalmente en la problemática nuestra del estudio.",
    image: "/assets/ia30d-testimonials/eduardo-esnaola-estudio-aevr.jpg",
    youtubeId: "a2-hVVwenTw",
  },
  {
    title: "IA aplicada a tu realidad, no a un caso genérico",
    person: "Germán Armando",
    company: "Estudio AEVR",
    quote: "Lograste una adaptación no para abogados en general, sino para nuestro estudio en particular.",
    image: "/assets/ia30d-testimonials/german-armando-estudio-aevr.jpg",
    youtubeId: "2cShSFKBAvE",
  },
  {
    title: "Menos tareas repetitivas, más trabajo de valor",
    person: "Lorena Etcheverry",
    company: "Estudio AEVR",
    quote: "La IA tiene un potencial enorme para simplificar tareas repetitivas y liberar tiempo para lo más complejo.",
    image: "/assets/ia30d-testimonials/lorena-etcheverry-estudio-aevr.jpg",
    youtubeId: "vjBUqceh8f0",
  },
  {
    title: "El cambio empieza cuando el equipo se involucra",
    person: "María Victoria Esnaola",
    company: "Estudio AEVR",
    quote: "Se generó otro tipo de ambiente: más consultas, más conversación y más ganas de aplicar IA.",
    image: "/assets/ia30d-testimonials/maria-victoria-esnaola-estudio-aevr.jpg",
    youtubeId: "Sboabu_6VzI",
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

function VideoPlayButton() {
  return (
    <span className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white/92 text-[#3474E9] shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md transition group-hover:scale-105">
      <span className="ml-1 h-0 w-0 border-y-[15px] border-l-[24px] border-y-transparent border-l-[#3474E9]" />
    </span>
  );
}

function VideoSurface({
  active,
  isPlaying,
  onPlay,
}: {
  active: (typeof interviews)[number];
  isPlaying: boolean;
  onPlay: () => void;
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[28px] bg-black">
      <Image
        src={active.image}
        alt={active.title}
        fill
        sizes="(max-width: 1023px) 100vw, 920px"
        className="object-cover opacity-82 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,38,0.08),rgba(2,14,38,0.58))]" />
      <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/24 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/86 backdrop-blur-md">
        YouTube video
      </div>
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
          title={active.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button type="button" onClick={onPlay} className="absolute inset-0 grid place-items-center" aria-label={`Reproducir entrevista: ${active.title}`}>
          <VideoPlayButton />
        </button>
      )}
    </div>
  );
}

function HorizontalInterviewFeature() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const active = interviews[activeIndex];

  useEffect(() => {
    if (isAutoPaused || isPlaying) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % interviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAutoPaused, isPlaying]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
    setIsAutoPaused(true);
  };

  const move = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + interviews.length) % interviews.length);
    setIsPlaying(false);
    setIsAutoPaused(true);
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.36fr)_minmax(320px,0.64fr)] lg:items-stretch">
      <article className="aspect-[30/17] rounded-[36px] border border-black/8 bg-[#F7F8FA] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.07)] md:p-4">
        <div key={`${active.title}-wide-video`} className="h-full animate-[jt-wide-interview-slide_760ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <VideoSurface active={active} isPlaying={isPlaying} onPlay={() => {
            setIsPlaying(true);
            setIsAutoPaused(true);
          }} />
        </div>
      </article>

      <aside className="flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[36px] border border-black/8 bg-black px-6 py-7 text-white md:px-7 md:py-7">
        <div key={`${active.title}-wide-copy`} className="animate-[jt-wide-interview-slide_760ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[#4F82FF]">Entrevista destacada</p>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/44">
              {String(activeIndex + 1).padStart(2, "0")} / {String(interviews.length).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-5 font-sans text-[31px] font-semibold leading-[0.98] tracking-[-0.055em] xl:text-[40px]">
            {active.title}
          </h3>
          <p className="mt-5 font-sans text-[17px] italic leading-[1.34] tracking-[-0.03em] text-white/76 xl:text-[19px]">"{active.quote}"</p>
        </div>

        <div className="mt-6 border-t border-white/14 pt-5">
          <p className="font-sans text-[15px] font-semibold text-white">{active.person}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">{active.company}</p>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => move(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-[18px] text-white/72 transition hover:border-[#4F82FF] hover:text-[#4F82FF]"
              aria-label="Ver entrevista anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-[18px] text-white/72 transition hover:border-[#4F82FF] hover:text-[#4F82FF]"
              aria-label="Ver entrevista siguiente"
            >
              →
            </button>
          </div>
          <div className="mt-5 grid grid-cols-6 gap-2">
            {interviews.map((interview, index) => (
              <button
                key={interview.title}
                type="button"
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition ${index === activeIndex ? "bg-[#4F82FF]" : "bg-white/18 hover:bg-white/36"}`}
                aria-label={`Ver entrevista: ${interview.title}`}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default function EntrevistasVideoHorizontalPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 md:py-14 xl:px-10">
      <section className="mx-auto max-w-[1320px]">
        <div className="border-b border-black/10 pb-8 md:pb-10">
          <SectionTag label="VALIDACION" />
          <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_0.5fr] xl:items-end">
            <h1 className="font-sans text-[52px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[84px] xl:text-[108px]">
              Video más horizontal<span className="text-[#3474E9]">.</span>
            </h1>
            <p className="max-w-[560px] font-sans text-[18px] leading-[1.48] tracking-[-0.02em] text-black/62 md:text-[21px] xl:justify-self-end">
              Variante para matchear mejor el formato real de YouTube: video 16:9, panel derecho más compacto y ambos bloques con la misma altura.
            </p>
          </div>
        </div>

        <div className="pt-8 xl:pt-10">
          <HorizontalInterviewFeature />
        </div>
      </section>

      <style jsx global>{`
        @keyframes jt-wide-interview-slide {
          from {
            opacity: 0;
            transform: translate3d(24px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </main>
  );
}
