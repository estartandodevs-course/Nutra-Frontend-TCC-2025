import { games } from "../../mocks/games";

export default function GamesSection() {
  return (
    <div className="space-y-3 text-center">
      <div className="flex justify-between items-center px-2">
        <h3 className="text-sm font-semibold text-gray-900">Jogos</h3>
        <a href="#" className="text-xs text-orange-500 font-medium">
          Ver todos os jogos →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-2">
        {games.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <div className="bg-orange-100 rounded-lg w-full aspect-square flex items-center justify-center border-2 border-orange-200 overflow-hidden">
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
  );
}
 