import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const communitiesCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!_*/**'], base: './src/content/communities' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    city: z.string(),
    country: z.string(),
    latitude: z.number(),
    longitude: z.number(),
    category: z.array(z.string()).min(1),
    description: z.string().optional(),
    image: image().optional(),
    website: z.string().optional(),
    meetup: z.string().optional(),
    luma: z.string().optional(),
    facebook: z.string().optional(),
    instagram: z.string().optional(),
    inactive: z.enum(['yes', 'no']).optional(),
  }),
});

export const collections = {
  communities: communitiesCollection,
};
