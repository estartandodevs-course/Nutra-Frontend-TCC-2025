import type { InputProps } from "../../types/imputform"

export function Input({ name, placeholder, type, register, rules, error, label }: InputProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-orange-600">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`w-full px-4 py-2 border-2 rounded-lg bg-white transition focus:outline-none ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-orange-300 focus:border-orange-500"
        }`}
        aria-invalid={!!error}
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
}