@AGENTS.md

# Project

Simple marketing landing page. No backend, no DB, no admin.
Static Next.js site, fully client-renderable, deployable to Vercel/any static host.

## Stack (strict)

- Next.js 16 (App Router, `src/` dir)
- React 19
- TypeScript (strict, no `any`)
- Tailwind CSS v4 (CSS variables theming via `src/app/globals.css`)
- shadcn/ui (base-nova style, neutral base color, lucide icons)

Do NOT add: databases, auth, API routes, server actions, CMS, analytics without asking.

## Folder structure

```
src/
  app/               # routes, layout, metadata, global CSS
  components/
    ui/              # shadcn primitives — DO NOT hand-edit, only generated
    layout/          # site-header, site-footer, navigation
    sections/        # landing sections: hero, features, pricing, faq, cta...
  lib/               # utils (cn, helpers)
public/              # static assets, images, og
```

One section per file in `components/sections/`. Compose them in `src/app/page.tsx`.

## Design system rules (non-negotiable)

- ONE consistent design system across every page and component.
- ALWAYS use shadcn/ui primitives + Tailwind. Never roll custom buttons/inputs/cards.
- Add missing components via `npx shadcn@latest add <name>`. Never copy them manually.
- Use theme tokens: `bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, etc. No raw hex or named colors like `bg-zinc-50` in app code.
- Spacing scale: stick to Tailwind spacing; prefer `px-6`, `py-24`, `gap-3/6/8`.
- Container: `mx-auto max-w-6xl px-6` for section wrappers.
- Typography scale: `text-sm` body, `text-lg` lead, `text-4xl md:text-6xl` h1, `text-2xl md:text-3xl` h2.
- Icons: `lucide-react` only. Same size within a row (usually `h-4 w-4` or `h-5 w-5`).
- Buttons with icons: use existing shadcn `Button` variants + a lucide icon — match sibling buttons' size/variant exactly.
- Dark mode works via CSS variables; never branch on `dark:` for brand tokens.

## Coding conventions

- Server Components by default. Add `"use client"` only when needed (state, effects, event handlers).
- Import alias `@/*` → `src/*`.
- Exports: named exports for components (`export function Hero()`), default export only for route files.
- Keep components dumb and composable. Props-driven, no hidden globals.
- No inline styles. No `!important`. No CSS-in-JS.
- Accessibility: semantic tags (`header`, `main`, `section`, `footer`), alt on images, focus states from shadcn.

## Lottie animations

- Player: `@lottiefiles/dotlottie-react`, wrapped by `src/components/media/lottie.tsx` — always use the wrapper.
- Assets live in `public/lottie/` (prefer `.lottie` over `.json`).
- Finding animations: use the `lottiefiles` MCP (configured in `.cursor/mcp.json`) — `search_animations`, `get_popular_animations`, `get_animation_details`. Download assets locally, don't hotlink.
- Full rules: `.cursor/rules/lottie.mdc`.

## Workflow

- `npm run dev` — local dev
- `npm run build && npm run start` — production check
- `npm run lint` — must pass before finishing a task
