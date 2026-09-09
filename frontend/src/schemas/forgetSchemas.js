import { z } from "zod";

export const forgetSchema = z.object({
  email: z.string()
    .email("Invalid Email"),
})
