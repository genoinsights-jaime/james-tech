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

export const metadata: Metadata = {
  title: "IA-30D",
  description: "Transformá tu empresa, implementá IA con resultados medibles en 30 días.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  openGraph: {
    title: "IA-30D",
    description: "Listo para empezar?",
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
