import { useState } from "react";
import { useApi } from "./useAPI"; 

export interface RespostaItem {
    idPergunta: number;
    idOpcao: number;
    descricao: string;
}

export interface RespostasPayload {
    idUsuario: number;
    idQuestionario: number;
    respostas: RespostaItem[];
}


export interface PostResponseData {
    sucesso: boolean;
    mensagem: string | null;
}

export function useRespostas() {
  const { post } = useApi(); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const enviarRespostas = async (data: RespostasPayload) => { 
    setLoading(true);
    setError(null);

    try {
      const url = "/api/Respostas";
      
      const result = await post(url, data); 

      if (!result.ok) {
        throw new Error(result.error || "Falha de rede ao enviar respostas.");
      }

      if (!result.data || !result.data.sucesso) {
          throw new Error(result.data?.mensagem || "O servidor rejeitou o envio das respostas.");
      }
      
      return result.data; 

    } catch (err: any) {
      const errorMessage = err.message || "Erro desconhecido durante o envio.";
      setError(errorMessage);
      console.error("Erro no envio de respostas:", errorMessage);
      
      return null; 
    } finally {
      setLoading(false);
    }
  };

  return { enviarRespostas, loading, error };
}
