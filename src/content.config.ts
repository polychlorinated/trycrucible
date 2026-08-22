import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Crucible Team"),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    videoUrl: z.string().optional(),
    posterImage: z.string().optional(),
  }),
});

export const collections = { blog };
