"use client";

import { useEffect, useRef } from "react";

const TOTAL_VIEWS = 20_000_000;
const FINAL_LABEL = "20M+";

export function ViewsCounter() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      element.textContent = FINAL_LABEL;
      return;
    }

    const format = (value: number) =>
      value >= 1e6
        ? `${(value / 1e6).toFixed(1)}M`
        : `${Math.floor(value / 1000)}K`;

    const duration = 2600;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      if (progress < 1) {
        element.textContent = format(TOTAL_VIEWS * eased);
        frame = requestAnimationFrame(tick);
      } else {
        element.textContent = FINAL_LABEL;
      }
    };

    element.textContent = "0";
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <b
      ref={ref}
      id="views"
      aria-label="20 million plus views"
      className="block text-[clamp(3rem,12vw,6.5rem)] font-extrabold leading-none text-accent tabular-nums"
    >
      {FINAL_LABEL}
    </b>
  );
}
