'use client';

import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'Overview', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'History', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
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
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-sm tracking-tight text-foreground"
          aria-label="Home"
        >
          <span className="text-accent">{'>_'}</span> jkdleon
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full font-mono text-[11px] tracking-wider uppercase transition-colors ${
                  isActive
                    ? 'bg-accent-soft text-accent'
                    : 'text-subtle hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <span className="mx-2 h-4 w-px bg-border" />
          <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center gap-3">
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
