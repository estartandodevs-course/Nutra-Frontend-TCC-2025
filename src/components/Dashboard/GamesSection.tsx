import { games } from "../../mocks/games";

export default function GamesSection() {
  return (
    <div className="space-y-3 text-center">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-semibold text-gray-900">Jogos</h3>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex justify-center sm:justify-start gap-3 min-w-max mx-auto px-2">
          {games.map((game) => (
            <div key={game.id} className="w-28 flex flex-col items-center shrink-0">
              <div className="relative bg-orange-100 rounded-lg overflow-hidden h-24 w-full flex items-center justify-center hover:opacity-90 transition">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">
                {game.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-center text-gray-500 font-medium mt-1">
        Ver todos os jogos →
      </p>
    </div>
  );
}
