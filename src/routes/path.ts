export const PATHS = {
  HOME: "/",
  QUIZ: "/quiz",
  ACHIEVEMENTS: "/conquistas",
  RECIPES: "/receitas",
} as const;

export type PathKeys = keyof typeof PATHS;