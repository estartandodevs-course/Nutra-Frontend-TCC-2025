export default function GamesSection() {
  const games = [
    { id: 1, title: "Jogo da Memória", icon: "🎮" },
    { id: 2, title: "Quiz Educativo", icon: "🎯" },
    { id: 3, title: "Caça Palavras", icon: "🎲" },
    { id: 4, title: "Quebra Cabeças", icon: "🃏" },
  ]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-900">Jogos</h3>
        <a href="#" className="text-xs text-orange-500 font-medium">
          Ver todos os jogos →
        </a>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {games.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <div className="bg-orange-100 rounded-lg w-full aspect-square flex items-center justify-center border-2 border-orange-200">
              <span className="text-2xl">{game.icon}</span>
            </div>
            <p className="text-xs text-gray-700 mt-2 text-center">{game.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
