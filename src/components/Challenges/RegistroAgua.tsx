import { useState } from "react";

export default function RegistroAgua() {
  const totalCopos = 9; 
  const [coposTomados, setCoposTomados] = useState(4); 

  const toggleCopo = (index: number) => {
    if (index < coposTomados) {
      setCoposTomados(index); 
    } else {
      setCoposTomados(index + 1); 
    }
  };

  return (
    <div className="bg-yellow-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800">
        Monitor de água diário
      </h3>

      <p className="text-xs text-gray-700 mt-1 font-medium">
        {coposTomados}/{totalCopos} copos (250ml)
      </p>

      <div className="flex gap-1 mt-2">
        {Array.from({ length: totalCopos }).map((_, i) => (
          <div
            key={i}
            onClick={() => toggleCopo(i)}
            className={`w-6 h-6 border rounded-md cursor-pointer transition-colors ${
              i < coposTomados
                ? "bg-blue-400 border-blue-500"
                : "border-gray-300 bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
