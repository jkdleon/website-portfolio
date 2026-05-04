'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const tabs = [
  { label: 'Overview', href: '#overview' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'History', href: '#history' },
  { label: 'Venture', href: '#venture' },
  { label: 'Projects', href: '#projects' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#overview');

  useEffect(() => {
    const ids = tabs.map((t) => t.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
        {/* Let's Chat — left anchor */}
        <a
          href="mailto:kyleraizel@gmail.com"
          className="hidden lg:block shrink-0 font-mono text-[11px] uppercase tracking-widest text-subtle hover:text-accent transition-colors"
        >
          Let&apos;s Chat
        </a>

        {/* Pill tabs — center */}
        <div className="hidden md:flex items-center gap-1 bg-surface border border-border rounded-full px-1.5 py-1">
          {tabs.map((tab) => {
            const isActive = active === tab.href;
            return (
              <a
                key={tab.href}
                href={tab.href}
                className={`px-3 py-1 rounded-full font-mono text-[11px] tracking-wider uppercase transition-all ${
                  isActive
                    ? 'bg-foreground text-background'
                    : 'text-subtle hover:text-foreground'
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>

        {/* Theme toggle — right */}
        <div className="hidden md:flex items-center">
          <ThemeToggle />
        </div>

        {/* Mobile: Let's Chat + toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground p-1"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current mb-1.5" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-b border-border px-5 pb-4 pt-2">
          {tabs.map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground"
            >
              {tab.label}
            </a>
          ))}
          <a
            href="mailto:kyleraizel@gmail.com"
            className="block py-2 font-mono text-xs uppercase tracking-widest text-accent"
          >
            Let&apos;s Chat
          </a>
        </div>
      )}
    </nav>
  );
}
