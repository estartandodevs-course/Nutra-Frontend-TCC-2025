import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:3000", // apenas coloquei esse link como teste
  headers: {
    "Content-Type": "application/json",
  },
});
