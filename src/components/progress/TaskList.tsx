import TaskItem from "../progress/TaskItem"
import { TASKS } from "../../mocks/tasklist"

export default function TasksList() {
  return (
    <div className="space-y-3">
      {TASKS.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
