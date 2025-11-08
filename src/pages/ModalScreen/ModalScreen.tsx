import { useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import QuizModal from "../../components/quiz/QuizModal";
import { quizData } from "../../data/quizdata";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleSelecionaResposta = (questaoId: number, respostaIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questaoId]: respostaIndex,
    }));
  };

  const handleSeguinte = () => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleVolta = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = quizData[currentStep];

  return (
    <Wrapper className="bg-white flex flex-col items-center justify-center text-center min-h-screen p-4">
        <QuizModal
          question={currentQuestion}
          questionNumber={currentStep + 1}
          totalQuestions={quizData.length}
          answers={answers}
          onSelectAnswer={handleSelecionaResposta}
          onNext={handleSeguinte}
          onBack={handleVolta}
        />
    </Wrapper>
  );
}
