'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frameId: number | null = null;
    const reveal = () => {
      frameId = window.requestAnimationFrame(() => setVisible(true));
    };

    if (window.location.hash === `#${id}`) {
      reveal();
      return () => {
        if (frameId !== null) window.cancelAnimationFrame(frameId);
      };
    }

    const rect = el.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyInView) {
      reveal();
      return () => {
        if (frameId !== null) window.cancelAnimationFrame(frameId);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return (
    <section
      id={id}
      ref={ref}
      className={`scroll-mt-20 py-20 md:py-28 ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: visible
          ? 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
          : 'none',
      }}
    >
      {children}
    </section>
  );
}
