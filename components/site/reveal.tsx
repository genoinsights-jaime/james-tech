"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PropsWithChildren } from "react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  distance?: number;
  id?: string;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 28,
  id,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div id={id} className={className}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.75, ease: smoothEase, delay }}
    >
      {children}
    </motion.div>
  );
}
