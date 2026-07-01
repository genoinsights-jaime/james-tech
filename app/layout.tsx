import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SmoothScroll } from "@/components/site/smooth-scroll";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const ogTitle = "Mentalidad IA — Aprender IA con criterio";
const ogDescription = "Inteligencia artificial con criterio para personas, equipos y empresas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mentalidad-ia.com"),
  title: "Mentalidad IA",
  description: "Aprender, aplicar y evolucionar con IA. Inteligencia artificial con criterio para personas, equipos y empresas.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Mentalidad IA",
    url: "https://www.mentalidad-ia.com",
    locale: "es_AR",
    title: ogTitle,
    description: ogDescription,
    images: [
      {
        url: "/assets/og-mentalidad.jpg",
        width: 1200,
        height: 630,
        alt: "Mentalidad IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
    images: ["/assets/og-mentalidad.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
