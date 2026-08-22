# Crucible Web — AGENTS.md

- Design tokens, typography rules, and component contracts live in `DESIGN.md` — it is the single source of truth; do not invent new hex values or radii.
- Do not add React/Vue/solid framework integrations; the site is intentionally zero-framework (Astro components + scoped CSS + minimal inline scripts).
- New `.astro` sections go in `src/components/` and are mounted in `src/pages/index.astro` in section order.
- Shared primitives (`.btn`, `.card`, `.section`, `.display`, `.eyebrow`, `.wrap`, `.reveal`) live in `src/styles/global.css`; section-specific styles are scoped inside each component.
- Content copy is owned by the homepage: do not rewrite pricing numbers, FAQ answers, or feature lists without the product owner.
- Before finishing work, run `pnpm astro check` and `pnpm build`.
- Deployment target is Cloudflare Pages (static output); `public/_headers` owns security/cache headers.

## Blog

- Blog posts are Markdown in `src/content/blog/` (schema: `src/content.config.ts`). Frontmatter fields: title, description, publishDate, tags, author, optional heroImage/heroImageAlt/videoUrl/posterImage.
- Post content is the publisher's copy — do not rewrite prose; only fix frontmatter, formatting, or broken markdown.
- Media is by-reference (http(s) URLs); never commit binary media unless explicitly asked.
- The app-push contract is `functions/api/publish.ts` + `docs/publishing-api.md` — update both together when the schema changes.
- After adding/editing posts, run `pnpm astro check` and `pnpm build`.
