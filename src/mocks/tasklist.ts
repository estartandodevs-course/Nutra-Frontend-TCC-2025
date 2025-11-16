import type { Task } from "../types/tasklist"

export const TASKS: Task[] = [
  {
    id: 'fruits',
    title: 'Comer 5 frutas',
    icon: '🍎',
    current: 5,
    total: 5,
    completed: true,
  },
  {
    id: 'water',
    title: 'Beber 6 copos de água',
    icon: '💧',
    current: 5,
    total: 6,
    completed: false,
  },
  {
    id: 'exercise',
    title: 'Fazer 10 exercícios',
    icon: '🏃',
    current: 5,
    total: 10,
    completed: false,
  },
  {
    id: 'nutrition',
    title: 'Registrar a alimentação 10x',
    icon: '🍽️',
    current: 10,
    total: 10,
    completed: true,
  },
]
