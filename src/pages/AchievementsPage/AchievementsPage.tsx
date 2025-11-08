import { useState } from "react"
import Wrapper from "../../components/wrapper/Wrapper"
import HeaderAchievement from "../../components/headerachievement/HeaderAchievement"
import UserProfileAchievement from "../../components/userprofileachievement/UserProfileAchievement"
import Achievement from "../../components/achievement/Achievement"
import Rankings from "../../components/ranking/Ranking"
import BottomNav from "../../components/bottomnav/BottomNav"
import Tabs from "../../components/tabs/Tabs"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"progress" | "achievements">("achievements")

  return (
    <Wrapper>
      <HeaderAchievement />
      <main className="flex-1 overflow-y-auto px-4 py-6">
        <UserProfileAchievement name="Henrique" level={3} points={500} />

        <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "achievements" && (
          <div className="mt-8 space-y-8">
            <Achievement />
            <Rankings />
          </div>
        )}

        {activeTab === "progress" && (
          <div className="mt-8">
            <p className="text-center text-gray-600">Seção de progresso em desenvolvimento</p>
          </div>
        )}
      </main>

      <BottomNav />
    </Wrapper>
  )
}
