import { Home, User, Leaf, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();
  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-center z-50">
      <div className="w-full max-w-md bg-orange-500 border-t border-orange-600">
        <div className="flex justify-around items-center h-16">
          <button
            className="flex flex-col items-center justify-center w-16 h-16 text-white"
            onClick={() => navigate("/")}
          >
            <Home size={24} />
            <span className="font-fredoka text-[16px] whitespace-nowrap">Inicio</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-16 h-16 text-white"
            onClick={() => navigate("/progress")}
          >
            <User size={24} />
            <span className="font-fredoka text-[16px] whitespace-nowrap">Meu Perfil</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-16 h-16 text-white"
            onClick={() => navigate("/tree")}
          >
            <Leaf size={24} />
            <span className="font-fredoka text-[16px] whitespace-nowrap">Minha Horta</span>
          </button>
          <button
            className="flex flex-col items-center justify-center w-16 h-16 text-white"
            onClick={() => navigate("/menu")}
          >
            <Menu size={24} />
            <span className="font-fredoka text-[16px] whitespace-nowrap">Menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
