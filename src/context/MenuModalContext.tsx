import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
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

export function useMenuModal() {
  const context = useContext(MenuModalContext);
  if (!context) throw new Error("useMenuModal must be used within a MenuModalProvider");
  return context;
}
