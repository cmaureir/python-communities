import { defineCollection, z } from 'astro:content';

const communitiesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    city: z.string(),
    country: z.string(),
    category: z.string(),
    description: z.string().optional(),
    image: image(),
  }),
});

export const collections = {
  communities: communitiesCollection,
};
