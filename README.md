# Scroll-Driven Hero Section Animation

## Project Overview

An ITZFIZZ automotive experience built with Next.js 14, React, and Tailwind CSS. The hero pins while GSAP ScrollTrigger ties the BMW, road line, and headline motion directly to scroll progress. The app statically exports to GitHub Pages under this repository's existing URL.

## Technologies

- Next.js 14 and React
- TypeScript, HTML, and Tailwind CSS
- GSAP and GSAP ScrollTrigger
- `@gsap/react` `useGSAP`

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/`.

## Build

```bash
npm run build
```

Next.js writes a static site to `out/` for GitHub Pages.

## Deployment

The GitHub Actions workflow builds with `NEXT_BASE_PATH=/Scroll-Driven-Hero-Section-Animation` and publishes `out/`. Push changes to `main`; the workflow updates the existing project site at `https://pintu301.github.io/Scroll-Driven-Hero-Section-Animation/`.

The page uses Tailwind for styling, including the glass metric cards. GSAP contexts are scoped to the hero and cleaned up on unmount. Users with reduced-motion enabled see the content without the pinned animation.
