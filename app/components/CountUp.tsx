"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  /** Number of decimal places to render. */
  decimals?: number;
  /** Group thousands with commas (e.g. 1,000,000). */
  group?: boolean;
  durationMs?: number;
  className?: string;
};

/**
 * Counts from 0 up to `value` the first time it scrolls into view,
 * using an ease-out curve. Respects reduced-motion by snapping to the value.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  group = false,
  durationMs = 1700,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (typeof IntersectionObserver === "undefined" || prefersReduced) {
      setCurrent(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const progress = Math.min(1, (now - start) / durationMs);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCurrent(value * eased);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setCurrent(value);
              }
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  const rounded = Number(current.toFixed(decimals));
  const formatted = group
    ? rounded.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : rounded.toFixed(decimals);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
