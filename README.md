# Hawley Design Co. — Website

Custom furniture atelier + art gallery (Tulsa & Santa Fe). Built in Next.js
(App Router). Design: the **Workshop Record** visual system (walnut palette,
material-first editorial) + **Gallery** typography (Cormorant Garamond + Inter).
Signature device: furniture captioned as museum wall labels.

## Pages
- `/` — home
- `/furniture` — catalog, grouped by category (data-driven from `app/data/pieces.ts`)
- `/custom` — commissions + 4-step process
- `/art` — Mark Hawley originals, represented artists, African art & rugs
- `/studio` — Mark Hawley's story + commercial work (`#commercial`)
- `/visit` — Tulsa (flagship) + Santa Fe
- `/contact` — inquiry form + gallery details

## Stack
- Next.js 14 (App Router), React 18, TypeScript
- `next/font/google` — Cormorant Garamond + Inter (self-hosted at build, no CLS)
- Plain CSS with design tokens in `app/globals.css` (no UI framework, by choice)
- Every route statically prerendered (fixes the SEO gap in the base44 site)

## Run
```bash
npm install
npm run dev              # http://localhost:3000
npm run build && npm start
```

## Structure
```
app/
  layout.tsx             # fonts, metadata, global footer + reveal
  page.tsx               # home
  {furniture,custom,art,studio,visit,contact}/page.tsx
  data/pieces.ts         # furniture catalog (edit here to add pieces)
  components/
    SiteHeader.tsx       # nav + mobile menu (overlay | solid variants)
    SiteFooter.tsx
    NewsletterForm.tsx   # footer signup — wire to your ESP
    ContactForm.tsx      # inquiry form — wire to your handler
    Reveal.tsx           # scroll-reveal, re-runs on route change
  globals.css            # design tokens + all component styles
public/images/           # optimized photography + logos
```

## Design tokens (`app/globals.css` :root)
Paper #F4F2ED · Linen #E7E2D8 · Stone #A89A88 · Walnut #6B4A2F ·
Walnut-deep #523A24 · Ink #1A1714. Serif = Cormorant Garamond, Sans = Inter.

## Before launch (TODOs)
- **Santa Fe** address + hours are placeholders (Visit, Contact, home) — add real details.
- **Contact form** (`ContactForm.tsx`) and **newsletter** (`NewsletterForm.tsx`)
  currently succeed client-side only — connect a handler (Formspree, Resend, a
  route handler, Mailchimp/Klaviyo).
- Catalog copy: dimensions are intentionally omitted (kept truthful). Add real
  specs/lead times per piece in `app/data/pieces.ts`, and consider a
  `/furniture/[slug]` detail route when you have per-piece content.
- Confirm the **Sitting Image Chairs / represented artists** split with the
  client — a few current-site nav items look like chair subjects, not artists.
- Optional: migrate `<img>` to `next/image` for automatic responsive sizing.

## Deploy
Recommended: push to GitHub (below) and import the repo at vercel.com/new —
it auto-detects Next.js and redeploys on every push. Or `vercel` from the CLI.

## Push to GitHub (KLINEKRAFT/Hawley)
```bash
git init
git add .
git commit -m "Hawley Design Co. — full site rebuild (Next.js)"
git branch -M main
git remote add origin https://github.com/KLINEKRAFT/Hawley.git
git push -u origin main --force   # --force overwrites the empty README stub
```
