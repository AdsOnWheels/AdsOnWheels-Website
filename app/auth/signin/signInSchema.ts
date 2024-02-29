import { z } from "zod";

// Define Zod schema for sign in data
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1), // set minimum to 8
});
