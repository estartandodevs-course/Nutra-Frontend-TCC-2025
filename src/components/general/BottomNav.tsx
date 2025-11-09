import { Home, User, Leaf, Menu } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-orange-500 border-t border-orange-600 rounded-b-2xl z-20">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white cursor-pointer">
          <Home size={24} />
          <span className="font-fredoka text-[16px] font-normal whitespace-nowrap">Inicio</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white cursor-pointer">
          <User size={24} />
          <span className="font-fredoka text-[16px] font-normal whitespace-nowrap">Meu Perfil</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white cursor-pointer">
          <Leaf size={24} />
          <span className="font-fredoka text-[16px] font-normal whitespace-nowrap">Minha Horta</span>
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white cursor-pointer">
          <Menu size={24} />
          <span className="font-fredoka text-[16px] font-normal whitespace-nowrap">Menu</span>
        </button>
      </div>
    </div>
  );
}
