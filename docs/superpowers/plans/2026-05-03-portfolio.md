# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build James Kyle De Leon's personal portfolio — a single-page Next.js site with dark/light mode, all content driven from typed constants, deployed to Vercel.

**Architecture:** One `page.tsx` renders seven sections in order (Hero → About → Experience → Skills → Certifications → Projects → Contact). All portfolio content lives in `src/lib/constants/` as TypeScript objects — no hardcoded strings in components. Dark mode is class-based (`darkMode: 'class'`) with localStorage persistence and a FOUC-prevention script in `<head>`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS, Geist Sans + Geist Mono (ships with Next.js), Vercel deployment.

---

## File Map

**Create:**
- `src/app/layout.tsx` — Root layout: fonts, metadata, FOUC prevention script
- `src/app/page.tsx` — Page: renders Nav + all sections + footer
- `src/app/globals.css` — CSS variables for light/dark, Tailwind base
- `tailwind.config.ts` — Dark mode class strategy, CSS variable color tokens, font family mapping
- `src/lib/constants/types.ts` — TypeScript interfaces for all content
- `src/lib/constants/personal.ts` — Name, bio, social links
- `src/lib/constants/experience.ts` — Work history array
- `src/lib/constants/skills.ts` — Skills by category
- `src/lib/constants/certifications.ts` — Certs array
- `src/lib/constants/projects.ts` — Projects array (starts empty)
- `src/lib/constants/index.ts` — Re-exports all constants
- `src/components/ui/ThemeToggle.tsx` — Dark/light mode button (named export)
- `src/components/ui/Nav.tsx` — Sticky nav with anchor links + hamburger (default export)
- `src/components/ui/SectionWrapper.tsx` — Fade-in on scroll wrapper (named export)
- `src/components/landing/Hero.tsx` — Hero section (default export)
- `src/components/landing/About.tsx` — About section (default export)
- `src/components/landing/Experience.tsx` — Experience timeline (default export)
- `src/components/landing/Skills.tsx` — Skills tag grid (default export)
- `src/components/landing/Certifications.tsx` — Certifications cards (default export)
- `src/components/landing/Projects.tsx` — Projects cards (default export)
- `src/components/landing/Contact.tsx` — Contact section (default export)
- `.env.example` — Environment variable template
- `public/resume.pdf` — Placeholder (replace with actual resume before launch)

**Modify:**
- `tailwind.config.ts` — Replace with dark mode + CSS variable config
- `src/app/globals.css` — Replace with CSS variable system
- `src/app/layout.tsx` — Update metadata, add FOUC script, map font variables

---

### Task 1: Scaffold the Next.js project

**Files:**
- Create: all project files via `create-next-app`

- [ ] **Step 1: Open a terminal in the project directory**

```bash
cd "d:\Users\User\Desktop\Claude\Website portfolio"
```

- [ ] **Step 2: Scaffold the project into the existing folder**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

When prompted about existing files (CLAUDE.md, docs/), choose to continue. Accept all other defaults.

- [ ] **Step 3: Verify the dev server starts**

```bash
npm run dev
```

Expected: Server starts at `http://localhost:3000`, default Next.js welcome page is visible. Stop with `Ctrl+C`.

- [ ] **Step 4: Initialize git and commit scaffold**

```bash
git init
git add .gitignore package.json package-lock.json src/ public/ next.config.ts tsconfig.json tailwind.config.ts postcss.config.mjs eslint.config.mjs
git commit -m "chore: scaffold Next.js project"
```

---

### Task 2: Configure dark mode colors and fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Replace tailwind.config.ts**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Replace globals.css**

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #f8fafc;
  --foreground: #0a0a0a;
  --muted: #64748b;
  --border: #e2e8f0;
  --accent: #06b6d4;
}

.dark {
  --background: #0a0a0a;
  --foreground: #f8fafc;
  --muted: #94a3b8;
  --border: #1e293b;
  --accent: #06b6d4;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background);
  color: var(--foreground);
}
```

- [ ] **Step 3: Update layout.tsx**

Keep the font imports exactly as create-next-app generated them (they vary slightly by version). Replace only the `metadata` export, the variable names in the `<html>` className, and add the `<head>` script. The example below shows the typical Next.js 15 output — adjust font variable names if yours differ:

```tsx
// src/app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'James Kyle De Leon | IT Executive & Network Engineer',
  description:
    'Portfolio of James Kyle De Leon — IT professional with 7+ years in enterprise networking, transitioning into Cloud & DevOps. Open to remote roles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run build
