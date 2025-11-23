import ProgressBar from "./Progressbar";
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
  const isNextDisabled = selectedAnswer === undefined || selectedAnswer === null;

  return (
    <div className="w-full max-w-sm md:max-w-md mx-auto p-2 md:p-4">
      <div className="bg-yellow-100 rounded-xl shadow-md p-8 mb-2 flex items-center justify-center gap-2 h-12">
        {question.image && <img src={question.image} alt="Ícone da pergunta" className="w-10 h-10 object-contain" />}
        <h2 className="text-sm md:text-base font-semibold text-orange-700">Vamos conhecer o seu perfil!</h2>
      </div>

      <ProgressBar current={questionNumber} total={totalQuestions} />

      <div className="bg-yellow-100 rounded-xl shadow-md p-4 mb-8">
        <h3 className="text-base md:text-lg font-bold text-orange-600 mb-4">
          {questionNumber}. {question.question}
        </h3>

        <div className="flex flex-col gap-3">
          {question.options?.map((option, index) => {
            const isSelected = selectedAnswer === index;
            return (
              <button
                key={index}
                onClick={() => onSelectAnswer(question.id, index)}
                className={`w-full text-left px-4 py-2 rounded-lg border-2 font-medium transition
                  ${isSelected
                    ? "border-orange-500 bg-white text-gray-800"
                    : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"}`}
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
          disabled={isNextDisabled}
          className={`w-full font-bold py-2 px-4 rounded-lg transition cursor-pointer
            ${isNextDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-orange-500 text-white hover:bg-orange-600"}`}
        >
          {questionNumber === totalQuestions ? "Finalizar" : "Próximo →"}
        </button>

        <button
          onClick={onBack}
          className="w-full border-2 border-orange-500 text-orange-600 font-bold py-2 px-4 rounded-lg hover:bg-orange-50 cursor-pointer"
        >
          ← Voltar
        </button>
      </div>
    </div>
  );
}
