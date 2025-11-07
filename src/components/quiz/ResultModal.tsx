import type { ResultModalProps } from "../../types/quiz";

export default function ResultModal({ answers, onRestart, totalQuestions }: ResultModalProps) {
  const answeredCount = Object.keys(answers).length

  return (
    <div className="w-full max-w-sm">
      <div className="bg-yellow-100 rounded-2xl shadow-lg p-8 text-center mb-6">
        <div className="text-5xl mb-4">🎉</div>
        <h1 className="text-2xl font-bold text-orange-700 mb-2">Parabéns!</h1>
        <p className="text-gray-700 mb-4">Você completou o quiz</p>
        <div className="bg-white rounded-xl p-4 mb-4">
          <p className="text-3xl font-bold text-orange-600">
            {answeredCount}/{totalQuestions - 1}
          </p>
          <p className="text-gray-600 text-sm">questões respondidas</p>
        </div>
      </div>

      <button
        onClick={onRestart}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
      >
        Fazer novamente
      </button>
    </div>
  )
}