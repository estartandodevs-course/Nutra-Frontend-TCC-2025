import { createContext } from "react";
import type { MenuModalContextProps } from "../types/menumodalcontext";

export const MenuModalContext = createContext<MenuModalContextProps | undefined>(undefined);
