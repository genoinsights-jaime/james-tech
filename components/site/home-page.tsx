"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/site/reveal";
import {
  aboutValues,
  footerLinks,
  principleCards,
  serviceSessions,
} from "@/lib/site-content";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const discoveryHref = "/empresas/ia-30d/contacto";

const participantQuotes = [
  {
    quote:
      "La adaptación del curso a las necesidades de la organización y la claridad conceptual para transmitir conceptos técnicos según el nivel de conocimiento de los participantes.",
    author: "Martín",
    note: "Estudio AEVR",
  },
  {
    quote: "Claridad y buena predisposición para adaptarlo a nuestra realidad.",
    author: "Germán Armando",
    note: "Estudio AEVR",
  },
  {
    quote:
      "Lo más valioso fue su enfoque personalizado, adaptado a nuestro trabajo diario, lo que lo hizo especialmente enriquecedor.",
    author: "Valentina",
    note: "Estudio AEVR",
  },
  {
    quote: "Muy cálida tu enseñanza.",
    author: "Raquel",
    note: "Estudio AEVR",
  },
  {
    quote:
      "La explicación. Yo desconocía de IA y aprendí muchas funciones, aunque aún debo ponerlas en práctica.",
    author: "Gloria Coronati",
    note: "Estudio AEVR",
  },
];

const participantVideoInterviews = [
  {
    title: "Cuando la IA empieza a ahorrar tiempo real",
    person: "Adriana Gonzalez",
    company: "Coldwell Banker Grupo Elite",
    duration: "",
    quote: "La inteligencia artificial no vino para reemplazarnos, vino para ayudarnos y hacernos la vida más fácil.",
    image: "/assets/ia30d-testimonials/adriana-gonzalez-cb-elite.jpg",
    youtubeId: "2sejGotsRgM",
  },
  {
    title: "Una herramienta para ordenar el día a día",
    person: "Jimena Santisteban",
    company: "Coldwell Banker Grupo Elite",
    duration: "",
    quote: "Más que un programa, es un aliado para usar en el día a día.",
    image: "/assets/ia30d-testimonials/jimena-santisteban-cb-elite.jpg",
    youtubeId: "m1L17Z2gT7w",
  },
  {
    title: "Un programa adaptado a tu equipo",
    person: "Eduardo Esnaola",
    company: "Estudio AEVR",
    duration: "",
    quote: "Te involucraste muy personalmente en la problemática nuestra del estudio.",
    image: "/assets/ia30d-testimonials/eduardo-esnaola-estudio-aevr.jpg",
    youtubeId: "gdK2-XnipJk",
  },
  {
    title: "IA aplicada a tu realidad, no a un caso genérico",
    person: "Germán Armando",
    company: "Estudio AEVR",
    duration: "",
    quote: "Lograste una adaptación no para abogados en general, sino para nuestro estudio en particular.",
    image: "/assets/ia30d-testimonials/german-armando-estudio-aevr.jpg",
    youtubeId: "-7y-3iN7MQE",
  },
  {
    title: "Menos tareas repetitivas, más trabajo de valor",
    person: "Lorena Etcheverry",
    company: "Estudio AEVR",
    duration: "",
    quote: "La IA tiene un potencial enorme para simplificar tareas repetitivas y liberar tiempo para lo más complejo.",
    image: "/assets/ia30d-testimonials/lorena-etcheverry-estudio-aevr.jpg",
    youtubeId: "yacB1X89Q9I",
  },
  {
    title: "El cambio empieza cuando el equipo se involucra",
    person: "María Victoria Esnaola",
    company: "Estudio AEVR",
    duration: "",
    quote: "Se generó otro tipo de ambiente: más consultas, más conversación y más ganas de aplicar IA.",
    image: "/assets/ia30d-testimonials/maria-victoria-esnaola-estudio-aevr.jpg",
    youtubeId: "blJJr4ZJzyY",
  },
];

const aboutValueVisuals = [
  {
    photo: "/assets/about-values/coldwell-banker-grupo-elite-dsc03290.jpg",
    alt: "Equipo reunido luego de una jornada de trabajo",
  },
  {
    photo: "/assets/about-values/estudio-aevr-dsc03890.jpg",
    alt: "Presentación práctica frente a un equipo",
  },
  {
    photo: "/assets/about-jaime-dsc03808-blur.png",
    alt: "Jaime presentando frente a una audiencia",
  },
];

const processDiscoveryDetails = [
  "Visita presencial para ver cómo trabaja el equipo en su contexto real.",
  "Mapeo de áreas, roles y oportunidades concretas de adopción.",
  "Investigación del rubro y del modelo de negocio antes de diseñar las sesiones.",
];

const processIa30dDetails = [
  "Cuatro sesiones presenciales con contenido variable según el grupo y el nivel de adopción.",
  "Trabajo práctico por áreas para que cada equipo construya algo que pueda seguir usando.",
  "Seguimiento entre sesiones para transformar ideas en herramientas concretas.",
];

const processAutonomyDetails = [
  "No nos guardamos la metodología: dejamos criterios, mentalidad y herramientas para seguir iterando.",
  "El programa llega hasta prototipos y primeras implementaciones útiles para el equipo.",
];

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

