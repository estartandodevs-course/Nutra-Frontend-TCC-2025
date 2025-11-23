import { useContext } from "react";
import { MenuModalContext } from "../context/MenuModalContext";
import type { MenuModalContextProps } from "../types/menumodalcontext";

export const useMenuModal = (): MenuModalContextProps => {
  const context = useContext(MenuModalContext);
  if (!context) throw new Error("useMenuModal deve estar no MenuModalProvider");
  return context;
};
