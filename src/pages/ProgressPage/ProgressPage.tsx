import Wrapper from "../../components/general/Wrapper";
import Header from "../../components/dashboard/Header";
import ProgressCard from "../../components/progress/ProgressCard";
import TaskList from "../../components/progress/TaskList";
import BottomNav from "../../components/general/BottomNav";
import Cajuzinho from "../../assets/images/progress/Cajuca.png";
import Brocolis from "../../assets/images/progress/Steve Brócolis 1.png";
import Uva from "../../assets/images/progress/Dona Uvilda 1.png";

export default function ProgressPage() {
  return (
    <>
      <Wrapper>
        <div className="relative w-full max-w-md mx-auto">

          <Header />

          <div className="absolute left-0 right-0 top-20 flex justify-center gap-2 z-40 pointer-events-none">
            <img
              src={Uva}
              alt="Uva"
              className="w-28 h-auto"
              style={{ pointerEvents: "auto" }}
            />

            <img
              src={Cajuzinho}
              alt="Cajuzinho"
              className="w-28 h-auto"
              style={{ pointerEvents: "auto" }}
            />

            <img
              src={Brocolis}
              alt="Brócolis"
              className="w-28 h-auto"
              style={{ pointerEvents: "auto" }}
            />
          </div>

          <main className="flex-1 overflow-y-auto px-4 py-0 pb-20 mt-28">
            <div className="max-w-md mx-auto">
              <ProgressCard />
              <TaskList />
            </div>
          </main>

        </div>
      </Wrapper>

      <BottomNav />
    </>
  );
}
