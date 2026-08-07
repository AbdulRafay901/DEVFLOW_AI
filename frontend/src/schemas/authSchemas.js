import { z } from "zod";

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, "Full Name must be at least 3 characters"),

  email: z.string()
    .email("Invalid Email"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  confirmPassword: z.string(),

  checkbox: z.boolean()
})

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });