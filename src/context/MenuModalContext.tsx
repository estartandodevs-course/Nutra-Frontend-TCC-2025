import { createContext, useState, useContext, type ReactNode } from "react";
import type { MenuModalContextProps } from "../types/menumodalcontext";

const MenuModalContext = createContext<MenuModalContextProps | undefined>(undefined);

export function MenuModalProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <MenuModalContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </MenuModalContext.Provider>
  );
}

// Fiz isso aqui para não quebrar Fast Refresh e não dar erro no CI
export const useMenuModal = (): MenuModalContextProps => {
  const context = useContext(MenuModalContext);
  if (!context) throw new Error("useMenuModal deve estar no MenuModalProvider");
  return context;
};
