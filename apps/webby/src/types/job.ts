import { z } from 'zod';

export type Job = z.infer<typeof Job>;
export const Job = z.object({
  companyName: z.string(),
  role: z.string(),
  begin: z.string().transform((val) => new Date(val)),
  end: z.string().transform((val) => new Date(val)).optional(),
  responsibilities: z.array(z.string()).default([]),
  companyLogo: z.object({
    url: z.string().url(),
  }),
});
