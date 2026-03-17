import { Footer, Header } from "@/components/site/home-page";

export default function ContactPage() {
  return (
    <main className="bg-[#f9f9f9]">
      <Header />

      <section className="bg-[#f9f9f9] px-5 pb-10 pt-30 text-black md:px-10 md:pb-14">
        <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-12">
          <div className="grid gap-8 border-b border-[#e8e8e8] pb-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-center md:pb-12">
            <h1 className="max-w-[700px] font-sans text-[62px] font-semibold leading-[0.92] tracking-[-0.08em] md:text-[104px]">
              Start the conversation<span className="text-[#056cf2]">.</span>
            </h1>

            <p className="max-w-[360px] font-sans text-[22px] font-medium leading-[1.1] tracking-[-0.03em] text-[#1a1a1a] md:text-[32px]">
              Whether you have a fully scoped brief or just an idea in mind, we're here to listen, guide, and get started.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[184px_minmax(0,1fr)] md:gap-12">
            <aside className="space-y-8">
              <div className="rounded-[4px] border border-[#dcdcdc] p-4">
                <div className="mb-4 text-[18px] leading-none tracking-[0.28em] text-[#ff6940]">
                  ★★★★★
                </div>
                <p className="font-mono text-[12px] leading-[1.45] text-[#3a3a3a]">
                  Working with the team was a game-changer. They pushed our vision further than we imagined, and the results speak for themselves.
                </p>
                <div className="mt-4 border-t border-[#ececec] pt-3">
                  <p className="font-sans text-[14px] font-semibold">Davis Geidt</p>
                  <p className="font-mono text-[11px] text-[#7b7b7b]">[ Founder, Brixta ]</p>
                </div>
              </div>

              <div className="border-t border-[#e8e8e8] pt-6">
                <div className="jt-section-tag mb-4 text-[#020120]">
                  <span className="text-[#056cf2]">▲</span>
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
                  <span className="mb-2 block font-mono text-[10px] font-medium leading-[1.4] tracking-[0.04em] text-[#3a3a3a]">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="h-12 w-full border border-[#3d3d3d] bg-transparent px-4 font-sans text-[14px] outline-none transition-colors duration-300 placeholder:text-[#b0b0b0] focus:border-[#056cf2]"
                  />
                </label>
              ))}

              <label className="block">
                <span className="mb-2 block font-mono text-[10px] font-medium leading-[1.4] tracking-[0.04em] text-[#3a3a3a]">
                  YOUR COMPANY NAME
                </span>
                <select className="h-12 w-full border border-[#3d3d3d] bg-transparent px-4 font-sans text-[14px] outline-none transition-colors duration-300 focus:border-[#056cf2]">
                  <option>Select a service</option>
                  <option>IA 30D</option>
                  <option>Discovery</option>
                  <option>Autonomía IA</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block font-mono text-[10px] font-medium leading-[1.4] tracking-[0.04em] text-[#3a3a3a]">
                  YOUR MESSAGE (OPTIONAL)
                </span>
                <textarea
                  rows={4}
                  placeholder="What are your projects goals, requirement or specific timeline..."
                  className="w-full border border-[#3d3d3d] bg-transparent px-4 py-3 font-sans text-[14px] outline-none transition-colors duration-300 placeholder:text-[#b0b0b0] focus:border-[#056cf2]"
                />
              </label>

              <label className="flex items-start gap-3 pt-1">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded-none border border-black" />
                <span className="font-mono text-[10px] leading-[1.35] text-[#3a3a3a]">
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

      <Footer />
    </main>
  );
}
