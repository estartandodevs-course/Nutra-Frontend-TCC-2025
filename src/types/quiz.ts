export interface Question {
  id: number
  question: string
  image?: string
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

export interface QuizModalProps {
  question: Question
  questionNumber: number
  totalQuestions: number
  answers: Record<number, number>
  onSelectAnswer: (questionId: number, answerIndex: number) => void
  onNext: () => void
  onBack: () => void
}


export interface ResultModalProps {
  answers: Record<number, number>
  onRestart: () => void
  totalQuestions: number
}
