import { motion } from "framer-motion"

interface PlantProps {
  health: number
}

export default function Plant({ health }: PlantProps) {
  const getPlantStage = () => {
    if (health >= 80) return "full"
    if (health >= 50) return "medium"
    if (health >= 20) return "small"
    return "tiny"
  }

  const stage = getPlantStage()

  const plantVariants = {
    tiny: (
      <motion.svg viewBox="0 0 200 300" className="w-40 h-40">
        <ellipse cx="100" cy="220" rx="80" ry="30" fill="#8B6F47" />
        <path d="M 60 180 L 80 240 Q 100 250 120 240 L 140 180 Z" fill="#D4A574" stroke="#9D7E4F" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="140" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="130" r="8" fill="#84CC16" />
      </motion.svg>
    ),
    small: (
      <motion.svg viewBox="0 0 200 300" className="w-48 h-48">
        <ellipse cx="100" cy="220" rx="85" ry="35" fill="#8B6F47" />
        <path d="M 55 180 L 80 250 Q 100 260 120 250 L 145 180 Z" fill="#D4A574" stroke="#9D7E4F" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="110" stroke="#22C55E" strokeWidth="4" strokeLinecap="round" />
        <path d="M 100 150 Q 85 140 75 145" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 100 150 Q 115 140 125 145" stroke="#22C55E" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="100" r="12" fill="#84CC16" />
      </motion.svg>
    ),
    medium: (
      <motion.svg viewBox="0 0 200 300" className="w-52 h-52">
        <ellipse cx="100" cy="220" rx="90" ry="40" fill="#8B6F47" />
        <path d="M 50 180 L 75 260 Q 100 270 125 260 L 150 180 Z" fill="#D4A574" stroke="#9D7E4F" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="80" stroke="#22C55E" strokeWidth="5" strokeLinecap="round" />
        <path d="M 100 140 Q 80 125 65 135" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 140 Q 120 125 135 135" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 110 Q 75 95 60 110" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 110 Q 125 95 140 110" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="70" r="15" fill="#84CC16" />
      </motion.svg>
    ),
    full: (
      <motion.svg viewBox="0 0 200 300" className="w-60 h-60">
        <ellipse cx="100" cy="220" rx="95" ry="45" fill="#8B6F47" />
        <path d="M 45 180 L 70 270 Q 100 280 130 270 L 155 180 Z" fill="#D4A574" stroke="#9D7E4F" strokeWidth="2" />
        <line x1="100" y1="180" x2="100" y2="40" stroke="#22C55E" strokeWidth="6" strokeLinecap="round" />
        <path d="M 100 130 Q 75 110 55 125" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 130 Q 125 110 145 125" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 100 Q 70 80 50 100" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 100 Q 130 80 150 100" stroke="#22C55E" strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M 100 70 Q 75 50 60 70" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M 100 70 Q 125 50 140 70" stroke="#22C55E" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="30" r="18" fill="#FFC107" />
        <circle cx="85" cy="45" r="8" fill="#EF4444" />
        <circle cx="115" cy="45" r="8" fill="#EF4444" />
      </motion.svg>
    ),
  }

  return (
    <motion.div
      className="flex justify-center items-center"
      animate={health > 50 ? { y: [0, -8, 0] } : {}}
      transition={health > 50 ? { duration: 2, repeat: Number.POSITIVE_INFINITY } : {}}
    >
      <motion.div animate={{ scale: health / 100 + 0.5 }} transition={{ duration: 0.8 }}>
        {plantVariants[stage as keyof typeof plantVariants]}
      </motion.div>
    </motion.div>
  )
}