function SectionCTA({
  label,
  href = discoveryHref,
  invert = false,
  compact = false,
  align = "left",
}: {
  label: string;
  href?: string;
  invert?: boolean;
  compact?: boolean;
  align?: "left" | "center";
}) {
  const isExternal = href.startsWith("http");

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-3">
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </span>
  );

  const className = `group relative inline-flex items-center overflow-hidden rounded-full border bg-[var(--color-primary)] px-5 font-mono text-[12px] font-semibold uppercase tracking-[0.14em] !text-white transition duration-300 visited:!text-white hover:!text-white [&_*]:!text-white md:px-6 ${
    compact ? "py-2.5" : "py-3"
  } ${
    invert
      ? "border-[var(--color-primary)] hover:border-white/24"
      : "border-[var(--color-primary)] hover:border-black"
  }`;

  const fill = (
    <span
      aria-hidden="true"
      className="absolute inset-0 z-0 origin-left scale-x-0 rounded-full bg-black transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
    />
  );

  const wrapperClass = align === "center" ? "flex justify-center" : "flex";

  return (
    <div className={wrapperClass}>
      {isExternal ? (
        <a href={href} target="_blank" rel="noreferrer" className={className}>
          {fill}
          {content}
        </a>
      ) : (
        <Link href={href} className={className}>
          {fill}
          {content}
        </Link>
      )}
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
  disabled = false,
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
  disabled?: boolean;
}) {
  const rowClassName =
    variant === "nav"
      ? "jt-nav-link-row jt-nav-link"
      : variant === "footer"
        ? "jt-footer-link-row jt-footer-link"
        : variant === "menuOverlay"
          ? "flex h-[var(--menu-overlay-link-height)] items-center justify-center font-sans text-[34px] font-bold uppercase leading-[100%] tracking-[-0.04em] md:text-[58px]"
          : "flex h-[var(--menu-contact-link-height)] items-center whitespace-nowrap font-sans text-[14px] font-medium leading-[120%] tracking-[-0.02em] md:text-[30px]";

  const swapDistance =
    variant === "nav"
      ? "var(--nav-link-height)"
      : variant === "footer"
        ? "var(--footer-link-height)"
        : variant === "menuOverlay"
          ? "var(--menu-overlay-link-height)"
          : "var(--menu-contact-link-height)";
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

  if (disabled) {
    return <span className={commonClassName}>{content}</span>;
  }

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

function AboutValueCard({
  item,
  photo,
  revealProgress,
  alt,
}: {
  item: (typeof aboutValues)[number];
  photo: string;
  revealProgress: MotionValue<number>;
  alt: string;
}) {
  const clipPath = useTransform(revealProgress, [0.12, 0.52], ["inset(100% 0% 0% 0%)", "inset(0% 0% 0% 0%)"]);
  const imageOpacity = useTransform(revealProgress, [0.12, 0.22], [0, 1]);
  const imageScale = useTransform(revealProgress, [0.12, 0.52], [1.08, 1]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
      <div className="flex min-h-[178px] flex-1 flex-col gap-4 px-5 py-5 md:min-h-[190px] md:px-6 md:py-6">
        <p className="font-sans text-[26px] font-semibold leading-[1.02] tracking-[-0.04em] text-black md:min-h-[44px] md:text-[30px]">
          {item.title}
        </p>
        <p className="font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/66 md:text-[18px]">
          {item.description}
        </p>
      </div>
      <div className="relative h-[245px] overflow-hidden bg-[#f3f5f8]">
        <motion.div style={{ clipPath, opacity: imageOpacity }} className="absolute inset-0 overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="relative h-full w-full">
            <Image src={photo} alt={alt} fill sizes="(max-width: 1279px) 100vw, 33vw" className="object-cover" />
          </motion.div>
        </motion.div>
      </div>
    </article>
  );
}

function AboutValueCardMobile({
  item,
  photo,
  alt,
}: {
  item: (typeof aboutValues)[number];
  photo: string;
  alt: string;
}) {
  return (
    <Reveal distance={40}>
      <article className="flex flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_38px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col gap-3 px-5 py-5">
          <p className="font-sans text-[26px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
            {item.title}
          </p>
          <p className="font-sans text-[17px] leading-[1.5] tracking-[-0.02em] text-black/66">
            {item.description}
          </p>
        </div>
        <div className="relative h-[230px] overflow-hidden bg-[#f3f5f8]">
          <Image src={photo} alt={alt} fill sizes="100vw" className="object-cover object-center" />
        </div>
      </article>
    </Reveal>
  );
}

const navTarget = "/empresas/ia-30d/contacto";

// href: null = placeholder, not wired to a destination yet.
const headerNavItems: { label: string; href: string | null }[] = [
  { label: "Home", href: "/" },
  { label: "Personas", href: "/personas" },
  { label: "Empresas", href: "/empresas/ia-30d" },
  { label: "Sobre Mi", href: null },
  { label: "Contacto", href: null },
];

function activeNavLabel(pathname: string): string {
  if (pathname === "/") return "Home";
  if (pathname.startsWith("/personas")) return "Personas";
  return "Empresas";
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.58),rgba(0,0,0,0.08))] backdrop-blur-[10px]" />
      <div className="relative mx-auto flex max-w-[1300px] items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 xl:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <Image src="/assets/favicon.png" alt="Mentalidad IA" width={38} height={38} className="h-9 w-9 md:h-10 md:w-10" />
          <p className="font-sans text-[19px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[24px]">
            Mentalidad IA
          </p>
        </Link>

        <nav className="hidden flex-wrap items-center gap-3 md:flex">
          {headerNavItems.map((item) => {
            const active = item.label === activeNavLabel(pathname);
            const pillBase = "rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.15em] transition-colors";

            if (!item.href) {
              return (
                <span
                  key={item.label}
                  aria-disabled="true"
                  className={`${pillBase} cursor-default border-white/10 bg-white/[0.03] text-white/40`}
                >
                  {item.label}
                </span>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${pillBase} ${
                  active
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-white/15 bg-white/5 text-white/78 hover:border-white/35 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm transition-colors hover:border-white/35 md:hidden"
        >
          <span className="relative block h-[14px] w-[20px]">
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "top-[6px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-[2px] w-full rounded-full bg-white transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "top-[6px] -rotate-45" : "top-[12px]"
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="fixed inset-0 z-[55] flex flex-col bg-black/96 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-1 flex-col justify-between px-5 pb-10 pt-28">
              <nav className="flex flex-col">
                {headerNavItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: smoothEase, delay: 0.06 + index * 0.05 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between border-b border-white/10 py-5 font-sans text-[34px] font-bold uppercase leading-[100%] tracking-[-0.04em] text-white transition-colors active:text-[var(--color-primary)]"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden="true" className="text-[var(--color-primary)]">→</span>
                      </Link>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="flex items-center justify-between border-b border-white/10 py-5 font-sans text-[34px] font-bold uppercase leading-[100%] tracking-[-0.04em] text-white/30"
                      >
                        <span>{item.label}</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: smoothEase, delay: 0.06 + headerNavItems.length * 0.05 }}
                className="flex flex-col gap-4"
              >
                <Link
                  href={navTarget}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-full bg-[var(--color-primary)] px-6 py-4 font-mono text-[13px] font-semibold uppercase tracking-[0.14em] text-white"
                >
                  <span>Agendar reunión inicial</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a
                  href="https://w.app/jamestech"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-center font-mono text-[12px] uppercase tracking-[0.16em] text-white/55 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function Hero({ ctaPreview = false }: { ctaPreview?: boolean }) {
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-168px)] w-full max-w-[1300px] flex-col justify-between gap-8">
        <div className="flex justify-end">
          <Reveal>
            <p className="font-sans text-[44px] font-semibold leading-none tracking-[-0.04em] text-white md:text-[74px] xl:text-[84px]">
              ©2026
            </p>
          </Reveal>
        </div>

        <div className="mt-auto flex flex-col gap-8 md:gap-10">
          <Reveal delay={0.08} className="max-w-[700px] xl:max-w-[760px]">
            <p className="font-sans text-[22px] font-medium leading-[122%] tracking-[-0.03em] text-white md:text-[26px] xl:text-[34px]">
              Transformá tu empresa, implementá IA con resultados medibles en 30 días.
            </p>
            {ctaPreview ? (
              <div className="mt-6">
                <SectionCTA
                  label="Agendar reunión inicial"
                  invert
                />
              </div>
            ) : null}
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

function AboutSection({ ctaPreview = false }: { ctaPreview?: boolean }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 72%", "end 42%"],
  });

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="relative bg-white px-5 py-[54px] text-black md:px-6 md:py-[64px] xl:px-10"
    >
      <div className="mx-auto flex max-w-[1300px] flex-col gap-10 md:gap-[44px]">
        <Reveal>
          <SectionTag label="SOBRE MI" />
        </Reveal>

        <div className="flex flex-col gap-8 md:gap-[40px]">
          <Reveal delay={0.08} className="flex flex-col gap-7 md:gap-9">
            <h3 className="max-w-[1120px] font-sans text-[34px] font-semibold leading-[100%] tracking-[-0.04em] md:text-[60px] xl:text-[72px]">
              <span className="text-black">Mi misión:</span>{" "}
              <span className="jt-muted-dark">
                Hacer que la IA sea tu ventaja competitiva
              </span>
            </h3>

            <div className="flex flex-col gap-8 md:gap-9">
              <p className="jt-muted-dark max-w-[860px] font-sans text-[16px] leading-[148%] tracking-[-0.012em] md:text-[19px]">
                Te ayudo a llevar IA a tu equipo de forma práctica, con foco en productividad, mejores decisiones y resultados medibles para tu empresa.
              </p>
              {ctaPreview ? (
                <SectionCTA
                  label="Agendar reunión inicial"
                  compact
                />
              ) : null}

              <h4 className="font-sans text-[24px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[34px]">
                Los valores que guían mi trabajo.
              </h4>

              <div className="flex flex-col gap-4 xl:hidden">
                {aboutValues.map((item, index) => (
                  <AboutValueCardMobile
                    key={item.title}
                    item={item}
                    photo={aboutValueVisuals[index].photo}
                    alt={aboutValueVisuals[index].alt}
                  />
                ))}
              </div>

              <div className="hidden items-stretch gap-4 xl:grid xl:grid-cols-3">
                {aboutValues.map((item, index) => (
                  <AboutValueCard
                    key={item.title}
                    item={item}
                    photo={aboutValueVisuals[index].photo}
                    revealProgress={scrollYProgress}
                    alt={aboutValueVisuals[index].alt}
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

function InteractiveSessionContent({ session }: { session: (typeof serviceSessions)[number] }) {
  const components = session.components;

  if (!components?.length) {
    return <DefaultSessionContent session={session} />;
  }

  return (
    <>
      <div className="xl:hidden">
        <SessionComponentsCarousel components={components} />
      </div>
      <div className="hidden xl:block">
        <InteractiveSessionDesktop session={session} />
      </div>
    </>
  );
}

function SessionComponentsCarousel({
  components,
}: {
  components: NonNullable<(typeof serviceSessions)[number]["components"]>;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDistance = Number.POSITIVE_INFINITY;
    Array.from(el.children).forEach((child, index) => {
      const node = child as HTMLElement;
      const childCenter = node.offsetLeft + node.offsetWidth / 2;
      const distance = Math.abs(childCenter - center);
      if (distance < bestDistance) {
        bestDistance = distance;
        best = index;
      }
    });
    setActive((current) => (current === best ? current : best));
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const node = el.children[index] as HTMLElement | undefined;
    if (!node) return;
    el.scrollTo({
      left: node.offsetLeft - (el.clientWidth - node.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-1">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-mono text-[12px] font-semibold tracking-[0.16em] text-black/60">
          {String(active + 1).padStart(2, "0")}
          <span className="text-black/30"> / {String(components.length).padStart(2, "0")}</span>
        </p>
        {active === 0 ? (
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            Deslizá
            <span aria-hidden="true" className="animate-[jt-swipe-nudge_1.4s_ease-in-out_infinite]">→</span>
          </p>
        ) : null}
      </div>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {components.map((component, index) => (
          <article key={component.title} className="flex w-[82%] shrink-0 snap-center flex-col">
            <div className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-[#f3f5f8]">
              <Image
                src={component.imageLeft}
                alt={`${component.title} imagen`}
                fill
                sizes="82vw"
                className="object-cover object-center"
              />
              <span className="absolute left-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-black/72 font-mono text-[12px] font-semibold text-white backdrop-blur-sm">
                {index + 1}
              </span>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <BlueTriangle size={10} className="mt-[0.4em] shrink-0" />
              <div className="min-w-0">
                <p className="font-sans text-[19px] font-semibold leading-[1.2] tracking-[-0.02em] text-black">
                  {component.title}
                </p>
                <p className="jt-muted-dark mt-2 font-sans text-[16px] leading-[1.5] tracking-[-0.02em]">
                  <SessionDescription
                    description={component.description}
                    emphasis={component.descriptionEmphasis}
                  />
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {components.map((component, index) => (
          <button
            key={component.title}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Ver ${component.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === active ? "w-6 bg-[var(--color-primary)]" : "w-1.5 bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function InteractiveSessionDesktop({ session }: { session: (typeof serviceSessions)[number] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const components = session.components;
  const activeComponent = components?.[activeIndex];
  const isSquareImage = activeComponent?.imageAspect === "square";

  if (!components?.length || !activeComponent) {
    return <DefaultSessionContent session={session} />;
  }

  return (
    <div className="px-0 py-1 md:py-2">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-start xl:gap-10">
        <div className="min-w-0">
          <div className="flex w-full flex-col">
            <div className="jt-divider-dark-fill h-px w-full" />
            {components.map((component, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={component.title} className="flex flex-col">
                  <div
                    role="button"
                    tabIndex={0}
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    className={`group cursor-default py-4 outline-none transition-colors duration-300 md:py-5 ${
                      isActive ? "text-black" : "text-black/62"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <BlueTriangle
                        size={10}
                        className={`mt-[0.45em] shrink-0 -rotate-90 transition-transform duration-300 md:h-3 md:w-3 ${
                          isActive ? "rotate-0" : "group-hover:rotate-0"
                        }`}
                      />
                      <div className="min-w-0 flex-1">
                        <p
                          className={`font-sans text-[16px] leading-[148%] tracking-[-0.012em] transition-[font-weight,color] duration-300 md:text-[22px] ${
                            isActive ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {component.title}
                        </p>
                        <AnimatePresence initial={false}>
                          {isActive ? (
                            <motion.p
                              key={`${component.title}-description`}
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.28, ease: smoothEase }}
                              className="jt-muted-dark max-w-[760px] overflow-hidden font-sans text-[16px] leading-[152%] tracking-[-0.02em] md:text-[19px]"
                            >
                              <SessionDescription
                                description={component.description}
                                emphasis={component.descriptionEmphasis}
                              />
                            </motion.p>
                          ) : null}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  {index < components.length - 1 ? <div className="jt-divider-dark-fill h-px w-full" /> : null}
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          key={activeComponent.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: smoothEase }}
          className="xl:pr-5 xl:pt-2"
        >
          <div
            className={`relative overflow-hidden rounded-[20px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)] ${
              isSquareImage ? "aspect-square" : "aspect-[16/9]"
            }`}
          >
            <Image
              src={activeComponent.imageLeft}
              alt={`${activeComponent.title} imagen`}
              fill
              sizes="(max-width: 1279px) 100vw, 420px"
              className={isSquareImage ? "object-cover object-center" : "object-contain object-center"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DefaultSessionContent({ session }: { session: (typeof serviceSessions)[number] }) {
  return (
    <div className="rounded-[22px] border border-black/8 bg-[var(--color-gray-bg)] px-5 py-5 md:px-7 md:py-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
        <div className="min-w-0 flex-1">
          <div className="flex w-full flex-col gap-3">
            <div className="jt-divider-dark-fill h-px w-full" />
            {session.bullets.map((bullet, index) => (
              <div key={bullet} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <BlueTriangle size={10} className="shrink-0 md:h-3 md:w-3" />
                  <p className="font-sans text-[16px] font-normal leading-[148%] tracking-[-0.012em] text-black md:text-[19px]">
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

        <p className="jt-muted-dark max-w-[440px] font-sans text-[17px] leading-[152%] tracking-[-0.02em] md:w-[42%] md:min-w-[340px] md:text-[19px]">
          <SessionDescription
            description={session.description}
            emphasis={session.descriptionEmphasis}
          />
        </p>
      </div>
    </div>
  );
}

function ServicesSection({ ctaPreview = false }: { ctaPreview?: boolean }) {
  const [activeId, setActiveId] = useState("");
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-white px-5 pb-[46px] pt-[24px] text-black md:px-6 md:pb-[58px] md:pt-[28px] xl:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-7 md:gap-[36px]">
        <Reveal>
          <SectionTag label="SERVICIOS" />
        </Reveal>

        <Reveal delay={0.06} className="grid gap-10 xl:grid-cols-[1.14fr_0.86fr] xl:items-end">
          <div className="flex flex-col gap-6">
            <h2 className="max-w-[11ch] font-sans text-[60px] font-semibold leading-[0.9] tracking-[-0.065em] text-black md:text-[118px] md:leading-[0.88]">
              Que es{" "}
              <span className="whitespace-nowrap text-[var(--color-primary)]">IA-30D.</span>
            </h2>
            <p className="jt-muted-dark max-w-[760px] font-sans text-[20px] leading-[1.42] tracking-[-0.025em] md:text-[25px]">
              Proceso diseñado para integrar tecnología según el contexto y las necesidades de tu empresa.
            </p>
          </div>

          <div className="grid gap-4 border-l-0 border-black/10 md:border-l md:pl-9">
            <div className="flex items-end gap-3 border-b border-black/10 pb-6">
              <span className="font-sans text-[64px] font-semibold leading-[0.84] tracking-[-0.065em] text-[var(--color-primary)] md:text-[92px]">
                4
              </span>
              <span className="max-w-[10ch] pb-1 font-sans text-[20px] font-semibold leading-[0.96] tracking-[-0.045em] text-black md:text-[28px]">
                sesiones presenciales
              </span>
            </div>

            <div className="flex items-end gap-3">
              <span className="font-sans text-[64px] font-semibold leading-[0.84] tracking-[-0.065em] text-[var(--color-primary)] md:text-[92px]">
                30
              </span>
              <span className="max-w-[10ch] pb-1 font-sans text-[20px] font-semibold leading-[0.96] tracking-[-0.045em] text-black md:text-[28px]">
                días
              </span>
            </div>
            {ctaPreview ? (
              <div className="pt-3">
                <SectionCTA
                  label="Quiero IA-30D para mi equipo"
                  compact
                />
              </div>
            ) : null}
          </div>
        </Reveal>

        <LayoutGroup>
          <div id="sessions" className="jt-divider-dark border-t">
            {serviceSessions.map((session) => {
              const isOpen = session.id === activeId;
              const sessionName = session.title.replace(/^Sesi[oó]n\s*\d+:\s*/i, "");

              return (
                <motion.section layout key={session.id} className="jt-divider-dark border-b">
                  <button
                    type="button"
                    className="flex w-full flex-col rounded-[20px] py-5 text-left transition-colors duration-300 hover:bg-[color:rgba(239,243,252,0.42)] md:py-8"
                    onClick={() => setActiveId((current) => (current === session.id ? "" : session.id))}
                    aria-expanded={isOpen}
                  >
                    <div className="grid grid-cols-[54px_minmax(0,1fr)_26px] items-center gap-3 md:grid-cols-[116px_minmax(0,1fr)_40px] md:gap-6">
                      <div className="font-mono text-[20px] font-semibold leading-[120%] tracking-[-0.4px] text-black md:text-[48px]">
                        {session.number}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-sans text-[23px] font-semibold leading-[1.15] tracking-[-0.03em] text-black md:text-[48px] md:leading-[120%] md:tracking-[-0.4px]">
                          <span className="md:hidden">{sessionName}</span>
                          <span className="hidden md:inline">{session.title}</span>
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
                          <div className="grid grid-cols-1 gap-5 md:grid-cols-[116px_minmax(0,1fr)] md:gap-6">
                            <div />

                            <InteractiveSessionContent session={session} />
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

        {ctaPreview ? (
          <Reveal delay={0.08}>
            <SectionCTA label="Diseñar IA-30D para mi equipo" compact align="center" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function PrinciplesSection({ ctaPreview = false }: { ctaPreview?: boolean }) {
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
          {ctaPreview ? (
            <Reveal delay={0.2} className="w-full">
              <SectionCTA
                label="Evaluar si aplica a mi empresa"
                invert
              />
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  title,
  description,
  artIndex,
  children,
}: {
  step: string;
  title: string;
  description: string;
  artIndex: number;
  children?: React.ReactNode;
}) {
  const card = principleCards[artIndex];

  return (
    <article className="flex h-full min-h-[520px] flex-col items-center rounded-[22px] border border-black/8 bg-[var(--color-gray-bg)] px-5 py-6 text-center transition-colors duration-300 hover:border-[color:var(--color-primary)]/24 hover:bg-[color:rgba(239,243,252,0.72)] md:px-6 md:py-8">
      <SectionTag label={step} />
      <div className="group relative mt-5 h-[96px] w-[96px] md:h-[150px] md:w-[150px] xl:h-[168px] xl:w-[168px]">
        <Image
          src={card?.asset ?? "/assets/circle.avif"}
          alt={card?.alt ?? ""}
          fill
          sizes="(max-width: 809px) 96px, (max-width: 1279px) 150px, 168px"
          className="object-contain transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-95 group-hover:grayscale"
        />
      </div>
      <h3 className="mt-5 font-sans text-[24px] font-semibold leading-[115%] tracking-[-0.02em] md:text-[28px] xl:text-[32px]">
        {title}
      </h3>
      <p className="jt-muted-dark mt-3 max-w-[360px] font-sans text-[15px] leading-[142%] tracking-[-0.012em] md:min-h-[118px] md:text-[17px] xl:text-[18px]">
        {description}
      </p>
      {children}
    </article>
  );
}

function ProcessExpandable({
  title,
  items,
  footerNote,
  children,
  initiallyOpen = false,
}: {
  title: string;
  items: string[];
  footerNote?: string;
  children?: React.ReactNode;
  initiallyOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="mt-4 w-full border-t border-black/10 pt-5 text-left">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-4 rounded-[8px] px-2 py-2 text-left transition hover:bg-white/70"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)] md:text-[12px]">{title}</span>
        <span
          className={`h-0 w-0 border-l-[6px] border-r-[6px] border-t-[9px] border-l-transparent border-r-transparent border-t-[var(--color-primary)] transition-transform ${isOpen ? "" : "-rotate-90"}`}
        />
      </button>
      <div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <ul className="space-y-3 px-2 pb-1 pt-3">
            {items.map((item) => (
              <li key={item} className="grid grid-cols-[18px_1fr] gap-3 font-sans text-[14px] leading-[1.4] text-black/70 md:text-[15px]">
                <span className="mt-[6px] h-[7px] w-[7px] rounded-full bg-[var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {children}
        </div>
      </div>
      {footerNote ? (
        <p className="mt-4 px-2 text-center font-sans text-[13px] italic leading-[1.45] text-black/45">
          {footerNote}
        </p>
      ) : null}
    </div>
  );
}

function GenoContinuityLink() {
  return (
    <p className="mt-4 px-2 font-sans text-[14px] leading-[1.45] text-black/55 md:text-[15px]">
      Si un proyecto necesita integración, mantenimiento o escala, se abre una{" "}
      <a
        href="https://www.genoinsights.com/es"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-[#020E26] underline decoration-[#FF8C4E]/70 decoration-2 underline-offset-4 transition hover:text-[#FF8C4E]"
      >
        continuidad opcional
      </a>
      {" "}con Geno Insights.
    </p>
  );
}

function ProcessSection({ ctaPreview = false }: { ctaPreview?: boolean }) {
  return (
    <section id="process" className="bg-white px-5 py-[46px] text-black md:px-6 md:py-[58px] xl:px-10">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-9 md:gap-[42px]">
        <Reveal className="flex justify-center">
          <SectionTag label="FORMA DE TRABAJO" />
        </Reveal>

        <Reveal delay={0.06} className="text-center">
          <h2 className="jt-heading-lg">
            Nuestro Proceso Juntos<span className="text-[var(--color-primary)]">.</span>
          </h2>
        </Reveal>

        <div className="jt-divider-dark grid grid-cols-1 gap-5 border-t pt-8 md:grid-cols-3 md:gap-8 md:pt-8 xl:gap-10 xl:pt-10">
          <Reveal delay={0.08}>
            <ProcessCard
              step="PASO 1"
              title="Reunión inicial"
              artIndex={0}
              description="No llego con una receta enlatada. Antes de empezar, me tomo una semana para entender tu equipo, tu operación y tu contexto."
            >
              <ProcessExpandable
                title="La semana incluye"
                items={processDiscoveryDetails}
                footerNote="Solo avanzamos si el programa puede generar un impacto real."
              />
            </ProcessCard>
          </Reveal>

          <Reveal delay={0.13}>
            <ProcessCard
              step="PASO 2"
              title="IA 30D"
              artIndex={1}
              description="Cuatro sesiones presenciales diseñadas para tu equipo. Acompaño a cada persona en su nivel para que cada área se lleve algo concreto que pueda seguir usando."
            >
              <ProcessExpandable
                title="Durante el programa"
                items={processIa30dDetails}
                footerNote="Buscamos que el equipo use IA entre sesiones, no solo durante el programa."
              />
            </ProcessCard>
          </Reveal>

          <Reveal delay={0.18}>
            <ProcessCard
              step="PASO 3"
              title="Autonomía IA"
              artIndex={2}
              description="No te hacemos dependiente. Te damos la mentalidad y las herramientas para que la IA sea parte natural del día a día, con la puerta abierta si un proyecto necesita ir más lejos."
            >
              <ProcessExpandable
                title="Qué queda instalado"
                items={processAutonomyDetails}
                footerNote="El objetivo es que el equipo pueda seguir sin depender de nosotros."
              >
                <GenoContinuityLink />
              </ProcessExpandable>
            </ProcessCard>
          </Reveal>
        </div>
        {ctaPreview ? (
          <Reveal delay={0.08}>
            <SectionCTA label="Agendar reunión inicial" align="center" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function VideoPlayButton() {
  return (
    <span className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white/92 text-[var(--color-primary)] shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-md transition group-hover:scale-105">
      <span className="ml-1 h-0 w-0 border-y-[15px] border-l-[24px] border-y-transparent border-l-[var(--color-primary)]" />
    </span>
  );
}

function FeaturedVideoSurface({
  interview,
  isPlaying,
  onPlay,
}: {
  interview: (typeof participantVideoInterviews)[number] & { youtubeId?: string };
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const youtubeId = interview.youtubeId;

  return (
    <div className="group relative h-full overflow-hidden rounded-none bg-black md:rounded-[28px]">
      <Image
        src={interview.image}
        alt={interview.title}
        fill
        sizes="(max-width: 1023px) 100vw, 920px"
        className="object-cover opacity-82 transition duration-700 group-hover:scale-[1.03] group-hover:opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,38,0.08),rgba(2,14,38,0.58))]" />
      <div className="absolute left-4 top-4 rounded-full border border-white/18 bg-black/24 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/86 backdrop-blur-md">
        YouTube video
      </div>
      {interview.duration ? (
        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-black/72">
          {interview.duration}
        </div>
      ) : null}
      {isPlaying && youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
          title={interview.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : isPlaying ? (
        <div className="absolute inset-0 grid place-items-center bg-black/70 px-6 text-center backdrop-blur-sm">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Embed pendiente</p>
            <p className="mt-3 max-w-[420px] font-sans text-[24px] font-semibold leading-[1.05] tracking-[-0.045em] text-white md:text-[34px]">
              Acá se va a reproducir el video cuando conectemos el link de YouTube.
            </p>
          </div>
        </div>
      ) : (
        <button type="button" onClick={onPlay} className="absolute inset-0 grid place-items-center" aria-label={`Reproducir entrevista: ${interview.title}`}>
          <VideoPlayButton />
        </button>
      )}
    </div>
  );
}

function ParticipantVideoFeature() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const activeInterview = participantVideoInterviews[activeIndex];

  useEffect(() => {
    if (isAutoPaused || isPlaying) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % participantVideoInterviews.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isAutoPaused, isPlaying]);

  const selectInterview = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
    setIsAutoPaused(true);
  };

  const goToInterview = (direction: 1 | -1) => {
    setActiveIndex((current) => (current + direction + participantVideoInterviews.length) % participantVideoInterviews.length);
    setIsPlaying(false);
    setIsAutoPaused(true);
  };

  const startPlayback = () => {
    setIsPlaying(true);
    setIsAutoPaused(true);
  };

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.36fr)_minmax(320px,0.64fr)] lg:items-stretch">
      <article className="aspect-[16/9] overflow-hidden rounded-[24px] border border-black/8 bg-[#F7F8FA] shadow-[0_22px_70px_rgba(0,0,0,0.07)] md:aspect-[30/17] md:rounded-[36px] md:p-4">
        <div key={`${activeInterview.title}-video`} className="h-full animate-[jt-interview-slide_760ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <FeaturedVideoSurface interview={activeInterview} isPlaying={isPlaying} onPlay={startPlayback} />
        </div>
      </article>

      <aside className="flex h-full min-h-0 flex-col justify-between overflow-hidden rounded-[24px] border border-black/8 bg-black px-6 py-7 text-white md:rounded-[36px] md:px-7 md:py-7">
        <div key={`${activeInterview.title}-copy`} className="animate-[jt-interview-slide_760ms_cubic-bezier(0.22,1,0.36,1)_both]">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">Entrevista destacada</p>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/44">
              {String(activeIndex + 1).padStart(2, "0")} / {String(participantVideoInterviews.length).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-5 font-sans text-[31px] font-semibold leading-[0.98] tracking-[-0.055em] xl:text-[40px]">
            {activeInterview.title}
          </h3>
          <p className="mt-5 font-sans text-[17px] italic leading-[1.34] tracking-[-0.03em] text-white/76 xl:text-[19px]">"{activeInterview.quote}"</p>
        </div>
        <div className="mt-6 border-t border-white/14 pt-5">
          <p className="font-sans text-[15px] font-semibold text-white">{activeInterview.person}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/46">{activeInterview.company}</p>
          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={() => goToInterview(-1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-[18px] text-white/72 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              aria-label="Ver entrevista anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => goToInterview(1)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/18 text-[18px] text-white/72 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
              aria-label="Ver entrevista siguiente"
            >
              →
            </button>
            {isAutoPaused ? (
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setIsAutoPaused(false);
                }}
                className="ml-auto rounded-full border border-white/14 px-3 py-2 font-sans text-[12px] font-semibold text-white/62 transition hover:border-white/32 hover:text-white"
              >
                Reanudar rotación
              </button>
            ) : null}
          </div>
          <div className="mt-5 grid grid-cols-6 gap-2">
            {participantVideoInterviews.map((interview, index) => (
              <button
                key={interview.title}
                type="button"
                onClick={() => selectInterview(index)}
                className={`h-1.5 rounded-full transition ${index === activeIndex ? "bg-[var(--color-primary)]" : "bg-white/18 hover:bg-white/36"}`}
                aria-label={`Ver entrevista: ${interview.title}`}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function ParticipantQuotesSection({ ctaPreview = false }: { ctaPreview?: boolean }) {
  const loopQuotes = [...participantQuotes, ...participantQuotes];

  return (
    <section className="bg-white px-5 py-[44px] text-black md:px-6 md:py-[56px] xl:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="space-y-8 rounded-[36px] border border-black/8 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:px-8 md:py-8">
          <Reveal>
            <div className="space-y-4">
              <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">
                Que deja IA 30D
              </p>
              <h2 className="max-w-[18ch] font-sans text-[40px] font-semibold leading-[0.94] tracking-[-0.055em] text-black md:max-w-[22ch] md:text-[64px]">
                Que dicen los participantes.
              </h2>
              <p className="max-w-[46ch] font-sans text-[18px] leading-[1.58] tracking-[-0.02em] text-black/66">
                Una experiencia útil, cercana y aplicable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <ParticipantVideoFeature />
          </Reveal>

          {ctaPreview ? (
            <Reveal delay={0.08}>
              <SectionCTA label="Quiero una experiencia así" compact align="center" />
            </Reveal>
          ) : null}

          <div className="flex flex-col gap-3 md:hidden">
            {participantQuotes.map((quote, index) => (
              <Reveal key={`${quote.author}-${index}`} distance={28}>
                <article className="rounded-[22px] border border-[#4F82FF]/14 bg-[linear-gradient(180deg,#ffffff,#f4f8ff)] px-5 py-5 shadow-[0_10px_24px_rgba(79,130,255,0.05)]">
                  <p className="font-sans text-[18px] italic leading-[1.42] tracking-[-0.02em] text-black">
                    "{quote.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                    <p className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black/80">
                      {quote.author}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="hidden md:block">
            <div className="overflow-hidden rounded-[32px] border border-[#4F82FF]/12 bg-[linear-gradient(180deg,rgba(245,248,255,0.98),rgba(238,243,252,0.94))] py-6 shadow-[0_12px_30px_rgba(79,130,255,0.06)]">
              {/* translateZ(0) forces this wrapper onto its own compositing
                  layer so it actually clips the GPU-composited marquee on iOS
                  Safari, where `overflow:hidden` alone lets transformed children
                  escape and stretch the page width. */}
              <div className="relative overflow-hidden [transform:translateZ(0)]">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,rgba(243,247,255,1),rgba(243,247,255,0))] md:w-24" />

                <div className="jt-feedback-marquee flex w-max gap-4 px-5 md:gap-4 md:px-6">
                  {loopQuotes.map((quote, index) => (
                    <article
                      key={`${quote.author}-${index}`}
                      className="w-[280px] shrink-0 rounded-[26px] border border-[#4F82FF]/12 bg-white/90 px-4 py-4 shadow-[0_10px_22px_rgba(79,130,255,0.04)] backdrop-blur-sm md:w-[340px] md:px-5 md:py-5"
                    >
                      <p className="font-sans text-[18px] italic leading-[1.34] tracking-[-0.03em] text-black md:text-[21px]">
                        {quote.quote}
                      </p>
                      <div className="mt-5 flex items-center">
                        <p className="font-sans text-[14px] font-semibold tracking-[-0.02em] text-black">
                          {quote.author}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

if (typeof document !== "undefined") {
  const styleId = "jt-interview-slide-style";

  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      @keyframes jt-interview-slide {
        from {
          opacity: 0;
          transform: translate3d(24px, 0, 0);
        }
        to {
          opacity: 1;
          transform: translate3d(0, 0, 0);
        }
      }
    `;
    document.head.appendChild(style);
  }
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
                  className="h-[30px] w-auto md:h-[66px] xl:h-[92px]"
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
              <span key={item.href} className="flex items-center gap-2 md:gap-3">
                <Link href={item.href} className="transition-opacity duration-300 hover:opacity-70">
                  {item.label}
                </Link>
                {index < footerLinks.legal.length - 1 ? <span>/</span> : null}
              </span>
            ))}
          </div>
          <Link href="#hero" className="transition-opacity duration-300 hover:opacity-70">
            Volver arriba
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function HomePage({ ctaPreview = false }: { ctaPreview?: boolean } = {}) {
  return (
    <main className="bg-black">
      <Header />
      <Hero ctaPreview={ctaPreview} />
      <AboutSection ctaPreview={ctaPreview} />
      <ServicesSection ctaPreview={ctaPreview} />
      <PrinciplesSection ctaPreview={ctaPreview} />
      <ProcessSection ctaPreview={ctaPreview} />
      <ParticipantQuotesSection ctaPreview={ctaPreview} />
      <Footer />
      <style jsx global>{`
        @keyframes jt-feedback-marquee-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .jt-feedback-marquee {
          animation: jt-feedback-marquee-scroll 34s linear infinite;
          will-change: transform;
        }

        .jt-feedback-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes jt-swipe-nudge {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(4px);
          }
        }
      `}</style>
    </main>
  );
}
