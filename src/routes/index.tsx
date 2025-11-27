import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "../../src/components/General/Transition"; 

import { PATHS } from "./path";
import ModalScreen from "../pages/ModalScreen/ModalScreen";
import AchievementsPage from "../pages/AchievementsPage/AchievementsPage";
import RecipesPage from "../pages/RecipesPage/RecipesPage";
import LoginPage from "../pages/Login/Login";
import SplashPage from "../pages/SplashPage/SplashPage";
import RecipeDetailsPage from "../pages/RecipesDetailsPage/RecipesDetailsPage";
import WelcomePage from "../pages/WelcomePage/WelcomePage";
import RegisterPage from "../pages/Register/Register";
import ChoicesPage from "../pages/ChoicesPage/ChoicesPage";
import TreePage from "../pages/TreePage/TreePage";
import ProgressPage from "../pages/ProgressPage/ProgressPage";
import Home from "../pages/Home/Home";
import ChallengePage from "../pages/ChallengePage/ChallengePage"

const NotFound = () => <div>Página não encontrada</div>;

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path={PATHS.SPLASH} element={<PageWrapper><SplashPage /></PageWrapper>} />
        <Route path={PATHS.WELCOME} element={<PageWrapper><WelcomePage /></PageWrapper>} />
        <Route path={PATHS.CHOICES} element={<PageWrapper><ChoicesPage /></PageWrapper>} />
        <Route path={PATHS.LOGIN} element={<PageWrapper><LoginPage /></PageWrapper>} />
        <Route path={PATHS.REGISTER} element={<PageWrapper><RegisterPage /></PageWrapper>} />
        <Route path={PATHS.QUIZ} element={<PageWrapper><ModalScreen /></PageWrapper>} />
        <Route path={PATHS.HOME} element={<PageWrapper><Home /></PageWrapper>} />
        <Route path={PATHS.ACHIEVEMENTS} element={<PageWrapper><AchievementsPage /></PageWrapper>} />
        <Route path={PATHS.RECIPES} element={<PageWrapper><RecipesPage /></PageWrapper>} />
        <Route path={PATHS.RECIPE_DETAILS} element={<PageWrapper><RecipeDetailsPage /></PageWrapper>} />
        <Route path={PATHS.PLANT_TREE} element={<PageWrapper><TreePage /></PageWrapper>} />
        <Route path={PATHS.PROGRESS} element={<PageWrapper><ProgressPage /></PageWrapper>} />
        <Route path={PATHS.CHALLENGE} element={<PageWrapper><ChallengePage /></PageWrapper>} />

        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />

      </Routes>
    </AnimatePresence>
  );
}
