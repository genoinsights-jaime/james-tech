import Image from "next/image";

const items = [
  {
    title: "Contexto",
    description: "Ubicamos a tu equipo en el mapa actual de la IA: que cambio, que oportunidades aparecen y que decisiones conviene tomar ahora.",
    imageLeft: "/assets/evolucion-gen-ai.avif",
    imageRight: "/assets/flowchart.avif",
  },
  {
    title: "Mentalidad IA",
    description: "Trabajamos el cambio de mentalidad para que la IA no se vea como herramienta aislada, sino como una forma nueva de pensar y ejecutar.",
    imageLeft: "/assets/mentalidad123.webp",
    imageRight: "/assets/circle-with-line.avif",
  },
  {
    title: "Casos aplicados",
    description: "Bajamos la conversacion a ejemplos concretos de tu industria para que el equipo vea donde puede generar eficiencia y ventaja.",
    imageLeft: "/assets/reunion.avif",
    imageRight: "/assets/openai.webp",
  },
  {
    title: "Como empezar",
    description: "Cerramos con pasos simples y accionables para que el equipo salga sabiendo que probar primero.",
    imageLeft: "/assets/work-image.webp",
    imageRight: "/assets/road.avif",
  },
];

function Shell({
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
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Variante</p>
        <h2 className="font-sans text-[30px] font-semibold leading-[0.96] tracking-[-0.05em] text-black md:text-[46px]">
          {title}
        </h2>
        <p className="max-w-[820px] font-sans text-[17px] leading-[1.52] tracking-[-0.02em] text-black/62">
          {note}
        </p>
      </div>
      {children}
    </section>
  );
}

