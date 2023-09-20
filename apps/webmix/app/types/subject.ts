import { z } from 'zod';

export type Subject = z.infer<typeof Subject>;
export const Subject = z.object({
  subjectName: z.string().min(1),
  semester: z.string().min(1),
  slug: z.string().min(1),
  body: z.object({
    raw: z.any(),
    text: z.string(),
  }),
});
