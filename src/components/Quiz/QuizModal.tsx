import QuestionModal from "../Quiz/QuestionModal";
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
    <div className="mt-10">
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
  );
}
