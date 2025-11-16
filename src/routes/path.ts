export const PATHS = {
  HOME: "/",
  QUIZ: "/quiz",
  ACHIEVEMENTS: "/conquistas",
  RECIPES: "/receitas",
  RECIPE_DETAILS: "/receitas/:id", 
  LOGIN: "/login",
  SPLASH: "/splash",
  WELCOME: "/welcome",
  REGISTER: "/register",
  CHOICES: "/choices",
  PLANT_TREE: "/tree",
  PROGRESS: "/progress",
  MENU: "/menu",
} as const;

export type PathKeys = keyof typeof PATHS;
