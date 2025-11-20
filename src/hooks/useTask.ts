import { useAuth } from "./useAuth";
import type { Task } from "../types/tasklist";

export function useTasks() {
  const { user, updateUserTasks } = useAuth();

  if (!user) {
    return {
      tasks: [] as Task[],
      toggleTask: () => {},
      increaseProgress: () => {},
    };
  }

  const tasks: Task[] = user.tasks ?? [];

  const toggleTask = (id: string): void => {
    const updated = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    updateUserTasks(updated);
  };

  const increaseProgress = (id: string, amount: number): void => {
    const updated = tasks.map((task) => {
      if (task.id !== id) return task;

      const newCurrent = Math.min(task.current + amount, task.total);
      const newCompleted = newCurrent >= task.total;

      return {
        ...task,
        current: newCurrent,
        completed: newCompleted,
      };
    });

    updateUserTasks(updated);
  };

  return {
    tasks,
    toggleTask,
    increaseProgress,
  };
}
