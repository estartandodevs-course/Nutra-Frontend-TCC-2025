import { useEffect, useState } from "react";
import TaskItem from "../progress/TaskItem";
import { TASKS as MOCK_TASKS } from "../../mocks/tasklist";
import type { Task } from "../../types/tasklist";

export default function TasksList() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  useEffect(() => {
    const storage = localStorage.getItem("tasks");

    if (storage) {
      try {
        const parsed = JSON.parse(storage) as unknown;

        if (Array.isArray(parsed)) {
          const valid = parsed.every(
            (item) =>
              typeof item === "object" &&
              item !== null &&
              "id" in item &&
              "title" in item &&
              "completed" in item
          );

          if (valid) {
            setTasks(parsed as Task[]);
          }
        }
      } catch {
        console.error("Erro ao ler tasks do localStorage");
      }
    }
  }, []);

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
