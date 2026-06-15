"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function RotatingHeadline({ phrases, interval = 3500 }: { phrases: string[]; interval?: number }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion || phrases.length < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % phrases.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [reduceMotion, phrases.length, interval]);

  return (
    <span className="grid">
      {phrases.map((phrase, i) => (
        <motion.span
          key={phrase}
          aria-hidden={i === index ? undefined : true}
          className="col-start-1 row-start-1 block"
          initial={false}
          animate={{ opacity: i === index ? 1 : 0, y: reduceMotion || i === index ? 0 : 8 }}
          transition={{ duration: 0.5, ease: smoothEase }}
          style={{ pointerEvents: i === index ? "auto" : "none" }}
        >
          {phrase}
        </motion.span>
      ))}
    </span>
  );
}
