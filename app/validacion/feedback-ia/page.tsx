"use client";

const quotes = [
  {
    quote:
      "La adaptación del curso a las necesidades de la organización y la claridad conceptual para transmitir conceptos técnicos según el nivel de conocimiento de los participantes.",
    author: "Martín",
    note: "Estudio AEVR",
  },
  {
    quote:
      "Claridad y buena predisposición para adaptarlo a nuestra realidad.",
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
    quote:
      "Muy cálida tu enseñanza.",
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

function Intro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion</p>
      <h1 className="max-w-[1160px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[68px]">
        Formas posibles de mostrar que dicen los participantes del programa.
      </h1>
      <p className="max-w-[980px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
        Ac&aacute; no estoy decidiendo todav&iacute;a si esto vive pegado a `Resultados` o como
        bloque propio. Solo estoy explorando c&oacute;mo puede verse una capa de prueba social m&aacute;s
        humana, apoyada en citas reales del feedback.
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
      <p className="max-w-[860px] font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/62">
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

function QuoteCard({
  quote,
  author,
  note,
  large = false,
}: {
  quote: string;
  author: string;
  note: string;
  large?: boolean;
}) {
  return (
    <article className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,246,249,0.98))] p-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)] md:p-7">
      <p className="font-sans text-[#4F82FF]">{large ? "“" : "“"}</p>
      <p
        className={`mt-2 font-sans tracking-[-0.03em] text-black ${
          large ? "text-[26px] font-semibold leading-[1.12] md:text-[34px]" : "text-[20px] font-medium leading-[1.28] md:text-[24px]"
        }`}
      >
        {quote}
      </p>
      <div className="mt-6 space-y-1">
        <p className="font-sans text-[16px] font-semibold tracking-[-0.02em] text-black">{author}</p>
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-black/48">{note}</p>
      </div>
    </article>
  );
}

function EditorialStack() {
  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <QuoteCard {...quotes[0]} large />
      <div className="grid gap-4">
        <QuoteCard {...quotes[1]} />
        <QuoteCard {...quotes[2]} />
      </div>
    </div>
  );
}

function TestimonialGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {quotes.map((quote) => (
        <QuoteCard key={`${quote.author}-${quote.note}`} {...quote} />
      ))}
    </div>
  );
}

function MixedProof() {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] p-6 md:p-7">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Que dicen</p>
        <p className="mt-5 max-w-[14ch] font-sans text-[38px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[56px]">
          La prueba social tambi&eacute;n puede sentirse humana.
        </p>
        <p className="mt-5 max-w-[36ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68">
          Esta opci&oacute;n mezcla una idea-fuerza con citas reales. Es &uacute;til si quer&eacute;s
          que el bloque no parezca solo una grilla de testimonios.
        </p>
      </div>
      <div className="grid gap-4">
        <QuoteCard {...quotes[2]} />
        <div className="grid gap-4 md:grid-cols-2">
          <QuoteCard {...quotes[3]} />
          <QuoteCard {...quotes[4]} />
        </div>
      </div>
    </div>
  );
}

function CarouselStyle() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,246,249,0.98))] p-4 md:p-5">
      <div className="grid gap-4 lg:grid-cols-3">
        {quotes.slice(0, 3).map((quote) => (
          <article
            key={`${quote.author}-${quote.note}`}
            className="rounded-[26px] border border-black/8 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
          >
            <p className="font-sans text-[22px] font-medium leading-[1.28] tracking-[-0.03em] text-black">
              {quote.quote}
            </p>
            <div className="mt-6 space-y-1">
              <p className="font-sans text-[15px] font-semibold tracking-[-0.02em] text-black">
                {quote.author}
              </p>
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-black/46">{quote.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function MovingQuoteGallery() {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(248,250,255,0.98),rgba(242,245,252,0.94))] py-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)]">
      <div className="mb-6 px-6 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Que dicen</p>
        <p className="mt-3 max-w-[24ch] font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:text-[36px]">
          Una galeria viva de citas, pensada para sentirse mas ligera y mas continua.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(246,249,255,1),rgba(246,249,255,0))] md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(246,249,255,1),rgba(246,249,255,0))] md:w-24" />

        <div className="feedback-marquee flex w-max gap-4 px-6 md:gap-5 md:px-8">
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-${index}`}
              className="w-[320px] shrink-0 rounded-[28px] border border-black/8 bg-white px-5 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:w-[420px] md:px-6"
            >
              <p className="font-sans text-[22px] leading-[1.32] tracking-[-0.03em] text-black italic md:text-[26px]">
                {quote.quote}
              </p>
              <div className="mt-6 space-y-1">
                <p className="font-sans text-[15px] font-semibold tracking-[-0.02em] text-black">
                  {quote.author}
                </p>
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-black/46">
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

function MovingQuoteGalleryCompact() {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(249,250,252,1),rgba(244,246,249,0.98))] py-5 shadow-[0_10px_28px_rgba(0,0,0,0.04)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,rgba(247,249,252,1),rgba(247,249,252,0))] md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,rgba(247,249,252,1),rgba(247,249,252,0))] md:w-20" />
        <div className="feedback-marquee-compact flex w-max gap-3 px-5 md:gap-4 md:px-6">
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-compact-${index}`}
              className="w-[280px] shrink-0 rounded-[24px] border border-black/8 bg-white px-4 py-4 shadow-[0_8px_18px_rgba(0,0,0,0.035)] md:w-[340px] md:px-5 md:py-5"
            >
              <p className="font-sans text-[18px] leading-[1.34] tracking-[-0.03em] text-black italic md:text-[21px]">
                {quote.quote}
              </p>
              <div className="mt-4 space-y-1">
                <p className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black">
                  {quote.author}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-black/44">
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

