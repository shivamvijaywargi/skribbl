"use client";

import {
  Circle,
  Diamond,
  Download,
  Eraser,
  Minus,
  MoveRight,
  PencilLine,
  Presentation,
  RedoDot,
  Square,
  UndoDot,
} from "lucide-react";

import { useMenuStore } from "@/store";
import { ACTION_MENU_ITEMS, ACTIVE_MENU_ITEMS } from "@/constants";

import IconButton from "./icon-button";
import { Separator } from "./ui/separator";

const activeItems = [
  {
    id: ACTIVE_MENU_ITEMS.PENCIL,
    title: "Pencil",
    Icon: PencilLine,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.ERASER,
    title: "Eraser",
    Icon: Eraser,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.RECTANGLE,
    title: "Rectangle",
    Icon: Square,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.DIAMOND,
    title: "Diamond",
    Icon: Diamond,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.ELLIPSE,
    title: "Ellipse",
    Icon: Circle,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.ARROW,
    title: "Arrow",
    Icon: MoveRight,
    size: 20,
  },
  {
    id: ACTIVE_MENU_ITEMS.LINE,
    title: "Line",
    Icon: Minus,
    size: 20,
  },
];

const actionItems = [
  {
    id: ACTION_MENU_ITEMS.UNDO,
    title: "Undo",
    Icon: UndoDot,
    size: 20,
  },
  {
    id: ACTION_MENU_ITEMS.REDO,
    title: "Redo",
    Icon: RedoDot,
    size: 20,
  },
  {
    id: ACTION_MENU_ITEMS.CLEAR,
    title: "Clear",
    Icon: Presentation,
    size: 20,
  },
  {
    id: ACTION_MENU_ITEMS.DOWNLOAD,
    title: "Download",
    Icon: Download,
    size: 20,
  },
];

const Menu = () => {
  const { setActiveMenu, activeMenuItem, setActionMenu } = useMenuStore();

  const handleActiveMenuClick = (itemName: ACTIVE_MENU_ITEMS) => {
    setActiveMenu(itemName);
  };

  const handleActionMenuClick = (itemName: ACTION_MENU_ITEMS) => {
    setActionMenu(itemName);
  };

  return (
    <div className="absolute top-4 flex justify-center align-center gap-1 shadow-md border dark:bg-secondary px-1.5 py-1 rounded-xl">
      {activeItems.map(({ Icon, title, size, id }) => (
        <span
          key={title}
          onClick={() => {
            handleActiveMenuClick(id);
          }}
        >
          <IconButton title={title} isActive={activeMenuItem}>
            <Icon size={size} />
          </IconButton>
        </span>
      ))}

      <Separator
        orientation="vertical"
        className="bg-gray-200 dark:bg-gray-700 h-[35px]"
      />

      {actionItems.map(({ Icon, title, size, id }) => (
        <span
          key={title}
          onClick={() => {
            handleActionMenuClick(id);
          }}
        >
          <IconButton title={title}>
            <Icon size={size} />
          </IconButton>
        </span>
      ))}
    </div>
  );
};

export default Menu;
