import Header from "../../components/Dashboard/Header";
import BottomNav from "../../components/General/BottomNav";
import Wrapper from "../../components/General/Wrapper";

import RegistroMetaDiaria from "../../components/Challenges/RegistroMetaDiaria"
import { RegistroAlimentacao } from "../../components/Challenges/RegistroAlimentacao";
import { RegistroExercicios } from "../../components/Challenges/RegistroExercicios";
import  RegistroAgua  from "../../components/Challenges/RegistroAgua";

export default function RegistroPage() {
  return (
    <>
      <Wrapper>
        <Header />

        <main className="flex flex-col flex-1 overflow-y-auto pb-20 mt-20">
          <div className="px-4 py-2 space-y-6 mt-4">
            <RegistroMetaDiaria />
            <RegistroAlimentacao />
            <RegistroExercicios />
            <RegistroAgua />
          </div>
        </main>
      </Wrapper>

      <BottomNav />
    </>
  );
}
