import { z, defineCollection } from "astro:content";

const berichte = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string().transform((str) => new Date(str))]),
    hero: z.string().optional(),
    author: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = {
  berichte: berichte,
};
