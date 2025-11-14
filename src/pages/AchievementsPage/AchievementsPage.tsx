import { useState } from "react";
import Wrapper from "../../components/general/Wrapper";
import HeaderAchievement from "../../components/milestones/HeaderAchievement";
import UserProfileAchievement from "../../components/milestones/UserProfileAchievement";
import Achievement from "../../components/milestones/Achievement";
import Rankings from "../../components/milestones/Ranking";
import BottomNav from "../../components/general/BottomNav";
import Tabs from "../../components/milestones/Tabs";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"progress" | "achievements">(
    "achievements"
  );

  return (
    <>
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
              <p className="text-center text-gray-600">
                Seção de progresso em desenvolvimento
              </p>
            </div>
          )}
        </main>
      </Wrapper>

      <BottomNav />
    </>
  );
}
