import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ModalScreen from "./pages/ModalScreen/ModalScreen";
import AchievementsPage from "./pages/AchievementsPage/AchievementsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<ModalScreen />} />
      <Route path="/conquistas" element={<AchievementsPage />} />
    </Routes>
  );
}

export default App;
