import { z } from "zod"

export const registerSchema = z
  .object({
    name: z.string().min(6, "O nome deve ter pelo menos 6 caracteres."),
    email: z.string().email("E-mail inválido."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
    confirmPassword: z.string().min(6, "Confirme sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