```

Expected: Build completes with no type errors.

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts src/app/globals.css src/app/layout.tsx
git commit -m "feat: configure dark mode with CSS variables and FOUC prevention"
```

---

### Task 3: Define TypeScript content types

**Files:**
- Create: `src/lib/constants/types.ts`

- [ ] **Step 1: Create types.ts**

```typescript
// src/lib/constants/types.ts

export interface PersonalInfo {
  name: string;
  tagline: string;
  openToRemote: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string[];
}

export interface ExperienceEntry {
  company: string;
  location: string;
  title: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel: string;
}
```

- [ ] **Step 2: Verify types compile**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/constants/types.ts
git commit -m "feat: add TypeScript content types"
```

---

### Task 4: Populate content constants

**Files:**
- Create: `src/lib/constants/personal.ts`
- Create: `src/lib/constants/experience.ts`
- Create: `src/lib/constants/skills.ts`
- Create: `src/lib/constants/certifications.ts`
- Create: `src/lib/constants/projects.ts`
- Create: `src/lib/constants/index.ts`

- [ ] **Step 1: Create personal.ts**

```typescript
// src/lib/constants/personal.ts
import { PersonalInfo } from './types';

export const personal: PersonalInfo = {
  name: 'James Kyle De Leon',
  tagline: 'IT Executive & Network Engineer → Cloud & DevOps',
  openToRemote: 'Open to remote roles worldwide',
  email: 'jameskyle.dleon@gmail.com',
  github: 'https://github.com/jkdleon',
  linkedin: 'https://linkedin.com/in/james-kyle-de-leon',
  bio: [
    "Results-driven IT professional with over 7 years of experience managing and maintaining complex enterprise network infrastructures across the Philippines and Qatar. I've led teams, built SOPs from scratch, and kept critical systems running 24/7.",
    "I'm now actively transitioning into Cloud and DevOps — studying infrastructure as code, CI/CD pipelines, and container orchestration. My networking and Linux background gives me a strong foundation that most DevOps engineers spend years building.",
    "I'm looking for remote roles where I can bring my operational discipline and enterprise experience to a team that values reliability and continuous improvement.",
  ],
};
```

- [ ] **Step 2: Create experience.ts**

```typescript
// src/lib/constants/experience.ts
import { ExperienceEntry } from './types';

