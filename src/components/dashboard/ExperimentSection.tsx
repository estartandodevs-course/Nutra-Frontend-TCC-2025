export default function ExperimentSection() {
  const experiments = [
    {
      id: 1,
      title: "Experiência 1",
      image: "/",
    },
    {
      id: 2,
      title: "Experiência 2",
      image: "/",
    },
    {
      id: 3,
      title: "Experiência 3",
      image: "/",
    },
  ]

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-semibold text-gray-900">Experimentos para fazer em sala</h3>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {experiments.map((exp) => (
          <div key={exp.id} className="flex-shrink-0 w-28">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-24">
              <img src={exp.image || "/"} alt={exp.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">{exp.title}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-center text-orange-500 font-medium">Ver todos os experimentos →</p>
    </div>
  )
}