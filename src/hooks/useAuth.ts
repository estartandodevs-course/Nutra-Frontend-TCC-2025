import { useEffect, useState, useCallback } from "react";
import type { User } from "../types/hooks";
import { TASKS } from "../mocks/tasklist";

type UseAuthReturn = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserTasks: (newTasks: User["tasks"]) => void;
  isAuthenticated: boolean;
};

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 800));

    const stored = localStorage.getItem("users");
    const users: User[] = stored ? JSON.parse(stored) : [];

    const existing = users.find((user) => user.email === email);
    if (!existing) throw new Error("Usuário não encontrado.");
    if (existing.password !== password) throw new Error("Senha incorreta.");

    const updatedUser: User = {
      ...existing,
      tasks: existing.tasks ?? TASKS.map((tarefa) => ({ ...tarefa })),
    };

    const updatedUsers = users.map((user) => (user.email === updatedUser.email ? updatedUser : user));
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
    setUser(updatedUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const updateUserTasks = useCallback((newTasks: User["tasks"]) => {
    if (!user) return;

    const updatedUser: User = { ...user, tasks: newTasks ?? [] };

    setUser(updatedUser);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

    const stored = localStorage.getItem("users");
    if (stored) {
      const users: User[] = JSON.parse(stored);
      const updatedUsers = users.map((usuario) => (usuario.email === updatedUser.email ? updatedUser : usuario));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, [user]);

  return {
    user,
    login,
    logout,
    updateUserTasks,
    isAuthenticated: !!user,
  };
}
