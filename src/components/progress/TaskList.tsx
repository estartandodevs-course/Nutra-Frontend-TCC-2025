import TaskItem from "../progress/TaskItem"

interface Task {
  id: string
  title: string
  icon: string
  current: number
  total: number
  completed: boolean
}

const TASKS: Task[] = [
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

export default function TasksList() {
  return (
    <div className="space-y-3">
      {TASKS.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  )
}
