import Header from "../../components/header/Header"
import DailyChallenge from "../../components/dailychallenge/DailyChallenge"
import VideoSection from "../../components/videosection/VideoSection"
import GamesSection from "../../components/gamessection/GamesSection"
import RecipesSection from "../../components/recipes/RecipesSection"
import ExperimentsSection from "../../components/experimentsection/ExperimentSection"
import BottomNav from "../../components/bottomnav/BottomNav"
import Wrapper from "../../components/wrapper/Wrapper"

export default function Home() {
  return (
    <Wrapper className="flex flex-col bg-white overflow-hidden h-screen">
      <div className="flex-1 overflow-y-auto pb-20">
        <Header />
        <div className="px-4 py-4 space-y-6">
          <DailyChallenge />
          <VideoSection />
          <GamesSection />
          <RecipesSection />
          <ExperimentsSection />
        </div>
        <BottomNav />
      </div>
    </Wrapper>
  )
}
