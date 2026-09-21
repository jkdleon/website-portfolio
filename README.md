# James Kyle De Leon portfolio

Personal portfolio for James Kyle De Leon, a Cloud & Network Infrastructure Engineer (Azure AZ-104, AWS, GCP, Terraform, Cisco/Fortinet).

The site is a single-page Next.js app designed as an operations console: a status-board hero with stat tiles and a career-topology diagram, a work log, projects written as change records, and a stack grid. Dark only. Content is typed data in `src/lib/constants/`; the page follows.

Live site: [jkdeleon.net](https://jkdeleon.net)

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

- Sticky top bar with section links, a status chip and a mobile menu.
- Hero with photo, role line, Download CV / LinkedIn, four stat tiles and an SVG career topology with tooltips.
- Summary, work log (one role open at a time), projects as change records with per-project status, stack grid, credentials, contact.
- Three.js node-mesh background confined to the hero, with WebGL and reduced-motion fallbacks.
- Content stored as typed TypeScript constants; Vitest + Testing Library cover data shape and component behaviour.

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
    mesh/               # background geometry
    motion/             # reduced-motion hook
public/
  pic.jpg               # Profile image
  cv.pdf                # CV download
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
| `stats.ts` | Hero stat tiles |
| `topology.ts` | Career-topology nodes and links |

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
npm test
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
- Expandable is the one expand/collapse primitive (aria-expanded/aria-controls, 250 ms grid-rows transition, inert when closed).
- NodeMesh renders only behind the hero; its geometry lives in src/lib/mesh so it is unit-tested without WebGL.
- Project cards are buttons because they open a modal; external links live inside the modal content.

## Maintenance

Use small commits. For most content edits, update one file under `src/lib/constants/` and run the checks. For UI changes, verify desktop and mobile layouts because the page is mostly section-based and visual regressions are easy to miss.

## License

This is a personal portfolio project. It is not packaged or licensed for redistribution.
