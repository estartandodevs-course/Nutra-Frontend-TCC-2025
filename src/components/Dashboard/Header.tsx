import { Bell, Settings } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();

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
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>

          <p className="text-sm font-semibold text-gray-900">
            Olá, {user?.name ?? "Usuário"}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={20} className="text-gray-600" />
          <Settings size={20} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}
