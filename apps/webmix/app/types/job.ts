import { z } from 'zod';

export type Job = z.infer<typeof Job>;
export const Job = z.object({
  companyName: z.string(),
  role: z.string(),
  begin: z.string(),
  end: z.string().optional().nullable(),
  responsibilities: z.array(z.string()).default([]),
  companyLogo: z.object({
    url: z.string().url(),
  }),
});
