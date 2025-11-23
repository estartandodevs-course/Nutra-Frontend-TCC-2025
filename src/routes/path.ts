export const PATHS = {
  SPLASH: "/",
  WELCOME: "/welcome",
  CHOICES: "/choices",
  LOGIN: "/login",
  REGISTER: "/register",
  QUIZ: "/quiz",
  HOME: "/dashboard",
  ACHIEVEMENTS: "/conquistas",
  RECIPES: "/receitas",
  RECIPE_DETAILS: "/receitas/:id", 
  PLANT_TREE: "/tree",
  PROGRESS: "/progress",
} as const;

export type PathKeys = keyof typeof PATHS;
