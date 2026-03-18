import Image from "next/image";

import type { LegalDocument } from "@/lib/legal-content";
import { Header } from "@/components/site/home-page";

function LegalSectionTag({ label }: { label: string }) {
  return (
    <div className="jt-section-tag text-black">
      <Image
        src="/assets/blue_triangle.svg"
        alt=""
        width={10}
        height={10}
        aria-hidden="true"
      />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <main className="bg-white">
      <Header />

      <section className="bg-white px-5 pb-10 pt-30 text-black md:px-10 md:pb-14">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-12">
          <div className="jt-divider-dark grid gap-8 border-b pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-end md:pb-12">
            <h1 className="max-w-[780px] font-sans text-[54px] font-semibold leading-[0.92] tracking-[-0.08em] md:text-[92px]">
              {document.title}
              <span className="text-[var(--color-primary)]">.</span>
            </h1>

            <p className="max-w-[360px] font-sans text-[20px] font-medium leading-[1.1] tracking-[-0.03em] text-black md:text-[28px]">
              {document.intro}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-12">
            <aside className="space-y-8">
              <div className="jt-divider-dark rounded-[4px] border p-4">
                <LegalSectionTag label="DOCUMENTO" />
                <p className="mt-4 font-sans text-[18px] font-semibold leading-[1.05] tracking-[-0.03em]">
                  {document.title}
                </p>
                <p className="jt-muted-dark mt-3 max-w-full break-words font-mono text-[12px] leading-[1.45]">
                  JamesTech
                  <br />
                  james.tech.latam@gmail.com
                </p>
              </div>
            </aside>

            <div className="space-y-8">
              {document.sections.map((section) => (
                <section key={section.title} className="jt-divider-dark border-t pt-6 md:pt-8">
                  <h2 className="font-sans text-[28px] font-semibold leading-[1] tracking-[-0.04em] md:text-[42px]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="max-w-[880px] font-sans text-[15px] leading-[1.55] tracking-[-0.01em] text-black md:text-[18px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
