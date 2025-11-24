import { useState } from "react";
import { useApi } from "./useAPI";

export function useRespostas() {
  const { post } = useApi();
  const [loading, setLoading] = useState(false);

  const enviarRespostas = async (data: {
    idUsuario: number;
    idQuestionario: number;
    respostas: { idPergunta: number; idOpcao: number; descricao: string }[];
  }) => {
    setLoading(true);
    try {
      const result = await post("/Respostas", data);
      if (!result.ok) throw new Error("Falha ao enviar respostas");
      return result.data;
    } finally {
      setLoading(false);
    }
  };

  return { enviarRespostas, loading };
}
