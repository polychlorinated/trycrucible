# Crucible Web — AGENTS.md

- Design tokens, typography rules, and component contracts live in `DESIGN.md` — it is the single source of truth; do not invent new hex values or radii.
- Do not add React/Vue/solid framework integrations; the site is intentionally zero-framework (Astro components + scoped CSS + minimal inline scripts).
- New `.astro` sections go in `src/components/` and are mounted in `src/pages/index.astro` in section order.
- Shared primitives (`.btn`, `.card`, `.section`, `.display`, `.eyebrow`, `.wrap`, `.reveal`) live in `src/styles/global.css`; section-specific styles are scoped inside each component.
- Content copy is owned by the homepage: do not rewrite pricing numbers, FAQ answers, or feature lists without the product owner.
- Before finishing work, run `pnpm astro check` and `pnpm build`.
- Deployment target is Cloudflare Pages (static output); `public/_headers` owns security/cache headers.
