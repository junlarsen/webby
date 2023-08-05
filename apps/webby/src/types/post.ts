import { z } from 'zod';

export type Post = z.infer<typeof Post>;
export const Post = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  slug: z.string().min(1),
  content: z.object({
    raw: z.any(),
    text: z.string(),
  }),
  postTags: z.array(z.unknown()).default([]),
  releaseDate: z.string().transform((val) => new Date(val)),
});
