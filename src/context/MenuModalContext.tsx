import { createContext, useState, type ReactNode } from "react";
import type { MenuModalContextProps } from "../types/menumodalcontext";

export const MenuModalContext = createContext<MenuModalContextProps | undefined>(undefined);

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
