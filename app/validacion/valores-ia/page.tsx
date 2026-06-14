import { aboutValues } from "@/lib/site-content";

function ValidationHeader({
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
      <h2 className="font-sans text-[28px] font-semibold leading-[0.96] tracking-[-0.05em] text-white md:text-[42px]">
        {title}
      </h2>
      <p className="max-w-[760px] font-sans text-[17px] leading-[1.55] tracking-[-0.02em] text-white/72">
        {note}
      </p>
    </div>
  );
}

export default function ValoresIAValidationPage() {
  return (
    <main className="min-h-screen bg-[#05070c] px-5 py-10 text-white md:px-8 xl:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-14">
        <section className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
            Validacion
          </p>
          <h1 className="max-w-[1040px] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] md:text-[66px]">
            Variantes para mostrar tus tres valores al enseñar inteligencia artificial.
          </h1>
          <p className="max-w-[920px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-white/72">
            Mantuve los mismos tres valores y armé distintas maneras de presentarlos. La idea es
            decidir primero la gramática visual antes de integrarla en la landing real de
            `IA30D`.
          </p>
        </section>

        <section className="space-y-6">
          <ValidationHeader
            eyebrow="Opcion 01"
            title="Cards expandidas"
            note="La más directa. Los tres valores viven abiertos desde el principio y se leen rápido sin interacción."
          />

          <div className="grid gap-5 xl:grid-cols-3">
            {aboutValues.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-6 py-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                      Valor {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="h-2 w-2 rounded-full bg-[#4F82FF]" />
                  </div>
                  <h3 className="max-w-[320px] font-sans text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-white">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-white/74">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <ValidationHeader
            eyebrow="Opcion 02"
            title="Franja editorial"
            note="Más manifiesto y menos UI. Funciona bien si querés que se sientan como principios rectores y no como FAQ."
          />

          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,23,0.98),rgba(14,18,29,0.92))]">
            {aboutValues.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-4 px-6 py-7 md:grid-cols-[180px_minmax(0,1fr)] md:gap-8 md:px-8 md:py-8 ${
                  index < aboutValues.length - 1 ? "border-b border-white/8" : ""
                }`}
              >
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                  [{String(index + 1).padStart(2, "0")}]
                </p>
                <div className="space-y-3">
                  <h3 className="font-sans text-[30px] font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-[36px]">
                    {item.title}
                  </h3>
                  <p className="max-w-[980px] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-white/72">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <ValidationHeader
            eyebrow="Opcion 03"
            title="Titulos grandes + soporte lateral"
            note="Más premium y más cercano a la estética nueva del sitio. Le da mucho peso tipográfico a cada valor."
          />

          <div className="space-y-4">
            {aboutValues.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[30px] border border-white/10 bg-white/[0.03] px-6 py-6 md:px-8 md:py-8"
              >
                <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_360px] md:gap-8">
                  <div className="space-y-4">
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                      Principio {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="max-w-[760px] font-sans text-[42px] font-semibold leading-[0.94] tracking-[-0.05em] text-white md:text-[58px]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-white/72 md:pt-9">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <ValidationHeader
            eyebrow="Opcion 04"
            title="Cards con foco en palabra clave"
            note="Más interpretada. Cada card destaca la idea núcleo y deja el desarrollo abajo. Útil si querés una lectura más emocional."
          />

          <div className="grid gap-5 xl:grid-cols-3">
            {[
              { key: "Personas", item: aboutValues[0] },
              { key: "Autonomía", item: aboutValues[1] },
              { key: "Personalización", item: aboutValues[2] },
            ].map(({ key, item }, index) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-[28px] border border-[#4F82FF]/18 bg-[linear-gradient(180deg,rgba(79,130,255,0.12),rgba(255,255,255,0.03))] px-6 py-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4F82FF] to-transparent opacity-70" />
                <div className="space-y-6">
                  <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#8FB0FF]">
                    Valor {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-sans text-[48px] font-semibold leading-[0.92] tracking-[-0.055em] text-white md:text-[62px]">
                    {key}
                  </p>
                  <div className="space-y-3">
                    <h3 className="font-sans text-[24px] font-semibold leading-[1.04] tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-white/72">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