export const experience: ExperienceEntry[] = [
  {
    company: 'Snoonu',
    location: 'Doha, Qatar',
    title: 'IT Executive',
    startDate: 'Aug 2025',
    endDate: 'Feb 2026',
    bullets: [
      'Provided L1/L2 IT support across desktops, laptops, CCTV, and access control systems; managed full incident lifecycle in Jira with SLA compliance.',
      'Deployed and configured Aruba switches, access points, and Fortinet firewalls; set up IPsec VPNs and wireless infrastructure.',
      'Managed Windows and macOS endpoints via Hexnode MDM; deployed security patches and enforced device compliance.',
      'Migrated systems to Google Cloud Platform for high availability; led the department ITSM Gap Analysis.',
    ],
  },
  {
    company: 'New Oriental Club88',
    location: 'Parañaque, Philippines',
    title: 'IT Supervisor / Lead Network Operations Engineer',
    startDate: 'Aug 2019',
    endDate: 'Jan 2025',
    bullets: [
      'Supervised network engineering and IT support team; provided mentorship, advanced training, and capability development.',
      'Executed root-cause-driven problem solving for WAN/LAN networks with minimal impact on business continuity.',
      'Implemented monitoring stack (Zabbix, MRTG, Cacti, Fastnetmon) to optimize issue detection and reduce response times.',
      'Co-authored department SOPs; streamlined team productivity through process standardization and asset management procedures.',
    ],
  },
  {
    company: 'Concentrix',
    location: 'Quezon City, Philippines',
    title: 'Customer Care Analyst',
    startDate: 'Jul 2018',
    endDate: 'Sep 2019',
    bullets: [
      'Managed high-volume daily calls while maintaining top customer satisfaction rates and consistent SLA compliance.',
      'Diagnosed system problems and implemented resolutions; achieved first call resolution for the majority of contacts.',
    ],
  },
  {
    company: 'Servflex Inc.',
    location: 'Makati, Philippines',
    title: 'Project Database Engineer',
    startDate: 'Nov 2017',
    endDate: 'May 2018',
    bullets: [
      'Maintained IP database and fulfilled client work orders using standardized templates.',
    ],
  },
  {
    company: 'Faire Technologies Inc.',
    location: 'San Juan City, Philippines',
    title: 'Field Engineer',
    startDate: 'Jan 2017',
    endDate: 'Nov 2017',
    bullets: [
      'Designed CCTV and access control systems; developed BOMs and estimated project costs based on client requirements.',
    ],
  },
];
```

- [ ] **Step 3: Create skills.ts**

```typescript
// src/lib/constants/skills.ts
import { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: 'Networking',
    skills: ['Cisco IOS', 'LAN/WAN', 'OSPF', 'EIGRP', 'BGP', 'VLAN', 'DHCP', 'DNS', 'NAT', 'IP Subnetting'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['Azure', 'AWS', 'GCP', 'Fortinet', 'Aruba', 'Hexnode MDM', 'Microsoft 365'],
  },
  {
    name: 'Security Tools',
    skills: ['Wazuh', 'TheHive', 'Shuffle', 'IPsec VPN'],
  },
  {
    name: 'Monitoring',
    skills: ['Zabbix', 'MRTG', 'Cacti', 'Fastnetmon', 'Pingplotter'],
  },
  {
    name: 'OS & Systems',
    skills: ['Linux (Ubuntu, CentOS)', 'Windows Server', 'macOS'],
  },
  {
    name: 'Soft Skills',
    skills: ['Team Leadership', 'SOP Development', 'Vendor Coordination', 'SLA Management', 'Stakeholder Communication'],
  },
];
```

- [ ] **Step 4: Create certifications.ts**

Note: `year` is optional — add actual dates when known.

```typescript
// src/lib/constants/certifications.ts
import { Certification } from './types';

export const certifications: Certification[] = [
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco' },
  { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'CompTIA Security+', issuer: 'CompTIA' },
  { name: 'Fortinet NSE1: Network Security Associate', issuer: 'Fortinet' },
  { name: 'Fortinet NSE2: Network Security Associate', issuer: 'Fortinet' },
];
```

- [ ] **Step 5: Create projects.ts**

```typescript
// src/lib/constants/projects.ts
import { Project } from './types';

