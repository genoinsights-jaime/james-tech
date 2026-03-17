import Image from "next/image";

import { Header } from "@/components/site/home-page";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Header />

      <section className="bg-white px-5 pb-10 pt-30 text-black md:px-10 md:pb-14">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-12">
          <div className="jt-divider-dark grid gap-8 border-b pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:pb-12">
            <h1 className="max-w-[700px] font-sans text-[62px] font-semibold leading-[0.92] tracking-[-0.08em] md:text-[104px]">
              Start the conversation<span className="text-[var(--color-primary)]">.</span>
            </h1>

            <p className="max-w-[360px] font-sans text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-black md:text-[32px]">
              Whether you have a fully scoped brief or just an idea in mind, we're here to listen, guide, and get started.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[184px_minmax(0,1fr)] md:gap-12">
            <aside className="space-y-8">
              <div className="jt-divider-dark rounded-[4px] border p-4">
                <div className="mb-4 text-[18px] leading-none tracking-[0.28em] text-[#ff6940]">
                  ★★★★★
                </div>
                <p className="jt-muted-dark font-mono text-[12px] leading-[1.45]">
                  Working with the team was a game-changer. They pushed our vision further than we imagined, and the results speak for themselves.
                </p>
                <div className="jt-divider-dark mt-4 border-t pt-3">
                  <p className="font-sans text-[14px] font-semibold">Davis Geidt</p>
                  <p className="jt-muted-dark font-mono text-[11px]">[ Founder, Brixta ]</p>
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
                  <span>FOLLOW US</span>
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
                { label: "YOUR NAME", placeholder: "Full name", type: "text" },
                {
                  label: "YOUR EMAIL",
                  placeholder: "Email address",
                  type: "email",
                },
                {
                  label: "YOUR COMPANY NAME",
                  placeholder: "Acme group",
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
                  YOUR MESSAGE (OPTIONAL)
                </span>
                <textarea
                  rows={4}
                  placeholder="What are your projects goals, requirement or specific timeline..."
                  className="w-full border border-black bg-transparent px-4 py-3 font-sans text-[14px] outline-none transition-colors duration-300 placeholder:text-black/40 focus:border-[var(--color-primary)]"
                />
              </label>

              <label className="grid grid-cols-[16px_minmax(0,1fr)] items-center gap-x-3 pt-1">
                <input
                  type="checkbox"
                  className="h-4 w-4 self-center rounded-none border border-black"
                />
                <span className="jt-muted-dark font-mono text-[10px] leading-[1.4]">
                  By clicking the button, I agree with the collection and processing of my personal data as seen in the Privacy Policy
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 h-12 w-full bg-black font-sans text-[14px] font-medium text-white transition-opacity duration-300 hover:opacity-85"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
