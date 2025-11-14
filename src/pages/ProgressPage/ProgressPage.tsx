import Wrapper from "../../components/general/Wrapper"
import Header from "../../components/dashboard/Header"
import ProgressCard from "../../components/progress/ProgressCard"
import TaskList from "../../components/progress/TaskList"
import BottomNav from "../../components/general/BottomNav"

export default function ProgressPage() {
  return (
    <Wrapper>
      <Header />

      <div className="flex-1 overflow-y-auto pb-20">
        <div className="px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Seu progresso</h1>
        </div>

        <div className="px-4 pb-6 space-y-4 max-w-md mx-auto">
          <ProgressCard />
          <TaskList />
        </div>
      </div>

      <BottomNav />
    </Wrapper>
  )
}