export const projects: Project[] = [];
```

- [ ] **Step 6: Create index.ts**

```typescript
// src/lib/constants/index.ts
export { personal } from './personal';
export { experience } from './experience';
export { skills } from './skills';
export { certifications } from './certifications';
export { projects } from './projects';
```

- [ ] **Step 7: Verify all types compile**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 8: Commit**

```bash
git add src/lib/constants/
git commit -m "feat: add content constants with full portfolio data"
```

---

### Task 5: Build ThemeToggle component

**Files:**
- Create: `src/components/ui/ThemeToggle.tsx`

- [ ] **Step 1: Create ThemeToggle**

```tsx
// src/components/ui/ThemeToggle.tsx
'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'dark';
    setDark(stored === 'dark');
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
    >
      {dark ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/ThemeToggle.tsx
git commit -m "feat: add ThemeToggle with localStorage persistence"
```

---

### Task 6: Build Nav component

**Files:**
- Create: `src/components/ui/Nav.tsx`

- [ ] **Step 1: Create Nav**

```tsx
// src/components/ui/Nav.tsx
'use client';

import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent font-bold text-lg">
          jkdleon
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
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
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes with no errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/Nav.tsx
git commit -m "feat: add sticky Nav with mobile hamburger menu"
```

---

### Task 7: Build SectionWrapper (scroll fade-in)

**Files:**
- Create: `src/components/ui/SectionWrapper.tsx`

- [ ] **Step 1: Create SectionWrapper**

```tsx
// src/components/ui/SectionWrapper.tsx
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/ui/SectionWrapper.tsx
git commit -m "feat: add SectionWrapper with Intersection Observer fade-in"
```

---

### Task 8: Build Hero section

**Files:**
- Create: `src/components/landing/Hero.tsx`

- [ ] **Step 1: Create Hero**

```tsx
// src/components/landing/Hero.tsx
import { personal } from '@/lib/constants/personal';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
          {personal.name}
        </h1>
        <p className="font-mono text-lg md:text-xl text-muted mb-4">
          {personal.tagline}
        </p>
        <p className="text-muted mb-10">{personal.openToRemote}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Hero.tsx
git commit -m "feat: add Hero section"
```

---

### Task 9: Build About section

**Files:**
- Create: `src/components/landing/About.tsx`

- [ ] **Step 1: Create About**

```tsx
// src/components/landing/About.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { personal } from '@/lib/constants/personal';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          01. About Me
        </p>
        <h2 className="text-3xl font-bold mb-8">Background</h2>
        <div className="space-y-4 text-muted leading-relaxed max-w-2xl">
          {personal.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/About.tsx
git commit -m "feat: add About section"
```

---

### Task 10: Build Experience section

**Files:**
- Create: `src/components/landing/Experience.tsx`

- [ ] **Step 1: Create Experience**

```tsx
// src/components/landing/Experience.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { experience } from '@/lib/constants/experience';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          02. Experience
        </p>
        <h2 className="text-3xl font-bold mb-10">Work History</h2>
        <div className="space-y-10">
          {experience.map((entry, i) => (
            <div key={i} className="border-l-2 border-border pl-6 relative">
              <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg font-semibold">{entry.title}</h3>
                <span className="font-mono text-sm text-muted whitespace-nowrap">
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>
              <p className="font-mono text-sm text-accent mb-3">
                {entry.company} · {entry.location}
              </p>
              <ul className="space-y-2">
                {entry.bullets.map((bullet, j) => (
                  <li key={j} className="text-muted text-sm flex gap-2">
                    <span className="text-accent mt-1 flex-shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Experience.tsx
git commit -m "feat: add Experience timeline section"
```

---

### Task 11: Build Skills section

**Files:**
- Create: `src/components/landing/Skills.tsx`

- [ ] **Step 1: Create Skills**

```tsx
// src/components/landing/Skills.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { skills } from '@/lib/constants/skills';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          03. Skills
        </p>
        <h2 className="text-3xl font-bold mb-10">Technical Expertise</h2>
        <div className="space-y-6">
          {skills.map((category) => (
            <div key={category.name}>
              <h3 className="font-mono text-sm text-muted mb-3 uppercase tracking-wider">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded border border-border text-muted hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Skills.tsx
git commit -m "feat: add Skills section with grouped tags"
```

---

### Task 12: Build Certifications section

**Files:**
- Create: `src/components/landing/Certifications.tsx`

- [ ] **Step 1: Create Certifications**

```tsx
// src/components/landing/Certifications.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { certifications } from '@/lib/constants/certifications';

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          04. Certifications
        </p>
        <h2 className="text-3xl font-bold mb-10">Credentials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="border border-border rounded-lg p-5 hover:border-accent transition-colors"
            >
              <p className="font-mono text-xs text-accent mb-2 uppercase tracking-wider">
                {cert.issuer}
              </p>
              <p className="font-medium text-sm text-foreground">{cert.name}</p>
              {cert.year && (
                <p className="font-mono text-xs text-muted mt-2">{cert.year}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Certifications.tsx
git commit -m "feat: add Certifications section"
```

---

### Task 13: Build Projects section

**Files:**
- Create: `src/components/landing/Projects.tsx`

- [ ] **Step 1: Create Projects**

```tsx
// src/components/landing/Projects.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { projects } from '@/lib/constants/projects';

export default function Projects() {
  if (projects.length === 0) return null;

  return (
    <SectionWrapper id="projects">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          05. Projects
        </p>
        <h2 className="text-3xl font-bold mb-10">Things I&apos;ve Built</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-border rounded-lg p-6 hover:border-accent transition-colors flex flex-col"
            >
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-muted text-sm mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-xs text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-accent hover:underline"
              >
                {project.linkLabel} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
```

Note: This section renders `null` while `projects` is empty — the nav link to `#projects` becomes a no-op. To add a project later, append one object to the `projects` array in `src/lib/constants/projects.ts`.

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Projects.tsx
git commit -m "feat: add Projects section (hidden when empty)"
```

---

### Task 14: Build Contact section

**Files:**
- Create: `src/components/landing/Contact.tsx`

- [ ] **Step 1: Create Contact**

```tsx
// src/components/landing/Contact.tsx
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { personal } from '@/lib/constants/personal';

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-mono text-accent text-sm mb-2 tracking-widest uppercase">
          06. Contact
        </p>
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-muted mb-8 max-w-lg leading-relaxed">
          I&apos;m actively looking for remote opportunities in Cloud &amp; DevOps. Whether you have a
          question or just want to say hi, my inbox is always open.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
          >
            Send an Email
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-muted font-semibold rounded hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
npm run build
```

Expected: Build passes.

- [ ] **Step 3: Commit**

```bash
git add src/components/landing/Contact.tsx
git commit -m "feat: add Contact section"
```

---

### Task 15: Assemble page.tsx and verify visually

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Replace default page.tsx**

```tsx
// src/app/page.tsx
import Nav from '@/components/ui/Nav';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import Skills from '@/components/landing/Skills';
import Certifications from '@/components/landing/Certifications';
import Projects from '@/components/landing/Projects';
import Contact from '@/components/landing/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 text-center">
        <p className="font-mono text-xs text-muted">
          James Kyle De Leon &middot; Built with Next.js &amp; Tailwind
        </p>
      </footer>
    </>
  );
}
```

- [ ] **Step 2: Add resume placeholder**

```bash
# PowerShell
New-Item -Path "public/resume.pdf" -ItemType File -Force
```

Replace with the actual resume PDF before deploying.

- [ ] **Step 3: Start dev server and verify visually**

```bash
npm run dev
```

Open `http://localhost:3000` and check:
- Dark mode loads by default with no white flash on page load
- Nav is sticky; all anchor links scroll to the correct section
- Dark/light toggle switches theme and persists after page refresh
- Hero shows name, tagline, and both CTA buttons
- About, Experience, Skills, Certifications, Contact all render with real data
- Sections fade in as you scroll down
- Mobile hamburger menu opens and closes correctly (test at narrow viewport)

Stop with `Ctrl+C`.

- [ ] **Step 4: Run lint**

```bash
npm run lint
```

Expected: No errors. Fix any unescaped entity warnings by using `&apos;`, `&amp;`, `&middot;` as needed.

- [ ] **Step 5: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 6: Commit**

```bash
git add src/app/page.tsx public/resume.pdf
git commit -m "feat: assemble full portfolio page"
```

---

### Task 16: Environment setup and Vercel deployment

**Files:**
- Create: `.env.example`

- [ ] **Step 1: Create .env.example**

```bash
# .env.example
# Copy to .env.local before running locally. Do not commit .env.local.
# Add keys here as the project grows (e.g. email service, analytics)
```

- [ ] **Step 2: Verify .gitignore covers .env.local**

Open `.gitignore` — confirm `.env.local` is present. create-next-app includes this by default.

- [ ] **Step 3: Final lint and build**

```bash
npm run lint && npm run build
```

Expected: Both pass cleanly.

- [ ] **Step 4: Commit**

```bash
git add .env.example
git commit -m "chore: add env example and finalize deployment setup"
```

- [ ] **Step 5: Push to GitHub and deploy to Vercel**

1. Create a new repository at github.com named `portfolio` (or `jkdleon.github.io`)
2. Push the local repo:
   ```bash
   git remote add origin https://github.com/jkdleon/<repo-name>.git
   git push -u origin main
   ```
3. Go to vercel.com → "Add New Project" → import the repository
4. Vercel auto-detects Next.js — accept all defaults, click "Deploy"
5. Once deployed, the site is live at the Vercel-generated URL

Future updates: push to `main` → Vercel auto-deploys.

- [ ] **Step 6: Replace placeholder resume and redeploy**

Copy your actual resume PDF to `public/resume.pdf`, then:

```bash
git add public/resume.pdf
git commit -m "feat: add resume PDF"
git push
```

Vercel picks up the push and redeploys automatically.
