import Link from "next/link";

const items = [
  {
    href: "/mvp-home/portal-curado",
    title: "Portal Curado",
    description: "La home prioriza claridad y deriva rapido entre Personas y Empresas.",
  },
  {
    href: "/mvp-home/manifiesto",
    title: "Manifiesto + Navegacion",
    description: "La home construye primero una idea madre de marca y despues organiza el sistema.",
  },
  {
    href: "/mvp-home/ecosistema",
    title: "Ecosistema de Entrada",
    description: "La home explica visualmente como se conectan Mentalidad IA, Personas, Empresas, IA 30D y Geno.",
  },
  {
    href: "/mvp-home/minimal",
    title: "Home Minima + Paginas Fuertes",
    description: "La home orienta rapido y deja el detalle a las paginas hijas.",
  },
];

export default function MvpHomeIndexPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white md:px-6 xl:px-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
        <div className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Mentalidad IA
          </p>
          <h1 className="max-w-[10ch] font-sans text-[52px] font-semibold leading-[0.92] tracking-[-0.06em] md:text-[88px]">
            Cuatro arquitecturas de home para comparar.
          </h1>
          <p className="max-w-[60ch] text-[17px] leading-[1.5] text-white/72">
            Esta segunda tanda ya se siente mas home completa: incluye apertura, contexto de marca, ofertas, sobre Jaime, prueba social y cierre.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[28px] border border-white/12 bg-white/6 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                {item.title}
              </p>
              <p className="mt-3 max-w-[44ch] text-[15px] leading-[1.45] text-white/68">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
