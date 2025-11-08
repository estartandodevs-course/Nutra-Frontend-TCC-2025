import { Home, Search, Leaf, User } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="absolute bottom-0 left-0 w-full bg-orange-500 border-t border-orange-600 rounded-b-2xl z-20">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Home size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Search size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Leaf size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
