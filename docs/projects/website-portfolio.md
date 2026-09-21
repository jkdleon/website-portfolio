# Project: Personal Portfolio Website

## Overview

A single-page portfolio designed as an operations console — status-board hero with career topology, work log, projects as change records, stack grid. Dark only.

## Purpose

Built as a home project to establish a professional online presence while transitioning from enterprise IT / network engineering into Cloud & DevOps. The site serves as a living resume — content is fully data-driven so it can be updated without touching component code.

## Live Site

https://jkdeleon.net

## GitHub Repository

https://github.com/jkdleon/website-portfolio

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Syne, Manrope, JetBrains Mono (via next/font) |
| Deployment | Vercel |

## Key Features

- **Vitest + Testing Library**
- **Responsive navigation** — sticky nav with anchor links; collapses to a hamburger menu on mobile
- **Data-driven content** — all portfolio content (bio, experience, skills, certifications, projects) lives in `src/lib/constants/` as typed TypeScript objects; no hardcoded strings in components
- **CV download** — /cv.pdf from the hero

## Site Sections

1. **Hero**
2. **Summary**
3. **Work**
4. **Projects**
5. **Stack**
6. **Credentials**
7. **Contact**

## Architecture Notes

- Tailwind v4 CSS-first config — no `tailwind.config.ts`; colors and fonts defined via `@theme {}` in `globals.css`
- `Expandable` is the shared expand/collapse primitive; `NodeMesh` geometry lives in `src/lib/mesh/`
- All content updates happen in `src/lib/constants/` — adding a project means appending one object to `projects.ts`

## Development Timeline

Built in a single focused session (May 3–4, 2026) across 16 implementation tasks:
- Task 1: Scaffold Next.js project
- Tasks 2–4: Configure dark mode, define types, populate content
- Tasks 5–7: Build UI primitives (ThemeToggle, Nav, SectionWrapper)
- Tasks 8–14: Build all page sections
- Tasks 15–16: Assemble page and deploy

## How to Add a New Project

Edit `src/lib/constants/projects.ts` and append an object:

```typescript
{
  title: 'Project Name',
  description: 'One or two sentence description.',
  tags: ['Next.js', 'TypeScript', 'Tailwind'],
  link: 'https://github.com/jkdleon/repo-name',
  linkLabel: 'View on GitHub',
}
```

The Projects section renders automatically once the array is non-empty.
