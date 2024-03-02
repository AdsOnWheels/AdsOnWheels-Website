import { z } from "zod";

// Define Zod schema for contact data
export const contactSchema = z.object({
  firstName: z.string().min(1).max(100),
  lastName: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1),
});
