import { Trophy } from "lucide-react"
import { Link } from "react-router-dom"

export default function DailyChallenge() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">Desafio diário</h3>
      <div className="bg-orange-100 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700">Coma 2 frutas</span>
          <Link to="/conquistas" className="text-orange-500 hover:text-orange-600 transition">
            <Trophy size={16} />
          </Link>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-3">
          <div className="bg-yellow-400 h-3 rounded-full" style={{ width: "50%" }}></div>
        </div>

        <p className="text-xs text-gray-600 mt-2">1/2 kg</p>
      </div>
    </div>
  )
}
