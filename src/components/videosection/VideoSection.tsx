import { Play } from "lucide-react"

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "Frutas vermelhas",
      image: "/",
    },
    {
      id: 2,
      title: "Maçã de comer fitness",
      image: "/",
    },
    {
      id: 3,
      title: "Comer saudável",
      image: "/",
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">Vídeos</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {videos.map((video) => (
          <div key={video.id} className="flex-shrink-0 w-28">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden h-24 flex items-center justify-center">
              <img src={video.image || "/placeholder.svg"} alt={video.title} className="w-full h-full object-cover" />
              <Play size={24} className="absolute text-white opacity-80" fill="white" />
            </div>
            <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
