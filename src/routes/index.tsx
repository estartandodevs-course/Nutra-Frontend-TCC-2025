import { Routes, Route } from "react-router-dom";
import { PATHS } from "./path";
import ModalScreen from "../pages/ModalScreen/ModalScreen";
import AchievementsPage from "../pages/AchievementsPage/AchievementsPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import LoginPage from "../pages/Login/Login";
import SplashPage from "../pages/SplashPage/SplashPage";
import RecipeDetailsPage from "../pages/RecipesDetailsPage/RecipesDetailsPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import RegisterPage from "../pages/Register/Register";

const NotFound = () => <div>Página não encontrada</div>;

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<SplashPage />}  /> {/* Na verdade é <Home />, mas vou deixar essa págima como Home por enquanto */}
      <Route path={PATHS.QUIZ} element={<ModalScreen />} />
      <Route path={PATHS.ACHIEVEMENTS} element={<AchievementsPage />} />
      <Route path={PATHS.RECIPES} element={<RecipesPage />} />
      <Route path={PATHS.RECIPE_DETAILS} element={<RecipeDetailsPage />} />
      <Route path={PATHS.LOGIN} element={<LoginPage />} />
      <Route path={PATHS.SPLASH} element={<SplashPage />} />
      <Route path={PATHS.WELCOME} element={<WelcomePage />} />
      <Route path={PATHS.REGISTER} element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
