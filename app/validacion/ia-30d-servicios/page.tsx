const options = [
  {
    id: "01",
    name: "Balance editorial",
    note: "Mantiene el tamaño actual, pero ordena mejor titulo, descripcion y datos.",
  },
  {
    id: "02",
    name: "Datos en columna",
    note: "Los datos pasan a una columna derecha mas clara y menos extendida.",
  },
  {
    id: "03",
    name: "Frase central",
    note: "El foco pasa a la promesa; los datos acompañan como coordenadas.",
  },
  {
    id: "04",
    name: "Linea de programa",
    note: "Convierte 4 sesiones y 30 días en una lectura secuencial.",
  },
  {
    id: "05",
    name: "Sello IA-30D",
    note: "Usa IA-30D como marca fuerte y deja los datos como soporte.",
  },
];

function SectionTag({ label, invert = false }: { label: string; invert?: boolean }) {
  return (
    <div className={`flex items-center gap-2 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] ${invert ? "text-white" : "text-black"}`}>
      <span className="h-0 w-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#4F82FF]" />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

function Metric({
  value,
  label,
  compact = false,
  invert = false,
}: {
  value: string;
  label: string;
  compact?: boolean;
  invert?: boolean;
}) {
  return (
    <div className="flex items-end gap-3">
      <span className={`${compact ? "text-[64px] md:text-[92px]" : "text-[82px] md:text-[126px]"} font-sans font-semibold leading-[0.84] tracking-[-0.065em] text-[#4F82FF]`}>
        {value}
      </span>
      <span className={`${compact ? "max-w-[10ch] text-[20px] md:text-[28px]" : "max-w-[11ch] text-[24px] md:text-[34px]"} pb-1 font-sans font-semibold leading-[0.96] tracking-[-0.045em] ${invert ? "text-white" : "text-black"}`}>
        {label}
      </span>
    </div>
  );
}

function OptionShell({
  id,
  name,
  note,
  children,
}: {
  id: string;
  name: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 border-t border-black/10 pt-9">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Opcion {id}</p>
          <h2 className="font-sans text-[28px] font-semibold leading-[0.98] tracking-[-0.05em] text-black md:text-[42px]">
            {name}
          </h2>
        </div>
        <p className="max-w-[560px] font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/58 md:text-right">
          {note}
        </p>
      </div>
      {children}
    </section>
  );
}

function OptionOne() {
  return (
    <div className="grid gap-10 bg-white py-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-end">
      <div className="space-y-7">
        <SectionTag label="SERVICIOS" />
        <div className="space-y-6">
          <h3 className="font-sans text-[74px] font-semibold leading-[0.88] tracking-[-0.065em] text-black md:text-[124px]">
            <span className="block">Que es</span>
            <span className="block text-[#4F82FF]">IA-30D.</span>
          </h3>
          <p className="max-w-[720px] font-sans text-[20px] leading-[1.42] tracking-[-0.025em] text-black/72 md:text-[25px]">
            Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
          </p>
        </div>
      </div>
      <div className="grid gap-5 border-y border-black/10 py-7 md:grid-cols-2 md:gap-0">
        <div className="md:border-r md:border-black/10 md:pr-8">
          <Metric value="4" label="sesiones presenciales" />
        </div>
        <div className="md:pl-8">
          <Metric value="30" label="días" />
        </div>
      </div>
    </div>
  );
}

function OptionTwo() {
  return (
    <div className="grid gap-10 bg-white py-8 xl:grid-cols-[1.14fr_0.86fr] xl:items-end">
      <div className="space-y-7">
        <SectionTag label="SERVICIOS" />
        <div className="space-y-6">
          <h3 className="max-w-[11ch] font-sans text-[72px] font-semibold leading-[0.88] tracking-[-0.065em] text-black md:text-[118px]">
            Que es <span className="text-[#4F82FF]">IA-30D.</span>
          </h3>
          <p className="max-w-[760px] font-sans text-[20px] leading-[1.42] tracking-[-0.025em] text-black/72 md:text-[25px]">
            Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
          </p>
        </div>
      </div>
      <div className="grid gap-4 border-l-0 border-black/10 md:border-l md:pl-9">
        <div className="border-b border-black/10 pb-6">
          <Metric value="4" label="sesiones presenciales" compact />
        </div>
        <div>
          <Metric value="30" label="días" compact />
        </div>
      </div>
    </div>
  );
}

function OptionThree() {
  return (
    <div className="space-y-9 bg-white py-8">
      <SectionTag label="SERVICIOS" />
      <div className="grid gap-8 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
        <div className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">IA-30D</p>
          <p className="max-w-[440px] font-sans text-[24px] font-medium leading-[1.18] tracking-[-0.035em] text-black/62 md:text-[34px]">
            Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
          </p>
        </div>
        <h3 className="font-sans text-[62px] font-semibold leading-[0.86] tracking-[-0.065em] text-black md:text-[112px]">
          Que es <span className="text-[#4F82FF]">IA-30D:</span> aplicar IA en tu equipo en 30 días.
        </h3>
      </div>
      <div className="grid gap-5 border-y border-black/10 py-6 md:grid-cols-2">
        <Metric value="4" label="sesiones presenciales" compact />
        <Metric value="30" label="días" compact />
      </div>
    </div>
  );
}

function OptionFour() {
  return (
    <div className="bg-white py-8">
      <div className="grid gap-9 xl:grid-cols-[0.68fr_1.32fr] xl:items-end">
        <div className="space-y-7">
          <SectionTag label="SERVICIOS" />
          <h3 className="font-sans text-[72px] font-semibold leading-[0.88] tracking-[-0.065em] text-black md:text-[118px]">
            Que es <span className="text-[#4F82FF]">IA-30D.</span>
          </h3>
          <p className="max-w-[560px] font-sans text-[20px] leading-[1.42] tracking-[-0.025em] text-black/72 md:text-[24px]">
            Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
          </p>
        </div>
        <div className="grid gap-0 border-y border-black/10 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="py-7">
            <Metric value="4" label="sesiones presenciales" />
          </div>
          <div className="hidden h-[112px] w-px bg-black/10 md:block" />
          <div className="py-7 md:pl-9">
            <Metric value="30" label="días" />
          </div>
        </div>
      </div>
    </div>
  );
}

function OptionFive() {
  return (
    <div className="grid gap-10 bg-white py-8 xl:grid-cols-[0.96fr_1.04fr] xl:items-end">
      <div className="space-y-7">
        <SectionTag label="SERVICIOS" />
        <h3 className="font-sans text-[74px] font-semibold leading-[0.88] tracking-[-0.065em] text-black md:text-[124px]">
          <span className="block">IA-30D.</span>
          <span className="block text-[#4F82FF]">4 x 30.</span>
        </h3>
        <p className="max-w-[720px] font-sans text-[20px] leading-[1.42] tracking-[-0.025em] text-black/72 md:text-[25px]">
          Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
        </p>
      </div>
      <div className="border-y border-black/10 py-7">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <p className="font-sans text-[120px] font-semibold leading-[0.8] tracking-[-0.07em] text-[#4F82FF] md:text-[168px]">
            4
          </p>
          <div className="space-y-4">
            <p className="font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.045em] text-black md:text-[54px]">
              sesiones presenciales
            </p>
            <div className="h-px w-full bg-black/10" />
            <p className="font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.045em] text-black md:text-[54px]">
              30 días
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Ia30DServiciosValidationPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-black md:px-10 md:py-14">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-12">
        <header className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validacion IA 30D</p>
          <h1 className="max-w-[1180px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[74px]">
            Alternativas visuales para el bloque “Que es IA 30D”.
          </h1>
          <p className="max-w-[880px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/64">
            Cinco direcciones para revisar el impacto visual antes de mover una version a la landing principal.
          </p>
        </header>

        <div className="grid gap-3 md:grid-cols-5">
          {options.map((option) => (
            <a
              key={option.id}
              href={`#opcion-${option.id}`}
              className="border border-black/10 bg-[#f6f8fc] px-4 py-4 transition-colors hover:border-[#4F82FF]/30 hover:bg-[#eef3fc]"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4F82FF]">Opcion {option.id}</p>
              <p className="mt-2 font-sans text-[18px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
                {option.name}
              </p>
            </a>
          ))}
        </div>

        <div id="opcion-01">
          <OptionShell {...options[0]}>
            <OptionOne />
          </OptionShell>
        </div>
        <div id="opcion-02">
          <OptionShell {...options[1]}>
            <OptionTwo />
          </OptionShell>
        </div>
        <div id="opcion-03">
          <OptionShell {...options[2]}>
            <OptionThree />
          </OptionShell>
        </div>
        <div id="opcion-04">
          <OptionShell {...options[3]}>
            <OptionFour />
          </OptionShell>
        </div>
        <div id="opcion-05">
          <OptionShell {...options[4]}>
            <OptionFive />
          </OptionShell>
        </div>
      </div>
    </main>
  );
}
