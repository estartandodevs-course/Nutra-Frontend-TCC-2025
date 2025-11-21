// src/components/register/InputRegister.tsx
import type { InputPropsRegister } from "../../types/inputformregister"

export function InputRegister({ type, placeholder, name, register, error, label }: InputPropsRegister) {
  return (
    <div className="flex flex-col mb-3">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-orange-600">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`border rounded-lg bg-white px-3 py-2 focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-orange-500"
        }`}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
