/**
 * POST /api/publish — receive blog posts pushed from the Crucible app.
 *
 * The app (or any publisher holding the shared token) POSTs a JSON payload;
 * this function validates it, writes a Markdown file into the site repo via
 * the GitHub contents API, and the Cloudflare Pages git integration rebuilds
 * and deploys the static site. Media (video, hero image) is referenced by
 * URL — it stays hosted by the publisher (e.g. Supabase storage).
 *
 * See docs/publishing-api.md for the full contract.
 */

interface PublishEnv {
  CRUCIBLE_PUBLISH_TOKEN: string;
  GITHUB_TOKEN: string;
  GITHUB_REPO?: string;
  GITHUB_BRANCH?: string;
}

interface PublishBody {
  title: string;
  description: string;
  bodyMarkdown: string;
  slug?: string;
  tags?: string[];
  author?: string;
  publishDate?: string;
  heroImageUrl?: string;
  heroImageAlt?: string;
  videoUrl?: string;
  posterImageUrl?: string;
}

const MAX_BODY_BYTES = 2 * 1024 * 1024;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const URL_RE = /^https?:\/\/\S+$/i;
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function json(status: number, body: unknown): Response {
  return Response.json(body, { status });
}

function slugify(value: string): string {
  const slug = value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
    .replace(/-+$/g, "");
  return slug || "untitled";
}

function yamlString(value: string): string {
  return JSON.stringify(value);
}

function buildFrontmatter(body: PublishBody, slug: string): string {
  const lines: string[] = ["---"];
  lines.push(`title: ${yamlString(body.title)}`);
  lines.push(`description: ${yamlString(body.description)}`);
  lines.push(`publishDate: ${body.publishDate ?? new Date().toISOString().slice(0, 10)}`);
  if (body.author) lines.push(`author: ${yamlString(body.author)}`);
  if (body.tags && body.tags.length > 0) {
    lines.push("tags:");
    for (const tag of body.tags.slice(0, 10)) {
      lines.push(`  - ${yamlString(tag.slice(0, 50))}`);
    }
  }
  if (body.heroImageUrl) lines.push(`heroImage: ${yamlString(body.heroImageUrl)}`);
  if (body.heroImageAlt) lines.push(`heroImageAlt: ${yamlString(body.heroImageAlt)}`);
  if (body.videoUrl) lines.push(`videoUrl: ${yamlString(body.videoUrl)}`);
  if (body.posterImageUrl) lines.push(`posterImage: ${yamlString(body.posterImageUrl)}`);
  lines.push("---");
  lines.push("");
  return lines.join("\n");
}

export async function onRequestPost(context: { request: Request; env: PublishEnv }): Promise<Response> {
  const { request, env } = context;

  const provided = request.headers.get("x-crucible-token") ?? "";
  if (!env.CRUCIBLE_PUBLISH_TOKEN || provided !== env.CRUCIBLE_PUBLISH_TOKEN) {
    return json(401, { error: "unauthorized" });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json(400, { error: "invalid_json" });
  }

  const body = raw as Partial<PublishBody>;
  const errors: string[] = [];

  if (typeof body.title !== "string" || body.title.trim().length === 0 || body.title.length > 300) {
    errors.push("title must be a string of 1–300 characters");
  }
  if (typeof body.description !== "string" || body.description.trim().length === 0 || body.description.length > 500) {
    errors.push("description must be a string of 1–500 characters");
  }
  if (typeof body.bodyMarkdown !== "string" || body.bodyMarkdown.trim().length === 0) {
    errors.push("bodyMarkdown must be a non-empty string");
  }
  const bodyBytes = typeof body.bodyMarkdown === "string" ? new TextEncoder().encode(body.bodyMarkdown).length : 0;
  if (bodyBytes > MAX_BODY_BYTES) {
    errors.push(`bodyMarkdown exceeds ${MAX_BODY_BYTES} bytes`);
  }
  if (body.slug !== undefined && (typeof body.slug !== "string" || !SLUG_RE.test(body.slug))) {
    errors.push("slug must match [a-z0-9] with single hyphens, or be omitted");
  }
  if (body.publishDate !== undefined && (typeof body.publishDate !== "string" || !DATE_RE.test(body.publishDate))) {
    errors.push("publishDate must be YYYY-MM-DD");
  }
  if (body.tags !== undefined && (!Array.isArray(body.tags) || body.tags.some((t) => typeof t !== "string"))) {
    errors.push("tags must be an array of strings");
  }
  for (const [field, value] of [
    ["heroImageUrl", body.heroImageUrl],
    ["videoUrl", body.videoUrl],
    ["posterImageUrl", body.posterImageUrl],
  ] as const) {
    if (value !== undefined && (typeof value !== "string" || !URL_RE.test(value))) {
      errors.push(`${field} must be an absolute http(s) URL`);
    }
  }

  if (errors.length > 0) {
    return json(400, { error: "validation_failed", details: errors });
  }

  const clean = body as PublishBody;
  const slug = body.slug ?? slugify(clean.title);
  const markdown = `${buildFrontmatter(clean, slug)}\n${clean.bodyMarkdown.trim()}\n`;

  const repo = env.GITHUB_REPO ?? "polychlorinated/trycrucible";
  const branch = env.GITHUB_BRANCH ?? "main";
  const path = `src/content/blog/${slug}.md`;
  const apiUrl = `https://api.github.com/repos/${repo}/contents/${path}`;

  const gh = await fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "crucible-web-publish",
    },
    body: JSON.stringify({
      message: `blog: publish "${clean.title.slice(0, 60)}"`,
      content: btoa(markdown),
      branch,
    }),
  });

  if (!gh.ok) {
    const text = await gh.text().catch(() => "");
    return json(502, { error: "github_write_failed", status: gh.status, detail: text.slice(0, 400) });
  }

  return json(200, {
    ok: true,
    slug,
    url: `https://trycrucible.com/blog/${slug}/`,
  });
}
