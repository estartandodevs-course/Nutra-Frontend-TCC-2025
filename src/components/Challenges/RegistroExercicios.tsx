import { Plus } from "lucide-react";

export function RegistroExercicios() {
  return (
    <div className="bg-orange-100 rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-800">
          Exercícios de hoje
        </h3>

        <button className="bg-orange-500 text-white rounded-full p-1">
          <Plus size={14} />
        </button>
      </div>

      <p className="text-xs text-gray-700 mt-1 font-medium">
        450kcal Gastas
      </p>
    </div>
  );
}
