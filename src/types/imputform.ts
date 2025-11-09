import type { UseFormRegister, RegisterOptions } from "react-hook-form"
import type { LoginFormData } from "../../src/schema/login.schema"

export interface InputProps {
  type: string
  placeholder: string
  name: keyof LoginFormData;
  register: UseFormRegister<LoginFormData>;
  error?: string
  rules?: RegisterOptions<LoginFormData, keyof LoginFormData>
  label?: string
}