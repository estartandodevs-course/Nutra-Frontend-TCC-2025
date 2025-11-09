export const PATHS = {
  HOME: "/",
  QUIZ: "/quiz",
  ACHIEVEMENTS: "/conquistas",
  RECIPES: "/receitas",
  RECIPE_DETAILS: "/receitas/:id", 
  LOGIN: "/login",
  SPLASH: "/splash",
} as const;

export type PathKeys = keyof typeof PATHS;
