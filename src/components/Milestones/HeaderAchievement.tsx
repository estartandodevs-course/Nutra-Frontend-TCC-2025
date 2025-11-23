import { ChevronLeft, Bell, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeaderAchievements() {
  const navigate = useNavigate();

  return (
    <header
      className="
        fixed top-0 left-1/2 -translate-x-1/2
        w-full max-w-md
        bg-white border-b border-gray-200
        px-4 py-4 z-50
        mx-auto
      "
    >
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Voltar"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="text-lg font-semibold text-gray-900">
          500 pts
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-6 h-6 text-gray-700" />
          </button>
        </div>

      </div>
    </header>
  );
}
