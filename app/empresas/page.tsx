import type { Metadata } from "next";

import { EmpresasPage } from "@/components/site/empresas-page";

export const metadata: Metadata = {
  title: "Empresas · Mentalidad IA",
  description:
    "Integrar IA con impacto real en tus equipos: programa intensivo IA-30D y consultoría para pasar de la exploración a la integración con autonomía.",
};

export default function Page() {
  return <EmpresasPage />;
}
