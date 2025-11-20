import { useState } from "react";
import type { RegisterUser } from "../types/hooks";
import { TASKS } from "../mocks/tasklist"; 

export function useRegister() {
  const [loading, setLoading] = useState(false);

  const registerUser = async (data: RegisterUser) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    const storedUsers = localStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const existingUser = users.find((user: RegisterUser) => user.email === data.email);
    if (existingUser) {
      setLoading(false);
      throw new Error("E-mail já cadastrado");
    }

    const newUser = {
      ...data,
      tasks: TASKS,   
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    setLoading(false);
    return true;
  };

  return {
    loading,
    registerUser,
  };
}
