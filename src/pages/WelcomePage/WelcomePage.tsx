import BigNutraLogo from "../../assets/images/splash/Logofinal Big.png"
import Cajuzao from "../../assets/images/splash/cajuzao.png"
import { useNavigate } from "react-router-dom"
import Wrapper from "../../components/general/Wrapper"

export default function WelcomePage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <div className="relative w-full h-full flex flex-col items-center justify-between bg-white overflow-hidden">
        <div className="flex flex-col items-center text-center z-10 mt-28 px-6">
          <img
            src={BigNutraLogo}
            alt="Logo Nutra"
            className="w-98 h-auto mb-5"
          />

          <p className="text-gray-700 text-base font-medium mb-4">
            Seja bem-vindo(a)!
          </p>

          <p className="text-gray-800 font-semibold mb-4">Você é:</p>

          <div className="flex flex-col gap-4 w-full items-center">
            <button
              onClick={() => navigate("/login")}
              className="w-full max-w-[408px] md:w-[408px] h-[52px] bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Aluno
            </button>
            <button
              onClick={() => navigate("/login")}
              className="w-full max-w-[408px] md:w-[408px] h-[52px] bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-200"
            >
              Professor
            </button>
          </div>
        </div>

        <div className="absolute bottom-[-10%] left-0 w-full">
          <img
            src={Cajuzao}
            alt="Caju mascote"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </Wrapper>
  )
}
