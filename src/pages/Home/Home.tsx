import Header from "../../components/Dashboard/Header";
import DailyChallenge from "../../components/Dashboard/DailyChallenge";
import VideoSection from "../../components/Dashboard/VideoSection";
import GamesSection from "../../components/Dashboard/GamesSection";
import RecipesSection from "../../components/Dashboard/RecipesSection";
import ExperimentsSection from "../../components/Dashboard/ExperimentSection";
import BottomNav from "../../components/General/BottomNav";
import Wrapper from "../../components/General/Wrapper";

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <main className="flex flex-col flex-1 overflow-y-auto pb-20 mt-10">
          <div className="px-4 py-2 space-y-6">
            <DailyChallenge />
            <VideoSection />
            <GamesSection />
            <RecipesSection />
            <ExperimentsSection />
          </div>
        </main>
      </Wrapper>
      <BottomNav />
    </>
  );
}
