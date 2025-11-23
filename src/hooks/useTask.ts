import { useAuth } from "./useAuth";
import type { Task } from "../types/tasklist";
import { TASKS } from "../mocks/tasklist";

export function useTasks() {
  const { user, updateUserTasks } = useAuth();

  if (!user) {
    return {
      tasks: [] as Task[],
      toggleTask: () => {},
      increaseProgress: () => {},
    };
  }

  const tasks: Task[] = user.tasks && user.tasks.length > 0
    ? user.tasks
    : TASKS.map((tarefa) => ({ ...tarefa }));

  if (!user.tasks || user.tasks.length === 0) {
    updateUserTasks(tasks);
  }

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
      const completed = newCurrent >= task.total;

      return {
        ...task,
        current: newCurrent,
        completed,
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
