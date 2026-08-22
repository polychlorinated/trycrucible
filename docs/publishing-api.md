# Blog Publishing API (app → trycrucible.com)

The Crucible app can publish blog posts directly to this site instead of
loading them by hand. Posts are committed to the site repo and go live when
Cloudflare Pages rebuilds (git integration, automatic on push).

This contract applies to **this site only**. Other clients (WordPress, other
site types) use their own publishing configuration in the app — this is the
"official Crucible blog" destination.

## Endpoint

```
POST https://trycrucible.com/api/publish
```

## Authentication

Header: `x-crucible-token: <CRUCIBLE_PUBLISH_TOKEN>`

Set `CRUCIBLE_PUBLISH_TOKEN` as a secret in the Cloudflare Pages project
(Project → Settings → Environment variables). The app must be configured with
the same value.

## Request body (JSON)

| Field            | Type       | Required | Notes                                                            |
| ---------------- | ---------- | -------- | ---------------------------------------------------------------- |
| `title`          | string     | yes      | 1–300 chars                                                      |
| `description`    | string     | yes      | 1–500 chars; used for meta description and post card excerpt     |
| `bodyMarkdown`   | string     | yes      | Post body; GitHub-flavored Markdown, max 2 MB                    |
| `slug`           | string     | no       | `[a-z0-9]` with single hyphens. Omitted → derived from title     |
| `tags`           | string[]   | no       | Max 10 tags, each ≤50 chars                                      |
| `author`         | string     | no       | Defaults to "Crucible Team"                                      |
| `publishDate`    | string     | no       | `YYYY-MM-DD`; defaults to today                                  |
| `heroImageUrl`   | string     | no       | Absolute http(s) URL; media stays hosted by the publisher        |
| `heroImageAlt`   | string     | no       | Alt text for the hero image                                      |
| `videoUrl`        | string     | no       | Absolute http(s) URL to the video (mp4/webm)                     |
| `posterImageUrl` | string     | no       | Absolute http(s) URL to the video poster/thumbnail               |

**Media policy:** the API does not accept file uploads. Host video and images
in the app's storage (e.g. Supabase public bucket) and pass public URLs. The
site embeds them by reference.

Re-posting the same `slug` overwrites the existing post.

## Example

```bash
curl -X POST https://trycrucible.com/api/publish \
  -H "Content-Type: application/json" \
  -H "x-crucible-token: $CRUCIBLE_PUBLISH_TOKEN" \
  -d '{
    "title": "Tools vs. System: Why Crucible Is the Answer the Market Has Been Missing",
    "description": "The gap between a stack of capable tools and actually shipping authentic content.",
    "bodyMarkdown": "## The stack isn't the problem\n\n...",
    "tags": ["founder content", "content system"],
    "author": "Andrew Campbell",
    "publishDate": "2026-08-22",
    "videoUrl": "https://<your-storage>/videos/draft.mp4",
    "posterImageUrl": "https://<your-storage>/images/thumbnail.png",
    "heroImageUrl": "https://<your-storage>/images/hero.png",
    "heroImageAlt": "Founder recording a brain dump"
  }'
```

## Success response

```json
{ "ok": true, "slug": "tools-vs-system", "url": "https://trycrucible.com/blog/tools-vs-system/" }
```

## Error responses

| Status | Body                                             |
| ------ | ------------------------------------------------ |
| 400    | `{ "error": "invalid_json" }` or `validation_failed` with `details[]` |
| 401    | `{ "error": "unauthorized" }`                    |
| 502    | `{ "error": "github_write_failed", ... }`        |

## Environment variables (Cloudflare Pages project)

| Variable                   | Purpose                                        |
| -------------------------- | ---------------------------------------------- |
| `CRUCIBLE_PUBLISH_TOKEN`   | Shared secret checked against `x-crucible-token` |
| `GITHUB_TOKEN`             | GitHub PAT with contents write on the site repo |
| `GITHUB_REPO` (optional)   | Defaults to `polychlorinated/trycrucible`       |
| `GITHUB_BRANCH` (optional) | Defaults to `main`                              |

## Deploy flow

1. App POSTs to `/api/publish`.
2. The Pages Function writes `src/content/blog/<slug>.md` via the GitHub API.
3. The push triggers a Cloudflare Pages build (git integration).
4. The static site regenerates: post page, blog index, RSS, and sitemap all update.

## Local write path (no API)

Posts can also be added directly by committing a Markdown file under
`src/content/blog/` with frontmatter matching `src/content.config.ts`:

```yaml
---
title: "..."
description: "..."
publishDate: 2026-08-22
author: "..."
tags:
  - "..."
videoUrl: "https://..."   # optional
posterImageUrl: "https://..." # optional
heroImage: "https://..."  # optional
---
```
