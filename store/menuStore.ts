import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ACTION_MENU_ITEMS, ACTIVE_MENU_ITEMS } from "@/constants";

interface IMenuState {
  activeMenuItem: ACTIVE_MENU_ITEMS;
  actionMenuItem: null | ACTION_MENU_ITEMS;
  setActiveMenu: (menuItem: ACTIVE_MENU_ITEMS) => void;
  setActionMenu: (menuItem: ACTION_MENU_ITEMS | null) => void;
}

export const useMenuStore = create<IMenuState>()(
  devtools((set) => ({
    activeMenuItem: ACTIVE_MENU_ITEMS.PENCIL,
    actionMenuItem: null,
    setActiveMenu: (menuItem) =>
      set((state) => ({ ...state, activeMenuItem: menuItem })),
    setActionMenu: (menuItem) =>
      set((state) => ({ ...state, actionMenuItem: menuItem })),
  }))
);
