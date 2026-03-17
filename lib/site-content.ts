export type NavLink = {
  href: string;
  label: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type SessionItem = {
  id: string;
  number: string;
  title: string;
  eyebrow?: string;
  bullets?: string[];
  description?: string;
  imageLeft?: string;
  imageRight?: string;
};

export type PrincipleCard = {
  title: string;
  quote?: string;
  description?: string;
  asset: string;
  alt: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const navLinks: NavLink[] = [
  { href: "#services", label: "IA-30D" },
  { href: "#studio", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
];

export const aboutValues: ValueItem[] = [
  {
    title: "Las Personas Primero",
    description:
      "La IA acompaña a los equipos: elimina tareas de bajo valor y potencia el criterio humano.",
  },
  {
    title: "Autonomía, NO Dependencia",
    description:
      "Mi objetivo es que tu equipo pueda continuar y escalar lo implementado sin necesitarme después.",
  },
  {
    title: "Personalización Absoluta",
    description:
      "Me apalanco en inteligencia artificial para analizar tu contexto y brindarte información específica y accionable para tu negocio",
  },
];

export const serviceSessions: SessionItem[] = [
  {
    id: "session-1",
    number: "[01]",
    title: "Sesión 1: El Cambio Empieza Hoy",
    eyebrow: "Contexto: ¿Donde estamos? ¿Hacia donde vamos?",
    bullets: ["Mentalidad IA", "Casos Aplicados a tu Sector", "Como Empezar"],
    description:
      "En esta sesión, vamos a entender dónde estamos hoy en el camino de la IA, adoptar la mentalidad adecuada, ver casos reales aplicados a tu sector y salir con claridad sobre cómo dar el primer paso.",
    imageLeft: "/assets/mentalidad123.webp",
    imageRight: "/assets/work-image.webp",
  },
  {
    id: "session-2",
    number: "[02]",
    title: "Sesión 2: IA en el Día a Día",
    imageLeft: "/assets/work-image-2.avif",
    imageRight: "/assets/openai.webp",
  },
  {
    id: "session-3",
    number: "[03]",
    title: "Sesión 3: IA aplicada al Negocio",
    imageLeft: "/assets/evolucion-gen-ai.avif",
    imageRight: "/assets/openai.webp",
  },
  {
    id: "session-4",
    number: "[04]",
    title: "Sesión 4: Hoja de Ruta",
    imageLeft: "/assets/reunion.avif",
    imageRight: "/assets/work-image-2.avif",
  },
];

export const principleCards: PrincipleCard[] = [
  {
    title: "APLICAR.",
    quote: '"El ser humano no fue creado para llenar planillas y tildar casilleros"',
    asset: "/assets/circle.avif",
    alt: "Circular icon",
  },
  {
    title: "AUTOMATIZAR.",
    description:
      "Implementaciones pensadas para ahorrar tiempo operativo y hacer más simple el día a día del equipo.",
    asset: "/assets/square.avif",
    alt: "Square icon",
  },
  {
    title: "ESCALAR.",
    description:
      "La adopción queda integrada en la organización para que el cambio se sostenga y crezca sin fricción.",
    asset: "/assets/circle-with-line.avif",
    alt: "Circular icon with line",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "PASO 1",
    title: "Reunión Discovery",
    description:
      "Nos juntamos y conversamos — quiero entender tu historia y tu visión. Solo avanzamos si el programa puede generarte un impacto real.",
  },
  {
    number: "PASO 2",
    title: "IA 30D",
    description:
      "A través de las sesiones guiadas y personalizadas, cambiamos la forma de pensar y de trabajar de tu equipo.",
  },
  {
    number: "PASO 3",
    title: "Autonomía IA",
    description:
      "El equipo transforma su día a día, integrando IA de forma natural y escalando por su cuenta, sin depender de nadie.",
  },
];

export const footerLinks = {
  contact: { href: "/contact", label: "CONTACTO" },
  navigate: [
    { href: "#studio", label: "About" },
    { href: "#services", label: "IA-30D" },
  ],
  connect: [
    { href: "https://www.instagram.com/jamestech.ai/", label: "Instagram" },
    {
      href: "https://www.linkedin.com/in/jaimechevallier/",
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/541169602358?text=Hola%20Jaime!%20Vi%20el%20programa%20IA%2030D%20en%20la%20web%20y%20me%20interesa.%20Quiero%20agendar%20una%20reuni%C3%B3n%20para%20conocer%20c%C3%B3mo%20puede%20ayudar%20a%20mi%20equipo.",
      label: "Whatsapp",
    },
  ],
  legal: ["Privacy Policy", "Terms", "License"],
};
