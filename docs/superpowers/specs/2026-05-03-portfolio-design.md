# Portfolio Website Design Spec
**Date:** 2026-05-03  
**Owner:** James Kyle V. De Leon  
**Status:** Approved

---

## Overview

A personal portfolio website for James Kyle V. De Leon — IT Executive and Network Engineer with 7+ years of enterprise experience, actively transitioning into DevOps/cloud roles. Built for two simultaneous purposes: (1) support the current remote job hunt, and (2) serve as a long-term professional brand that grows with the career.

**Target audience:** Remote-first tech hiring managers, recruiters, and employers in DevOps, cloud infrastructure, and cybersecurity.  
**Primary action:** Get the visitor to make contact or download the resume.

---

## Architecture

### Approach
Single-page scrolling site built with Next.js (App Router), TypeScript, and Tailwind CSS. Deployed to Vercel with auto-deploy from `main` branch.

### Page Structure
One `page.tsx` renders all sections in order:

```
Hero → About → Experience → Skills → Certifications → Projects → Contact
```

### Navigation
- Sticky top nav with anchor links to each section
- Hamburger menu on mobile
- Dark/light mode toggle on the right side of the nav

### Content Data Layer
All portfolio content (bio, job history, skills, certifications, projects) lives in `src/lib/constants/` as typed TypeScript objects. Components never hardcode content — they read from constants. Adding a cert, updating a job, or adding a project means editing one data file only.

### Resume Download
A `resume.pdf` in `/public/` is linked from the Hero section (and optionally the nav). Updating the resume requires only swapping the file — no code change.

### Deployment
- `main` branch → auto-deploys to Vercel
- Run `npm run build` and `npm run lint` before pushing
- Existing `jkdleon.github.io` can redirect to Vercel domain or a custom domain can be configured later

---

## Visual Design

### Color Scheme
- **Dark mode (default):** Near-black background (`#0a0a0a`), white text, cyan/teal accent (`#06b6d4`)
- **Light mode:** Off-white background (`#f8fafc`), dark text, same accent color
- Mode preference stored in `localStorage` and persists across visits

### Typography
- **Primary font:** `Geist` — ships with Next.js by default, clean and modern
- **Monospace accent:** `JetBrains Mono` — used for the hero name, skill tags, or cert labels for a subtle DevOps/terminal aesthetic
- No decorative fonts

### Layout
- Max content width `~800px`, centered
- Generous vertical padding between sections
- Mobile-first, fully responsive

### Motion
- Fade-in on scroll for section content via Intersection Observer
- No animation libraries — keep it lightweight
- Motion is used to guide attention, not decorate

---

## Content Sections

### 1. Hero
- Full-height opening panel
- Name, title line: *"IT Executive & Network Engineer → Cloud & DevOps"*
- One-liner: open to remote roles
- Two CTAs: `View My Work` (smooth scroll) and `Download Resume` (links to `/public/resume.pdf`)

### 2. About
- 2–3 paragraph narrative summary
- Story: strong enterprise networking foundation (7+ years), now actively transitioning to DevOps/cloud
- Photo optional, can be added later

### 3. Experience
- Timeline-style layout, most recent first
- Each entry: company, title, dates, 3–4 bullet points
- Roles from CV:
  - Snoonu — IT Executive (Aug 2025 – Feb 2026)
  - New Oriental Club88 — IT Supervisor / Lead NOC Engineer (Aug 2019 – Jan 2025)
  - Concentrix — Customer Care Analyst (Jul 2018 – Sep 2019)
  - Servflex Inc. — Project Database Engineer (Nov 2017 – May 2018)
  - Faire Technologies Inc. — Field Engineer (Jan 2017 – Nov 2017)

### 4. Skills
- Grouped pill/tag layout
- Categories:
  - **Networking:** Cisco IOS, LAN/WAN, OSPF, EIGRP, BGP, VLAN, DHCP, DNS, NAT, IP Subnetting
  - **Cloud & Infra:** Azure, AWS, GCP, Fortinet, Aruba, Hexnode MDM, Microsoft 365
  - **Security Tools:** Wazuh, TheHive, Shuffle, IPsec VPN
  - **Monitoring:** Zabbix, MRTG, Cacti, Fastnetmon, Pingplotter
  - **OS & Systems:** Linux (Ubuntu, CentOS), Windows Server
  - **Soft Skills:** Team Leadership, SOP Development, Vendor Coordination, SLA Management

### 5. Certifications
- Card grid — one card per cert
- Each card: cert name, issuing body, year obtained
- Current stack:
  - Cisco Certified Network Associate (CCNA)
  - Microsoft Certified: Azure Fundamentals
  - AWS Certified Cloud Practitioner
  - CompTIA Security+
  - Fortinet NSE1: Network Security Associate
  - Fortinet NSE2: Network Security Associate
- Designed to grow — new certs added by appending to the constants array

### 6. Projects
- Card grid, starts minimal (1–2 entries)
- Each card: title, short description, tech tags, link (GitHub or YouTube)
- Adding a project = adding one object to the constants file
- Section designed to grow gracefully as labs and course projects are completed

### 7. Contact
- Email: jameskyle.dleon@gmail.com
- GitHub: jkdleon
- LinkedIn: linkedin.com/in/james-kyle-de-leon
- No contact form — keeps it maintenance-free

---

## Future Considerations (Out of Scope Now)

- **Blog / TIL section:** Add once there is bandwidth to write consistently
- **Custom domain:** Can be configured in Vercel after launch
- **Multi-page routing:** App Router structure makes this straightforward to add later
- **LinkedIn link:** Already included — linkedin.com/in/james-kyle-de-leon

---

## Success Criteria

- Loads fast, scores well on Lighthouse (target 90+ performance)
- Looks polished on mobile and desktop
- Dark/light mode works correctly and persists
- Resume download works
- All content is driven from constants — zero hardcoded strings in components
- A new cert or project can be added by editing one file with no component changes
