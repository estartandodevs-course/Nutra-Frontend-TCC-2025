import type { TabsProps } from "../../types/tabs"

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  return (
    <div className="flex gap-3 mt-6">
      <button
        onClick={() => onTabChange("progress")}
        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
          activeTab === "progress" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 3h2v5H9V3zm4 14h2v2h-2v-2zm5-8h2v8h-2v-8zm-2-3h2v11h-2V6zm-8 4h2v7H8v-7z" />
        </svg>
        <span className="hidden sm:inline">Meu progresso</span>
        <span className="sm:hidden">Progresso</span>
      </button>

      <button
        onClick={() => onTabChange("achievements")}
        className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${
          activeTab === "achievements" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
        </svg>
        <span className="hidden sm:inline">Minhas conquistas</span>
        <span className="sm:hidden">Conquistas</span>
      </button>
    </div>
  )
}
