import  Wrapper from "../../components/wrapper/Wrapper";

function Home() {
  return (
    <Wrapper>
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Nutra</h1>
        <p className="text-gray-500 text-sm">
          Bem-vindo ao app Nutra!
        </p>
      </section>
    </Wrapper>
  );
}

export default Home;
