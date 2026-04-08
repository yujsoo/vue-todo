# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
npm run generate   # Static site generation
npm run preview    # Preview production build locally
```

## Architecture

This is a **Nuxt 4** project (Vue 3, `compatibilityDate: '2025-07-15'`) using the `app/` directory layout.

- `app/app.vue` — root component; add layouts and `<NuxtPage />` here when adding pages
- `nuxt.config.ts` — Nuxt configuration; devtools enabled by default
- TypeScript is configured via `.nuxt/` generated files (do not edit `tsconfig.json` directly)

Nuxt 4 auto-imports components, composables, and utilities — no explicit imports needed for Vue APIs or files placed in `components/`, `composables/`, or `utils/` directories.
