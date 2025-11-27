export default function RegistroMetaDiaria() {
  return (
    <div className="bg-yellow-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800">
        Meta diária: 2.000kcal
      </h3>

      <div className="flex justify-between text-xs mt-2">
        <span>Faltam</span>
        <span>Gastas</span>
      </div>

      <div className="flex justify-between text-xs font-semibold text-gray-700">
        <span>1250kcal</span>
        <span>450kcal</span>
      </div>

      <div className="w-full bg-gray-300 h-3 rounded-full mt-2">
        <div
          className="bg-red-400 h-3 rounded-full"
          style={{ width: "60%" }}
        ></div>
      </div>
    </div>
  );
}
