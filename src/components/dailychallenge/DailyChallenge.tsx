import { Trophy } from "lucide-react"

export default function DailyChallenge() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">Desafio diário</h3>
      <div className="bg-orange-100 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700">Como 2 frutas</span>
          <Trophy size={16} className="text-orange-500" />
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div className="bg-yellow-400 h-3 rounded-full" style={{ width: "50%" }}></div>
        </div>
        <p className="text-xs text-gray-600 mt-2">1/2 kg</p>
      </div>
    </div>
  )
}