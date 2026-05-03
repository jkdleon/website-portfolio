# Project: Personal Portfolio Website

## Overview

A single-page personal portfolio website built to showcase my professional background, work history, technical skills, certifications, and projects. Designed with a dark-first aesthetic, smooth scroll animations, and full dark/light mode support.

## Purpose

Built as a home project to establish a professional online presence while transitioning from enterprise IT / network engineering into Cloud & DevOps. The site serves as a living resume — content is fully data-driven so it can be updated without touching component code.

## Live Site

> To be updated after Vercel deployment

## GitHub Repository

https://github.com/jkdleon/website-portfolio

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans + Geist Mono (via next/font) |
| Deployment | Vercel |

## Key Features

- **Dark/light mode** — class-based toggle with `localStorage` persistence and FOUC prevention (no white flash on load)
- **Scroll fade-in animations** — sections animate in via `IntersectionObserver` as the user scrolls
- **Responsive navigation** — sticky nav with anchor links; collapses to a hamburger menu on mobile
- **Data-driven content** — all portfolio content (bio, experience, skills, certifications, projects) lives in `src/lib/constants/` as typed TypeScript objects; no hardcoded strings in components
- **Resume download** — direct PDF download from the Hero section

## Site Sections

1. **Hero** — Name, tagline, CTA buttons (View Work / Download Resume)
2. **About** — Bio paragraphs describing background and transition goals
3. **Experience** — Timeline of 5 work history entries with bullet points
4. **Skills** — Tag grid organized by category (Networking, Cloud, Security, Monitoring, OS, Soft Skills)
5. **Certifications** — Card grid of 6 professional certifications
6. **Projects** — Card grid of personal/home projects (this site included)
7. **Contact** — Email, GitHub, and LinkedIn links

## Architecture Notes

- Tailwind v4 CSS-first config — no `tailwind.config.ts`; colors and fonts defined via `@theme {}` in `globals.css`
- Dark mode via `@custom-variant dark` in CSS + `.dark` class toggled on `<html>`
- `SectionWrapper` component handles all scroll-triggered fade-ins using `IntersectionObserver`
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
