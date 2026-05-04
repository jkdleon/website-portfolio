'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  durationMs?: number;
}

export function StatCard({ value, suffix = '', label, durationMs = 1200 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            setCount(Math.round(eased * value));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <div
      ref={ref}
      className="border border-border rounded-xl bg-surface px-6 py-7 lift"
    >
      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground tabular-nums">
          {count}
        </span>
        <span className="text-xl font-semibold text-accent">{suffix}</span>
      </div>
      <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-subtle">
        {label}
      </p>
    </div>
  );
}
