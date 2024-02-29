import { z } from "zod";

// Define Zod schema for forgot password data
export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});
