import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { ACTION_MENU_ITEMS, ACTIVE_MENU_ITEMS, Colors } from "@/constants";

interface IMenuState {
  activeMenuItem: ACTIVE_MENU_ITEMS;
  actionMenuItem: null | ACTION_MENU_ITEMS;
  setActiveMenu: (menuItem: ACTIVE_MENU_ITEMS) => void;
  setActionMenu: (menuItem: ACTION_MENU_ITEMS) => void;
}

export const useMenuStore = create<IMenuState>()(
  devtools((set) => ({
    activeMenuItem: ACTIVE_MENU_ITEMS.PENCIL,
    actionMenuItem: null,
    setActiveMenu: (menuItem) => set(() => ({ activeMenuItem: menuItem })),
    setActionMenu: (menuItem) => set(() => ({ actionMenuItem: menuItem })),
  }))
);

interface IToolbarState {
  changeColor: (menuItem: ACTIVE_MENU_ITEMS, color: Colors) => void;
  changeWidth: (menuItem: ACTIVE_MENU_ITEMS, width: number) => void;
}

interface IToolbarTool {
  color: Colors;
  size: number;
}

interface IToolbarStore extends IToolbarState {
  tools: {
    [key: string]: IToolbarTool;
  };
  actions: {
    [key: string]: unknown;
  };
}

const initialToolbarState = {
  tools: {
    [ACTIVE_MENU_ITEMS.PENCIL]: { color: Colors.BLACK, size: 3 },
    [ACTIVE_MENU_ITEMS.ERASER]: { color: Colors.BLACK, size: 3 },
  },
  actions: {
    [ACTION_MENU_ITEMS.UNDO]: {},
    [ACTION_MENU_ITEMS.REDO]: {},
    [ACTION_MENU_ITEMS.DOWNLOAD]: {},
  },
};

export const useToolbarStore = create<IToolbarStore>()(
  devtools((set) => ({
    ...initialToolbarState,
    changeColor: (menuItem, color) =>
      set((state) => ({
        ...state,
        tools: {
          ...state.tools,
          [menuItem]: { ...state.tools[menuItem], color },
        },
      })),
    changeWidth: (menuItem, width) =>
      set((state) => ({
        ...state,
        tools: {
          ...state.tools,
          [menuItem]: { ...state.tools[menuItem], size: width },
        },
      })),
  }))
);
