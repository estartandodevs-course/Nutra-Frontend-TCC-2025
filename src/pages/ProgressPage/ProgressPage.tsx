import Wrapper from "../../components/General/Wrapper";
import Header from "../../components/Dashboard/Header";
import ProgressCard from "../../components/Progress/ProgressCard";
import TaskList from "../../components/Progress/TaskList";
import BottomNav from "../../components/General/BottomNav";
import { useAuth } from "../../hooks/useAuth";

import Cajuzinho from "../../assets/images/progress/Cajuca.png";
import Brocolis from "../../assets/images/progress/Steve Brócolis 1.png";
import Uva from "../../assets/images/progress/Dona Uvilda 1.png";

export default function ProgressPage() {
  const { user } = useAuth();

  return (
    <>
      <Wrapper>
        <Header />

        <div className="relative w-full max-w-md mx-auto pt-24">

          <div
            id="floating-characters"
            className="
              absolute left-0 right-0
              flex justify-center gap-2
              z-40 pointer-events-none
            "
            style={{
              top: user ? undefined : "160px",
            }}
          >
            <img src={Uva} alt="Uva" className="w-24 h-auto pointer-events-auto" />
            <img src={Cajuzinho} alt="Cajuzinho" className="w-24 h-auto pointer-events-auto" />
            <img src={Brocolis} alt="Brócolis" className="w-24 h-auto pointer-events-auto" />
          </div>

          <main className="flex-1 overflow-y-auto px-4 pb-20 mt-20">
            <div className="max-w-md mx-auto">

              {user && (
                <div
                  id="profile-card"
                  className="bg-white shadow rounded-xl p-4 mb-4 border relative z-30"
                  style={{ position: "relative" }}
                >
                  <h2 className="text-lg font-bold">Perfil logado:</h2>
                  <p className="text-sm mt-1"><strong>Nome:</strong> {user.name}</p>
                  <p className="text-sm"><strong>Email:</strong> {user.email}</p>
                  {user.role && <p className="text-sm"><strong>Função:</strong> {user.role}</p>}
                  {user.level && <p className="text-sm"><strong>Nível:</strong> {user.level}</p>}
                  {user.xp && <p className="text-sm"><strong>XP:</strong> {user.xp}</p>}
                </div>
              )}

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
