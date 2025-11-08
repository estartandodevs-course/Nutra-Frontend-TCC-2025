import { Play } from "lucide-react"

export default function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "Receitas com frutas vermelhas 🍓",
      url: "https://www.youtube.com/watch?v=UUIs3QvzyOw",
    },
    {
      id: 2,
      title: "Maçã de comer fitness 🍎",
      url: "https://www.youtube.com/watch?v=rKdwGO2HQfQ",
    },
    {
      id: 3,
      title: "Como manter uma alimentação saudável",
      url: "https://www.youtube.com/watch?v=uRrhXFK5TwQ",
    },
  ]

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-900">Vídeos</h3>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {videos.map((video) => {
          const videoId = video.url.split("v=")[1]
          const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

          return (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-28"
            >
              <div className="relative bg-gray-200 rounded-lg overflow-hidden h-24 flex items-center justify-center hover:opacity-90 transition">
                <img
                  src={thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <Play size={24} className="absolute text-white opacity-90" fill="white" />
              </div>
              <p className="text-xs text-gray-700 mt-2 text-center line-clamp-2">
                {video.title}
              </p>
            </a>
          )
        })}
      </div>
    </div>
  )
}
