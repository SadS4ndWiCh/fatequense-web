import { z } from "zod";

export const studentAuthSchema = z.object({
  username: z
    .string({ required_error: "O usuário é obrigatório" })
    .min(1, { message: "O usuário deve ser preenchido." }),
  password: z
    .string({ required_error: "A senha é obrigatória" })
    .min(1, { message: "A senha deve ser preenchida." }),
});

export const studentLoginResponseSchema = z.object({
  token: z.string().min(1)
});