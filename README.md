# Landing

Simple marketing landing page. Next.js 16 + Tailwind v4 + shadcn/ui.

## Stack

- Next.js 16 (App Router, `src/`)
- React 19, TypeScript
- Tailwind CSS v4 (CSS variables)
- shadcn/ui (base-nova, neutral, lucide)

## Scripts

```bash
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Structure

```
src/
  app/                 # routes, layout, global CSS
  components/
    ui/                # shadcn primitives (generated)
    layout/            # site-header, site-footer
    sections/          # hero, features, pricing, faq, cta, ...
  lib/                 # utils
public/                # static assets
```

## Adding a shadcn component

```bash
npx shadcn@latest add button card badge
```

See `CLAUDE.md` / `AGENTS.md` for design-system and coding rules.
