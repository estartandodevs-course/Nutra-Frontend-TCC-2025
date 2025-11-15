import { Bell, Settings, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import type { HeaderProps } from "../../types/tree"

export default function HeaderTree({ level, points }: HeaderProps) {
  return (
    <motion.header
      className="
        w-full 
        bg-white 
        border-b border-gray-200 
        px-4 py-4 
        shadow-sm 
        sticky top-0 
        z-50
      "
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-1 hover:bg-gray-100 rounded-lg transition">
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-gray-900">Nível {level}</p>
            <p className="text-xs text-gray-500">Saúde da planta 🌱</p>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <motion.div
            className="flex items-center bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 shadow-sm"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-amber-700 font-semibold">{points} pts</span>
          </motion.div>

          <Bell
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-800 transition"
          />
          <Settings
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-800 transition"
          />
        </div>
      </div>
    </motion.header>
  )
}
