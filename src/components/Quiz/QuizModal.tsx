import QuestionModal from "./QuestionModal";
import type { QuizModalProps } from "../../types/quiz";

export default function QuizModal({
  question,
  questionNumber,
  totalQuestions,
  answers,
  onSelectAnswer,
  onNext,
  onBack,
}: QuizModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm md:max-w-md mx-auto overflow-y-auto max-h-[90vh]">
        <QuestionModal
          question={question}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
          answers={answers}
          onSelectAnswer={onSelectAnswer}
          onNext={onNext}
          onBack={onBack}
        />
      </div>
    </div>
  );
}
