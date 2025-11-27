export default function RegistroAgua() {
  return (
    <div className="bg-yellow-100 rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-800">
        Monitor de água diário
      </h3>

      <p className="text-xs text-gray-700 mt-1 font-medium">4/9 copos (250ml)</p>

      <div className="flex gap-1 mt-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 border rounded-md ${
              i < 4 ? "bg-blue-300 border-blue-400" : "border-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
