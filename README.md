# Ještědská Odysea Web (Astro)

This project has been migrated from Nuxt/Vue to Astro with vanilla JS, Tailwind CSS, and Astro components.

## Stack

- Astro 5
- Tailwind CSS via `@astrojs/tailwind`
- Static JSON content in `src/content/`
- No Vue/Nuxt runtime in production

## Routes

- `/`
- `/gallery`
- `/info`
- `/program`
- `/program/[band]` (static paths generated from `src/content/program.json`)

## Content files

- `src/content/news.json`
- `src/content/gallery.json`
- `src/content/navigation.json`
- `src/content/program.json`

## Assets

- Images: `public/images/`
- News images (legacy-compatible URLs): `public/news/`
- Fonts: `public/fonts/`

## Commands

- `yarn dev` - start local development server
- `yarn check` - run Astro type/content checks
- `yarn build` - build production output
- `yarn preview` - preview production build
