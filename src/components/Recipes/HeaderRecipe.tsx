import { ChevronLeft, Bell, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function RecipesHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      <button
        onClick={() => navigate("/dashboard")}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-gray-900" />
      </button>

      <span className="text-sm font-semibold text-gray-900">500 pts</span>

      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-900" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-gray-900" />
        </button>
      </div>
    </div>
  )
}
