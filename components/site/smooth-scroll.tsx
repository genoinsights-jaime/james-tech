"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.92,
    });
    lenisRef.current = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };
    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    let retryRafId = 0;
    const scrollToHash = (hashValue: string) => {
      const targetId = hashValue.replace(/^#/, "");
      if (!targetId) return false;
      const element = document.getElementById(targetId);
      if (!element) return false;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    const syncHashScroll = () => {
      const hash = window.location.hash;
      if (!hash) return;

      let attempts = 0;
      const maxAttempts = 120;

      const tryScroll = () => {
        attempts += 1;
        const didScroll = scrollToHash(hash);
        if (didScroll || attempts >= maxAttempts) return;
        retryRafId = window.requestAnimationFrame(tryScroll);
      };

      retryRafId = window.requestAnimationFrame(tryScroll);
    };

    syncHashScroll();
    window.addEventListener("hashchange", syncHashScroll);

    return () => {
      if (retryRafId) {
        window.cancelAnimationFrame(retryRafId);
      }
      window.removeEventListener("hashchange", syncHashScroll);
    };
  }, [pathname]);

  return null;
}
