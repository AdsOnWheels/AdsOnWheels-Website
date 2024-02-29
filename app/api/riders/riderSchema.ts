import { z } from "zod";

// Define Zod schema for rider data
export const riderSchema = z.object({
  fullName: z.string().min(1).max(100),
  email: z.string().email(),
  phoneNumber: z.string(),
  cityRegion: z.string(),
  postcode: z.string(),
  bicycleType: z.array(z.string()),
  cyclingDistance: z.array(z.string()),
  bicycleCondition: z.array(z.string()),
  regularRoutes: z.string(),
  availability: z.array(z.string()),
  interestReason: z.string(),
  additionalComments: z.string().optional(),
});

export type RiderData = z.infer<typeof riderSchema>;

// Define Zod schema for updating rider data
export const riderUpdateSchema = z.object({
  fullName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phoneNumber: z.string().optional(),
  cityRegion: z.string().optional(),
  postcode: z.string().optional(),
  bicycleType: z.array(z.string()).optional(),
  cyclingDistance: z.array(z.string()).optional(),
  bicycleCondition: z.array(z.string()).optional(),
  regularRoutes: z.string().optional(),
  availability: z.array(z.string()).optional(),
  interestReason: z.string().optional(),
  additionalComments: z.string().optional(),
});

export type RiderUpdateData = z.infer<typeof riderUpdateSchema>;
