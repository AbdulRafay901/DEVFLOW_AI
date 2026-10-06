import { refine, z } from "zod";

export const changeSchemas = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  confirmPassword: z.string(),  
})

.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})