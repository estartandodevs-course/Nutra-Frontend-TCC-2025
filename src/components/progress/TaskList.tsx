import { useTasks } from "../../hooks/useTask";
import TaskItem from "../progress/TaskItem";

export default function TasksList() {
  const { tasks } = useTasks();

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
