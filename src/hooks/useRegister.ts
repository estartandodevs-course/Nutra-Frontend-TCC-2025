import { useState } from "react";
import type { RegisterUser, User } from "../types/hooks";
import { TASKS } from "../mocks/tasklist";
import { useApi } from "./useAPI";

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const { post } = useApi();

  const registerUser = async (data: RegisterUser): Promise<boolean> => {
    setLoading(true);

    try {
      const result = await post("/Usuarios", {
        email: data.email,
        nome: data.name,
        turma: data.turma,
        tipo: "Aluno",
      });

      if (result.ok && result.data) {
        const apiUser: User = {
          id: result.data.id ?? Date.now(), 
          ...result.data,
          name: result.data.name ?? data.name,
          tasks: result.data.tasks ?? TASKS.map((tarefa) => ({ ...tarefa })),
          tipo: "Aluno",
        };

        const stored = localStorage.getItem("users");
        const users: User[] = stored ? JSON.parse(stored) : [];
        users.push(apiUser);
        localStorage.setItem("users", JSON.stringify(users));

        setLoading(false);
        return true;
      }

      // Coloquei esse Fallback local caso a API falhe blz?
      await new Promise((resolve) => setTimeout(resolve, 800));

      const storedUsers = localStorage.getItem("users");
      const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

      const existingEmail = users.find((user) => user.email === data.email);
      if (existingEmail) {
        setLoading(false);
        throw new Error("E-mail já cadastrado");
      }

      const newUser: User = {
        id: Date.now(), // 
        ...data,
        name: data.name,
        tasks: TASKS.map((tarefa) => ({ ...tarefa })),
        tipo: "Aluno",
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      setLoading(false);
      return true;
    } catch (erro) {
      setLoading(false);
      throw erro;
    }
  };

  return {
    loading,
    registerUser,
  };
}
