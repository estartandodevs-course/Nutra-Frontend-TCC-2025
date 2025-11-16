import { CheckCircle2, Circle } from 'lucide-react'
import type { Task } from '../../types/task'

export default function TaskItem({ task }: { task: Task }) {
  const percentage = (task.current / task.total) * 100

  return (
    <div className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm border border-gray-200">
      <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center text-2xl border-2 border-orange-200">
        {task.icon}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">{task.title}</h3>

        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-yellow-400 h-full rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <p className="text-xs font-semibold text-gray-700 mt-1">
          {task.current}/{task.total}
        </p>
      </div>

      <div className="flex-shrink-0">
        {task.completed ? (
          <CheckCircle2 className="w-7 h-7 text-green-500 fill-green-500" />
        ) : (
          <Circle className="w-7 h-7 text-gray-400" strokeWidth={2} />
        )}
      </div>
    </div>
  )
}
