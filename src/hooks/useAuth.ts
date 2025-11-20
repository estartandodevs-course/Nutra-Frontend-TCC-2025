import { useEffect, useState } from "react";
import type { User } from "../types/hooks";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800)); 

    const storedUsers = localStorage.getItem("users");
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const existingUser = users.find((user) => user.email === email);

    if (!existingUser) {
      throw new Error("Usuário não encontrado. Crie uma conta primeiro.");
    }

    if (existingUser.password !== password) {
      throw new Error("Senha incorreta.");
    }

    localStorage.setItem("loggedUser", JSON.stringify(existingUser));
    setUser(existingUser);

    return true;
  };

  const logout = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return {
    user,
    login,
    logout,
    isAuthenticated,
  };
}
