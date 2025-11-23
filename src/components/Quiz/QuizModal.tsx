import QuestionModal from "./QuestionModal";
import type { QuizModalProps } from "../../types/quiz";

export default function QuizModal(props: QuizModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm md:max-w-md mx-auto overflow-y-auto max-h-[90vh]">
        <QuestionModal {...props} />
      </div>
    </div>
  );
}
