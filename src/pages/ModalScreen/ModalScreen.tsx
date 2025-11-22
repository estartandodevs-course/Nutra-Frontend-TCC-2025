import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Wrapper from "../../components/General/Wrapper";
import QuizModal from "../../components/Quiz/QuizModal";
import { quizData } from "../../data/quizdata";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const navigate = useNavigate();

  const handleSelecionaResposta = (questaoId: number, respostaIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questaoId]: respostaIndex }));
  };

  const handleSeguinte = () => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handleVolta = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = quizData[currentStep];

  return (
    <Wrapper>
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
