import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/site/home-page";
import { Ia30dLeadForm } from "@/components/site/ia30d-lead-form";

export const metadata: Metadata = {
  title: "Contacto IA-30D | James Tech",
  description: "Formulario de contacto para diseñar una experiencia IA-30D para tu equipo.",
};

export default function Ia30dContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      <section className="px-5 pb-12 pt-30 md:px-6 md:pb-16 xl:px-10">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(440px,0.72fr)] lg:items-start">
          <div className="jt-divider-dark border-b pb-8 lg:sticky lg:top-28 lg:border-b-0 lg:pb-0">
            <div className="jt-section-tag text-black">
              <span className="inline-block h-0 w-0 border-x-[6px] border-t-[10px] border-x-transparent border-t-[var(--color-primary)]" />
              <span>[</span>
              <span>IA-30D</span>
              <span>]</span>
            </div>

            <h1 className="mt-9 max-w-[9ch] font-sans text-[52px] font-semibold leading-[0.9] tracking-[-0.075em] text-black md:text-[84px] xl:text-[110px]">
              Diseñemos el primer paso.
            </h1>

            <p className="mt-7 max-w-[58ch] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/68 md:text-[21px]">
              Dejá tus datos y una primera idea de tu contexto. Con eso puedo entender si IA-30D tiene sentido para tu equipo y preparar una conversación concreta.
            </p>

            <div className="mt-8 grid gap-3 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                ["01", "Datos de contacto"],
                ["02", "Contexto del equipo"],
                ["03", "Próximo paso claro"],
              ].map(([number, label]) => (
                <div key={number} className="rounded-[18px] border border-black/10 bg-[#F7F8FA] p-4">
                  <p className="font-mono text-[12px] font-semibold text-[var(--color-primary)]">{number}</p>
                  <p className="mt-3 font-sans text-[16px] font-semibold leading-[1.15] tracking-[-0.03em] text-black">{label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/empresas/ia-30d"
              className="group relative mt-8 inline-flex overflow-hidden rounded-full bg-[var(--color-primary)] px-5 py-3 font-mono text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 z-0 origin-left scale-x-0 rounded-full bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
              />
              <span className="relative z-10 text-white">← Volver a IA-30D</span>
            </Link>
          </div>

          <Ia30dLeadForm />
        </div>
      </section>
    </main>
  );
}
