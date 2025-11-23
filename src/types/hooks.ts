export interface Task {
  id: string;
  title: string;
  icon: string;
  current: number;
  total: number;
  completed: boolean;
}

export interface User {
  id: number;
  name?: string;   
  nome?: string;   
  email: string;
  password?: string;
  turma?: string;
  role?: string;
  level?: number;
  xp?: number;
  tasks?: Task[];
  tipo: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  turma?: string;
}
