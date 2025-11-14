import { Bell, Settings } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 w-full bg-white border-b border-gray-200 px-4 py-4 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <p className="text-sm font-semibold text-gray-900">Olá, Luiz Henrique</p>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={20} className="text-gray-600" />
          <Settings size={20} className="text-gray-600" />
        </div>
      </div>
    </header>
  );
}
