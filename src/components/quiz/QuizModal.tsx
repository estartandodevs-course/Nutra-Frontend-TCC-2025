import QuestionModal from "./QuestionModal"
import type { QuizModalProps } from "../../types/quiz"
import ResultModal from "./ResultModal"


export default function QuizModal({
  question,
  questionNumber,
  totalQuestions,
  answers,
  onSelectAnswer,
  onNext,
  onBack,
  onRestart,
  showResult,
}: QuizModalProps) {
  if (showResult) {
    return <ResultModal answers={answers} onRestart={onRestart} totalQuestions={totalQuestions} />
  }

  return (
    <QuestionModal
      question={question}
      questionNumber={questionNumber}
      totalQuestions={totalQuestions}
      answers={answers}
      onSelectAnswer={onSelectAnswer}
      onNext={onNext}
      onBack={onBack}
    />
  )
}