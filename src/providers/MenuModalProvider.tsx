import { useState, type ReactNode } from "react";
import { MenuModalContext } from "../context/MenuModalContext";
import type { MenuModalContextProps } from "../types/menumodalcontext";

export function MenuModalProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const value: MenuModalContextProps = { isMenuOpen, openMenu, closeMenu };

  return (
    <MenuModalContext.Provider value={value}>
      {children}
    </MenuModalContext.Provider>
  );
}
