import type { UseFormRegister } from "react-hook-form"
import type { RegisterFormData } from "../../src/schema/register.schema"

export interface InputPropsRegister {
  type: string
  placeholder: string
  name: keyof RegisterFormData
  register: UseFormRegister<RegisterFormData>
  error?: string
  label?: string
}