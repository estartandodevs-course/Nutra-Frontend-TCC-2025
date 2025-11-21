import BigNutraLogo from "../../assets/images/splash/Logofinal Big.png"
import Cajuzao from "../../assets/images/splash/cajuzao.png"

export default function SplashScreen() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">

      <div className="flex flex-col items-center justify-center z-10 mb-40">
        <img
          src={BigNutraLogo}
          alt="Logo Nutra"
          className="w-full max-w-[392px] h-auto object-contain"
        />
      </div>

      <img
        src={Cajuzao}
        alt="Caju mascote"
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          w-full max-w-[600px]
          h-auto object-contain
          z-0
        "
      />
    </div>
  )
}

export { SplashScreen }
