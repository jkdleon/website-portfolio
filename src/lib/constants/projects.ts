import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'Personal Portfolio Website',
    category: 'Software Development',
    description:
      'A dark-first single-page portfolio built with Next.js and Tailwind CSS v4 — the site you are looking at right now.',
    challenge:
      'I needed a portfolio that felt distinct from generic templates while staying fast, accessible, and easy to maintain alongside a full-time IT role.',
    solution:
      'Built a fully data-driven Next.js App Router site with Tailwind v4 design tokens, dark/light mode with FOUC prevention, scroll-fade animations, and modular landing components.',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    businessImpact:
      'A single source of truth for my professional presence — content lives in typed constants, deploys auto-trigger on push, and updates take minutes instead of hours.',
    link: 'https://github.com/jkdleon/website-portfolio',
    linkLabel: 'View on GitHub',
  },
];