function ItemList() {
  return (
    <div className="flex flex-col border-y border-black/10">
      {items.map((item, index) => (
        <div key={item.title} className="flex items-center gap-3 border-b border-black/10 py-5 last:border-b-0">
          <span className={`h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent ${index === 0 ? "border-l-[#4F82FF]" : "border-l-[#4F82FF]/60"}`} />
          <p className={`font-sans text-[22px] leading-[1.1] tracking-[-0.04em] ${index === 0 ? "font-semibold text-black" : "font-normal text-black/60"}`}>
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

function ImageTile({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#f3f5f8] ${className}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1279px) 100vw, 560px" className="object-cover object-center" />
    </div>
  );
}

function VariantOne() {
  const active = items[0];

  return (
    <div className="grid gap-8 rounded-[28px] border border-black/8 bg-white p-5 md:p-7 xl:grid-cols-[0.52fr_1fr]">
      <ItemList />
      <div className="space-y-5">
        <p className="max-w-[720px] font-sans text-[22px] leading-[1.38] tracking-[-0.03em] text-black/72">
          {active.description}
        </p>
        <ImageTile src={active.imageLeft} alt={active.title} className="aspect-[2.05] rounded-[22px]" />
      </div>
    </div>
  );
}

function VariantTwo() {
  const active = items[0];

  return (
    <div className="grid gap-8 rounded-[28px] border border-black/8 bg-white p-5 md:p-7 xl:grid-cols-[0.52fr_1fr]">
      <ItemList />
      <div className="grid gap-5 md:grid-cols-[1fr_0.42fr]">
        <div className="space-y-5">
          <p className="max-w-[660px] font-sans text-[21px] leading-[1.42] tracking-[-0.03em] text-black/72">
            {active.description}
          </p>
          <ImageTile src={active.imageLeft} alt={active.title} className="aspect-[1.75] rounded-[22px]" />
        </div>
        <div className="hidden flex-col gap-3 md:flex">
          <ImageTile src={active.imageRight} alt={`${active.title} detalle`} className="aspect-[1.05] rounded-[18px] opacity-80" />
          <div className="rounded-[18px] border border-black/8 bg-[#f6f8fc] p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#4F82FF]">Apoyo visual</p>
            <p className="mt-2 font-sans text-[16px] leading-[1.35] tracking-[-0.02em] text-black/58">
              Imagen secundaria mas chica, como referencia, no como protagonista.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantThree() {
  const active = items[0];

  return (
    <div className="grid gap-8 rounded-[28px] border border-black/8 bg-white p-5 md:p-7 xl:grid-cols-[0.52fr_1fr]">
      <ItemList />
      <div className="grid gap-5 md:grid-cols-[0.72fr_1.28fr] md:items-stretch">
        <p className="font-sans text-[21px] leading-[1.42] tracking-[-0.03em] text-black/72">
          {active.description}
        </p>
        <div className="relative min-h-[360px]">
          <ImageTile src={active.imageLeft} alt={active.title} className="absolute left-0 top-0 aspect-[1.75] w-[78%] rounded-[22px]" />
          <ImageTile src={active.imageRight} alt={`${active.title} detalle`} className="absolute bottom-0 right-0 aspect-[1.25] w-[42%] rounded-[18px] border-4 border-white shadow-[0_18px_40px_rgba(0,0,0,0.14)]" />
        </div>
      </div>
    </div>
  );
}

function VariantFour() {
  return (
    <div className="grid gap-8 rounded-[28px] border border-black/8 bg-white p-5 md:p-7 xl:grid-cols-[0.52fr_1fr]">
      <ItemList />
      <div className="space-y-5">
        <p className="max-w-[720px] font-sans text-[22px] leading-[1.38] tracking-[-0.03em] text-black/72">
          {items[0].description}
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          {items.map((item, index) => (
            <ImageTile
              key={item.title}
              src={item.imageLeft}
              alt={item.title}
              className={`aspect-[1.12] rounded-[18px] transition-opacity ${index === 0 ? "opacity-100 ring-2 ring-[#4F82FF]" : "opacity-35"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VariantFive() {
  const active = items[0];

  return (
    <div className="grid gap-8 overflow-hidden rounded-[28px] border border-black/8 bg-black p-5 text-white md:p-7 xl:grid-cols-[0.52fr_1fr]">
      <ItemList />
      <div className="space-y-5">
        <p className="max-w-[700px] font-sans text-[22px] leading-[1.38] tracking-[-0.03em] text-white/76">
          {active.description}
        </p>
        <div className="relative aspect-[2.15] overflow-hidden rounded-[24px]">
          <Image src={active.imageLeft} alt={active.title} fill sizes="(max-width: 1279px) 100vw, 760px" className="object-cover object-center opacity-86" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.62),rgba(0,0,0,0))] p-5 pt-16">
            <p className="max-w-[520px] font-sans text-[20px] font-semibold leading-[1.08] tracking-[-0.04em]">
              Una sola imagen por estado, con overlay sutil para darle atmosfera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Ia30DSessionImagesValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-12">
        <header className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion IA 30D</p>
          <h1 className="max-w-[1160px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px]">
            Estrategias para mostrar imagenes dentro de la sesion 1.
          </h1>
          <p className="max-w-[900px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/64">
            Cinco maneras de resolver el panel visual sin usar dos imagenes grandes compitiendo todo el tiempo.
          </p>
        </header>

        <Shell title="Una imagen protagonista" note="La opcion mas limpia: el texto explica y una imagen grande acompaña. Menos ruido visual.">
          <VariantOne />
        </Shell>

        <Shell title="Imagen principal + apoyo chico" note="Mantiene dos recursos visuales, pero uno manda y el otro queda como apoyo secundario.">
          <VariantTwo />
        </Shell>

        <Shell title="Collage superpuesto" note="Mas dinamico, con una imagen principal y una pieza secundaria superpuesta como detalle.">
          <VariantThree />
        </Shell>

        <Shell title="Tira de estados" note="Muestra una miniatura por cada componente de la sesion, destacando solo el activo.">
          <VariantFour />
        </Shell>

        <Shell title="Imagen hero con overlay" note="Mas atmosferica y contundente, util si queremos que el panel derecho se sienta premium.">
          <VariantFive />
        </Shell>
      </div>
    </main>
  );
}
