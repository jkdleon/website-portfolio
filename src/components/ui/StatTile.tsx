'use client';

import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from '@/lib/motion/useReducedMotion';

interface StatTileProps {
  value: number;
  display?: string;
  label: string;
}

const DURATION_MS = 1100;

export function StatTile({ value, display, label }: StatTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const canAnimate =
    !display && !reduced && typeof IntersectionObserver !== 'undefined';
  const [count, setCount] = useState(canAnimate ? 0 : value);

  useEffect(() => {
    // Static case (display given, reduced motion, or no IntersectionObserver)
    // renders `value` directly below — no state sync needed here.
    if (!canAnimate) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / DURATION_MS);
        const eased = 1 - Math.pow(1 - t, 3);
        setCount(Math.round(eased * value));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [canAnimate, value]);

  return (
    <div ref={ref} className="bg-panel px-4 py-4 md:px-5">
      <p className="font-mono text-2xl text-fg tabular-nums md:text-3xl" suppressHydrationWarning>
        {display ?? (canAnimate ? count : value)}
      </p>
      <p className="mono-label mt-1 text-subtle">{label}</p>
    </div>
  );
}
