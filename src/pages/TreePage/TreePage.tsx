import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "../../components/Tree/HeaderTree"
import PlantContainer from "../../components/Tree/PlantContainer"
import ShopSection from "../../components/Tree/ShopSection"
import Wrapper from "../../components/General/Wrapper"
import BottomNav from "../../components/General/BottomNav"
import Hortinha from "../../assets/images/tree/hortinh 1.png"

export default function TreePage() {
  const [points, setPoints] = useState(500)
  const [level] = useState(2)
  const [plantHealth, setPlantHealth] = useState(70)
  const [waterLevel, setWaterLevel] = useState(40)
  const [activeTab] = useState("home")

  useEffect(() => {
    const interval = setInterval(() => {
      setPlantHealth((prev) => Math.max(0, prev - 1))
      setWaterLevel((prev) => Math.max(0, prev - 0.5))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleWater = () => {
    setWaterLevel((prev) => Math.min(100, prev + 30))
    setPlantHealth((prev) => Math.min(100, prev + 15))
  }

  const buyItem = (cost: number) => {
    if (points >= cost) {
      setPoints((prev) => prev - cost)
      setPlantHealth((prev) => Math.min(100, prev + 10))
      setWaterLevel((prev) => Math.min(100, prev + 20))
    }
  }

  return (
    <>
      <Wrapper>
        <Header level={level} points={points} />
        <div className="w-full max-w-md mx-auto min-h-[100dvh] overflow-y-auto">
          <div
            className="min-h-[100dvh] bg-cover bg-center bg-no-repeat pb-20 pt-4 px-2"
            style={{
              backgroundImage: `url(${Hortinha})`,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "home" && (
                <>
                  <PlantContainer
                    plantHealth={plantHealth}
                    waterLevel={waterLevel}
                    onWater={handleWater}
                  />

                  <ShopSection onBuyItem={buyItem} points={points} />
                </>
              )}
            </motion.div>
          </div>
        </div>
      </Wrapper>

      <BottomNav />
    </>
  )
}
