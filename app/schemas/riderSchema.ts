import { z } from "zod";

// Define Zod schema for rider data
export const riderSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  phoneNumber: z.string(),
  cityRegion: z.string(),
  postCode: z.string(),
  bicycleType: z.string(),
  cyclingDistance: z.string(),
  bicycleCondition: z.string(),
  imageUrl: z.string().optional(),
  regularRoutes: z.string(),
  availability: z.string(),
  interestReason: z.string(),
  additionalComments: z.string().optional(),
  consent: z.boolean().optional(),
});

export type RiderData = z.infer<typeof riderSchema>;

// Define Zod schema for updating rider data
export const riderUpdateSchema = z.object({
  fullName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  cityRegion: z.string().optional(),
  postCode: z.string().optional(),
  bicycleType: z.string().optional(),
  cyclingDistance: z.string().optional(),
  bicycleCondition: z.string().optional(),
  imageUrl: z.string().optional(),
  regularRoutes: z.string().optional(),
  availability: z.string().optional(),
  interestReason: z.string().optional(),
  additionalComments: z.string().optional(),
  consent: z.boolean(),
});

export type RiderUpdateData = z.infer<typeof riderUpdateSchema>;
