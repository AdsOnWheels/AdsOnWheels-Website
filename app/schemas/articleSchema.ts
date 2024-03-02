import { z } from "zod";

// Define Zod schema for blog data
export const articleSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1),
});

export type ArticleData = z.infer<typeof articleSchema>;

// Define Zod schema for updating blog data
export const articleUpdateSchema = z.object({
  title: z.string().min(1).optional(),
  content: z.string().min(1).optional(),
});

export type ArticleUpdateData = z.infer<typeof articleUpdateSchema>;
