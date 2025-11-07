export interface Question {
  id: number
  question: string
  emoji: string
  description?: string
  type?: string
  options?: string[]
}
export interface ProgressBarProps {
  current: number
  total: number
}

export interface QuestionModalProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  answers: Record<number, number>
  onSelectAnswer: (questionId: number, answerIndex: number) => void
  onNext: () => void
  onBack: () => void
}