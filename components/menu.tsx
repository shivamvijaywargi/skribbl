"use client";

import React, { useState } from "react";
import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";

import { useMenuStore } from "@/store";
import { ACTIVE_MENU_ITEMS } from "@/constants";

import IconButton from "./icon-button";

const activeItems = [
  {
    title: "Draw",
    Icon: PencilLine,
    size: 20,
  },
  {
    title: "Eraser",
    Icon: Eraser,
    size: 20,
  },
];

const actionItems = [
  {
    title: "Undo",
    Icon: UndoDot,
    size: 20,
  },
  {
    title: "Redo",
    Icon: RedoDot,
    size: 20,
  },
  {
    title: "Download",
    Icon: Download,
    size: 20,
  },
];

const Menu = () => {
  const { setActiveMenu } = useMenuStore();

  const [isActive, setIsActive] = useState("");

  const handleMenuClick = (itemName: ACTIVE_MENU_ITEMS) => {
    setActiveMenu(itemName);
  };

  return (
    <div className="absolute top-4 flex justify-center align-center gap-1 shadow-md border dark:bg-secondary px-1.5 py-1 rounded-xl">
      {activeItems.map(({ Icon, title, size }) => (
        <span key={title} onClick={() => setIsActive(title)}>
          <IconButton
            title={title}
            isActive={isActive}
            onClick={() => handleMenuClick(title as ACTIVE_MENU_ITEMS)}
          >
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
