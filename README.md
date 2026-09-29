# Scroll-Driven Hero Section Animation

## Project Overview

An original automotive experience for ITZFIZZ, centered on a premium BMW hero. GSAP and ScrollTrigger pin the first viewport and bind the car, headline, statistics, and atmospheric layers directly to scroll progress. React organizes the interface into reusable components, while Tailwind CSS supplies utility-based layout alongside the project's responsive custom CSS.

## Technologies

- HTML
- CSS
- JavaScript
- React.js
- GSAP
- GSAP ScrollTrigger
- Tailwind CSS
- Vite

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are written to `dist/`.

## Deployment

Vite serves the project from `/` by default. For a GitHub Pages project site, set `VITE_BASE_PATH` to the repository path before building so both the app and local car asset use the correct URL.

PowerShell:

```powershell
$env:VITE_BASE_PATH = "/REPOSITORY-NAME/"
npm run build
```

Bash:

```bash
VITE_BASE_PATH=/REPOSITORY-NAME/ npm run build
```

Publish the generated `dist/` directory with GitHub Pages. In repository settings, choose **Settings → Pages → GitHub Actions**, then use a workflow that checks out the repository, runs `npm ci`, builds with `VITE_BASE_PATH=/<repository-name>/`, uploads `dist/`, and deploys the Pages artifact. For a custom domain or user site hosted at the domain root, leave `VITE_BASE_PATH` unset.

The hero responds to scroll in both directions. When `prefers-reduced-motion` is enabled, the pinned animation is disabled and all content remains visible. ScrollTrigger and component-scoped GSAP contexts are cleaned up on unmount to avoid duplicate triggers in React StrictMode.
