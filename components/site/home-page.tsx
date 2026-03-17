"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

import { Reveal } from "@/components/site/reveal";
import {
  aboutValues,
  footerLinks,
  navLinks,
  principleCards,
  processSteps,
  serviceSessions,
} from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

function SectionTag({
  label,
  invert = false,
}: {
  label: string;
  invert?: boolean;
}) {
  return (
    <div className={`jt-section-tag ${invert ? "text-white" : "text-black"}`}>
      <BlueTriangle size={10} className="shrink-0" />
      <span>[</span>
      <span>{label}</span>
      <span>]</span>
    </div>
  );
}

function BlueTriangle({
  className = "",
  size = 10,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src="/assets/blue_triangle.svg"
      alt=""
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
    />
  );
}

function AccentSquare({
  className = "",
}: {
  className?: string;
}) {
  return <span aria-hidden="true" className={`inline-block bg-[var(--color-primary)] ${className}`} />;
}

function NavSwapLink({
  href,
  label,
  counter,
  variant,
  className = "",
  onClick,
  external = false,
  target,
  rel,
  baseColor,
  hoverColorOverride,
}: {
  href: string;
  label: string;
  counter?: string;
  variant: "nav" | "footer" | "menuContact" | "menuOverlay";
  className?: string;
  onClick?: () => void;
  external?: boolean;
  target?: string;
  rel?: string;
  baseColor?: string;
  hoverColorOverride?: string;
}) {
  const rowClassName =
    variant === "nav"
      ? "jt-nav-link-row jt-nav-link"
      : variant === "footer"
        ? "jt-footer-link-row jt-footer-link"
        : variant === "menuOverlay"
          ? "flex justify-center font-sans text-[34px] font-bold uppercase leading-[100%] tracking-[-0.04em] md:text-[58px]"
          : "whitespace-nowrap font-sans text-[22px] font-medium leading-[120%] tracking-[-0.03em] md:text-[30px]";

  const swapDistance =
    variant === "nav"
      ? "var(--nav-link-height)"
      : variant === "footer"
        ? "var(--footer-link-height)"
        : variant === "menuOverlay"
          ? "58px"
          : "36px";
  const hoverColor =
    variant === "menuOverlay" || variant === "menuContact"
      ? "var(--color-black)"
      : "var(--color-primary)";
  const resolvedBaseColor = baseColor ?? "var(--color-white)";
  const resolvedHoverColor = hoverColorOverride ?? hoverColor;

  const content = (
    <>
      <span
        className="jt-hover-swap"
        aria-hidden="true"
        style={{ ["--swap-distance" as string]: swapDistance }}
      >
        <span className="jt-hover-swap-track">
          <span className={rowClassName} style={{ color: resolvedBaseColor }}>
            {label}
          </span>
          <span className={rowClassName} style={{ color: resolvedHoverColor }}>
            {label}
          </span>
        </span>
      </span>
      {counter ? (
        <span
          className="pointer-events-none absolute -right-[6px] -top-[11px] font-mono text-[8px] font-medium leading-[140%] tracking-[-0.4px]"
          style={{ color: "var(--color-primary)" }}
        >
          {counter}
        </span>
      ) : null}
    </>
  );

  const commonClassName = `jt-hover-swap-root relative inline-flex items-start overflow-visible ${className}`;

  if (external) {
    return (
      <a href={href} onClick={onClick} className={commonClassName} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={commonClassName}>
      {content}
    </Link>
  );
}

function AboutAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof aboutValues)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[8px] bg-[var(--color-gray-bg)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start gap-3 px-[16px] py-[11px] text-left md:px-[18px] md:py-[12px]"
      >
        <span className="jt-muted-dark pt-[1px] font-sans text-[18px] leading-none">
          {isOpen ? "−" : "+"}
        </span>
        <span className="font-sans text-[16px] font-medium leading-[150%] tracking-[-0.02em] text-black">
          {item.title}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={reduceMotion ? {} : { height: "auto", opacity: 1 }}
            exit={reduceMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="overflow-hidden"
          >
            <p className="jt-muted-dark px-[36px] pb-[14px] pr-[20px] font-sans text-[15px] leading-[140%] tracking-[-0.01em] md:px-[40px] md:pb-[16px] md:pr-[22px] md:text-[18px]">
              {item.description}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const lineTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.48, ease: smoothEase };
  const shellTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.62, ease: smoothEase };
  const contentTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.52, ease: smoothEase };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full backdrop-blur-[10px]" />
        <div className="relative w-full max-w-[var(--nav-shell-width)] p-[var(--nav-shell-outer-padding)] backdrop-blur-[7px]">
          <motion.div
            initial={false}
            animate={{
              backgroundColor: menuOpen ? "var(--color-primary-light)" : "var(--color-black)",
            }}
            transition={shellTransition}
            className="overflow-hidden rounded-none px-[var(--nav-shell-inner-padding-x)] py-[var(--nav-shell-inner-padding-y)] backdrop-blur-[10px]"
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-center">
              <div className="justify-self-start">
                <Link
                  href="/"
                  className="relative block h-[var(--nav-logo-height)] w-[var(--nav-logo-width)]"
                  aria-label="James Tech"
                >
                  <Image
                    src="/assets/logo.png"
                    alt="James Tech"
                    fill
                    priority
                    sizes="83px"
                    className="object-contain object-left"
                  />
                </Link>
              </div>

              <motion.nav
                initial={false}
                animate={menuOpen ? { opacity: 0, y: -8 } : { opacity: 1, y: 0 }}
                transition={contentTransition}
                className="hidden items-center gap-[var(--nav-link-gap)] md:flex"
                style={{ pointerEvents: menuOpen ? "none" : "auto" }}
              >
                {navLinks.map((item) => (
                  <NavSwapLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    counter={item.counter}
                    variant="nav"
                  />
                ))}
                <NavSwapLink
                  href="/contact"
                  label="CONTACT"
                  variant="nav"
                  baseColor="var(--color-primary)"
                  hoverColorOverride="var(--color-white)"
                />
              </motion.nav>

              <div className="ml-auto flex items-center gap-3 justify-self-end md:gap-4">
                <button
                  type="button"
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="relative flex h-[var(--nav-burger-height)] w-[var(--nav-burger-width)]"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={menuOpen}
                >
                  <motion.span
                    className="absolute left-0 top-[calc(50%-5px)] block h-[2px] w-full"
                    initial={false}
                    animate={menuOpen ? { top: "calc(50% - 1px)", rotate: 45 } : { top: "calc(50% - 5px)", rotate: 0 }}
                    transition={lineTransition}
                    style={{ backgroundColor: "var(--color-white)" }}
                  />
                  <motion.span
                    className="absolute left-0 top-[calc(50%+3px)] block h-[2px] w-full"
                    initial={false}
                    animate={menuOpen ? { top: "calc(50% - 1px)", rotate: -45 } : { top: "calc(50% + 3px)", rotate: 0 }}
                    transition={lineTransition}
                    style={{ backgroundColor: "var(--color-white)" }}
                  />
                </button>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {menuOpen ? (
                <motion.div
                  key="menu-expand"
                  initial={reduceMotion ? false : { height: 0, opacity: 1, clipPath: "inset(100% 0 0 0)" }}
                  animate={reduceMotion ? {} : { height: "auto", opacity: 1, clipPath: "inset(0 0 0 0)" }}
                  exit={reduceMotion ? {} : { height: 0, opacity: 1, clipPath: "inset(100% 0 0 0)" }}
                  transition={shellTransition}
                  className="overflow-hidden"
                >
                  <div className="flex min-h-[260px] flex-col pt-8 md:min-h-[292px] md:pt-10">
                    <div className="flex flex-1 flex-col items-center justify-center gap-1 py-8 text-center md:gap-2">
                      {[...navLinks, { href: "/contact", label: "CONTACT" }].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={reduceMotion ? false : { opacity: 0, y: 38 }}
                          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                          exit={reduceMotion ? {} : { opacity: 0, y: 14 }}
                          transition={{
                            duration: 0.42,
                            ease: smoothEase,
                            delay: reduceMotion ? 0 : 0.16 + index * 0.05,
                          }}
                        >
                          <NavSwapLink
                            href={item.href}
                            label={item.label}
                            counter={item.counter}
                            variant="menuOverlay"
                            className="items-center"
                            onClick={() => setMenuOpen(false)}
                          />
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
                      exit={reduceMotion ? {} : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: smoothEase, delay: reduceMotion ? 0 : 0.24 }}
                      className="border-t border-[var(--color-gray)] pt-4 md:pt-6"
                    >
                      <div className="flex w-full items-center justify-between gap-6 text-white">
                        <div className="flex-1 text-left">
                          <NavSwapLink
                            href="mailto:james.tech.latam@gmail.com"
                            label="james.tech.latam@gmail.com"
                            variant="menuContact"
                            className="items-start"
                            external
                          />
                        </div>
                        <div className="flex-1 text-right">
                          <NavSwapLink
                            href="tel:+541169602358"
                            label="(+54) 11 6960 2358"
                            variant="menuContact"
                            className="items-end"
                            external
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black px-5 pb-[32px] pt-[112px] text-white md:px-6 md:pb-[42px] md:pt-[118px] xl:px-10 xl:pt-[116px]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0"

        />
        <motion.div
          className="absolute inset-0"
          style={{ y: reduceMotion ? 0 : backgroundY }}
          animate={reduceMotion ? {} : undefined}
          transition={undefined}
        >
          <motion.div className="absolute inset-0" style={{ scale: reduceMotion ? 1 : backgroundScale }}>
            <Image
              src="/assets/hero-background.avif"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
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
        <div
          className="absolute inset-0"
  
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1300px] flex-col justify-between gap-8 md:min-h-[calc(100vh-168px)]">
        <div className="flex justify-end">
          <Reveal>
            <p className="font-sans text-[44px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[74px] xl:text-[84px]">
              ©2026
            </p>
          </Reveal>
        </div>

        <div className="mt-auto flex flex-col gap-8 md:gap-10">
          <Reveal delay={0.08} className="max-w-[640px] xl:max-w-[700px]">
            <p className="font-sans text-[20px] font-medium leading-[120%] tracking-[-0.03em] text-white md:text-[24px] xl:text-[32px]">
              Transformá tu empresa, implementá IA con resultados medibles en 30 días.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal delay={0.16}>
              <h1 className="flex items-end gap-[10px] font-sans text-[76px] font-bold uppercase leading-none tracking-[-0.4px] text-white md:gap-[14px] md:text-[141px] xl:gap-[18px] xl:text-[176px]">
                <span>IA 30D</span>
                <AccentSquare className="mb-[8px] h-[14px] w-[14px] md:mb-[18px] md:h-[22px] md:w-[22px] xl:mb-[24px] xl:h-[28px] xl:w-[28px]" />
              </h1>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-mono text-[18px] font-medium leading-[120%] tracking-[0em] text-white md:pb-3 md:text-[19px] xl:text-[24px]">
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
  const [activeValue, setActiveValue] = useState("");

  return (
    <section id="studio" className="bg-white px-5 py-[50px] text-black md:px-6 xl:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:gap-[40px]">
        <Reveal>
          <SectionTag label="SOBRE MI" />
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-[40px]">
          <Reveal className="flex items-start justify-between gap-6">
            <h2 className="jt-heading-lg">Sobre mi.</h2>
            <div className="relative hidden h-[133px] w-[226px] overflow-hidden rounded-[4px] md:block">
              <Image
                src="/assets/reunion.avif"
                alt="Team image"
                fill
                sizes="226px"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="jt-divider-dark flex flex-col gap-6 border-t pt-6 md:gap-8 md:pt-8">
            <div className="relative h-[133px] w-full overflow-hidden md:hidden">
              <Image
                src="/assets/reunion.avif"
                alt="Team image"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            <h3 className="max-w-[1020px] font-sans text-[34px] font-semibold leading-[100%] tracking-[-0.04em] md:text-[60px] xl:text-[72px]">
              <span className="text-black">Mi misión.</span>{" "}
              <span className="jt-muted-dark">
                Hacer que la IA sea tu ventaja competitiva
              </span>
            </h3>

            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_460px] xl:gap-10">
              <p className="jt-muted-dark max-w-[560px] font-sans text-[14px] leading-[140%] tracking-[-0.01em] md:text-[18px]">
                Ayudo a personas y empresas a implementar tecnología de forma práctica, con impacto real en la eficiencia operativa y resultados concretos, dejando equipos autónomos y sin dependencia externa.
              </p>

              <div className="jt-divider-dark space-y-2 border-t pt-2 xl:w-[460px] xl:border-t-0 xl:pt-0">
                {aboutValues.map((item) => (
                  <AboutAccordionItem
                    key={item.title}
                    item={item}
                    isOpen={activeValue === item.title}
                    onToggle={() =>
                      setActiveValue((current) => (current === item.title ? "" : item.title))
                    }
                  />
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
    <div className="mt-6 flex gap-4 overflow-hidden">
      <div className="relative h-[79px] flex-1 overflow-hidden md:h-[138px] md:max-w-[278px]">
        <Image
          src={imageLeft}
          alt={`${title} image 1`}
          fill
          sizes="(max-width: 809px) 50vw, 278px"
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[79px] flex-1 overflow-hidden md:h-[138px] md:max-w-[221px]">
        <Image
          src={imageRight}
          alt={`${title} image 2`}
          fill
          sizes="(max-width: 809px) 50vw, 221px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}

function SessionDescription({
  description,
  emphasis = [],
}: {
  description: string;
  emphasis?: string[];
}) {
  if (!emphasis.length) {
    return <>{description}</>;
  }

  const ranges: Array<{ start: number; end: number; strong: boolean }> = [];
  let searchFrom = 0;

  for (const phrase of emphasis) {
    const start = description.indexOf(phrase, searchFrom);
    if (start === -1) {
      continue;
    }
    ranges.push({ start, end: start + phrase.length, strong: true });
    searchFrom = start + phrase.length;
  }

  if (!ranges.length) {
    return <>{description}</>;
  }

  const parts: Array<{ text: string; strong: boolean }> = [];
  let cursor = 0;

  for (const range of ranges) {
    if (range.start > cursor) {
      parts.push({ text: description.slice(cursor, range.start), strong: false });
    }
    parts.push({ text: description.slice(range.start, range.end), strong: true });
    cursor = range.end;
  }

  if (cursor < description.length) {
    parts.push({ text: description.slice(cursor), strong: false });
  }

  return (
    <>
      {parts.map((part, index) =>
        part.strong ? <strong key={`${part.text}-${index}`}>{part.text}</strong> : <span key={`${part.text}-${index}`}>{part.text}</span>,
      )}
    </>
  );
}

function ServicesSection() {
  const [activeId, setActiveId] = useState("");
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white px-5 py-[41px] text-black md:px-6 md:py-[50px] xl:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-6 md:gap-[32px]">
        <Reveal>
          <SectionTag label="SERVICIOS" />
        </Reveal>

        <Reveal delay={0.06} className="flex flex-col gap-4">
          <h2 className="jt-heading-lg">
            Que es <span className="text-[var(--color-primary)]">IA 30D.</span>
          </h2>
          <div className="space-y-2">
            <p className="jt-muted-dark max-w-[880px] font-sans text-[14px] leading-[140%] tracking-[-0.01em] md:text-[18px]">
              Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
            </p>
            <p className="jt-muted-dark max-w-[1040px] font-sans text-[14px] leading-[140%] tracking-[-0.01em] md:text-[18px]">
              Se compone de 4 sesiones progresivas a lo largo de 30 días corridos pensadas para acompañar desde el entendimiento hasta la integración real de la IA en el trabajo diario.
            </p>
          </div>
        </Reveal>

        <LayoutGroup>
          <div className="jt-divider-dark border-t">
            {serviceSessions.map((session) => {
              const isOpen = session.id === activeId;

              return (
                <motion.section layout key={session.id} className="jt-divider-dark border-b">
                  <button
                    type="button"
                    className="flex w-full flex-col py-5 text-left md:py-8"
                    onClick={() => setActiveId((current) => (current === session.id ? "" : session.id))}
                    aria-expanded={isOpen}
                  >
                    <div className="grid grid-cols-[76px_minmax(0,1fr)_32px] items-center gap-4 md:grid-cols-[116px_minmax(0,1fr)_40px] md:gap-6">
                      <div className="font-mono text-[24px] font-semibold leading-[120%] tracking-[-0.4px] text-black md:text-[48px]">
                        {session.number}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-sans text-[26px] font-semibold leading-[120%] tracking-[-0.4px] text-black md:text-[48px]">
                          {session.title}
                        </h3>
                      </div>

                      <span className="ml-auto block text-right font-sans text-[28px] font-light leading-none text-[var(--color-primary)] md:text-[44px]">
                        {isOpen ? "×" : "+"}
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          key="content"
                          initial={reduceMotion ? false : { opacity: 0, height: 0, marginTop: 0 }}
                          animate={reduceMotion ? {} : { opacity: 1, height: "auto", marginTop: 40 }}
                          exit={reduceMotion ? {} : { opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.45, ease: smoothEase }}
                          className="overflow-hidden"
                        >
                          <div className="grid gap-5 md:grid-cols-[116px_minmax(0,1fr)] md:gap-6">
                            <div />

                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                              <div className="min-w-0 flex-1">
                                <div className="flex w-full flex-col gap-3">
                                  <div className="jt-divider-dark-fill h-px w-full" />
                                  {session.bullets.map((bullet, index) => (
                                    <div key={bullet} className="flex flex-col gap-3">
                                      <div className="flex items-center gap-3">
                                        <BlueTriangle size={10} className="shrink-0 md:h-3 md:w-3" />
                                        <p className="font-sans text-[15px] font-normal leading-[140%] tracking-[-0.01em] text-black md:text-[18px]">
                                          {bullet}
                                        </p>
                                      </div>
                                      {index < session.bullets.length - 1 ? (
                                        <div className="jt-divider-dark-fill h-px w-full" />
                                      ) : null}
                                    </div>
                                  ))}
                                </div>
                                <SessionImages
                                  imageLeft={session.imageLeft}
                                  imageRight={session.imageRight}
                                  title={session.title}
                                />
                              </div>

                              <p className="jt-muted-dark max-w-[378px] font-sans text-[16px] leading-[150%] tracking-[-0.02em] md:w-[40%] md:min-w-[320px] md:text-[18px]">
                                <SessionDescription
                                  description={session.description}
                                  emphasis={session.descriptionEmphasis}
                                />
                              </p>
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
    <section className="bg-black px-5 py-12 text-white md:px-6 md:py-16 xl:px-10">
      <div className="relative mx-auto max-w-[1300px] overflow-hidden">
        <Image
          src="/assets/grain-background.avif"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div
          className="absolute inset-0"
        />

        <div className="relative z-10 flex min-h-[360px] flex-col items-start justify-center gap-10 py-8 md:min-h-[470px] md:gap-12 md:py-10 xl:min-h-[560px] xl:gap-14">
          <Reveal>
            <p className="flex w-full items-end gap-[10px] text-left font-sans text-[76px] font-bold leading-[100%] tracking-[-0.4px] md:gap-[14px] md:text-[141px] xl:gap-[18px] xl:text-[176px]">
              <span>APLICAR</span>
              <AccentSquare className="mb-[10px] h-[14px] w-[14px] md:mb-[18px] md:h-[22px] md:w-[22px] xl:mb-[24px] xl:h-[28px] xl:w-[28px]" />
            </p>
          </Reveal>
          <Reveal delay={0.08} className="mx-auto flex w-full justify-center text-center">
            <p className="mx-auto w-full max-w-[640px] py-5 text-center font-sans text-[30px] font-medium italic leading-[118%] tracking-[-0.03em] text-white md:py-8 md:text-[32px] xl:text-[28px]">
              "El ser humano no fue creado para
              <br />
              llenar planillas y tildar casilleros"
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="flex w-full items-end gap-[10px] text-left font-sans text-[76px] font-bold leading-[100%] tracking-[-0.4px] text-[var(--color-primary)] md:gap-[14px] md:text-[141px] xl:gap-[18px] xl:text-[176px]">
              <span>ESCALAR</span>
              <AccentSquare className="mb-[10px] h-[14px] w-[14px] bg-white md:mb-[18px] md:h-[22px] md:w-[22px] xl:mb-[24px] xl:h-[28px] xl:w-[28px]" />
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-white px-5 py-[40px] text-black md:px-6 md:py-[50px] xl:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-8 md:gap-[40px]">
        <Reveal className="flex justify-center">
          <SectionTag label="FORMA DE TRABAJO" />
        </Reveal>

        <Reveal delay={0.06} className="text-center">
          <h2 className="jt-heading-lg">
            Nuestro Proceso Juntos<span className="text-[var(--color-primary)]">.</span>
          </h2>
        </Reveal>

        <div className="jt-divider-dark grid grid-cols-3 gap-5 border-t pt-10 md:gap-10 md:pt-14 xl:gap-12 xl:pt-16">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.number}
              delay={0.08 + index * 0.05}
              className="flex flex-col items-center text-center"
            >
              <SectionTag label={step.number} />
              <div className="group relative mt-5 h-[96px] w-[96px] md:h-[156px] md:w-[156px] xl:h-[184px] xl:w-[184px]">
                <Image
                  src={principleCards[index]?.asset ?? "/assets/circle.avif"}
                  alt={principleCards[index]?.alt ?? ""}
                  fill
                  sizes="(max-width: 809px) 96px, (max-width: 1279px) 156px, 184px"
                  className="object-contain transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-95 group-hover:grayscale"
                />
              </div>
              <h3 className="mt-5 font-sans text-[15px] font-semibold leading-[115%] tracking-[-0.02em] md:text-[24px] xl:text-[28px]">
                {step.title}
              </h3>
              <p className="jt-muted-dark mt-3 max-w-[210px] font-sans text-[11px] leading-[135%] tracking-[-0.01em] md:max-w-[320px] md:text-[16px] xl:text-[18px]">
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
    <footer className="bg-black px-5 pb-[20px] pt-[36px] text-white md:px-6 md:pb-[28px] md:pt-[48px] xl:px-10 xl:pb-[34px] xl:pt-[56px]">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-[38px] md:gap-[46px] xl:gap-[54px]">
        <Reveal>
          <Link href={footerLinks.contact.href} className="jt-contact-link">
            <span className="jt-contact-link-fill" />
            <span className="jt-contact-link-content">
              <span>CONTACTO</span>
              <span className="jt-contact-link-arrow">
                <Image
                  src="/assets/black_arrow.svg"
                  alt=""
                  width={154}
                  height={154}
                  aria-hidden="true"
                  className="h-[46px] w-auto md:h-[66px] xl:h-[92px]"
                />
              </span>
            </span>
          </Link>
        </Reveal>

        <div className="flex flex-col gap-[22px] md:grid md:grid-cols-2 md:gap-[28px] xl:flex xl:flex-row xl:items-start xl:justify-between">
          <div className="flex flex-col gap-4">
            <SectionTag label="NAVEGAR" invert />
            <div className="flex min-w-[166px] flex-col gap-[4px]">
              {footerLinks.navigate.map((item) => (
                <NavSwapLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  variant="footer"
                  className="h-[50px] items-center"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 xl:ml-auto xl:min-w-[280px] xl:items-end">
            <div className="xl:w-[240px] xl:pl-[2px]">
              <SectionTag label="CONECTAR" invert />
            </div>
            <div className="flex w-full flex-col gap-[4px] xl:w-[240px] xl:items-start">
              {footerLinks.connect.map((item) => (
                <NavSwapLink
                  key={item.label}
                  href={item.href}
                  label={item.label}
                  variant="footer"
                  className="h-[50px] items-center"
                  external
                  target="_blank"
                  rel="noreferrer"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-[6px] font-sans text-[14px] font-medium leading-[150%] tracking-[-0.02em] text-white md:flex-row md:items-center md:justify-between">
          <p>© JamesTech 2026</p>
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            {footerLinks.legal.map((item, index) => (
              <span key={item} className="flex items-center gap-2 md:gap-3">
                <span>{item}</span>
                {index < footerLinks.legal.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </div>
          <Link href="#hero" className="transition-opacity duration-300 hover:opacity-70">
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
