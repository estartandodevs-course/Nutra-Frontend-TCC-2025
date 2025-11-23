import { useState } from "react";
import { api } from "../services/api";

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function saveLocal(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function loadLocal(key: string): object | null {
    const saved = localStorage.getItem(key);
    if (!saved) return null;
    return JSON.parse(saved);
  }

  async function get(url: string, cacheKey: string) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get(url);

      saveLocal(cacheKey, response.data);

      return {
        ok: true,
        data: response.data,
        error: null,
      };
    } catch {
      const cached = loadLocal(cacheKey);

      if (cached !== null) {
        return {
          ok: true,
          data: cached,
          error: null,
        };
      }

      setError("Erro ao buscar dados.");
      alert("Erro ao buscar dados da API!");
      return { ok: false, data: null, error: "Erro ao buscar dados." };
    } finally {
      setLoading(false);
    }
  }

  async function post(url: string, body: object) {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post(url, body);
      return {
        ok: true,
        data: response.data,
        error: null,
      };
    } catch {
      setError("Erro ao enviar dados.");
      alert("Erro ao enviar dados para a API!");
      return { ok: false, data: null, error: "Erro ao enviar dados." };
    } finally {
      setLoading(false);
    }
  }

  return {
    get,
    post,
    loading,
    error,
  };
}
