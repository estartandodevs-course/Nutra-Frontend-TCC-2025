export interface Task {
  id: string;
  title: string;
  icon: string;
  current: number;
  total: number;
  completed: boolean;
}

export interface User {
  name: string;
  email: string;
  password: string;
  role?: string;
  level?: number;
  xp?: number;
  tasks?: Task[];
}
