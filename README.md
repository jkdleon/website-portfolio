# James Kyle De Leon — Personal Portfolio

A dark-first, single-page personal portfolio built with Next.js and Tailwind CSS. Designed to be clean, minimal, and fast — showcasing professional history, skills, certifications, and projects in a structured layout.

**Live site:** [website-portfolio-three-zeta.vercel.app](https://website-portfolio-three-zeta.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Fonts | Syne (headings) + Manrope (body) via `next/font/google` |
| Deployment | Vercel (auto-deploy on push to `master`) |

---

## Features

- **Dark-first design** with smooth scroll and scroll progress indicator
- **Responsive nav** with pill tab layout, scroll-spy active state, and mobile hamburger
- **Hero** — centered layout with profile photo, tagline, social chips, and CTA buttons
- **Skills** — interactive category tab switcher across 6 skill domains
- **Experience** — numbered accordion (click to expand/collapse per company)
- **Certifications** — stacked authorized badge cards
- **Projects** — card grid with category tags
- **Contact** — centered call-to-action block
- All content is **data-driven** — edit the constants, not the components

---

## Project Structure

```
src/
  app/              # Next.js App Router (layout, page, globals.css)
  components/
    landing/        # Page section components (Hero, Skills, Experience, etc.)
    ui/             # Reusable primitives (Nav, Avatar, SectionWrapper, etc.)
  lib/
    constants/      # Portfolio content — projects, skills, experience, education
    animations/     # Scroll-reveal helpers
    utils/          # General utilities
public/             # Static assets (profile photo, resume PDF)
```

---

## Updating Content

All portfolio content lives in `src/lib/constants/`. Edit these files to update the site — no component changes needed:

| File | What it controls |
|---|---|
| `personal.ts` | Name, tagline, email, GitHub, LinkedIn |
| `experience.ts` | Work history (company, role, dates, bullets) |
| `skills.ts` | Skill categories and items |
| `projects.ts` | Project cards (set `featured: true` to surface in Featured Venture) |
| `education.ts` | Academic background entries |
| `certifications.ts` | Certification badges |

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000

# Production build check
npm run build

# Lint
npm run lint
```

Copy `.env.example` to `.env.local` before running if environment variables are needed.

---

## Deployment

Deployed on Vercel. Pushing to `master` triggers an automatic redeploy. Before pushing:

```bash
npm run build   # catch type/build errors
npm run lint    # resolve any warnings
```

---

## Design Reference

The visual direction and layout of this site were informed by studying a well-crafted personal portfolio site. Key design decisions — dark-first color palette, typography hierarchy, section structure, and interactive patterns — were adapted and rebuilt from scratch to suit this portfolio's content and identity.

---

## License

Personal portfolio — not intended for redistribution.
