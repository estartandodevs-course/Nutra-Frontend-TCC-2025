import { useState } from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import QuizModal from "../../components/quiz/QuizModal";

const quizData = [
  {
    id: 1,
    question: "Vamos conhecer o seu perfil!",
    description: "Responda algumas perguntas sobre você",
    emoji: "🍎",
    type: "intro",
  },
  {
    id: 2,
    question: "Como são suas refeições no dia a dia?",
    emoji: "🍎",
    options: [
      "Não tenho um padrão definido.",
      "Como correndo, o que der na hora.",
      "Muito fast food.",
      "Como direito, nos horários certos.",
    ],
  },
  {
    id: 3,
    question: "Com que frequência você pratica exercícios?",
    emoji: "💪",
    options: [
      "Raramente pratico exercício.",
      "1-2 vezes por semana.",
      "3-4 vezes por semana.",
      "Praticamente todo dia.",
    ],
  },
  {
    id: 4,
    question: "Quantas horas você dorme por noite?",
    emoji: "😴",
    options: ["Menos de 6 horas", "6-7 horas", "7-8 horas", "Mais de 8 horas"],
  },
  {
    id: 5,
    question: "Como é seu nível de stress?",
    emoji: "🧘",
    options: ["Muito alto", "Alto", "Moderado", "Baixo"],
  },
];

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
    <Wrapper>
      <section className="flex flex-col items-center justify-center text-center min-h-screen p-4">
        <QuizModal
          question={currentQuestion}
          questionNumber={currentStep + 1}
          totalQuestions={quizData.length}
          answers={answers}
          onSelectAnswer={handleSelecionaResposta}
          onNext={handleSeguinte}
          onBack={handleVolta}
        />
      </section>
    </Wrapper>
  );
}
