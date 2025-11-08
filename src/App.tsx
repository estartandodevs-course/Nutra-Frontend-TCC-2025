import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ModalScreen from "./pages/ModalScreen/ModalScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<ModalScreen />} />
    </Routes>
  );
}

export default App;
