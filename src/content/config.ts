import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('Probst Excavating'),
    tags: z.array(z.string()).default([]),
    // Local SEO fields
    location: z.string().optional(),
    service: z.string().optional(),
  }),
});

export const collections = { blog };
