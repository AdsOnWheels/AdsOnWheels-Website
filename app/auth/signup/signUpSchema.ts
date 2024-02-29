import { z } from "zod";

// Define Zod schema for sign up data
export const signUpSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(1), // set minimum to 8
});
