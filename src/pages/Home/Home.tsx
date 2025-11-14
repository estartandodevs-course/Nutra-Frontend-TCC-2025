import Header from "../../components/dashboard/Header"
import DailyChallenge from "../../components/dashboard/DailyChallenge"
import VideoSection from "../../components/dashboard/VideoSection"
import GamesSection from "../../components/dashboard/GamesSection"
import RecipesSection from "../../components/dashboard/RecipesSection"
import ExperimentsSection from "../../components/dashboard/ExperimentSection"
import BottomNav from "../../components/general/BottomNav"
import Wrapper from "../../components/general/Wrapper"

export default function Home() {
  return (
    <>
      <Wrapper>
        <div className="flex-1 overflow-y-auto pb-20">
          <Header />
          <div className="px-4 py-4 space-y-6 mt-10">
            <DailyChallenge />
            <VideoSection />
            <GamesSection />
            <RecipesSection />
            <ExperimentsSection />
          </div>
        </div>
      </Wrapper>
      <BottomNav />
    </>
  )
}
