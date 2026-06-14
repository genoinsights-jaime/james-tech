"use client";

const quotes = [
  {
    quote:
      "La adaptación del curso a las necesidades de la organización y la claridad conceptual para transmitir conceptos técnicos según el nivel de conocimiento de los participantes.",
    author: "Martín",
    note: "Estudio AEVR",
  },
  {
    quote: "Claridad y buena predisposición para adaptarlo a nuestra realidad.",
    author: "Germán Armando",
    note: "Estudio AEVR",
  },
  {
    quote:
      "Lo más valioso fue su enfoque personalizado, adaptado a nuestro trabajo diario, lo que lo hizo especialmente enriquecedor.",
    author: "Valentina",
    note: "Estudio AEVR",
  },
  {
    quote: "Muy cálida tu enseñanza.",
    author: "Raquel",
    note: "Estudio AEVR",
  },
  {
    quote:
      "La explicación. Yo desconocía de IA y aprendí muchas funciones, aunque aún debo ponerlas en práctica.",
    author: "Gloria Coronati",
    note: "Estudio AEVR",
  },
];

function QuoteGallery() {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[32px] border border-[#4F82FF]/12 bg-[linear-gradient(180deg,rgba(245,248,255,0.98),rgba(238,243,252,0.94))] py-6 shadow-[0_12px_30px_rgba(79,130,255,0.06)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />

        <div className="feedback-blueprint-marquee flex w-max gap-4 px-5 md:gap-4 md:px-6">
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-${index}`}
              className="w-[280px] shrink-0 rounded-[26px] border border-[#4F82FF]/12 bg-white/90 px-4 py-4 shadow-[0_10px_22px_rgba(79,130,255,0.04)] backdrop-blur-sm md:w-[340px] md:px-5 md:py-5"
            >
              <p className="font-sans text-[18px] italic leading-[1.34] tracking-[-0.03em] text-black md:text-[21px]">
                {quote.quote}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4">
                <p className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black">
                  {quote.author}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4F82FF]">
                  {quote.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function QueDicenLosParticipantesPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-10">
        <section className="space-y-8 rounded-[36px] border border-black/8 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-8 md:py-8">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
              Que dicen los participantes
            </p>
            <h1 className="max-w-[12ch] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[64px]">
              Que deja IA 30D.
            </h1>
            <p className="max-w-[46ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
              Una experiencia útil, cercana y aplicable.
            </p>
          </div>

          <QuoteGallery />
        </section>

        <section className="space-y-8 rounded-[36px] border border-black/8 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-8 md:py-8">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
              Que deja IA 30D
            </p>
            <h2 className="max-w-[14ch] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[64px]">
              Que dicen los participantes.
            </h2>
            <p className="max-w-[46ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
              Una experiencia útil, cercana y aplicable.
            </p>
          </div>

          <QuoteGallery />
        </section>
      </div>

      <style jsx global>{`
        @keyframes feedback-blueprint-marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .feedback-blueprint-marquee {
          animation: feedback-blueprint-marquee-scroll 34s linear infinite;
          will-change: transform;
        }

        .feedback-blueprint-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
