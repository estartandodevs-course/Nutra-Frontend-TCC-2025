import { motion } from "framer-motion"

interface ShopItemProps {
  item: {
    id: number
    name: string
    emoji: string
    cost: number
  }
  onBuy: () => void
  isAffordable: boolean
  index: number
}

export default function ShopItem({ item, onBuy, isAffordable, index }: ShopItemProps) {
  return (
    <motion.button
      onClick={onBuy}
      disabled={!isAffordable}
      className={`flex flex-col items-center justify-center gap-2 p-3 rounded-2xl shadow-md transition ${
        isAffordable ? "bg-white hover:bg-amber-50 active:scale-95" : "bg-gray-200 opacity-50 cursor-not-allowed"
      }`}
      whileHover={isAffordable ? { scale: 1.05 } : {}}
      whileTap={isAffordable ? { scale: 0.95 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <span className="text-3xl">{item.emoji}</span>
      <span className="text-xs font-bold text-amber-700">{item.cost}pts</span>
    </motion.button>
  )
}
