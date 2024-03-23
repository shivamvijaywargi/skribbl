"use client";

import React, { useState } from "react";
import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";

import { useMenuStore } from "@/store";
import { ACTION_MENU_ITEMS, ACTIVE_MENU_ITEMS } from "@/constants";

import IconButton from "./icon-button";

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
    id: ACTION_MENU_ITEMS.DOWNLOAD,
    title: "Download",
    Icon: Download,
    size: 20,
  },
];

const Menu = () => {
  const { setActiveMenu } = useMenuStore();

  const [isActive, setIsActive] = useState(activeItems[0].title);

  const handleActiveMenuClick = (itemName: ACTIVE_MENU_ITEMS) => {
    setActiveMenu(itemName);
    setIsActive(itemName);
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
          <IconButton title={title} isActive={isActive}>
            <Icon size={size} />
          </IconButton>
        </span>
      ))}

      {actionItems.map(({ Icon, title, size }) => (
        <span key={title}>
          <IconButton title={title}>
            <Icon size={size} />
          </IconButton>
        </span>
      ))}
    </div>
  );
};

export default Menu;
