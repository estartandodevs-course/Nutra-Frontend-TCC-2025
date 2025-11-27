import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Wrapper from "../../components/General/Wrapper";
import QuizModal from "../../components/Quiz/QuizModal";
import { quizData } from "../../data/quizdata";
import { useRespostas } from "../../hooks/useRespostas";
import { useAuth } from "../../hooks/useAuth";

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const navigate = useNavigate();

  const { user } = useAuth();
  const { enviarRespostas } = useRespostas();

  const handleSelecionaResposta = (questaoId: number, respostaIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questaoId]: respostaIndex }));
  };

  const handleSeguinte = async () => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {

      const respostasApi = quizData.map((questao) => ({
        idPergunta: questao.id,
        idOpcao: answers[questao.id],
        descricao: questao.options[answers[questao.id]],
      }));

      const body = {
        idUsuario: user!.id,
        idQuestionario: 1, 
        respostas: respostasApi,
      };

      try {
        await enviarRespostas(body);
        alert("Respostas enviadas com sucesso!");
      } catch (error) {
        console.log(error);;
      }

      navigate("/dashboard");
    }
  };

  const handleVolta = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
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

