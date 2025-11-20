import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Wrapper from "../../components/General/Wrapper"
import HeaderAchievement from "../../components/Milestones/HeaderAchievement"
import UserProfileAchievement from "../../components/Milestones/UserProfileAchievement"
import Achievement from "../../components/Milestones/Achievement"
import Rankings from "../../components/Milestones/Ranking"
import BottomNav from "../../components/General/BottomNav"
import Tabs from "../../components/Milestones/Tabs"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"progress" | "achievements">(
    "achievements"
  )

  const navigate = useNavigate()

  return (
    <>
      <Wrapper>
        <HeaderAchievement />
        <main className="flex-1 overflow-y-auto px-4 py-6 pb-16">
          <UserProfileAchievement name="Henrique" level={3} points={500} />

          <Tabs
            activeTab={activeTab}
            onTabChange={(tab) => {
              if (tab === "progress") {
                navigate("/progress")
                return
              }
              setActiveTab(tab)
            }}
          />

          {activeTab === "achievements" && (
            <div className="mt-8 space-y-8">
              <Achievement />
              <Rankings />
            </div>
          )}
        </main>
      </Wrapper>

      <BottomNav />
    </>
  )
}
