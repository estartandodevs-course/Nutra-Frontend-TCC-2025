import { motion } from "framer-motion"
import ShopItem from "../tree/ShopItem"
import type { ShopSectionProps } from "../../types/tree"

const SHOP_ITEMS = [
  { id: 1, name: "Maçã", emoji: "🍎", cost: 100 },
  { id: 2, name: "Melancia", emoji: "🍉", cost: 150 },
  { id: 3, name: "Moeda", emoji: "🪙", cost: 220 },
  { id: 4, name: "Melancia", emoji: "🍌", cost: 270 },
  { id: 5, name: "Banana", emoji: "🍌", cost: 320 },
  { id: 6, name: "Mirtilo", emoji: "🫐", cost: 360 },
]

export default function ShopSection({ onBuyItem, points }: ShopSectionProps) {
  return (
    <motion.div
      className="bg-amber-100 rounded-3xl shadow-lg p-6 mx-4 mb-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-xl font-bold text-amber-900 mb-4">🛒 Cesta de compras</h2>

      <div className="grid grid-cols-3 gap-4">
        {SHOP_ITEMS.map((item, index) => (
          <ShopItem
            key={item.id}
            item={item}
            onBuy={() => onBuyItem(item.cost)}
            isAffordable={points >= item.cost}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}
