import { Play } from "lucide-react"
import { videos } from "../../mocks/videos"

export default function VideoSection() {
  return (
    <div className="space-y-3 text-center">
      <h3 className="text-sm font-semibold text-orange-500">Vídeos</h3>

      <div className="overflow-x-auto pb-2">
        <div className="flex justify-center sm:justify-start gap-3 min-w-max mx-auto px-2">
          {videos.map((video) => {
            const videoId = video.url.split("v=")[1]
            const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

            return (
              <a
                key={video.id}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-28 flex flex-col items-center"
              >
                <div className="relative bg-gray-200 rounded-lg overflow-hidden h-24 w-full flex items-center justify-center hover:opacity-90 transition">
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
    </div>
  )
}
