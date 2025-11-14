import Wrapper from "../../components/general/Wrapper"
import Header from "../../components/dashboard/Header"
import ProgressCard from "../../components/progress/ProgressCard"
import TaskList from "../../components/progress/TaskList"
import BottomNav from "../../components/general/BottomNav"

export default function ProgressPage() {
  return (
    <Wrapper>
      <Header />

      <main className="flex-1 overflow-y-auto px-4 py-6 pb-20">
        <div className="max-w-md mx-auto">
          <ProgressCard />
          <TaskList />
        </div>
      </main>

      <BottomNav />
    </Wrapper>
  );
}

