# Arsen Polivka — Portfolio / CV

A single-page personal portfolio for a Full Stack Engineer. It's built with **Next.js (App Router) + TypeScript + Tailwind CSS** and exported as a fully static site.

- No backend, no CMS. All content lives in typed files in `src/data/`.
- Dark mode by default with a persisted light/dark toggle and no flash of the wrong theme.
- Lighthouse (local, production build): Performance 95+, Accessibility / Best Practices / SEO 100.

## Tech stack

| Area      | Choice                                                                      |
| --------- | --------------------------------------------------------------------------- |
| Framework | Next.js 16 (App Router), `output: "export"`                                 |
| Language  | TypeScript (strict, `no-explicit-any` enforced by ESLint)                   |
| Styling   | Tailwind CSS v4 with CSS-variable design tokens (`src/app/globals.css`)     |
| Animation | Motion (`LazyMotion` + `m`), respects `prefers-reduced-motion`              |
| Fonts     | Geist Sans + Geist Mono via `next/font`                                     |
| Icons     | `lucide-react` (+ small inline SVGs for GitHub / LinkedIn / Telegram)       |
| Tooling   | ESLint (`eslint-config-next` + Prettier compat), Prettier + Tailwind plugin |

## Local setup

Requires Node.js 20+ (developed on Node 22).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run lint         # ESLint, fails on any warning
npm run typecheck    # tsc --noEmit
npm run format       # Prettier (writes)
npm run build        # static export into ./out
npm run start        # serve ./out locally (uses `npx serve`)
```

## Project structure

```
src/
  app/
    layout.tsx            # <html>, fonts, metadata, JSON-LD, theme init script, skip link
    page.tsx              # composes the sections
    globals.css           # design tokens (light + dark) and Tailwind setup
    opengraph-image.tsx   # generated 1200×630 OG image (twitter-image.tsx re-exports it)
    icon.svg              # "AP" monogram favicon
    sitemap.ts, robots.ts
  components/             # presentational components only, no hardcoded content
  data/                   # ALL site content (edit these files)
    types.ts              # interfaces for everything below
    profile.ts            # name, title, contacts, summary, highlight stats, site URL
    experience.ts         # timeline entries
    projects.ts           # project cards
    skills.ts             # skill groups + years
    education.ts          # education + languages
    site.ts               # navigation, section headings, UI labels
  lib/                    # helpers (theme script, SEO/JSON-LD, contacts list, cn)
public/
  CV_Arsen_Polivka_Full_Stack.pdf   # placeholder, replace with the real CV
```

## Adding a project

Append an object to the `projects` array in `src/data/projects.ts`:

```ts
{
  slug: "booking-platform",            // unique, URL-safe
  name: "Booking Platform",
  domain: "Travel",                    // small label on the card
  description: "One-line description of what the product does.",
  type: "company",                     // "company" | "freelance"
  featured: false,                     // true → shown in the top "featured" block
  duration: "< 6 months",
  role: "Full-stack",
  stack: ["TypeScript", "Next.js", "Nest.js", "PostgreSQL"],
  highlights: [
    "What you built / owned",
    "Another key contribution",
  ],
  nda: true,                           // shows "NDA · details available on request"
},
```

That's it. TypeScript will flag any missing field. Ordering rules:

- Featured projects are shown first, in array order. The first featured project gets a full-width card, and the others sit two per row.
- Other projects follow in array order, two per row.
- Featured cards show up to 6 highlights (first) or 4 (others). Regular cards show 2. Any extra highlights go behind a "Show all highlights" toggle.

There is also a commented-out **current project** entry at the bottom of `projects.ts`. Fill it in and uncomment it.

## Replacing the CV PDF

Overwrite `public/CV_Arsen_Polivka_Full_Stack.pdf` with the real file and keep the same name. To use a different file name, update `cvPath` in `src/data/profile.ts`. All "Download CV" buttons read from that one field.

## Filling the TODOs

| What                        | Where                                        | Notes                                                                                           |
| --------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| LinkedIn URL                | `src/data/profile.ts` → `socials.linkedin`   | Full URL. While empty, the LinkedIn link is hidden everywhere and left out of JSON-LD `sameAs`. |
| Telegram URL                | `src/data/profile.ts` → `socials.telegram`   | e.g. `https://t.me/username`. While empty, it's hidden.                                         |
| Production URL              | `src/data/profile.ts` → `siteUrl`            | Used for the canonical URL, OG tags, sitemap and robots. Set it after the first deploy.         |
| Current project             | `src/data/projects.ts` (commented-out entry) | Fill in and uncomment.                                                                          |
| Freelance period (optional) | `src/data/experience.ts` → freelance entry   | Add `period: "…"` if you want dates shown.                                                      |

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project → Import** the repo. The framework preset (Next.js) is detected automatically, so no settings need changing.
3. Deploy. Then set `siteUrl` in `src/data/profile.ts` to the final domain and push again.

`vercel.json` makes the extension-less `/opengraph-image` and `/twitter-image` files serve as `image/png`.

**Other static hosts.** Run `npm run build` and upload `out/`.

- Netlify: `public/_headers` already sets the OG image content type. Build command `npm run build`, publish dir `out`.
- GitHub Pages: if the site lives under a sub-path (`username.github.io/portfolio`), add `basePath: "/portfolio"` to `next.config.ts`. A custom domain or a `username.github.io` repo needs nothing extra.

## Design decisions

- **Theme.** Dark is the default. On the first visit, a system preference of _light_ is respected. After that, the user's choice is kept in `localStorage`. A tiny inline script in `<head>` sets the `dark` class before first paint, so there is no flash of the wrong theme. The toggle needs no React state, because CSS chooses which icon to show.
- **Accent color.** Solid buttons use `#2563eb` in both themes, so white text passes WCAG AA. `#3b82f6`/`#7fb0ff` are used for hover states and accent text in dark mode.
- **Projects.** They are under NDA, so there are no links or screenshots. Each card shows an "NDA · details available on request" note.
- **Skills.** Years are shown as a subtle suffix inside each pill (e.g. `React | 3y+`), with a full "3+ years of experience" label for screen readers. There are no progress bars.
- **Motion.** Only fade/slide-in on scroll and the card expand/collapse. `MotionConfig reducedMotion="user"` turns off transforms for users who prefer reduced motion, and a `<noscript>` style keeps content visible without JS. The hero is not animated, so the largest contentful paint isn't delayed.
- **Phone number.** Deliberately not shown on the website. It stays in the PDF only.
- **Company name.** Kept anonymous ("Outsourcing company · name under NDA").
- **Footer year.** Computed at build time, because the site is static. It updates on each deploy.
