import { motion } from "framer-motion"

interface HealthBarProps {
  label: string
  value: number
  color: string
}

export default function HealthBar({ label, value, color }: HealthBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-foreground">{label}</span>
        <span className="text-sm font-bold text-foreground">{Math.round(value)}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-6 overflow-hidden shadow-md">
        <motion.div
          className={`h-full ${color} flex items-center justify-end pr-2`}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <span className="text-xs font-bold text-white drop-shadow-md">
            {value > 20 ? `${Math.round(value)}%` : ""}
          </span>
        </motion.div>
      </div>
    </div>
  )
}
