import { z } from 'zod';

export type Project = z.infer<typeof Project>;
export const Project = z.object({
  repository: z.string().min(1),
  projectDescription: z.string().min(1),
  contribution: z.string().min(1),
  technologies: z.array(
    z.object({
      url: z.string().url(),
    }),
  ),
});
