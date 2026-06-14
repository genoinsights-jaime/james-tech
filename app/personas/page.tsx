import type { Metadata } from "next";

import { PersonasPage } from "@/components/site/personas-page";

export const metadata: Metadata = {
  title: "Personas | James Tech",
  description: "Aprender IA para pensar, crear y trabajar mejor. Una ruta para incorporar inteligencia artificial con criterio propio.",
};

export default function Page() {
  return <PersonasPage />;
}
