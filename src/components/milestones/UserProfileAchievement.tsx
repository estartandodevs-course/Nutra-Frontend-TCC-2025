import type { UserProfileAchievementProps } from "../../types/userProfileAchievement"

export default function UserProfile({ name, level }: UserProfileAchievementProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          
          <circle cx="100" cy="100" r="95" fill="none" stroke="#e0e0e0" strokeWidth="20" />

          
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="20"
            strokeDasharray="142 188.4"
            strokeDashoffset="0"
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gray-900">LVL {level}</div>
          </div>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h1>
    </div>
  )
}
