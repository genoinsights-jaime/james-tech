"use client";

const proofStats = [
  {
    value: "90%",
    label: "proyecta seguir usando IA después del programa",
    note: "Cohortes finales relevadas de AEVR y CENSER.",
  },
  {
    value: "77%",
    label: "ya construyó algo con IA o está implementándolo",
    note: "Equipos que no se quedaron en la teoría.",
  },
  {
    value: "9.46 / 10",
    label: "satisfacción promedio en feedback final",
    note: "Encuesta de feedback final de Estudio AEVR.",
  },
];

const proofStatsNarrative = [
  {
    value: "90%",
    title: "continuidad real",
    body: "La enorme mayoría de quienes pasan por IA 30D proyecta seguir usando inteligencia artificial después del programa.",
  },
  {
    value: "77%",
    title: "implementación concreta",
    body: "Los equipos no se quedan solo con ideas: ya prueban, construyen o empujan implementaciones reales.",
  },
  {
    value: "9.46 / 10",
    title: "valor percibido",
    body: "La experiencia no solo es útil: también se percibe como clara, adaptada y valiosa en el trabajo diario.",
  },
];

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

function Intro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion</p>
      <h1 className="max-w-[1180px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[68px]">
        Propuestas completas para una seccion final de resultados + citas dentro de IA 30D.
      </h1>
      <p className="max-w-[980px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
        Ac&aacute; ya estoy mezclando evidencia cuantitativa y prueba social humana en una misma
        secci&oacute;n. La idea es ver tres maneras distintas de presentarlo antes de llevarlo a la
        landing real.
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
      <p className="max-w-[900px] font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/62">
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

function BlueprintQuoteGallery({ compact = false }: { compact?: boolean }) {
  const loopQuotes = [...quotes, ...quotes];

  return (
    <div className="overflow-hidden rounded-[32px] border border-[#4F82FF]/12 bg-[linear-gradient(180deg,rgba(245,248,255,0.98),rgba(238,243,252,0.94))] py-6 shadow-[0_12px_30px_rgba(79,130,255,0.06)]">
      <div className="mb-5 px-6 md:px-8">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
          Que dicen los participantes
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
        <div className={`feedback-blueprint-marquee flex w-max ${compact ? "gap-3 px-5 md:gap-4 md:px-6" : "gap-4 px-6 md:gap-5 md:px-8"}`}>
          {loopQuotes.map((quote, index) => (
            <article
              key={`${quote.author}-blueprint-final-${index}`}
              className={`shrink-0 rounded-[26px] border border-[#4F82FF]/12 bg-white/90 shadow-[0_10px_22px_rgba(79,130,255,0.04)] backdrop-blur-sm ${
                compact
                  ? "w-[280px] px-4 py-4 md:w-[340px]"
                  : "w-[300px] px-5 py-5 md:w-[380px]"
              }`}
            >
              <p
                className={`font-sans tracking-[-0.03em] text-black italic ${
                  compact ? "text-[18px] leading-[1.34] md:text-[21px]" : "text-[19px] leading-[1.34] md:text-[23px]"
                }`}
              >
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

function OptionOne() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {proofStats.map((stat) => (
          <article
            key={stat.value}
            className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(244,246,249,0.98))] p-6"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Resultado</p>
            <p className="mt-5 font-sans text-[44px] font-semibold leading-[0.9] tracking-[-0.06em] text-black md:text-[58px]">
              {stat.value}
            </p>
            <p className="mt-4 font-sans text-[22px] font-semibold leading-[1.06] tracking-[-0.04em] text-black">
              {stat.label}
            </p>
            <p className="mt-4 font-sans text-[15px] leading-[1.52] tracking-[-0.02em] text-black/60">
              {stat.note}
            </p>
          </article>
        ))}
      </div>
      <BlueprintQuoteGallery compact />
    </div>
  );
}

function OptionTwo() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start">
        <div className="space-y-5">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Impacto del programa</p>
          <h4 className="max-w-[11ch] font-sans text-[38px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[64px]">
            Resultados concretos y percepcion real de valor.
          </h4>
          <p className="max-w-[34ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
            Esta versi&oacute;n junta una lectura editorial de los datos con una franja viva de citas
            reales, para que la secci&oacute;n se sienta convincente y humana al mismo tiempo.
          </p>
        </div>
        <div className="grid gap-4">
          {proofStatsNarrative.map((stat) => (
            <article
              key={stat.value}
              className="rounded-[28px] border border-black/8 bg-white px-6 py-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
            >
              <div className="grid gap-3 md:grid-cols-[120px_minmax(0,1fr)] md:items-start">
                <p className="font-sans text-[40px] font-semibold leading-[0.9] tracking-[-0.06em] text-black md:text-[52px]">
                  {stat.value}
                </p>
                <div className="space-y-3">
                  <p className="font-sans text-[22px] font-semibold leading-[1.06] tracking-[-0.04em] text-black">
                    {stat.title}
                  </p>
                  <p className="font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/62">
                    {stat.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BlueprintQuoteGallery />
    </div>
  );
}

function OptionThree() {
  return (
    <div className="space-y-6">
      <div className="rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] p-6 md:p-7">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:items-end">
          <div className="space-y-4">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Que cambia despues de IA 30D</p>
            <h4 className="max-w-[12ch] font-sans text-[38px] font-semibold leading-[0.96] tracking-[-0.055em] text-black md:text-[60px]">
              Adopcion, implementacion y valor percibido.
            </h4>
          </div>
          <p className="max-w-[42ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
            Esta versi&oacute;n pone una idea-fuerza arriba y usa los resultados como argumentos. Es
            menos tablero y m&aacute;s lectura de transformaci&oacute;n.
          </p>
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
          {proofStats.map((stat) => (
            <article
              key={stat.value}
              className="rounded-[28px] border border-black/8 bg-white px-5 py-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
            >
              <p className="font-sans text-[42px] font-semibold leading-[0.9] tracking-[-0.055em] text-black md:text-[50px]">
                {stat.value}
              </p>
              <p className="mt-3 font-sans text-[20px] font-semibold leading-[1.08] tracking-[-0.035em] text-black">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
        <BlueprintQuoteGallery compact />
      </div>
    </div>
  );
}

export default function ResultadosFinalesIAPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-16">
        <Intro />

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 01"
            title="Resultados arriba, citas abajo"
            note="La más clara y más utilitaria. Primero deja ver tres pruebas fuertes y después baja a una franja viva de citas."
          />
          <DemoShell
            title="Estructura directa"
            note="Buena si querés que la parte cuantitativa sea lo primero que se lea."
          >
            <OptionOne />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 02"
            title="Narrativa de impacto + galeria"
            note="La más equilibrada entre resultados y tono de marca. Hace que la evidencia se lea como una historia de transformación."
          />
          <DemoShell
            title="La más alineada con el tono de IA 30D"
            note="Si querés que la sección sea convincente sin sentirse demasiado dashboard, esta probablemente es la más natural."
          >
            <OptionTwo />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 03"
            title="Idea-fuerza + soporte cuantitativo + citas"
            note="La más editorial. Parte desde una lectura fuerte y usa los números y las voces como respaldo."
          />
          <DemoShell
            title="Más manifiesto, menos tablero"
            note="Sirve si querés que el cierre de la landing tenga más carácter que aspecto de reporte."
          >
            <OptionThree />
          </DemoShell>
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
