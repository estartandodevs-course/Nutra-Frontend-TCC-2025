import { useEffect, useState, useCallback } from "react";
import type { User } from "../types/hooks";
import { TASKS } from "../mocks/tasklist";
import { useApi } from "./useAPI";

type UseAuthReturn = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserTasks: (newTasks: User["tasks"]) => void;
  isAuthenticated: boolean;
};

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const { post } = useApi();

  useEffect(() => {
    const saved = localStorage.getItem("loggedUser");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {

    const result = await post("/login", { email });

    if (result.ok && result.data) {
      const apiUser: User = {
        ...result.data,
        name: result.data.name ?? result.data.name,
        password, // senha vai fica apenas no local pq na Api não pede
        tasks: result.data.tasks ?? TASKS.map((tarefa) => ({ ...tarefa })),
      };

      localStorage.setItem("loggedUser", JSON.stringify(apiUser));

      const stored = localStorage.getItem("users");
      const users: User[] = stored ? JSON.parse(stored) : [];
      const updatedUsers = [
        ...users.filter((usuario) => usuario.email !== apiUser.email),
        apiUser,
      ];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setUser(apiUser);
      return true;
    }


    const stored = localStorage.getItem("users");
    const users: User[] = stored ? JSON.parse(stored) : [];
    const existing = users.find((usuario) => usuario.email === email);

    if (!existing) throw new Error("Usuário não encontrado.");
    if (existing.password !== password) throw new Error("Senha incorreta.");

    const localUser: User = {
      ...existing,
      tasks: existing.tasks ?? TASKS.map((tarefa) => ({ ...tarefa })),
    };

    localStorage.setItem("loggedUser", JSON.stringify(localUser));
    setUser(localUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const updateUserTasks = useCallback(
    (newTasks: User["tasks"]) => {
      if (!user) return;

      const updatedUser: User = {
        ...user,
        tasks: newTasks ?? [],
      };

      setUser(updatedUser);
      localStorage.setItem("loggedUser", JSON.stringify(updatedUser));

      const stored = localStorage.getItem("users");
      if (stored) {
        const users: User[] = JSON.parse(stored);
        const updatedUsers = users.map((usuario) =>
          usuario.email === updatedUser.email ? updatedUser : usuario
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
      }
    },
    [user]
  );

  return {
    user,
    login,
    logout,
    updateUserTasks,
    isAuthenticated: !!user,
  };
}
