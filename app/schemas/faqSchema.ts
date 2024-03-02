import { z } from "zod";

// Schema for creating a new FAQ
export const faqSchema = z.object({
  question: z.string().min(1).max(255),
  answer: z.string().min(1),
  tag: z.enum(["brand", "rider"]),
});

export type FAQData = z.infer<typeof faqSchema>;

// Schema for updating an existing FAQ
export const faqUpdateSchema = z.object({
  question: z.string().min(1).max(255).optional(),
  answer: z.string().min(1).optional(),
  tag: z.enum(["brand", "rider"]).optional(),
});

export type FAQUpdateData = z.infer<typeof faqUpdateSchema>;
