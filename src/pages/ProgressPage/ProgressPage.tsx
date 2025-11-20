import { useEffect, useState } from "react";
import Wrapper from "../../components/general/Wrapper";
import Header from "../../components/dashboard/Header";
import ProgressCard from "../../components/progress/ProgressCard";
import TaskList from "../../components/progress/TaskList";
import BottomNav from "../../components/general/BottomNav";

import Cajuzinho from "../../assets/images/progress/Cajuca.png";
import Brocolis from "../../assets/images/progress/Steve Brócolis 1.png";
import Uva from "../../assets/images/progress/Dona Uvilda 1.png";

interface UserData {
  name: string;
  email: string;
  role?: string;
  level?: number;
  xp?: number;
}

export default function ProgressPage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storage = localStorage.getItem("loggedUser");
    if (storage) {
      try {
        const parsed = JSON.parse(storage) as unknown;

        if (typeof parsed === "object" && parsed !== null) {
          setUserData(parsed as UserData);
        }
      } catch {
        console.error("Erro ao ler user no localStorage");
      }
    }
  }, []);

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
              {userData && (
                <div className="bg-white shadow rounded-xl p-4 mb-4 border">
                  <h2 className="text-lg font-bold">Perfil logado:</h2>

                  <p className="text-sm mt-1">
                    <strong>Nome:</strong> {userData.name}
                  </p>

                  <p className="text-sm">
                    <strong>Email:</strong> {userData.email}
                  </p>

                  {userData.role && (
                    <p className="text-sm">
                      <strong>Função:</strong> {userData.role}
                    </p>
                  )}

                  {userData.level !== undefined && (
                    <p className="text-sm">
                      <strong>Nível:</strong> {userData.level}
                    </p>
                  )}

                  {userData.xp !== undefined && (
                    <p className="text-sm">
                      <strong>XP:</strong> {userData.xp}
                    </p>
                  )}
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
