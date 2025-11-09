import cacaPalavraImage from "../../assets/images/games/cacapalavras.png";
import quizEducativoImage from "../../assets/images/games/quizeducativo.png";
import quebraCabecaImage from "../../assets/images/games/quebracabecas.png";
import jogoMemoriaImage from "../../assets/images/games/jogomemoria.png";

export default function GamesSection() {
  const games = [
    {
      id: 1,
      title: "Jogo da Memória",
      image: jogoMemoriaImage,
    },
    {
      id: 2,
      title: "Quiz Educativo",
      image: quizEducativoImage,
    },
    {
      id: 3,
      title: "Caça Palavras",
      image: cacaPalavraImage,
    },
    {
      id: 4,
      title: "Quebra Cabeças",
      image: quebraCabecaImage,
    },
  ];

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
 