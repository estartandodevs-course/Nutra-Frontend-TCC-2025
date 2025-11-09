import { Routes, Route } from "react-router-dom";
import { PATHS } from "./path";

import Home from "../pages/Home/Home";
import ModalScreen from "../pages/ModalScreen/ModalScreen";
import AchievementsPage from "../pages/AchievementsPage/AchievementsPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";

const NotFound = () => <div>Página não encontrada</div>;

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.QUIZ} element={<ModalScreen />} />
      <Route path={PATHS.ACHIEVEMENTS} element={<AchievementsPage />} />
      <Route path={PATHS.RECIPES} element={<RecipesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
