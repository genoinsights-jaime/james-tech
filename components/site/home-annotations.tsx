"use client";

import { useEffect, useState } from "react";

type Annotation = {
  n: number;
  selector: string;
  title: string;
  detail: string;
};

const annotations: Annotation[] = [
  {
    n: 1,
    selector: '[data-annot="focus"]',
    title: "Foco accesible (global)",
    detail:
      "Se agregó un anillo de foco azul visible para navegación por teclado en TODOS los elementos interactivos (a, button, inputs) del sitio. Antes no había ninguno. Probalo con la tecla Tab.",
  },
  {
    n: 2,
    selector: '[data-annot="social"]',
    title: "Prueba social antes del CTA",
    detail:
      "Nueva sección de confianza: un testimonio real (Coldwell Banker) + chips de clientes (AEVR, Coldwell Banker, CENSER, T&T) justo antes del cierre. La home no tenía credibilidad; la guía de landing recomienda social proof antes del CTA.",
  },
  {
    n: 3,
    selector: '[data-annot="photo"]',
    title: "Foto de Jaime en Sobre Jaime",
    detail:
      "La sección se llama “La cara visible del ecosistema” pero era 100% texto. Se sumó la foto de Jaime para humanizarla y romper la monotonía visual.",
  },
  {
    n: 4,
    selector: "footer",
    title: "Marca del footer unificada",
    detail:
      "El pie decía “© JamesTech 2026”. Se cambió a “© Mentalidad IA 2026” para unificar con la marca paraguas definida.",
  },
  {
    n: 5,
    selector: '[data-annot="rhythm"]',
    title: "Ritmo visual variado",
    detail:
      "La sección Empresas se espejó (tarjeta a la izquierda, título a la derecha) para cortar la repetición del layout: antes las 4 secciones usaban exactamente la misma estructura.",
  },
  {
    n: 6,
    selector: '[data-annot="tap"]',
    title: "Área táctil ampliada",
    detail:
      "Los links de texto (“Explorar Personas →”, “Ver IA-30D →”) eran de 12px (~16px de alto), por debajo del mínimo táctil. Se les dio min-height 44px para cumplir el estándar en mobile.",
  },
  {
    n: 7,
    selector: '[data-annot="heading"]',
    title: "Jerarquía de headings",
    detail:
      "Los títulos de las tarjetas de ruta (“Personas”/“Empresas”) eran <h2> y competían con los <h2> de cada sección. Se pasaron a <span> porque son tarjetas de navegación, no encabezados de sección.",
  },
  {
    n: 8,
    selector: '[data-annot="cta"]',
    title: "Hover del CTA suavizado",
    detail:
      "El botón “Llevarlo a mi equipo” pasaba de azul a negro en hover (salto brusco). Ahora va a un azul más oscuro (#0a4fb5), más prolijo.",
  },
];

type Marker = Annotation & { x: number; y: number };

function docPosition(el: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x: x + el.offsetWidth, y };
}

export function HomeAnnotations() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const compute = () => {
      const next: Marker[] = [];
      for (const a of annotations) {
        const el = document.querySelector<HTMLElement>(a.selector);
        if (!el) continue;
        const { x, y } = docPosition(el);
        next.push({ ...a, x, y });
      }
      setMarkers(next);
    };

    const t1 = window.setTimeout(compute, 300);
    const t2 = window.setTimeout(compute, 1200);
    window.addEventListener("resize", compute);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed bottom-4 left-1/2 z-[80] w-[calc(100%-2rem)] max-w-[520px] -translate-x-1/2 rounded-full border border-white/15 bg-black/85 px-4 py-2 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
        Vista de revisión · {markers.length} cambios · tocá o pasá el cursor por los puntos
      </div>
      <div className="pointer-events-none absolute left-0 top-0 z-[70]">
        {markers.map((m) => (
          <div
            key={m.n}
            className="pointer-events-auto absolute"
            style={{ left: m.x - 44, top: m.y + 4 }}
            onMouseEnter={() => setOpen(m.n)}
            onMouseLeave={() => setOpen((cur) => (cur === m.n ? null : cur))}
          >
            <button
              type="button"
              aria-label={`Cambio ${m.n}: ${m.title}`}
              onClick={() => setOpen((cur) => (cur === m.n ? null : m.n))}
              className="grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-[var(--color-primary)] font-mono text-[14px] font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.45)] ring-2 ring-white transition-transform hover:scale-110"
            >
              {m.n}
            </button>
            {open === m.n ? (
              <div className="absolute right-0 top-11 w-[270px] rounded-[14px] border border-white/12 bg-[#0b0b0c] p-4 text-left shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
                <p className="font-sans text-[14px] font-semibold leading-[1.2] text-[var(--color-primary)]">
                  {m.n}. {m.title}
                </p>
                <p className="mt-2 font-sans text-[13px] leading-[1.5] text-white/82">{m.detail}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
