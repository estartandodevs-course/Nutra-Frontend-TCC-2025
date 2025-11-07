import Wrapper from "../../components/wrapper/Wrapper";
import ProgressBar from "../../components/quiz/Progressbar";

export default function Home() {
  return (
    <Wrapper>
      <ProgressBar current={2} total={5} />
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Nutra</h1>
        <p className="text-gray-500 text-sm mb-6">
          Bem-vindo ao app Nutra!
        </p>
      </section>
    </Wrapper>
  );
}
