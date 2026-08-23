import { getCollection } from "astro:content";

const SITE_URL = "https://trycrucible.com";

export async function GET() {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime()
  );

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${SITE_URL}/blog/${post.id}/</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.id}/</guid>
      <pubDate>${post.data.publishDate.toUTCString()}</pubDate>
      <description>${escapeXml(post.data.description)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Crucible Blog</title>
    <link>${SITE_URL}/blog/</link>
    <description>Notes on founder-led content: turning raw recordings into clips, carousels, deep dives, and posts that sound like you.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
