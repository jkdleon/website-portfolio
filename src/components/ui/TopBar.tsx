'use client';

import { useState } from 'react';

import { StatusChip } from '@/components/ui/StatusChip';
import { personal } from '@/lib/constants/personal';

const LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

export function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-5">
        <a href="#overview" className="focus-ring font-mono text-sm font-medium tracking-[0.2em] text-fg">
          JKDL
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="focus-ring mono-label block rounded-[4px] px-3 py-2 text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <StatusChip label={personal.status} tone="success" />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="topbar-menu"
            aria-label="Menu"
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-[4px] text-fg md:hidden"
          >
            <span aria-hidden="true" className="font-mono text-lg leading-none">
              {menuOpen ? '×' : '≡'}
            </span>
          </button>
        </div>
      </div>

      <div id="topbar-menu" hidden={!menuOpen} className="border-t border-line md:hidden">
        <ul className="mx-auto max-w-content px-5 py-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring mono-label flex min-h-11 items-center text-muted hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
