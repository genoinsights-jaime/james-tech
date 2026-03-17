"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useState } from "react";

import {
  aboutValues,
  footerLinks,
  navLinks,
  principleCards,
  processSteps,
  serviceSessions,
} from "@/lib/site-content";
import { Reveal } from "@/components/site/reveal";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SectionTag({
  label,
  invert = false,
}: {
  label: string;
  invert?: boolean;
}) {
  return (
    <div
      className={`jt-section-tag ${invert ? "text-white" : "text-[#020120]"}`}
    >
      <span className="text-[#056cf2]">▲</span>
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const lineTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.35, ease: smoothEase };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-[1300px] items-center justify-between rounded-full border border-white/8 bg-black/80 px-4 py-3 backdrop-blur-md md:px-5">
          <Link
            href="#hero"
            className="relative h-[18px] w-[43px] shrink-0 transition-opacity duration-300 hover:opacity-80 md:h-[20px] md:w-[48px]"
            aria-label="James Tech"
          >
            <Image
              src="/assets/logo.png"
              alt="James Tech"
              fill
              priority
              sizes="48px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="jt-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="group flex h-9 w-9 items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative block h-5 w-7">
              <motion.span
                className="absolute left-0 top-[3px] block h-[2px] w-full bg-white"
                animate={menuOpen ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={lineTransition}
              />
              <motion.span
                className="absolute bottom-[3px] left-0 block h-[2px] w-full bg-white"
                animate={
                  menuOpen ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }
                }
                transition={lineTransition}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            exit={reduceMotion ? {} : { opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="fixed inset-2 z-40 overflow-hidden rounded-[2px] border border-white/10 bg-[#056cf2] pt-24 text-white md:pt-28"
          >
            <div className="mx-auto flex h-full max-w-[1300px] flex-col justify-between px-5 pb-8 md:px-10 md:pb-10">
              <div className="flex flex-col items-center gap-7 pt-2 text-center md:gap-8">
                <div className="font-mono text-[10px] font-medium tracking-[0.02em] text-black md:text-[12px]">
                  [06]
                </div>
                <div className="flex flex-col items-center gap-4 md:gap-5">
                  {[
                    { href: "#services", label: "IA-30D" },
                    { href: "#studio", label: "ABOUT" },
                    { href: "#services", label: "SERVICES" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-sans text-[34px] font-medium tracking-[-0.04em] transition-opacity duration-300 hover:opacity-70 md:text-[44px]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-10 border-t border-white/35 py-7 text-center md:py-9">
                <div className="flex flex-col items-center gap-4">
                  <a
                    href="mailto:james.tech.latam@gmail.com"
                    className="font-sans text-[22px] font-medium tracking-[-0.03em] transition-opacity duration-300 hover:opacity-75 md:text-[28px]"
                  >
                    james.tech.latam@gmail.com
                  </a>
                  <a
                    href="tel:+541169602358"
                    className="font-sans text-[22px] font-medium tracking-[-0.03em] transition-opacity duration-300 hover:opacity-75 md:text-[28px]"
                  >
                    (+54) 11 6960 2358
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[94svh] items-end overflow-hidden bg-black px-5 pb-15 pt-30 text-white md:min-h-screen md:px-10 md:pb-15"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(79,47,230,0.2),transparent_40%)]" />
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? {} : { scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src="/assets/hero-background.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 opacity-55 mix-blend-screen">
          <Image
            src="/assets/grain-background.avif"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.84)_0%,rgba(0,0,0,0.25)_20%,rgba(0,0,0,0.15)_60%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col justify-between gap-8 md:min-h-[calc(100vh-180px)]">
        <div className="flex justify-end">
          <Reveal>
            <p className="font-sans text-[52px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[100px]">
              ©2026
            </p>
          </Reveal>
        </div>

        <div className="mt-auto flex flex-col gap-8 md:gap-10">
          <Reveal delay={0.08} className="max-w-[640px]">
            <p className="font-sans text-[20px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[32px]">
              Transformá tu empresa, implementá IA con resultados medibles en 30 días.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.16}>
              <h1 className="font-sans text-[76px] font-bold uppercase leading-none tracking-[-0.04em] text-white md:text-[176px]">
                IA 30D<span className="text-[#056cf2]">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-mono text-[18px] font-medium leading-[1.5] text-white md:pb-3 md:text-[24px]">
                [by James Tech]
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="studio" className="bg-[#f9f9f9] px-5 py-[50px] text-black md:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:gap-[40px]">
        <Reveal>
          <SectionTag label="SOBRE MI" />
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-[40px]">
          <Reveal className="flex items-start justify-between gap-6">
            <h2 className="jt-heading-lg">Sobre mi.</h2>
            <div className="relative hidden h-[133px] w-[226px] overflow-hidden md:block">
              <Image
                src="/assets/reunion.avif"
                alt="Team image"
                fill
                sizes="226px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-6 border-t border-[#e8e8e8] pt-6 md:gap-8 md:pt-8">
            <div className="relative h-[133px] w-full overflow-hidden md:hidden">
              <Image
                src="/assets/reunion.avif"
                alt="Team image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <h3 className="max-w-[900px] font-sans text-[34px] font-semibold leading-[0.98] tracking-[-0.04em] md:text-[60px]">
              <span className="text-black">Mi misión.</span>{" "}
              <span className="text-[#7b7b7b]">
                Hacer que la IA sea tu ventaja competitiva
              </span>
            </h3>

            <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_320px] md:gap-10">
              <p className="max-w-[560px] font-sans text-[14px] leading-[1.35] tracking-[-0.01em] text-[#6f6f6f] md:text-[16px]">
                Ayudo a personas y empresas a implementar tecnología de forma práctica, con impacto real en la eficiencia operativa y resultados concretos, dejando equipos autónomos y sin dependencia externa.
              </p>

              <div className="space-y-2 border-t border-[#e8e8e8] pt-1 md:border-t-0 md:pt-0">
                {aboutValues.map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-[#e8e8e8] py-2 font-sans text-[12px] font-medium leading-[1.3] tracking-[-0.01em] text-[#4d4d4d] md:text-[13px]"
                  >
                    + {item.title}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SessionImages({
  imageLeft,
  imageRight,
  title,
}: {
  imageLeft?: string;
  imageRight?: string;
  title: string;
}) {
  if (!imageLeft || !imageRight) {
    return null;
  }

  return (
    <div className="mt-4 flex gap-3 overflow-hidden md:mt-5">
      <div className="relative h-[56px] flex-1 overflow-hidden rounded-[2px] md:h-[79px]">
        <Image
          src={imageLeft}
          alt={`${title} image 1`}
          fill
          sizes="(max-width: 768px) 50vw, 223px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="relative h-[56px] flex-1 overflow-hidden rounded-[2px] md:h-[79px]">
        <Image
          src={imageRight}
          alt={`${title} image 2`}
          fill
          sizes="(max-width: 768px) 50vw, 217px"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

function ServicesSection() {
  const [activeId, setActiveId] = useState(serviceSessions[0]?.id ?? "");
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-[#f9f9f9] px-5 py-[41px] text-black md:px-10 md:py-[50px]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-6 md:gap-[32px]">
        <Reveal>
          <SectionTag label="SERVICIOS" />
        </Reveal>

        <Reveal delay={0.06} className="flex flex-col gap-4">
          <h2 className="jt-heading-lg">
            Que es <span className="text-[#056cf2]">IA 30D.</span>
          </h2>
          <div className="space-y-2">
            <p className="max-w-[880px] font-sans text-[14px] leading-[1.35] tracking-[-0.01em] text-[#6f6f6f] md:text-[16px]">
              Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
            </p>
            <p className="max-w-[1040px] font-sans text-[14px] leading-[1.35] tracking-[-0.01em] text-[#6f6f6f] md:text-[16px]">
              Se compone de 4 sesiones progresivas a lo largo de 30 días corridos pensadas para acompañar desde el entendimiento hasta la integración real de la IA en el trabajo diario.
            </p>
          </div>
        </Reveal>

        <LayoutGroup>
          <div className="border-t border-[#e8e8e8]">
            {serviceSessions.map((session) => {
              const isOpen = session.id === activeId;

              return (
                <motion.section
                  layout
                  key={session.id}
                  className="group border-b border-[#e8e8e8]"
                >
                  <button
                    type="button"
                    className="flex w-full flex-col gap-4 py-5 text-left md:py-8"
                    onClick={() =>
                      setActiveId((current) =>
                        current === session.id ? "" : session.id,
                      )
                    }
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 md:grid md:grid-cols-[92px_minmax(0,1fr)_40px] md:items-start md:gap-6">
                      <div className="pt-1 font-mono text-[12px] font-medium leading-[1.5] md:text-[18px]">
                        {session.number}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-sans text-[24px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[48px]">
                          {session.title}
                        </h3>
                      </div>

                      <span className="ml-auto mt-1 block text-right font-sans text-[22px] leading-none text-[#056cf2] md:mt-2 md:text-[32px]">
                        {isOpen ? "×" : "+"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={
                            reduceMotion
                              ? false
                              : { opacity: 0, height: 0, marginTop: 0 }
                          }
                          animate={
                            reduceMotion
                              ? {}
                              : { opacity: 1, height: "auto", marginTop: 14 }
                          }
                          exit={
                            reduceMotion
                              ? {}
                              : { opacity: 0, height: 0, marginTop: 0 }
                          }
                          transition={{
                            duration: 0.45,
                            ease: smoothEase,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-4 md:grid-cols-[92px_minmax(0,1fr)] md:gap-6">
                            <div />

                            <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_240px] md:gap-8">
                              <div>
                                {session.eyebrow ? (
                                  <p className="mb-3 font-sans text-[12px] leading-[1.3] tracking-[-0.01em] text-[#6f6f6f] md:text-[13px]">
                                    {session.eyebrow}
                                  </p>
                                ) : null}

                                {session.bullets?.length ? (
                                  <div className="space-y-2">
                                    {session.bullets.map((bullet) => (
                                      <p
                                        key={bullet}
                                        className="font-sans text-[12px] font-medium leading-[1.3] tracking-[-0.01em] text-[#4d4d4d] md:text-[13px]"
                                      >
                                        <span className="mr-2 text-[#056cf2]">▲</span>
                                        {bullet}
                                      </p>
                                    ))}
                                  </div>
                                ) : null}

                                <SessionImages
                                  imageLeft={session.imageLeft}
                                  imageRight={session.imageRight}
                                  title={session.title}
                                />
                              </div>

                              {session.description ? (
                                <p className="max-w-[240px] font-sans text-[12px] leading-[1.35] tracking-[-0.01em] text-[#6f6f6f] md:text-[13px]">
                                  {session.description}
                                </p>
                              ) : null}
                            </div>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </button>
                </motion.section>
              );
            })}
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="bg-black px-5 py-12 text-white md:px-10 md:py-16">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden">
        <Image
          src="/assets/grain-background.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,37,37,0.1),rgba(0,0,0,0.78)_72%)]" />

        <div className="relative z-10 flex min-h-[330px] flex-col justify-center gap-2 md:min-h-[420px]">
          <p className="font-sans text-[58px] font-semibold leading-[0.9] tracking-[-0.08em] md:text-[100px]">
            APLICAR<span className="text-[#056cf2]">.</span>
          </p>
          <p className="mx-auto max-w-[168px] text-center font-sans text-[10px] leading-[1.25] tracking-[-0.01em] text-white/80 md:max-w-[240px] md:text-[14px]">
            "El ser humano no fue creado para llenar planillas y tildar casilleros"
          </p>
          <p className="font-sans text-[58px] font-semibold leading-[0.9] tracking-[-0.08em] text-[#056cf2] md:text-[100px]">
            ESCALAR<span className="text-white">.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#f9f9f9] px-5 py-[40px] text-black md:px-10 md:py-[50px]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:gap-[40px]">
        <Reveal className="flex justify-center">
          <SectionTag label="FORMA DE TRABAJO" />
        </Reveal>

        <Reveal delay={0.06} className="text-center">
          <h2 className="jt-heading-lg">
            Nuestro Proceso Juntos<span className="text-[#056cf2]">.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 md:gap-8">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.08 + index * 0.05}
              className="flex flex-col items-center text-center"
            >
              <SectionTag label={step.number} />
              <div className="relative mt-4 h-[72px] w-[72px] md:h-[110px] md:w-[110px]">
                <Image
                  src={principleCards[index]?.asset ?? "/assets/circle.avif"}
                  alt={principleCards[index]?.alt ?? ""}
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 font-sans text-[12px] font-semibold leading-[1.15] tracking-[-0.02em] md:text-[18px]">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[160px] font-sans text-[9px] leading-[1.3] tracking-[-0.01em] text-[#7b7b7b] md:max-w-[260px] md:text-[12px]">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black px-5 pb-[50px] pt-[40px] text-white md:px-10 md:pb-[50px] md:pt-[60px]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-[50px] overflow-hidden">
        <Reveal>
          <Link
            href={footerLinks.contact.href}
            className="jt-contact-link"
          >
            <span className="relative z-10 text-white">CONTACTO</span>
            <span className="relative z-10 ml-3 text-white">→</span>
          </Link>
        </Reveal>

        <div className="grid gap-[50px] md:grid-cols-[184px_min-content_min-content] md:justify-between">
          <div className="flex flex-col gap-6">
            <Link href="/" className="relative h-[20px] w-[48px]">
              <Image
                src="/assets/logo.png"
                alt="James Tech"
                fill
                sizes="48px"
                className="object-contain object-left"
              />
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <SectionTag label="NAVEGAR" invert />
            <div className="flex min-w-[166px] flex-col gap-2">
              {footerLinks.navigate.map((item) => (
                <Link key={item.label} href={item.href} className="jt-footer-link">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <SectionTag label="CONECTAR" invert />
            <div className="flex flex-col gap-2">
              {footerLinks.connect.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="jt-footer-link"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[10px] font-medium leading-[1.5] tracking-[-0.02em] text-white">
            © JamesTech 2026
          </p>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            {footerLinks.legal.map((item) => (
              <span
                key={item}
                className="font-sans text-[10px] leading-[1.5] tracking-[-0.02em] text-white"
              >
                {item}
              </span>
            ))}
          </div>
          <Link
            href="#hero"
            className="font-sans text-[10px] font-medium leading-[1.5] tracking-[-0.02em] text-white transition-opacity duration-300 hover:opacity-70"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function HomePage() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PrinciplesSection />
      <ProcessSection />
      <Footer />
    </main>
  );
}
