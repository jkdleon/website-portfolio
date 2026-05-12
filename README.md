# James Kyle De Leon portfolio

Personal portfolio for James Kyle De Leon, an IT Executive and Network Engineer moving into Cloud and DevOps work.

The site is a single-page Next.js app with typed content files, a dark-first interface, project case-study cards, and a lightweight animated background. It is built to work like a living resume: update the data in `src/lib/constants/`, and the page follows.

Live site: [website-portfolio-three-zeta.vercel.app](https://website-portfolio-three-zeta.vercel.app)

Repository: [github.com/jkdleon/website-portfolio](https://github.com/jkdleon/website-portfolio)

## Stack

| Area | Tooling |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D/background | Three.js |
| Fonts | Syne and Manrope through `next/font/google` |
| Deployment | Vercel |

## What is included

- Fixed navigation with scroll progress, active section tracking, and a mobile menu.
- Hero section with profile photo, professional tagline, LinkedIn link, remote-work note, and contact CTA.
- About, skills, certifications, education, experience, project, and contact sections.
- Project cards with expandable hover states and modal case-study details.
- Dark and light theme support with local storage persistence and no initial white flash.
- Three.js background that quietly falls back when WebGL is unavailable.
- Content stored as typed TypeScript constants instead of being scattered through JSX.

## Project structure

```text
src/
  app/
    layout.tsx          # Root layout, fonts, metadata, theme bootstrap, background
    page.tsx            # One-page landing route composition
    globals.css         # Tailwind v4 theme tokens and shared utilities
  components/
    landing/            # Portfolio sections
    ui/                 # Reusable UI pieces
  lib/
    constants/          # Portfolio content and shared types
public/
  pic.jpg               # Profile image
  resume.pdf            # Resume asset
  favicon files         # Browser and PWA icons
docs/
  projects/             # Project notes and implementation records
```

## Content editing

Most updates happen in `src/lib/constants/`.

| File | Controls |
| --- | --- |
| `personal.ts` | Name, tagline, email, social links, short bio |
| `skills.ts` | Skill groups and individual skill labels |
| `experience.ts` | Work history entries |
| `education.ts` | Education and academic log entries |
| `certifications.ts` | Certification cards |
| `projects.ts` | Project cards, case-study modal content, links, tools, impact text |

When adding content, keep the shape of the existing object and let TypeScript catch missing fields.

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Next.js starts on `http://localhost:3000` unless that port is already in use.

Run checks before pushing:

```bash
npm run lint
npm run build
```

Run the production server after a build:

```bash
npm run start
```

## Deployment

The project is deployed on Vercel. Pushing to `master` updates the remote repository and can trigger a new Vercel deployment, depending on the connected project settings.

Recommended pre-push checklist:

```bash
npm run lint
npm run build
```

## Implementation notes

- This project uses Tailwind CSS v4 with CSS theme tokens in `globals.css`; there is no Tailwind config file.
- Theme colors are defined with CSS variables and mapped through `@theme`.
- The dark/light toggle changes classes on `<html>` and saves the selected theme in `localStorage`.
- `SectionWrapper` handles scroll reveal behavior with `IntersectionObserver`.
- `Nav` uses section intersection to keep the active tab in sync with the current viewport.
- `ThreeBackground` checks WebGL support before creating a renderer, so the page still renders in restricted browsers or headless environments.
- Project cards are buttons because they open a modal; external links live inside the modal content.

## Maintenance

Use small commits. For most content edits, update one file under `src/lib/constants/` and run the checks. For UI changes, verify desktop and mobile layouts because the page is mostly section-based and visual regressions are easy to miss.

## License

This is a personal portfolio project. It is not packaged or licensed for redistribution.
