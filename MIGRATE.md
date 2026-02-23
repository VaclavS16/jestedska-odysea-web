# Nuxt -> Astro Migration Plan (No Vue Runtime)

## Goals
- [x] Keep current site behavior and content while migrating from Nuxt/Vue to Astro with vanilla JS, CSS, Tailwind, and Astro components.
- [x] Remove Vue/Nuxt runtime dependencies from production build.
- [x] Keep routes and SEO metadata equivalent (or better).

## Step-by-step implementation checklist

- [x] **Step 1: Freeze scope and create migration baseline**
  Capture current Nuxt features, routes, and visual behavior as baseline.
  Baseline from current code:
  Routes: `/`, `/gallery`, `/info`, `/program`, `/program/[band]`.
  Data: `nuxt/content/{news,gallery,program,navigation}.json`.
  Global shell: logo, nav, event badge, footer, background image.
  Interactions: typed text effect (`JoText`), expandable stages with `localStorage` (`JoStage`), poster modal (`JoPoster`), active nav state.

- [x] **Step 2: Prepare Astro dependencies and project config**
  Add Astro integrations needed for migration:
  `@astrojs/tailwind`, `@astrojs/sitemap` (optional but recommended), and optionally `astro-compress`.
  Update `astro.config.mjs` and scripts for dev/build/preview/check.

- [x] **Step 3: Enable Tailwind correctly for Astro**
  Replace old Nuxt-oriented `tailwind.config.ts` content globs with Astro paths:
  `./src/**/*.{astro,html,js,ts,md,mdx}`.
  Preserve existing theme extensions (`jo-primary`, transparent slate/black, `minWidth.52`).
  Add a central stylesheet (for example `src/styles/global.css`) and load it in layout.

- [x] **Step 4: Move static assets to Astro public structure**
  Move/copy Nuxt static assets into `public/` while keeping URL compatibility:
  `nuxt/static/images/**` -> `public/images/**`,
  `nuxt/assets/fonts/**` -> `public/fonts/**`.
  Confirm referenced paths in content JSON stay valid (`/news/...`, `/images/...`).

- [x] **Step 5: Recreate global app shell as Astro layout**
  Replace starter layout with `src/layouts/BaseLayout.astro` that ports current `app.vue` shell:
  full-screen background, centered content column, logo link to `/`, nav, page slot, event box, footer.
  Port transition/background styles from Nuxt global styles into Astro/Tailwind-compatible CSS.

- [x] **Step 6: Convert shared UI components from Vue to Astro**
  Implement Astro equivalents for:
  `JoNav`, `JoEvent`, `JoFooter`, `Icon`, `IconButton`, and SVG icon components.
  Replace `nuxt-link` with standard links in Astro.
  Keep current classes and appearance first; optimize naming later.

- [x] **Step 7: Define typed content access in Astro**
  Create reusable TS types (or Astro content collections with Zod schemas) for:
  `JoBand`, `JoNewsItem`, navigation item, gallery item.
  Load JSON in Astro frontmatter (or migrate JSON into `src/content/` collections).
  Validate optional fields used by components (links, images, dates, `imagePosition`).

- [x] **Step 8: Migrate page routes one by one**
  Create Astro pages matching Nuxt routes:
  `src/pages/index.astro` (news/info landing),
  `src/pages/gallery/index.astro`,
  `src/pages/info/index.astro`,
  `src/pages/program/index.astro`,
  `src/pages/program/[band].astro`.
  Port per-page `<title>`, description, charset, viewport, and `lang="cs"`.

- [x] **Step 9: Migrate static-first feature components**
  Convert components with no required client-side state:
  `JoNews`, `JoNewsItem`, `JoGallery`, `JoGalleryItem`, `JoProgram`, `JoBandButton`, `JoBand`, `JoBaseInfo`.
  Replace `nuxt-img` with `<img>` or Astro `<Image />` where it brings benefit.

- [x] **Step 10: Re-implement interactive behavior in vanilla JS**
  Implement tiny client scripts (no framework islands unless necessary):
  typed text reveal (from `JoText`),
  stage expand/collapse + persistence in `localStorage` (from `JoStage`),
  poster modal open/close with accessibility basics (Esc, click outside).
  Attach scripts with progressive enhancement (`data-*` hooks).

- [x] **Step 11: Handle dynamic band page behavior**
  Implement `[band].astro` using `getStaticPaths()` from `program.json` `pathPart` values.
  Render program list plus selected band details from slug.
  Add 404-safe handling for unknown slug.

- [x] **Step 12: Port and simplify styling**
  Migrate SCSS from `nuxt/assets/scss/{main,animations}.scss` into Astro CSS/Tailwind layers.
  Keep key animations (`pulse`, `pulse-border`, image zoom, gradient border) and remove dead styles.
  Keep font-face definitions and body typography in global CSS.

- [x] **Step 13: Remove Nuxt/Vue-specific code and dead files**
  Remove Nuxt-only APIs/usages (`definePageMeta`, `useHead`, `Teleport`, middleware).
  Delete obsolete starter Astro files (`Welcome.astro`, old sample assets) and unused Nuxt files after parity checks.
  Ensure only Astro stack remains in `package.json`.

- [x] **Step 14: Validate functional parity**
  Run checks:
  route-by-route visual comparison,
  link behavior and external targets,
  date formatting correctness,
  responsive behavior (mobile + desktop),
  no client errors in console.

- [x] **Step 15: Production hardening and handover**
  Add README migration notes (content location, adding news/program entries, run commands).
  Run final `astro check` + `astro build`.
  Create follow-up backlog for non-blocking improvements (image optimization, a11y polishing, optional content collections).

## Suggested implementation order (execution strategy)
- [x] Migrate shell + shared components first.
- [x] Migrate static routes next (`/`, `/gallery`, `/info`).
- [x] Migrate program pages (`/program`, `/program/[band]`) after dynamic routing is prepared.
- [x] Add vanilla JS behaviors only after static markup matches baseline.
- [x] Perform cleanup/removal of Nuxt code last, after parity verification.
