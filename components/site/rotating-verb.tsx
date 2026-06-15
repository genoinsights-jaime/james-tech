"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const defaultVerbs = ["pensar", "crear", "trabajar", "decidir", "comunicar"];

export function RotatingVerb({ verbs = defaultVerbs }: { verbs?: string[] }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const longest = verbs.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    if (reduceMotion) return undefined;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % verbs.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduceMotion, verbs.length]);

  return (
    <span className="relative block text-[var(--color-primary)]">
      <span aria-hidden="true" className="invisible">
        {longest}
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={index}
          className="absolute left-0 top-0"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "0.5em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-0.5em" }}
          transition={{ duration: 0.42, ease: smoothEase }}
        >
          {verbs[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
