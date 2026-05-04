'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    function update() {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const next = max > 0 ? Math.min(100, Math.max(0, (el.scrollTop / max) * 100)) : 0;
      setPct(next);
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="h-[2px] bg-border/60">
        <div
          className="h-full bg-accent transition-[width] duration-100 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="absolute right-3 top-2 font-mono text-[10px] tracking-widest text-subtle">
        {String(Math.round(pct)).padStart(2, '0')}%
      </div>
    </div>
  );
}
