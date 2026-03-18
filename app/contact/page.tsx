import Image from "next/image";
import Link from "next/link";

import { Header } from "@/components/site/home-page";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      <section className="bg-white px-5 pb-10 pt-30 text-black md:px-10 md:pb-14">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-12">
          <div className="jt-divider-dark grid gap-8 border-b pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:pb-12">
            <h1 className="max-w-[700px] font-sans text-[62px] font-semibold leading-[0.92] tracking-[-0.08em] md:text-[72px] xl:text-[104px]">
              Iniciá la conversación<span className="text-[var(--color-primary)]">.</span>
            </h1>

            <p className="max-w-[360px] font-sans text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-black md:text-[32px]">
              Ya sea que tengas un brief definido o solo una idea inicial, estoy para escuchar, orientar y empezar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[184px_minmax(0,1fr)] md:gap-12">
            <aside className="space-y-8">
              <div className="jt-divider-dark rounded-[4px] border p-4">
                <div className="mb-4 text-[18px] leading-none tracking-[0.28em] text-[#ff6940]">
                  ★★★★★
                </div>
                <p className="jt-muted-dark font-mono text-[12px] leading-[1.45]">
                  Trabajar juntos fue un punto de inflexión. El proceso llevó nuestra visión más lejos de lo que imaginábamos y los resultados hablan por sí solos.
                </p>
                <div className="jt-divider-dark mt-4 border-t pt-3">
                  <p className="font-sans text-[14px] font-semibold">Davis Geidt</p>
                  <p className="jt-muted-dark font-mono text-[11px]">[ Fundador, Brixta ]</p>
                </div>
              </div>

              <div className="jt-divider-dark border-t pt-6">
                <div className="jt-section-tag mb-4 text-black">
                  <Image
                    src="/assets/blue_triangle.svg"
                    alt=""
                    width={10}
                    height={10}
                    aria-hidden="true"
                  />
                  <span>[</span>
                  <span>SEGUINOS</span>
                  <span>]</span>
                </div>

                <div className="space-y-1 font-sans text-[20px] font-medium leading-[1.25] tracking-[-0.03em] md:text-[24px]">
                  <a
                    href="https://www.instagram.com/jamestech.ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity duration-300 hover:opacity-70"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jaimechevallier/"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity duration-300 hover:opacity-70"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity duration-300 hover:opacity-70"
                  >
                    X (Twitter)
                  </a>
                  <a
                    href="https://www.threads.net"
                    target="_blank"
                    rel="noreferrer"
                    className="block transition-opacity duration-300 hover:opacity-70"
                  >
                    Threads
                  </a>
                </div>
              </div>
            </aside>

            <form className="space-y-3" action="#">
              {[
                { label: "TU NOMBRE", placeholder: "Nombre completo", type: "text" },
                {
                  label: "TU EMAIL",
                  placeholder: "Correo electrónico",
                  type: "email",
                },
                {
                  label: "NOMBRE DE TU EMPRESA",
                  placeholder: "Nombre de la empresa",
                  type: "text",
                },
              ].map((field) => (
                <label key={field.label} className="block">
                  <span className="jt-muted-dark mb-2 block font-mono text-[10px] font-medium leading-[1.4] tracking-[0.04em]">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-12 w-full border border-black bg-transparent px-4 font-sans text-[14px] outline-none transition-colors duration-300 placeholder:text-black/40 focus:border-[var(--color-primary)]"
                  />
                </label>
              ))}

              <label className="block">
                <span className="jt-muted-dark mb-2 block font-mono text-[10px] font-medium leading-[1.4] tracking-[0.04em]">
                  TU MENSAJE (OPCIONAL)
                </span>
                <textarea
                  rows={4}
                  placeholder="Contame los objetivos del proyecto, necesidades o plazos estimados..."
                  className="w-full border border-black bg-transparent px-4 py-3 font-sans text-[14px] outline-none transition-colors duration-300 placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
              </label>

              <label className="grid grid-cols-[16px_minmax(0,1fr)] items-center gap-x-3 pt-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 self-center rounded-none border border-black"
                />
                <span className="jt-muted-dark font-mono text-[10px] leading-[1.2] pt-1">
                  Al hacer clic en el botón, acepto la recopilación y el tratamiento de mis datos personales conforme a la{" "}
                  <Link href="/privacy-policy" className="underline transition-opacity duration-300 hover:opacity-70">
                    Política de Privacidad
                  </Link>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 h-12 w-full bg-black font-sans text-[14px] font-medium text-white transition-opacity duration-300 hover:opacity-85"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
