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
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Three.js'],
    businessImpact:
      'A single source of truth for my professional presence — content lives in typed constants, deploys auto-trigger on push, and updates take minutes instead of hours.',
    link: 'https://github.com/jkdleon/website-portfolio',
    linkLabel: 'View on GitHub',
  },
  {
    title: 'ZKTeco BioTime GCP Cloud Migration',
    category: 'Cloud Infrastructure',
    description: 'Migrated the on-premise ZKTeco BioTime attendance management server to Google Cloud Platform (GCP) to improve reliability, scalability, and secure remote device connectivity.',
    challenge: 'The existing on-premise deployment suffered from unstable remote device connections, delayed real-time synchronization, and frequent downtime that affected attendance data consistency across locations.',
    solution: 'Designed and implemented a cloud migration strategy on GCP with optimized networking, secure remote access, and high-availability infrastructure to ensure continuous and stable communication between attendance devices and the central server.',
    tools: ['Google Cloud Platform', 'ZKTeco BioTime', 'Windows Server', 'Remote Networking', 'Cloud Migration'],
    businessImpact: 'Improved real-time data synchronization, reduced device disconnections, increased system uptime, and enabled more reliable centralized attendance monitoring for remote sites.',
    link: '',
    linkLabel: ''
  },
];
