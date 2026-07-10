"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  prefix?: string;
};

export function AnimatedNumber({ value, suffix = "", prefix = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();
  const finalValue = `${prefix}${value}${suffix}`;
  const [displayValue, setDisplayValue] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (displayValue === finalValue) return;

    if (reducedMotion) {
      setDisplayValue(finalValue);
      return;
    }

    if (!inView) {
      const fallbackId = window.setTimeout(() => {
        setDisplayValue(finalValue);
      }, 1200);
      return () => window.clearTimeout(fallbackId);
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(`${prefix}${Math.round(latest)}${suffix}`);
      },
      onComplete: () => {
        setDisplayValue(finalValue);
      },
    });

    return () => controls.stop();
  }, [displayValue, finalValue, inView, prefix, reducedMotion, suffix, value]);

  return <span ref={ref}>{displayValue}</span>;
}
