import { achievementsList } from "../../mocks/achievementlist"

export default function Achievements() {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Minhas conquistas</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
        {achievementsList.map((achievement) => (
          <div
            key={achievement.id}
            className="flex flex-col items-center p-3 md:p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="text-3xl md:text-4xl mb-2">{achievement.icon}</div>
            <div className="text-center text-xs md:text-sm font-medium text-gray-900 leading-tight">
              {achievement.label}
              {achievement.sublabel && <div>{achievement.sublabel}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
