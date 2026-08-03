# Madhava Bobbili — Portfolio (Next.js)

A premium, animated personal portfolio built with Next.js, TypeScript, Tailwind CSS,
Framer Motion, and Lenis smooth scrolling. All content (projects, skills, GitHub repos,
LeetCode stats, education, certifications) is pulled from Madhava's real resume,
GitHub profile, and LeetCode profile — nothing fabricated.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — scroll reveals, modals, magnetic buttons, command palette
- **Lenis** — smooth scrolling
- **react-icons** — GitHub / LinkedIn / LeetCode / mail icons
- Hand-rolled `<canvas>` neural-network background (no extra dependency)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for production

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx        Root layout: fonts, SEO metadata, JSON-LD, providers
  page.tsx           Assembles all sections
  not-found.tsx       Custom 404 page
  globals.css        Design tokens (colors, fonts) + base styles
components/
  Header.tsx, Hero.tsx, About.tsx, Skills.tsx, Projects.tsx,
  GithubLeetcode.tsx, EducationCertifications.tsx, Experience.tsx,
  Resume.tsx, Contact.tsx, Footer.tsx      → page sections
  NeuralBackground.tsx                      → hero canvas animation
  CustomCursor.tsx, ScrollProgress.tsx,
  CommandPalette.tsx, Loader.tsx            → global UI chrome
  Magnetic.tsx, AnimatedCounter.tsx, Reveal.tsx  → small reusable primitives
data/
  content.ts          Single source of truth for all real profile data
public/
  resume.pdf          Downloadable/printable resume, linked throughout the site
```

## Editing content

Everything text-based (projects, skills, stats, education, certifications, contact
info) lives in `data/content.ts`. Update it there and it propagates through the whole
site — no need to touch component files for routine content changes.

## Deploying

This is a stock Next.js app, so it deploys as-is to **Vercel** (recommended — zero
config), Netlify, or any Node hosting. Push it to a GitHub repo and import it on
[vercel.com/new](https://vercel.com/new).

## Known gaps

- **LinkedIn data**: LinkedIn blocks automated scraping, so only the profile link is
  used — no additional content was pulled from it.
- **Contribution heatmap / contest data**: GitHub's contribution graph and LeetCode
  contest history aren't exposed on public profile pages without API access, so
  they're omitted rather than faked. Wiring these in later just needs a GitHub
  personal access token / LeetCode GraphQL calls in `data/content.ts`.
