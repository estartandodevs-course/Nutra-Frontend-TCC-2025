import { useContext } from "react";
import { MenuModalContext } from "../context/MenuModalContext";
import type { MenuModalContextProps } from "../types/menumodalcontext";

export function useMenuModal(): MenuModalContextProps {
  const context = useContext(MenuModalContext);
  if (!context) throw new Error("useMenuModal deve ser usado dentro do MenuModalProvider");
  return context;
}
