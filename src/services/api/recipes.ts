import { api } from "./api";
import type { Recipe } from "./apiTypes";

export async function getRecipes() {
  const response = await api.get<Recipe[]>("/recipes");
  return response.data;
}