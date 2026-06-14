"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type PhotoOption = {
  file: string;
  folder: string;
  grade: string;
  reason: string;
  src?: string;
  position?: string;
};

type Pillar = {
  id: string;
  title: string;
  communicates: string;
  options: PhotoOption[];
};

type Session = {
  id: string;
  title: string;
  pillars: Pillar[];
};

const folderByClient = {
  CBV1: "Coldwell Banker Grupo Elite/V1",
  CBV2: "Coldwell Banker Grupo Elite/V2",
  CENSER: "CENSER - Gen 1",
  AEVR: "Estudio AEVR",
} as const;

const currentWebPhotos: Record<string, PhotoOption> = {
  "S1.1.1": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/ia30d-session-1/pillars/nuestro-contexto-clean.png",
  },
  "S1.1.2": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/ia30d-session-1/pillars/mentalidad-ia.png",
  },
  "S1.1.3": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/ia30d-session-1/pillars/casos-aplicados-sector.png",
  },
  "S1.1.4": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/ia30d-session-1/pillars/como-empezar.png",
  },
  "S2.2.1": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/stressed.avif",
  },
  "S2.2.2": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/openai.webp",
  },
  "S2.2.3": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/work-image.webp",
  },
  "S2.2.4": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/road.avif",
  },
  "S3.3.1": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/reunion.avif",
  },
  "S3.3.2": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/openai.webp",
  },
  "S3.3.3": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/circle-with-line.avif",
  },
  "S3.3.4": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/flowchart.avif",
  },
  "S4.4.1": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/work-image-2.avif",
  },
  "S4.4.2": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/flowchart.avif",
  },
  "S4.4.3": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/circle.avif",
  },
  "S4.4.4": {
    file: "Actual en web",
    folder: "IA-30D actual",
    grade: "ACTUAL",
    reason: "Imagen que hoy está aplicada en la web para este pilar.",
    src: "/assets/road.avif",
  },
};