function MovingQuoteGalleryBlueprint() {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[32px] border border-[#4F82FF]/12 bg-[linear-gradient(180deg,rgba(245,248,255,0.98),rgba(238,243,252,0.94))] py-6 shadow-[0_12px_30px_rgba(79,130,255,0.06)]">
      <div className="mb-5 px-6 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Voces del programa</p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
        <div className="feedback-marquee-slow flex w-max gap-4 px-6 md:gap-5 md:px-8">
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-blueprint-${index}`}
              className="w-[300px] shrink-0 rounded-[26px] border border-[#4F82FF]/12 bg-white/90 px-5 py-5 shadow-[0_10px_22px_rgba(79,130,255,0.04)] backdrop-blur-sm md:w-[380px]"
            >
              <p className="font-sans text-[19px] leading-[1.34] tracking-[-0.03em] text-black italic md:text-[23px]">
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

function MovingQuoteGalleryMinimal() {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[30px] border border-black/8 bg-white py-5 shadow-[0_8px_20px_rgba(0,0,0,0.03)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[linear-gradient(90deg,rgba(255,255,255,1),rgba(255,255,255,0))] md:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[linear-gradient(270deg,rgba(255,255,255,1),rgba(255,255,255,0))] md:w-20" />
        <div className="feedback-marquee-fast flex w-max gap-3 px-5 md:gap-4 md:px-6">
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-minimal-${index}`}
              className="w-[260px] shrink-0 rounded-[22px] border border-black/7 bg-[linear-gradient(180deg,rgba(250,250,251,1),rgba(246,247,249,0.98))] px-4 py-4 md:w-[320px]"
            >
              <p className="font-sans text-[17px] leading-[1.36] tracking-[-0.03em] text-black italic md:text-[20px]">
                {quote.quote}
              </p>
              <div className="mt-4">
                <p className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black">
                  {quote.author}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FeedbackIAValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-16">
        <Intro />

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 01"
            title="Editorial apilada"
            note="La cita principal gana mucha jerarquía y las demás acompañan. Funciona bien si querés un bloque más emocional y más premium."
          />
          <DemoShell
            title="Una cita guía, dos de soporte"
            note="Se siente más curado y menos voluminoso. Puede convivir muy bien debajo de una sección de resultados."
          >
            <EditorialStack />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 02"
            title="Grilla de testimonios"
            note="La más directa y la más fácil de llevar a producción. Buena si querés mostrar variedad y prueba social rápida."
          />
          <DemoShell
            title="Más simple y más escalable"
            note="Permite agregar más testimonios después sin rediseñar toda la sección."
          >
            <TestimonialGrid />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 03"
            title="Idea-fuerza + testimonios"
            note="Une una lectura de marca con evidencia humana. Sirve mucho si el bloque tiene que sostener conversión, no solo decorar."
          />
          <DemoShell
            title="Más narrativa"
            note="Podría vivir como bloque independiente o inmediatamente después de `Resultados`."
          >
            <MixedProof />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 04"
            title="Carrusel editorial"
            note="No es un carrusel funcional todavía; es una maqueta de cómo se vería un bloque más dinámico de citas destacadas."
          />
          <DemoShell
            title="Pensado para futura evolución"
            note="Útil si más adelante querés mezclar video, entrevistas o clips cortos."
          >
            <CarouselStyle />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 05"
            title="Galeria horizontal en movimiento"
            note="Una tira continua de citas en itálicas. Puede funcionar muy bien si querés un bloque más atmosférico, más ligero y menos estructurado que una grilla."
          />
          <DemoShell
            title="Movimiento continuo"
            note="La idea es que las citas vayan pasando de forma suave, como una franja viva de prueba social."
          >
            <MovingQuoteGallery />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 06"
            title="Galeria compacta"
            note="Misma lógica, pero con bloques más apretados y ligeros. Sirve si querés que el carrusel ocupe menos alto dentro de la landing."
          />
          <DemoShell
            title="Más compacto"
            note="Reduce el peso visual sin perder la sensación de movimiento continuo."
          >
            <MovingQuoteGalleryCompact />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 07"
            title="Galeria blueprint"
            note="Una variante más alineada con el azul del sistema y con una sensación más tecnológica-premium."
          />
          <DemoShell
            title="Más identidad visual"
            note="Mantiene la lectura humana, pero empuja un poco más la estética Mentalidad IA."
          >
            <MovingQuoteGalleryBlueprint />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 08"
            title="Galeria mínima"
            note="La más sutil de todas. Menos marco, menos peso, más flujo."
          />
          <DemoShell
            title="Casi una textura de prueba social"
            note="Puede funcionar bien si querés que la sección acompañe sin competir con otros bloques fuertes."
          >
            <MovingQuoteGalleryMinimal />
          </DemoShell>
        </section>
      </div>

      <style jsx global>{`
        @keyframes feedback-marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .feedback-marquee {
          animation: feedback-marquee-scroll 34s linear infinite;
          will-change: transform;
        }

        .feedback-marquee:hover {
          animation-play-state: paused;
        }

        .feedback-marquee-compact {
          animation: feedback-marquee-scroll 30s linear infinite;
          will-change: transform;
        }

        .feedback-marquee-compact:hover {
          animation-play-state: paused;
        }

        .feedback-marquee-slow {
          animation: feedback-marquee-scroll 40s linear infinite;
          will-change: transform;
        }

        .feedback-marquee-slow:hover {
          animation-play-state: paused;
        }

        .feedback-marquee-fast {
          animation: feedback-marquee-scroll 26s linear infinite;
          will-change: transform;
        }

        .feedback-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}
