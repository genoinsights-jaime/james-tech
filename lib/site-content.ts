export type NavLink = {
  href: string;
  label: string;
  counter?: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type SessionItem = {
  id: string;
  number: string;
  title: string;
  bullets: string[];
  description: string;
  descriptionEmphasis?: string[];
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
  { href: "/#studio", label: "SOBRE MI", counter: "[06]" },
  { href: "/#services", label: "SERVICIOS" },
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
    bullets: [
      "Contexto: ¿Donde estamos? ¿Hacia donde vamos?",
      "Mentalidad IA",
      "Casos Aplicados a tu Sector",
      "Como Empezar",
    ],
    description:
      "En esta sesión, vamos a entender dónde estamos hoy en el camino de la IA, adoptar la mentalidad adecuada, ver casos reales aplicados a tu sector y salir con claridad sobre cómo dar el primer paso.",
    descriptionEmphasis: ["dónde estamos hoy", "casos reales", "dar el primer paso"],
    imageLeft: "/assets/mentalidad123.webp",
    imageRight: "/assets/evolucion-gen-ai.avif",
  },
  {
    id: "session-2",
    number: "[02]",
    title: "Sesión 2: IA en el Día a Día",
    bullets: [
      "Identificar Fricciones del día a día",
      "Proponer Herramientas Concretas",
      "Aplicarlas Juntos",
      "Llamada a la Acción",
    ],
    description:
      "El Objetivo de esta sesión es que, tu equipo empiece a usar IA de forma concreta en sus tareas cotidianas. Identificamos fricciones reales del día a día, aplicamos IA en vivo para resolverlas y el equipo se lleva acciones específicas para avanzar durante la semana.",
    descriptionEmphasis: [
      "usar IA de forma concreta",
      "fricciones reales del día a día",
      "IA en vivo",
      "acciones específicas",
    ],
    imageLeft: "/assets/work-image.webp",
    imageRight: "/assets/stressed.avif",
  },
  {
    id: "session-3",
    number: "[03]",
    title: "Sesión 3: IA aplicada al Negocio",
    bullets: [
      "Seguimiento de Avances de la Sesion 2",
      "Mejora Continua en uso de IA",
      "Cultura de Autonomia",
      "Foco en el Impacto Directo en la Productividad",
    ],
    description:
      "Nos enfocamos en llevar la integración de la IA al siguiente nivel. El equipo refina constantemente su uso para eliminar tareas repetitivas y optimizar el tiempo. El equipo se lleva acciones específicas para avanzar durante la semana que buscan lograr un impacto directo en la productividad.",
    descriptionEmphasis: [
      "siguiente nivel",
      "acciones específicas",
      "impacto directo en la productividad",
    ],
    imageLeft: "/assets/flowchart.avif",
    imageRight: "/assets/openai.webp",
  },
  {
    id: "session-4",
    number: "[04]",
    title: "Sesión 4: Hoja de Ruta",
    bullets: [
      "Seguimiento de Avances de la Sesión 3",
      "La IA participa en los procesos reales",
      "Autonomía del Equipo",
      "Hoja de Ruta para Seguir Creciendo",
    ],
    description:
      "Pasar de experimentos aislados a un uso consistente, compartido y sostenible de la IA dentro del equipo. La IA se convierte en parte del sistema, no en una herramienta más.",
    descriptionEmphasis: ["consistente, compartido y sostenible"],
    imageLeft: "/assets/work-image-2.avif",
    imageRight: "/assets/road.avif",
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
    { href: "#studio", label: "Sobre mi" },
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
  legal: ["Política de Privacidad", "Términos", "Licencia"],
};
