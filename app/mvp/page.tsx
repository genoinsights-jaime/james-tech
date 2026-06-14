import Link from "next/link";

export default function MvpIndexPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white md:px-6 xl:px-10">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-8">
        <div className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Mentalidad IA
          </p>
          <h1 className="max-w-[10ch] font-sans text-[52px] font-semibold leading-[0.92] tracking-[-0.06em] md:text-[86px]">
            Exploraciones rápidas para la nueva home.
          </h1>
          <p className="max-w-[58ch] text-[17px] leading-[1.5] text-white/72">
            Tres MVPs navegables para comparar cómo abrir la web con las dos avenidas: Personas y Empresas.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["portal", "Split inmediato y muy claro."],
            ["narrative", "Marca primero, división después."],
            ["hybrid", "Un hero único con bifurcación integrada."],
          ].map(([slug, description]) => (
            <Link
              key={slug}
              href={`/mvp/${slug}`}
              className="rounded-[26px] border border-white/12 bg-white/6 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[var(--color-primary)]">{slug}</p>
              <p className="mt-10 font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
                {slug}
              </p>
              <p className="mt-3 text-[15px] leading-[1.45] text-white/68">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
