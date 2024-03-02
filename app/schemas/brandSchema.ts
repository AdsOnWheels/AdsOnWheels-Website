import { z } from "zod";

// Define Zod schema for brand data
export const brandSchema = z.object({
  company: z.string().min(1),
  industry: z.string(),
  website: z.string().url(),
  postCode: z.string(),
  title: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  businessEmail: z.string().email(),
  phone: z.string(),
  adType: z.string(),
  budget: z.string(),
  targetAudience: z.string(),
  consent: z.boolean(),
});

export type BrandData = z.infer<typeof brandSchema>;

// Define Zod schema for updating brand data
export const brandUpdateSchema = z.object({
  company: z.string().min(1).optional(),
  industry: z.array(z.string()).optional(),
  website: z.string().url().optional(),
  postCode: z.string().optional(),
  title: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  businessEmail: z.string().email().optional(),
  phone: z.string().optional(),
  adType: z.array(z.string()).optional(),
  budget: z.array(z.string()).optional(),
  targetAudience: z.string().optional(),
  consent: z.boolean().optional(),
});

export type BrandUpdateData = z.infer<typeof brandUpdateSchema>;
