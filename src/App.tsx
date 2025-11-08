import { Route, Routes } from "react-router-dom";
import ModalScreen from "./pages/ModalScreen/ModalScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ModalScreen />} />
    </Routes>
  );
}

export default App;
