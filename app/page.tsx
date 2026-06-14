import type { Metadata } from "next";

import { MentalidadHome } from "@/components/site/mentalidad-home";

export const metadata: Metadata = {
  title: "Mentalidad IA",
  description:
    "Aprender, aplicar y evolucionar con IA. Inteligencia artificial con criterio para personas, equipos y empresas.",
};

export default function Page() {
  return <MentalidadHome />;
}
