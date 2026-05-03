# CLAUDE.md

## Project Overview

Personal portfolio website built with Next.js. Intended for long-term maintenance.

**Sections:** Hero, About, Projects, Skills, Contact  
**Tone/design goal:** Clean, minimal, professional  
**Owner:** [Your name here]

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Package Manager: npm
- Deployment: Vercel

## Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

## Project Structure

```
src/
    app/            # Next.js App Router pages and layouts
    components/
      landing/      # Page section components (Hero, About, Projects, etc.)
      ui/           # Reusable primitives (Button, Card, etc.)
    lib/
      constants/    # Portfolio content data (projects, skills, links)
      animations/   # Animation helpers
      utils/        # General utility functions
    styles/         # Global CSS and Tailwind base overrides
public/             # Static assets (images, icons, resume PDF)
```

## Content & Data

Portfolio content (project list, skills, social links, bio) lives in `src/lib/constants/`. Edit those files to update site content — do not hardcode content directly in components.

## Code Conventions

- TypeScript for all new files — no `.js` or `.jsx`
- Functional components with hooks only — no class components
- File naming: `PascalCase.tsx` for components, `camelCase.ts` for utilities
- Default exports for page components; named exports for UI primitives
- Tailwind utility classes for all styling — no inline styles, no CSS modules
- Keep components focused and single-purpose; extract sub-components when a file exceeds ~100 lines

## Environment Variables

Copy `.env.example` to `.env.local` before running locally. Do not commit `.env.local`.

```
# Add keys here as the project grows (e.g. email service, analytics)
```

## Deployment

Deployed on Vercel. The `main` branch auto-deploys. Before pushing:
- Run `npm run build` locally to catch type and build errors
- Run `npm run lint` and resolve any warnings

## What to Avoid

- Do not modify `next.config.ts` without understanding the existing setup
- Do not add dependencies without checking if existing utilities cover the need
- Do not hardcode portfolio content in components — use `src/lib/constants/`
- Do not change Tailwind color palette or font tokens without a clear reason
- Do not restructure `components/landing/` without updating the page imports that reference it
- Do not use `any` in TypeScript — define proper types or interfaces

## Session Workflow

- **Handoff after every task:** Create or update `handoffs/YYYY-MM-DD_HH-MM/handoff.md` at task end — mark steps `[x]`, note git state, list what's next
- **Naming convention:** All folders and files use `kebab-case`. Ask permission before renaming anything that doesn't conform.
