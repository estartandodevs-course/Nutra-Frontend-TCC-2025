import type { UseFormRegister, RegisterOptions } from "react-hook-form"

export interface InputProps {
  type: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
  label?: string
}