const sessions: Session[] = [
  {
    id: "S1",
    title: "Sesión 1",
    pillars: [
      {
        id: "1.1",
        title: "Nuestro Contexto",
        communicates: "La realidad actual de las empresas, por qué el momento de la IA es ahora.",
        options: [
          { file: "DSC02958.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Pantalla con Mentimeter sobre tareas administrativas. Contextualiza el problema sin necesitar texto adicional." },
          { file: "DSC02960.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Misma pantalla, Jaime con energía y audiencia visible. Más dinámica." },
          { file: "DSC03793.jpg", folder: folderByClient.CENSER, grade: "MEDIO", reason: "Audiencia respondiendo en teléfonos con logo CENSER visible. Diagnóstico participativo." },
        ],
      },
      {
        id: "1.2",
        title: "Mentalidad IA",
        communicates: "La IA como forma de pensar, no solo como conjunto de herramientas.",
        options: [
          { file: "DSC02971.jpg", folder: folderByClient.CBV1, grade: "MUY ALTO", reason: "Pantalla con framework Mentalidad IA: iterar, punto de partida, cocreación y feedback." },
          { file: "DSC03253.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Slide de visión: la IA potencia, pero no decide tu rumbo." },
          { file: "DSC03265.jpg", folder: folderByClient.CBV2, grade: "MEDIO-ALTO", reason: "Jaime señalando 'ChatGPT es solo la puerta'. Refuerza que va más allá de una tool." },
        ],
      },
      {
        id: "1.3",
        title: "Casos Aplicados a tu Sector",
        communicates: "El programa trabaja con ejemplos reales del propio rubro del cliente.",
        options: [
          { file: "DSC03964.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "NotebookLM cargado con Caso Galicia. IA aplicada a un documento legal real." },
          { file: "DSC02991.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Comparativo agente tradicional vs agente con IA. Caso inmobiliario explícito." },
          { file: "DSC02979.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Participante fotografiando el slide, señal de utilidad percibida." },
          { file: "DSC03802.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Caso real de proceso de WhatsApp / hoja de ruta en contexto portuario-logístico." },
        ],
      },
      {
        id: "1.4",
        title: "Como Empezar",
        communicates: "Hay un método concreto para dar el primer paso. Framework IDEA.",
        options: [
          { file: "DSC02996.jpg", folder: folderByClient.CBV1, grade: "MUY ALTO", reason: "Pantalla Framework IDEA aplicado al sector inmobiliario." },
          { file: "DSC02999.jpg", folder: folderByClient.CBV1, grade: "MUY ALTO", reason: "Audiencia trabajando con papeles. Muestra el paso posterior: práctica." },
          { file: "DSC03010.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Participante presentando. 'Tu desafío de la semana' convierte método en acción." },
        ],
      },
    ],
  },
  {
    id: "S2",
    title: "Sesión 2",
    pillars: [
      {
        id: "2.1",
        title: "Enseñar Herramientas Prácticas",
        communicates: "El programa muestra herramientas reales, no teoría.",
        options: [
          { file: "DSC03265.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Ecosistema de herramientas: ChatGPT es solo la puerta." },
          { file: "DSC03883.jpg", folder: folderByClient.AEVR, grade: "ALTO", reason: "NotebookLM presentado como herramienta práctica para documentos propios." },
          { file: "DSC03278.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Participantes con laptops trabajando en simultáneo." },
        ],
      },
      {
        id: "2.2",
        title: "Adaptarlas al Rubro",
        communicates: "Las herramientas se personalizan al sector específico del cliente.",
        options: [
          { file: "DSC03964.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "NotebookLM sobre expediente legal real. Herramienta genérica adaptada al rubro." },
          { file: "DSC03890.jpg", folder: folderByClient.AEVR, grade: "ALTO", reason: "ChatGPT vs NotebookLM en contexto de estudio jurídico." },
          { file: "DSC02991.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Comparativo inmobiliario explícito." },
        ],
      },
      {
        id: "2.3",
        title: "Aplicarlas Juntos",
        communicates: "La práctica es colectiva: el grupo aprende haciendo.",
        options: [
          { file: "DSC03010.jpg", folder: folderByClient.CBV1, grade: "MUY ALTO", reason: "Participante presentando su trabajo al grupo." },
          { file: "DSC03278.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Trabajo grupal activo con laptops." },
          { file: "DSC03279.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Reflexión conjunta frente a laptops." },
          { file: "DSC03812.jpg", folder: folderByClient.CENSER, grade: "MEDIO-ALTO", reason: "Grupo en entorno real con contenedores visibles." },
        ],
      },
      {
        id: "2.4",
        title: "Impulsar la Implementación Propia",
        communicates: "Cada participante toma ownership e implementa por su cuenta.",
        options: [
          { file: "DSC03281.jpg", folder: folderByClient.CBV2, grade: "MUY ALTO", reason: "Slide sobre el asesor que experimenta vs el que espera." },
          { file: "DSC03253.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Sin destino claro, ir más rápido no sirve." },
          { file: "DSC03269.jpg", folder: folderByClient.CBV2, grade: "MEDIO", reason: "Participante procesando en soledad. Internalización individual." },
        ],
      },
    ],
  },
  {
    id: "S3",
    title: "Sesión 3",
    pillars: [
      {
        id: "3.1",
        title: "Seguimiento de Avances S2",
        communicates: "Se revisa lo que pasó en la semana: qué implementaron y qué aprendieron.",
        options: [
          { file: "DSC03802.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Proceso documentado del equipo en pantalla." },
          { file: "DSC03803.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Jaime con gesto de pulgar y pantalla con proceso grupal." },
          { file: "DSC03935.jpg", folder: folderByClient.AEVR, grade: "MEDIO-ALTO", reason: "Participantes mirando pantalla con expresión reflexiva." },
          { file: "DSC03879.jpg", folder: folderByClient.AEVR, grade: "MEDIO", reason: "Escucha activa en biblioteca." },
        ],
      },
      {
        id: "3.2",
        title: "Nueva Capacidad Aplicada al Negocio",
        communicates: "Se introduce una capacidad nueva conectada con el trabajo real.",
        options: [
          { file: "DSC03883.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "Introducción a NotebookLM como nueva capacidad." },
          { file: "DSC03964.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "Nueva herramienta aplicada al negocio legal en pantalla." },
          { file: "DSC03890.jpg", folder: folderByClient.AEVR, grade: "ALTO", reason: "Expansión de capacidades con dos herramientas complementarias." },
        ],
      },
      {
        id: "3.3",
        title: "Mejora Continua en el Uso de IA",
        communicates: "El uso de IA como ciclo de mejora iterativa.",
        options: [
          { file: "DSC02971.jpg", folder: folderByClient.CBV1, grade: "MUY ALTO", reason: "Iterar: el resultado no aparece, se construye." },
          { file: "DSC03277.jpg", folder: folderByClient.CBV2, grade: "MEDIO-ALTO", reason: "Reflexión interna del ciclo de mejora." },
          { file: "DSC03269.jpg", folder: folderByClient.CBV2, grade: "MEDIO-ALTO", reason: "Participante pensativo, ajuste e internalización." },
        ],
      },
      {
        id: "3.4",
        title: "Foco en el Impacto Real",
        communicates: "Resultados concretos y medibles, no solo conocimiento.",
        options: [
          { file: "DSC03870.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "NPS con alta probabilidad de uso de IA después del programa." },
          { file: "DSC02958.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Cuantifica el problema inicial: más del 60% en tareas administrativas." },
          { file: "DSC03281.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "IA para multiplicar experiencia: impacto esperado en comportamiento." },
        ],
      },
    ],
  },
  {
    id: "S4",
    title: "Sesión 4",
    pillars: [
      {
        id: "4.1",
        title: "Seguimiento de Avances",
        communicates: "Revisión final de lo logrado en las 4 sesiones. Celebración y balance.",
        options: [
          { file: "DSC03857.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "Pantalla Sesión 4 - Hoja de Ruta. Título exacto de la sesión final." },
          { file: "DSC03829.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Foto grupal completa afuera del edificio CENSER." },
          { file: "DSC03019.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Foto grupal en lobby de Coldwell Banker." },
          { file: "DSC03021.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Otra opción grupal con logo wall." },
          { file: "DSC03870.jpg", folder: folderByClient.AEVR, grade: "ALTO", reason: "NPS fuerte como evidencia cuantitativa de cierre." },
        ],
      },
      {
        id: "4.2",
        title: "La IA Participa en los Procesos Reales",
        communicates: "La IA ya no es ejercicio: está integrada en cómo trabaja el equipo.",
        options: [
          { file: "DSC03964.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "NotebookLM con expediente real y respuestas visibles." },
          { file: "DSC03909.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "NotebookLM con documento AEVR y chat activo." },
          { file: "DSC03802.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Caso real CENSER documentado en pantalla." },
        ],
      },
      {
        id: "4.3",
        title: "Autonomía del Equipo",
        communicates: "El equipo ya puede experimentar y avanzar solo.",
        options: [
          { file: "DSC03281.jpg", folder: folderByClient.CBV2, grade: "MUY ALTO", reason: "El asesor que experimenta vs el que espera." },
          { file: "DSC02974.jpg", folder: folderByClient.CBV1, grade: "ALTO", reason: "Jaime observando, no instruyendo. Facilitador se corre." },
          { file: "DSC03278.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Participantes trabajando cada uno en lo suyo." },
          { file: "DSC03279.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Reflexión individual y autogestionada." },
        ],
      },
      {
        id: "4.4",
        title: "Hoja de Ruta",
        communicates: "El programa no termina: el equipo se va con próximos pasos claros.",
        options: [
          { file: "DSC03857.jpg", folder: folderByClient.AEVR, grade: "MUY ALTO", reason: "Pantalla Sesión 4 - Hoja de Ruta." },
          { file: "DSC03802.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Contenido de hoja de ruta en acción con casos de grupo." },
          { file: "DSC03803.jpg", folder: folderByClient.CENSER, grade: "ALTO", reason: "Mismo momento, con presencia del facilitador." },
          { file: "DSC03253.jpg", folder: folderByClient.CBV2, grade: "ALTO", reason: "Sin destino claro, ir más rápido no sirve. Buen framing para hoja de ruta." },
          { file: "DSC03830.jpg", folder: folderByClient.CENSER, grade: "MEDIO-ALTO", reason: "Foto grupal de cierre e inicio del camino propio." },
        ],
      },
    ],
  },
];

function photoSrc(option: PhotoOption) {
  if (option.src) {
    return option.src;
  }

  return `/api/brand-photo/${encodeURIComponent(option.folder)}/${encodeURIComponent(option.file)}`;
}

function pillarCode(sessionId: string, pillarId: string) {
  return `${sessionId}.${pillarId.split(".").at(-1)}`;
}

function selectionKeyToCode(key: string) {
  const [sessionId, , pillarNumber] = key.split(".");
  return `${sessionId}.${pillarNumber}`;
}

function optionCode(sessionId: string, pillarId: string, optionIndex: number) {
  return `${pillarCode(sessionId, pillarId)}-${optionIndex + 1}`;
}

function selectionCode(sessionId: string, pillarId: string, selection: SelectionValue) {
  if (selection === "none") {
    return `${pillarCode(sessionId, pillarId)}-NONE`;
  }

  if (selection === "actual") {
    return `${pillarCode(sessionId, pillarId)}-ACTUAL`;
  }

  return optionCode(sessionId, pillarId, selection);
}

type SelectionValue = number | "actual" | "none";

export default function IA30DFotosSesionesValidationPage() {
  const [activeSessionId, setActiveSessionId] = useState(sessions[0].id);
  const [activePillarBySession, setActivePillarBySession] = useState<Record<string, string>>({
    S1: "1.1",
    S2: "2.1",
    S3: "3.1",
    S4: "4.1",
  });
  const [selectedByPillar, setSelectedByPillar] = useState<Record<string, SelectionValue>>({});

  const activeSession = useMemo(
    () => sessions.find((session) => session.id === activeSessionId) ?? sessions[0],
    [activeSessionId],
  );
  const activePillarId = activePillarBySession[activeSession.id] ?? activeSession.pillars[0].id;
  const activePillar = activeSession.pillars.find((pillar) => pillar.id === activePillarId) ?? activeSession.pillars[0];
  const selectionKey = `${activeSession.id}.${activePillar.id}`;
  const currentOption = currentWebPhotos[selectionKey];
  const selected = selectedByPillar[selectionKey] ?? "actual";
  const selectedOption =
    selected === "actual" ? currentOption : typeof selected === "number" ? activePillar.options[selected] : null;

  const selectionSummary = Object.entries(selectedByPillar)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(
      ([key, value]) =>
        `${selectionKeyToCode(key)}: ${value === "none" ? "Sin imagen" : value === "actual" ? "Actual en web" : `Opción ${value + 1}`}`,
    )
    .join("\n");

  return (
    <main className="min-h-screen bg-white px-5 py-8 text-black md:px-10 md:py-12">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-8">
        <header className="space-y-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4F82FF]">Validación IA-30D</p>
          <h1 className="max-w-[1120px] font-sans text-[42px] font-semibold leading-[0.92] tracking-[-0.06em] text-black md:text-[76px]">
            Selector de fotos para sesiones.
          </h1>
          <p className="max-w-[920px] font-sans text-[18px] leading-[1.55] tracking-[-0.02em] text-black/64">
            Cada imagen se muestra en recorte 1:1 con object-cover, simulando cómo entraría en la web. La primera tarjeta muestra la imagen actual para comparar.
          </p>
        </header>

        <div className="sticky top-0 z-20 -mx-5 border-y border-black/10 bg-white/92 px-5 py-3 backdrop-blur md:-mx-10 md:px-10">
          <div className="mx-auto flex max-w-[1360px] flex-wrap gap-2">
            {sessions.map((session) => (
              <button
                key={session.id}
                type="button"
                onClick={() => setActiveSessionId(session.id)}
                className={`rounded-full border px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                  activeSession.id === session.id
                    ? "border-[#4F82FF] bg-[#4F82FF] text-white"
                    : "border-black/12 bg-white text-black/70 hover:border-black/28"
                }`}
              >
                {session.title}
              </button>
            ))}
          </div>
        </div>

        <section className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-3 xl:sticky xl:top-[82px] xl:self-start">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-black/48">Pilares</p>
            <div className="flex flex-col gap-2">
              {activeSession.pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarBySession((current) => ({ ...current, [activeSession.id]: pillar.id }))}
                  className={`rounded-[18px] border px-4 py-4 text-left transition-colors ${
                    activePillar.id === pillar.id
                      ? "border-[#4F82FF] bg-[#eef5ff]"
                      : "border-black/8 bg-white hover:border-black/18"
                  }`}
                >
                  <span className="font-mono text-[12px] text-[#4F82FF]">{pillar.id}</span>
                  <span className="mt-1 block font-sans text-[19px] font-semibold leading-[1.05] tracking-[-0.04em] text-black">
                    {pillar.title}
                  </span>
                  <span className="mt-2 block font-sans text-[14px] leading-[1.45] tracking-[-0.02em] text-black/58">
                    {pillar.communicates}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-black/8 bg-[#f6f8fc] p-5 md:p-6">
              <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#4F82FF]">
                    {activeSession.title} / {activePillar.id}
                  </p>
                  <h2 className="mt-2 font-sans text-[34px] font-semibold leading-[0.96] tracking-[-0.055em] text-black md:text-[56px]">
                    {activePillar.title}
                  </h2>
                  <p className="mt-4 max-w-[780px] font-sans text-[19px] leading-[1.45] tracking-[-0.02em] text-black/64">
                    {activePillar.communicates}
                  </p>
                </div>

                <div className="rounded-[22px] border border-black/8 bg-white p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/46">Selección actual</p>
                  <p className="mt-2 font-sans text-[24px] font-semibold leading-[1] tracking-[-0.04em] text-black">
                    {selectedOption ? selectedOption.file : "Sin imagen seleccionada"}
                  </p>
                  <p className="mt-3 font-mono text-[12px] text-[#4F82FF]">
                    {selectionCode(activeSession.id, activePillar.id, selected)}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {currentOption ? (
                <button
                  type="button"
                  onClick={() => setSelectedByPillar((current) => ({ ...current, [selectionKey]: "actual" }))}
                  className={`group overflow-hidden rounded-[26px] border bg-white text-left transition-all ${
                    selected === "actual" ? "border-[#4F82FF] shadow-[0_18px_46px_rgba(79,130,255,0.18)]" : "border-black/8 hover:border-black/20"
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden bg-[#f3f5f8]">
                    <Image
                      src={photoSrc(currentOption)}
                      alt={currentOption.file}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: currentOption.position ?? "50% 50%" }}
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold text-black backdrop-blur">
                      {pillarCode(activeSession.id, activePillar.id)}-ACTUAL
                    </div>
                    <div className="absolute right-3 top-3 rounded-full bg-black px-3 py-1 font-mono text-[11px] font-semibold text-white">
                      ACTUAL EN WEB
                    </div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div>
                      <p className="font-sans text-[24px] font-semibold leading-[1] tracking-[-0.04em] text-black">
                        {currentOption.file}
                      </p>
                      <p className="mt-1 font-mono text-[11px] text-black/44">{currentOption.src}</p>
                    </div>
                    <p className="font-sans text-[15px] leading-[1.45] tracking-[-0.02em] text-black/64">
                      {currentOption.reason}
                    </p>
                  </div>
                </button>
              ) : null}

              {activePillar.options.map((option, index) => {
                const isSelected = selected === index;

                return (
                  <button
                    key={`${option.folder}/${option.file}`}
                    type="button"
                    onClick={() => setSelectedByPillar((current) => ({ ...current, [selectionKey]: index }))}
                    className={`group overflow-hidden rounded-[26px] border bg-white text-left transition-all ${
                      isSelected ? "border-[#4F82FF] shadow-[0_18px_46px_rgba(79,130,255,0.18)]" : "border-black/8 hover:border-black/20"
                    }`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#f3f5f8]">
                      <Image
                        src={photoSrc(option)}
                        alt={option.file}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        style={{ objectPosition: option.position ?? "50% 50%" }}
                      />
                      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-semibold text-black backdrop-blur">
                        {optionCode(activeSession.id, activePillar.id, index)}
                      </div>
                      <div className="absolute right-3 top-3 rounded-full bg-[#4F82FF] px-3 py-1 font-mono text-[11px] font-semibold text-white">
                        {option.grade}
                      </div>
                    </div>
                    <div className="space-y-3 p-4">
                      <div>
                        <p className="font-sans text-[24px] font-semibold leading-[1] tracking-[-0.04em] text-black">
                          {option.file}
                        </p>
                        <p className="mt-1 font-mono text-[11px] text-black/44">{option.folder}</p>
                      </div>
                      <p className="font-sans text-[15px] leading-[1.45] tracking-[-0.02em] text-black/64">
                        {option.reason}
                      </p>
                    </div>
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => setSelectedByPillar((current) => ({ ...current, [selectionKey]: "none" }))}
                className={`flex min-h-[360px] flex-col justify-between rounded-[26px] border border-dashed p-5 text-left transition-colors ${
                  selected === "none" ? "border-[#4F82FF] bg-[#eef5ff]" : "border-black/18 bg-white hover:border-black/34"
                }`}
              >
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#4F82FF]">
                    {pillarCode(activeSession.id, activePillar.id)}-NONE
                  </p>
                  <h3 className="mt-3 font-sans text-[31px] font-semibold leading-[0.96] tracking-[-0.05em] text-black">
                    Sin imagen seleccionada
                  </h3>
                  <p className="mt-4 font-sans text-[16px] leading-[1.5] tracking-[-0.02em] text-black/58">
                    Usá esta opción si ninguna foto existente funciona para este pilar. Después podemos generar o buscar una imagen específica.
                  </p>
                </div>
                <div className="mt-8 h-px bg-black/10" />
              </button>
            </div>

            <div className="rounded-[26px] border border-black/8 bg-black p-5 text-white md:p-6">
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/48">Cómo indicarme tus elecciones</p>
              <p className="mt-3 max-w-[900px] font-sans text-[18px] leading-[1.5] tracking-[-0.02em] text-white/76">
                Decime algo como: <span className="text-white">S1.1-ACTUAL, S1.2-1, S1.3-NONE, S2.1-3</span>. Yo lo convierto después en assets finales, con recorte cuadrado real cuando haga falta.
              </p>
              <pre className="mt-4 min-h-[96px] overflow-auto rounded-[18px] border border-white/10 bg-white/8 p-4 font-mono text-[12px] leading-[1.6] text-white/78">
                {selectionSummary || "Todavía no seleccionaste opciones en esta sesión."}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
