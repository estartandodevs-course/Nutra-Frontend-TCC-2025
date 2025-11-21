import { ChevronLeft, Bell, Settings } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 md:px-6 lg:px-8 flex items-center justify-between">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Voltar">
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div className="text-lg font-semibold text-gray-900">500 pts</div>

        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Notificações">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" aria-label="Configurações">
            <Settings className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}