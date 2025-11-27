interface RegistroMetaDiariaProps {
  metaDiaria?: number;      
  kcalConsumidas?: number;  
  kcalGastas?: number;      
}

export default function RegistroMetaDiaria({
  metaDiaria = 2000,       
  kcalConsumidas = 0,      
  kcalGastas = 0,          
}: RegistroMetaDiariaProps) {
  const progresso = Math.min(
    ((kcalConsumidas - kcalGastas) / metaDiaria) * 100,
    100
  );

  const kcalFaltam = Math.max(metaDiaria - (kcalConsumidas - kcalGastas), 0);

  return (
    <div className="bg-yellow-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800">
        Meta diária: {metaDiaria.toLocaleString()} kcal
      </h3>

      <div className="flex justify-between text-xs mt-2">
        <span>Faltam</span>
        <span>Gastas</span>
      </div>

      <div className="flex justify-between text-xs font-semibold text-gray-700">
        <span>{kcalFaltam.toLocaleString()} kcal</span>
        <span>{kcalGastas.toLocaleString()} kcal</span>
      </div>

      <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
        <div
          className="bg-red-400 h-3 rounded-full transition-all duration-300"
          style={{ width: `${progresso}%` }}
        ></div>
      </div>
    </div>
  );
}
