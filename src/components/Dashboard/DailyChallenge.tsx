import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useAPI";

interface TipoRegistroApi {
  codigo: number;
  descicao: string; // mantido conforme seu mock
}

interface TipoRegistroResponse {
  sucesso: boolean;
  mensagem: string | null;
  dados: TipoRegistroApi[];
}

export default function DailyChallenge() {
  const { get, loading } = useApi();
  const [tipo, setTipo] = useState<TipoRegistroApi | null>(null);

  useEffect(() => {
    async function loadTipo() {
      try {
        const result = await get("/Registros/Tipos/2", "tipoRegistro2");

        const data = result.data as TipoRegistroResponse | null;

        if (result.ok && data && data.sucesso && Array.isArray(data.dados)) {
          if (data.dados.length > 0) {
            setTipo(data.dados[0]);
          }
        }
      } catch (error) {
        console.error("Erro ao carregar tipo do desafio diário:", error);
      }
    }

    loadTipo();
  }, []); 

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">Desafio diário</h3>

      <div className="bg-orange-100 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-700">
            {loading ? "Carregando..." : tipo ? tipo.descicao : "Coma 2 frutas"}
          </span>

          <Link
            to="/conquistas"
            className="text-orange-500 hover:text-orange-600 transition"
          >
            <Trophy size={16} />
          </Link>
        </div>

        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-yellow-400 h-3 rounded-full transition-all"
            style={{ width: "50%" }} 
          />
        </div>

        <p className="text-xs text-gray-600 mt-2">
          {tipo ? tipo.descicao : "1/2 kg"}
        </p>
      </div>
    </div>
  );
}
