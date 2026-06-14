"use client";

const resultStats = [
  {
    value: "90%",
    label: "proyecta seguir usando IA",
    detail: "Cohortes finales relevadas de AEVR y CENSER.",
  },
  {
    value: "77%",
    label: "ya construyó algo o está implementándolo",
    detail: "Equipos que no se quedaron en la teoría.",
  },
  {
    value: "83%",
    label: "ya tuvo un momento de “esto si me sirve” con ChatGPT",
    detail: "Seguimiento en CENSER Gen 2 despues de la segunda sesion.",
  },
];

const resultBullets = [
  "Las encuestas no están todas en el mismo formato, así que la lectura más sólida hoy es por cohortes comparables.",
  "AEVR y CENSER ya muestran señales fuertes de adopción, continuidad y primeras implementaciones.",
  "Coldwell hoy funciona mejor como diagnóstico del problema operativo que como cierre de resultados.",
];

function Intro() {
  return (
    <section className="space-y-4">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion</p>
      <h1 className="max-w-[1180px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:text-[68px]">
        Formas posibles de mostrar resultados de IA 30D sin mezclarlos todavia con la landing.
      </h1>
      <p className="max-w-[980px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
        Mantengo los mismos tres hallazgos base para comparar solo la capa visual y narrativa. La
        idea es decidir primero c&oacute;mo se siente una secci&oacute;n de resultados antes de elegir
        en qu&eacute; parte de la web conviene incorporarla.
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
      <p className="max-w-[880px] font-sans text-[17px] leading-[1.56] tracking-[-0.02em] text-black/62">
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

function MethodNote() {
  return (
    <div className="rounded-[24px] border border-black/8 bg-black/[0.02] p-5 md:p-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Lectura actual</p>
      <ul className="mt-4 space-y-3">
        {resultBullets.map((bullet) => (
          <li
            key={bullet}
            className="font-sans text-[16px] leading-[1.58] tracking-[-0.02em] text-black/68"
          >
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

function EditorialNumbers() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {resultStats.map((stat) => (
        <article
          key={stat.value}
          className="rounded-[28px] border border-black/8 bg-[linear-gradient(180deg,rgba(250,250,252,1),rgba(243,245,249,0.98))] p-6"
        >
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Resultado</p>
          <p className="mt-5 font-sans text-[58px] font-semibold leading-[0.9] tracking-[-0.06em] text-black md:text-[72px]">
            {stat.value}
          </p>
          <p className="mt-4 max-w-[18ch] font-sans text-[24px] font-semibold leading-[1.02] tracking-[-0.04em] text-black">
            {stat.label}
          </p>
          <p className="mt-4 font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/64">
            {stat.detail}
          </p>
        </article>
      ))}
    </div>
  );
}

function DashboardStrip() {
  return (
    <div className="rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(251,251,252,1),rgba(244,247,252,0.96))] p-4 md:p-5">
      <div className="grid gap-3 lg:grid-cols-3">
        {resultStats.map((stat) => (
          <article
            key={stat.value}
            className="rounded-[24px] border border-black/6 bg-white px-5 py-6 shadow-[0_12px_32px_rgba(0,0,0,0.04)]"
          >
            <p className="font-sans text-[46px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[56px]">
              {stat.value}
            </p>
            <p className="mt-3 font-sans text-[18px] font-medium leading-[1.18] tracking-[-0.03em] text-black">
              {stat.label}
            </p>
            <p className="mt-3 font-sans text-[15px] leading-[1.52] tracking-[-0.02em] text-black/60">
              {stat.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

function SplitNarrative() {
  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(580px,1.05fr)] xl:items-start">
      <div className="space-y-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Impacto visible</p>
        <h3 className="max-w-[10ch] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[72px]">
          Lo que ya estamos viendo en cohortes reales.
        </h3>
        <p className="max-w-[34ch] font-sans text-[19px] leading-[1.58] tracking-[-0.02em] text-black/68">
          No es una promesa abstracta. Ya hay evidencia de continuidad, adopci&oacute;n y primeras
          implementaciones concretas.
        </p>
      </div>
      <div className="space-y-4">
        {resultStats.map((stat) => (
          <article
            key={stat.value}
            className="rounded-[30px] border border-black/8 bg-white px-6 py-6 shadow-[0_12px_34px_rgba(0,0,0,0.04)] md:px-7 md:py-7"
          >
            <div className="grid gap-4 md:grid-cols-[150px_minmax(0,1fr)] md:items-start">
              <p className="font-sans text-[54px] font-semibold leading-[0.9] tracking-[-0.06em] text-black md:text-[64px]">
                {stat.value}
              </p>
              <div className="space-y-3">
                <p className="font-sans text-[24px] font-semibold leading-[1.04] tracking-[-0.04em] text-black">
                  {stat.label}
                </p>
                <p className="font-sans text-[16px] leading-[1.55] tracking-[-0.02em] text-black/62">
                  {stat.detail}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function QuotePlusStats() {
  return (
    <div className="grid gap-5 xl:grid-cols-[minmax(0,0.95fr)_minmax(580px,1.05fr)]">
      <div className="rounded-[30px] border border-black/8 bg-[linear-gradient(180deg,rgba(246,249,255,0.98),rgba(239,243,252,0.94))] p-6 md:p-7">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Lectura</p>
        <p className="mt-6 max-w-[18ch] font-sans text-[36px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[54px]">
          Equipos que ya pasaron de la curiosidad a la implementaci&oacute;n.
        </p>
        <p className="mt-6 max-w-[38ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/68">
          Esta versi&oacute;n se siente m&aacute;s editorial: menos tablero, m&aacute;s idea-fuerza
          apoyada por evidencia concreta.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {resultStats.map((stat) => (
          <article
            key={stat.value}
            className="rounded-[28px] border border-black/8 bg-white px-5 py-6 shadow-[0_10px_28px_rgba(0,0,0,0.04)]"
          >
            <p className="font-sans text-[44px] font-semibold leading-[0.9] tracking-[-0.055em] text-black md:text-[52px]">
              {stat.value}
            </p>
            <p className="mt-3 font-sans text-[20px] font-semibold leading-[1.08] tracking-[-0.035em] text-black">
              {stat.label}
            </p>
            <p className="mt-3 font-sans text-[15px] leading-[1.52] tracking-[-0.02em] text-black/60">
              {stat.detail}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function ResultadosIAValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-16">
        <Intro />

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 01"
            title="Numeros editoriales"
            note="La más directa si querés una mini sección que muestre tres resultados fuertes con presencia visual y una lectura rápida."
          />
          <DemoShell
            title="Tres resultados, una lectura clara"
            note="Esta opción hace que los números sean protagonistas y deja el contexto como apoyo."
          >
            <EditorialNumbers />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 02"
            title="Franja de indicadores"
            note="Más compacta y más fácil de incrustar dentro de una landing larga sin que se convierta en una sección demasiado pesada."
          />
          <DemoShell
            title="Formato más insertable"
            note="Podría vivir entre bloques de contenido sin cortar demasiado el ritmo de lectura."
          >
            <DashboardStrip />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 03"
            title="Narrativa + evidencia"
            note="La más equilibrada si querés que la sección no sea solo números, sino también una interpretación clara de lo que significan."
          />
          <DemoShell
            title="Más cercana al tono del sitio"
            note="Le da un poco más de alma editorial al bloque sin perder contundencia."
          >
            <SplitNarrative />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Opcion 04"
            title="Idea-fuerza + soporte"
            note="Más manifiesto y más marca. Útil si querés que la sección construya percepción, no solo validación."
          />
          <DemoShell
            title="Más conceptual"
            note="Sirve si preferís hablar de transformación y usar los números como respaldo, no como titular."
          >
            <QuotePlusStats />
          </DemoShell>
        </section>

        <section className="space-y-6">
          <SectionHeader
            eyebrow="Base"
            title="Que estoy usando como materia prima"
            note="Esto no es parte del diseño final; es solo para dejar visible la lógica de lectura con la que armé las propuestas."
          />
          <MethodNote />
        </section>
      </div>
    </main>
  );
}
