import { useState } from "react";
import { Plus, Trash } from "lucide-react";

export function RegistroExercicios() {
  const [exercicios, setExercicios] = useState<string[]>([]);
  const [novoExercicio, setNovoExercicio] = useState(""); // input temporário

  const adicionarExercicio = () => {
    if (novoExercicio.trim() === "") return; // não adiciona vazio
    setExercicios([...exercicios, novoExercicio.trim()]);
    setNovoExercicio("");
  };

  const removerExercicio = (index: number) => {
    setExercicios(exercicios.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-orange-100 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-gray-800">
          Exercícios de hoje
        </h3>

        <button
          className="bg-orange-500 text-white rounded-full p-1 hover:bg-orange-600 transition-colors"
          onClick={adicionarExercicio}
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 rounded border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Adicionar exercício..."
          value={novoExercicio}
          onChange={(e) => setNovoExercicio(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && adicionarExercicio()}
        />
      </div>

      <ul className="space-y-1 mb-2">
        {exercicios.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white rounded p-2 shadow-sm"
          >
            <span className="text-sm text-gray-700">{item}</span>
            <button
              onClick={() => removerExercicio(index)}
              className="text-red-500 hover:text-red-600"
            >
              <Trash size={14} />
            </button>
          </li>
        ))}
      </ul>

      <p className="text-xs text-gray-700 mt-1 font-medium">
        {exercicios.length * 150}kcal Gastas
      </p>
    </div>
  );
}
