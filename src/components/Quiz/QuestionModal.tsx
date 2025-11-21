import ProgressBar from "../Quiz/Progressbar";
import type { QuestionModalProps } from "../../types/quiz";

export default function QuestionModal({
  question,
  questionNumber,
  totalQuestions,
  answers,
  onSelectAnswer,
  onNext,
  onBack,
}: QuestionModalProps) {
  const selectedAnswer = answers[question.id];

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-yellow-100 rounded-xl shadow-md p-4 mb-2">
        <div className="flex items-center justify-center gap-2 h-12">
          <span className="text-2xl">{question.emoji}</span>
          <h2 className="text-sm font-semibold text-orange-700">
            Vamos conhecer o seu perfil!
          </h2>
        </div>
      </div>

      <ProgressBar current={questionNumber} total={totalQuestions} />

      <div className="bg-yellow-100 rounded-xl shadow-md p-4 mb-16">
        <h3 className="text-base font-bold text-orange-600 mb-4">
          {questionNumber}. {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options?.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => onSelectAnswer(question.id, index)}
                className={`w-full text-left px-4 py-2 rounded-lg border-2 font-medium transition ${
                  isSelected
                    ? "border-orange-500 bg-white text-gray-800"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          onClick={onNext}
          className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600"
        >
          Próximo →
        </button>

        <button
          onClick={onBack}
          className="w-full border-2 border-orange-500 text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-orange-50"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}
