import { Home, Search, ShoppingCart, Heart, User } from "lucide-react"

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-orange-500 border-t border-orange-600">
      <div className="flex justify-around items-center h-16">
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Home size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Search size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <ShoppingCart size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <Heart size={24} />
        </button>
        <button className="flex flex-col items-center justify-center w-16 h-16 text-white hover:bg-orange-600 transition">
          <User size={24} />
        </button>
      </div>
    </div>
  )
}
