import { rankingList } from "../../mocks/ranking"

export default function Rankings() {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Classificações</h2>

      <div className="space-y-3 md:space-y-2">
        {rankingList.map((user) => (
          <div
            key={user.position}
            className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-yellow-50 rounded-lg border border-yellow-100 hover:shadow-sm transition-shadow"
          >
            <div className="text-lg md:text-xl font-bold text-gray-900 w-8">{user.position})</div>

            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl text-gray-600">👤</span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-sm md:text-base font-semibold text-gray-900 truncate">{user.name}</div>
              <div className="text-xs md:text-sm text-gray-600">{user.class}</div>
            </div>

            <div className="text-sm md:text-base font-bold text-orange-600 flex-shrink-0">+{user.points}pts</div>
          </div>
        ))}
      </div>
    </section>
  )
}
