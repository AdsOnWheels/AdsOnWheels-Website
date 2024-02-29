import { z } from "zod";

// Schema for creating a new User
export const userSchema = z.object({
  username: z.string().min(1).max(255),
  email: z.string().email(),
  password: z.string().min(1),
  mfaSecret: z.string().optional(),
  mfaQrCodeUrl: z.string().optional(),
  role: z.string().optional(),
  active: z.boolean().optional(),
  lastLogin: z.date().nullable().optional(),
  profilePicture: z.string().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  department: z.string().optional(),
});

export type UserData = z.infer<typeof userSchema>;

// Schema for updating an existing User
export const userUpdateSchema = z.object({
  username: z.string().min(1).max(255).optional(),
  email: z.string().email().optional(),
  password: z.string().min(1).optional(),
  mfaSecret: z.string().optional(),
  mfaQrCodeUrl: z.string().optional(),
  role: z.string().optional(),
  active: z.boolean().optional(),
  lastLogin: z.date().nullable().optional(),
  profilePicture: z.string().optional(),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  department: z.string().optional(),
});

export type UserUpdateData = z.infer<typeof userUpdateSchema>;
