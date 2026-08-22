# Crucible Web

Astro marketing homepage for Crucible, deployed on Cloudflare Pages.

The design language — **"Forge Editorial"** — fuses the Intercom design
reference (warm cream canvas, off-black ink, Fin Orange accent, sharp 4px
geometry, billboard display type, mono uppercase labels) with the ElevenLabs
reference (generous whitespace, whisper-level warm shadows, light display
weights). The full token system lives in [`DESIGN.md`](./DESIGN.md), the single
source of truth for this site.

## Stack

- **Astro 7** with plain static output (`dist/`) — no framework, no adapter
- Self-hosted variable fonts via Fontsource: Archivo (display/body), Newsreader
  (editorial serif accents), Geist Mono (technical labels)
- Zero client-side frameworks; one small inline script for scroll reveals and
  the mobile menu
- `public/_headers` carries security + cache headers for Cloudflare Pages

## Commands

```sh
pnpm install          # install dependencies
pnpm dev              # dev server at localhost:4321
pnpm build            # production build to ./dist
pnpm preview          # preview the production build
pnpm astro check      # typecheck .astro files
```

## Blog

- Posts live in `src/content/blog/*.md` (Astro Content Collections,
  schema in `src/content.config.ts`). Frontmatter: `title`, `description`,
  `publishDate`, `tags`, `author`, optional `heroImage`/`heroImageAlt`,
  `videoUrl`, `posterImage`.
- `/blog/` index, `/blog/<slug>/` post pages, `/rss.xml`, and the sitemap all
  regenerate at build time from the collection.
- Media is referenced by URL (hosted by the publisher — e.g. Supabase
  storage); the site does not store uploads.
- The Crucible app can publish posts programmatically: `POST /api/publish`
  (Cloudflare Pages Function in `functions/api/publish.ts`). Full contract in
  [`docs/publishing-api.md`](./docs/publishing-api.md).

## Deployment (Cloudflare Pages)

1. Connect the repo to Cloudflare Pages, or run:
   ```sh
   npx wrangler pages deploy dist --project-name crucible-web
   ```
2. Build settings (if using the dashboard): framework preset **Astro**,
   build command `pnpm build`, output directory `dist`.
3. The site is fully static — no functions or runtime bindings needed.
4. Keep `.wrangler/` out of the repo — it is ignored by `.gitignore` and must
   never be committed (Cloudflare's build fails on a stale
   `.wrangler/deploy/config.json`).

## Structure

```text
/
├── public/               # favicon, robots.txt, _headers
├── src/
│   ├── styles/global.css # design tokens + shared primitives
│   ├── layouts/Layout.astro
│   ├── components/       # Header, Hero, StudioMock, sections, Footer
│   └── pages/index.astro
└── DESIGN.md             # design system source of truth
```

## Design rules (quick reference)

- Warm cream canvas `#faf9f6`, off-black ink `#111111`, Fin Orange `#ff5600`
  as the sole accent — spent on one CTA per viewport plus active marks.
- Display type: Archivo, weight ~430, line-height 0.95–1.00, negative tracking.
- 4px radius on controls, 8px on containers. Whisper shadows only, warm-tinted.
- Fin Orange carries ink text, never white.
# trycrucible
