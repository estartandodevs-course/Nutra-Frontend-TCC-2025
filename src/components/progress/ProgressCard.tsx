import { Check } from 'lucide-react'
import { badges } from '../../mocks/badges'

export default function ProgressCard() {

  return (
    <div className="bg-yellow-100 rounded-3xl p-6 shadow-sm mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Meu progresso</h2>
      <div className="flex gap-2 mb-6 flex-wrap">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex-1 min-w-16 bg-orange-500 rounded-xl px-3 py-2 flex items-center justify-center gap-1 shadow-sm"
          >
            {badge.completed && (
              <Check className="w-5 h-5 text-white flex-shrink-0" strokeWidth={3} />
            )}
            <span className="text-sm font-semibold text-white">{badge.xp}</span>
          </div>
        ))}
      </div>
      <button className="w-full border-2 border-orange-500 text-orange-500 rounded-xl py-2 font-semibold hover:bg-orange-50 transition-colors cursor-pointer">
        Coletar
      </button>
    </div>
  )
}
