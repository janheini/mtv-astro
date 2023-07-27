// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const berichte = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string().transform((str) => new Date(str))]),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const pages = defineCollection({
    type: 'content',
    schema: z.object({
        events: z.array(z.object({
            date: z.string(),
            name: z.string()
        }))
    })
})

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'berichte': berichte,
    'pages': pages
};
