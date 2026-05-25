export type NavLink = {
  href: string;
  label: string;
  counter?: string;
  external?: boolean;
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
  components?: Array<{
    title: string;
    description: string;
    descriptionEmphasis?: string[];
    imageLeft: string;
    imageRight: string;
    imageAspect?: "wide" | "square";
  }>;
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
      "Nuestro Contexto",
      "Mentalidad IA",
      "Casos Aplicados a tu Sector",
      "Como Empezar",
    ],
    description:
      "En esta sesión, vamos a entender qué está pasando con la IA en el mundo y en el sector, adoptar una mentalidad práctica, ver casos aplicados y cerrar con una forma simple de empezar.",
    descriptionEmphasis: ["qué está pasando con la IA", "mentalidad práctica", "forma simple de empezar"],
    imageLeft: "/assets/mentalidad123.webp",
    imageRight: "/assets/evolucion-gen-ai.avif",
    components: [
      {
        title: "Nuestro Contexto",
        description:
          "Abrimos con una lectura clara de qué está pasando con la IA en el mundo y en tu sector, para que todos los participantes comprendan nuestro punto de partida.",
        descriptionEmphasis: ["qué está pasando con la IA", "tu sector", "nuestro punto de partida"],
        imageLeft: "/assets/ia30d-session-1/pillars/nuestro-contexto-clean.png",
        imageRight: "/assets/ia30d-session-1/pillars/nuestro-contexto-clean.png",
        imageAspect: "square",
      },
      {
        title: "Mentalidad IA",
        description:
          "La diferencia no está en usar IA, sino en cómo la usamos: con contexto, intención y criterio para transformar respuestas genéricas en resultados útiles.",
        descriptionEmphasis: ["cómo la usamos", "contexto, intención y criterio", "resultados útiles"],
        imageLeft: "/assets/ia30d-session-1/pillars/mentalidad-ia.png",
        imageRight: "/assets/ia30d-session-1/pillars/mentalidad-ia.png",
        imageAspect: "square",
      },
      {
        title: "Casos Aplicados a tu Sector",
        description:
          "Bajamos el contexto a casos concretos de tu industria: tareas manuales, procesos repetitivos y ejemplos donde la IA ya está ayudando a ganar tiempo, claridad y foco.",
        descriptionEmphasis: ["tu industria", "tareas manuales", "ganar tiempo, claridad y foco"],
        imageLeft: "/assets/ia30d-session-1/pillars/casos-aplicados-sector.png",
        imageRight: "/assets/ia30d-session-1/pillars/casos-aplicados-sector.png",
        imageAspect: "square",
      },
      {
        title: "Como Empezar",
        description:
          "Cerramos con una forma concreta de pasar de la idea a la acción: elegir una tarea real, probar con IA y llevarse un primer desafío para la semana. Cada uno desde su nivel de adopción actual.",
        descriptionEmphasis: ["idea a la acción", "tarea real", "nivel de adopción actual"],
        imageLeft: "/assets/ia30d-sessions/pillars/s1-4-como-empezar-dsc02999.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s1-4-como-empezar-dsc02999.jpg",
        imageAspect: "square",
      },
    ],
  },
  {
    id: "session-2",
    number: "[02]",
    title: "Sesión 2: IA en el Día a Día",
    bullets: [
      "Enseñar Herramientas Prácticas",
      "Adaptarlas al Rubro del Cliente",
      "Aplicarlas Juntos",
      "Impulsar la Implementación Propia",
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
    components: [
      {
        title: "Enseñar Herramientas Prácticas",
        description:
          "Damos la teoría justa para trabajar con IA y mostramos herramientas concretas, aplicables al día a día, sin importar el punto de partida de cada persona.",
        descriptionEmphasis: ["teoría justa", "herramientas concretas", "punto de partida"],
        imageLeft: "/assets/ia30d-sessions/pillars/s2-1-ensenar-herramientas-practicas-notebook-prompt.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s2-1-ensenar-herramientas-practicas-notebook-prompt.jpg",
        imageAspect: "square",
      },
      {
        title: "Adaptarlas al Rubro del Cliente",
        description:
          "Traemos ejemplos pensados específicamente para la operación y el contexto del cliente, en distintos niveles de dificultad, para que cada uno vea cómo se usa en su propio trabajo.",
        descriptionEmphasis: ["operación y el contexto del cliente", "niveles de dificultad", "su propio trabajo"],
        imageLeft: "/assets/ia30d-sessions/pillars/s2-2-adaptarlas-rubro-cliente-ai-assistant.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s2-2-adaptarlas-rubro-cliente-ai-assistant.jpg",
        imageAspect: "square",
      },
      {
        title: "Aplicarlas Juntos",
        description:
          "Probamos la IA en vivo sobre situaciones reales del equipo, para que la adopción no quede en teoría y todos vean cómo se usa en su contexto.",
        descriptionEmphasis: ["en vivo", "situaciones reales", "su contexto"],
        imageLeft: "/assets/ia30d-sessions/pillars/s2-3-aplicarlas-juntos-equipo.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s2-3-aplicarlas-juntos-equipo.jpg",
        imageAspect: "square",
      },
      {
        title: "Impulsar la Implementación Propia",
        description:
          "Cada persona se va con su primera implementación para probar durante la semana, desde su rol y su conocimiento actual, con foco en generar impacto rápido.",
        descriptionEmphasis: ["primera implementación", "su rol", "impacto rápido"],
        imageLeft: "/assets/ia30d-sessions/pillars/s2-4-implementacion-propia-dsc03269.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s2-4-implementacion-propia-dsc03269.jpg",
        imageAspect: "square",
      },
    ],
  },
  {
    id: "session-3",
    number: "[03]",
    title: "Sesión 3: IA aplicada al Negocio",
    bullets: [
      "Seguimiento de Avances de la Sesión 2",
      "Una Nueva Capacidad Ganada",
      "Mejora Continua en el Uso de IA",
      "Foco en el Impacto Real",
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
    components: [
      {
        title: "Seguimiento de Avances de la Sesión 2",
        description:
          "Damos soporte a la implementación durante la semana y revisamos en la sesión qué funcionó y dónde hubo trabas, para aprender y avanzar.",
        descriptionEmphasis: ["qué funcionó", "dónde hubo trabas", "aprender y avanzar"],
        imageLeft: "/assets/ia30d-sessions/pillars/s3-1-seguimiento-avances-jaime-centered.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s3-1-seguimiento-avances-jaime-centered.jpg",
        imageAspect: "square",
      },
      {
        title: "Una Nueva Capacidad Ganada",
        description:
          "Subimos un escalón: incorporamos una herramienta de IA más potente y la aplicamos a casos concretos y específicos del negocio del cliente.",
        descriptionEmphasis: ["Subimos un escalón", "herramienta de IA más potente", "negocio del cliente"],
        imageLeft: "/assets/ia30d-sessions/pillars/s3-2-nueva-capacidad-business-dashboard.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s3-2-nueva-capacidad-business-dashboard.jpg",
        imageAspect: "square",
      },
      {
        title: "Mejora Continua en el Uso de IA",
        description:
          "Ajustamos instrucciones, contexto y datos vuelta tras vuelta: casi todo resultado flojo se arregla con mejor contexto, no cambiando de herramienta.",
        descriptionEmphasis: ["instrucciones, contexto y datos", "mejor contexto", "no cambiando de herramienta"],
        imageLeft: "/assets/ia30d-sessions/pillars/s3-3-mejora-continua-teamwork-collage.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s3-3-mejora-continua-teamwork-collage.jpg",
        imageAspect: "square",
      },
      {
        title: "Foco en el Impacto Real",
        description:
          "Buscamos que cada proyecto ahorre horas concretas en el día a día. El salto llega cuando la herramienta es tan confiable que se deja de chequear a mano.",
        descriptionEmphasis: ["ahorre horas concretas", "tan confiable", "se deja de chequear a mano"],
        imageLeft: "/assets/ia30d-sessions/pillars/s3-4-foco-impacto-roadmap.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s3-4-foco-impacto-roadmap.jpg",
        imageAspect: "square",
      },
    ],
  },
  {
    id: "session-4",
    number: "[04]",
    title: "Sesión 4: Hoja de Ruta",
    bullets: [
      "Seguimiento de Avances",
      "La IA participa en los procesos reales",
      "Autonomía del Equipo",
      "Hoja de Ruta",
    ],
    description:
      "Pasar de experimentos aislados a un uso consistente, compartido y sostenible de la IA dentro del equipo. La IA se convierte en parte del sistema, no en una herramienta más.",
    descriptionEmphasis: ["consistente, compartido y sostenible"],
    imageLeft: "/assets/work-image-2.avif",
    imageRight: "/assets/road.avif",
    components: [
      {
        title: "Seguimiento de Avances",
        description:
          "Cerramos mirando el camino recorrido: lo que cada equipo logró, cómo cambió su forma de trabajar y qué prácticas vale la pena sostener.",
        descriptionEmphasis: ["camino recorrido", "cómo cambió su forma de trabajar", "prácticas vale la pena sostener"],
        imageLeft: "/assets/ia30d-sessions/pillars/s4-1-seguimiento-avances-dashboard.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s4-1-seguimiento-avances-dashboard.jpg",
        imageAspect: "square",
      },
      {
        title: "La IA Participa en los Procesos Reales",
        description:
          "A esta altura la IA ya no es una prueba aislada: está integrada en el trabajo del equipo, con sus propios datos, su estilo y sus criterios.",
        descriptionEmphasis: ["no es una prueba aislada", "trabajo del equipo", "sus propios datos, su estilo y sus criterios"],
        imageLeft: "/assets/ia30d-sessions/pillars/s4-2-ia-procesos-reales-workflow.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s4-2-ia-procesos-reales-workflow.jpg",
        imageAspect: "square",
      },
      {
        title: "Autonomía del Equipo",
        description:
          "El objetivo es que no nos necesiten: que el equipo pueda seguir creando, probando y mejorando por su cuenta.",
        descriptionEmphasis: ["no nos necesiten", "creando, probando y mejorando", "por su cuenta"],
        imageLeft: "/assets/ia30d-sessions/pillars/s4-3-autonomia-equipo-dsc03253.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s4-3-autonomia-equipo-dsc03253.jpg",
        imageAspect: "square",
      },
      {
        title: "Hoja de Ruta",
        description:
          "Entregamos un documento ejecutivo con el resumen de lo construido, las oportunidades detectadas y los siguientes pasos para que la empresa continúe avanzando sin depender de nosotros.",
        descriptionEmphasis: ["documento ejecutivo", "oportunidades detectadas", "sin depender de nosotros"],
        imageLeft: "/assets/ia30d-sessions/pillars/s4-4-hoja-de-ruta-road.jpg",
        imageRight: "/assets/ia30d-sessions/pillars/s4-4-hoja-de-ruta-road.jpg",
        imageAspect: "square",
      },
    ],
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
  contact: {
    href: "/empresas/ia-30d/contacto",
    label: "CONTACTO",
  },
  navigate: [
    { href: "/#studio", label: "Sobre mi" },
    { href: "/#services", label: "IA-30D" },
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
  legal: [
    { href: "/privacy-policy", label: "Política de Privacidad" },
    { href: "/terms-of-service", label: "Términos" },
    { href: "/license", label: "Licencia" },
  ],
};
