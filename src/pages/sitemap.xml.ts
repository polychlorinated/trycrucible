import { getCollection } from "astro:content";
import { comparisons, comparisonHubs } from "../data/comparisons";

const SITE_URL = "https://trycrucible.com";

const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/how-it-works/", priority: "0.9" },
  { path: "/for/founders/", priority: "0.8" },
  { path: "/for/consultants/", priority: "0.8" },
  { path: "/for/smb-operators/", priority: "0.8" },
  { path: "/for/agencies/", priority: "0.8" },
  { path: "/vs/", priority: "0.8" },
  { path: "/vs/opusclip/", priority: "0.7" },
  { path: "/blog/", priority: "0.8" },
  { path: "/contact/", priority: "0.5" },
  { path: "/privacy/", priority: "0.3" },
  { path: "/terms/", priority: "0.3" },
  { path: "/cookies/", priority: "0.3" },
  ...comparisonHubs.map((hub) => ({ path: `/vs/${hub.slug}/`, priority: "0.7" })),
  ...comparisons.map((c) => ({ path: `/vs/${c.slug}/`, priority: "0.7" })),
];

export async function GET() {
  const posts = await getCollection("blog");
  const buildDate = new Date().toISOString().slice(0, 10);

  const urls = [
    ...staticRoutes.map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${buildDate}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
    ),
    ...posts.map(
      (post) => `  <url>
    <loc>${SITE_URL}/blog/${post.id}/</loc>
    <lastmod>${post.data.publishDate.toISOString().slice(0, 10)}</lastmod>
    <priority>0.7</priority>
  </url>`
    ),
  ].join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
