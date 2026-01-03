import * as z from "zod"

export const authRegistrationSchema = z.object({
  email: z.email(),
  password: z.string().min(4).max(50),
  name: z.string().max(50),
})

export const authLoginSchema = z.object({
  email: z.email(),
  password: z.string().min(4).max(50)
})
