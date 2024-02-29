import { z } from "zod";

// Define Zod schema for blog data
export const blogSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
});

export type BlogData = z.infer<typeof blogSchema>;

// Define Zod schema for updating blog data
export const blogUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
});

export type BlogUpdateData = z.infer<typeof blogUpdateSchema>;
