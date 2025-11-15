import { motion } from "framer-motion"
import Plant from "../tree/Plant"
import HealthBar from "../tree/HealthBar" 
import type { PlantContainerProps } from "../../types/tree"

export default function PlantContainer({ plantHealth, waterLevel, onWater }: PlantContainerProps) {
  return (
    <motion.div
      className="flex-1 flex flex-col items-center justify-center gap-8 py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="w-full max-w-xs space-y-3">
        <HealthBar label="Saúde" value={plantHealth} color="bg-green-400" />
        <HealthBar label="Água" value={waterLevel} color="bg-blue-400" />
      </div>

      <Plant health={plantHealth} />

      <div className="flex gap-3 w-full max-w-xs">
        <motion.button
          onClick={onWater}
          className="flex-1 bg-blue-400 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg transition transform active:scale-95"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          💧 Regar
        </motion.button>
      </div>
    </motion.div>
  )
}
