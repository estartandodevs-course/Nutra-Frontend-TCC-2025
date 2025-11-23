import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import BottomNav from "./components/General/BottomNav";
import MenuModal from "./components/Menu/MenuModal";
import { MenuModalProvider, useMenuModal } from "./context/MenuModalContext";
import { PATHS } from "./routes/path";

function App() {
  return (
    <BrowserRouter>
      <MenuModalProvider>
        <AppRoutes />
        <ConditionalBottomNavAndMenu />
      </MenuModalProvider>
    </BrowserRouter>
  );
}

function ConditionalBottomNavAndMenu() {
  const location = useLocation();
  const { isMenuOpen, closeMenu } = useMenuModal();

  const dashboardPaths = [
    PATHS.HOME,
    PATHS.PROGRESS,
    PATHS.PLANT_TREE,
    PATHS.ACHIEVEMENTS,
    PATHS.RECIPES,
    PATHS.RECIPE_DETAILS, 
  ];

  const showMenu = dashboardPaths.some((path) => {
    if (path.includes(":")) {
      const basePath = path.split("/:")[0]; 
      return location.pathname.startsWith(basePath);
    }
    return location.pathname === path;
  });

  if (!showMenu) return null;

  return (
    <>
      <BottomNav />
      <MenuModal
        isOpen={isMenuOpen}
        onClose={closeMenu}
        profileName="Usuário"
        profileRole="Aluno(a)"
        // profileImage="/placeholder-user.jpg"
      />
    </>
  );
}

export default App;
