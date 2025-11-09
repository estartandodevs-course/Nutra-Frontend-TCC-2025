import BigNutraLogo from "../../assets/images/splash/Logofinal Big.png"
import Cajuzao from "../../assets/images/splash/cajuzao.png"

export default function SplashScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">
      <div className="flex flex-col items-center justify-center z-10 mb-40">
        <img
          src={BigNutraLogo}
          alt="Logo Nutra"
          className="w-98 h-auto"
        />
      </div>

      <img
        src={Cajuzao}
        alt="Caju mascote"
        className="absolute bottom-0 left-0 w-full h-1/2 object-cover z-0"
      />
    </div>
  )
}

export { SplashScreen }
