"use client";

import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";

import IconButton from "./icon-button";
import React, { useState } from "react";

const items = [
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
  const [isActive, setIsActive] = useState("");

  return (
    <div className="absolute top-4 flex justify-center align-center gap-1 shadow-md border dark:bg-secondary px-1.5 py-1 rounded-xl">
      {items.map(({ Icon, title, size }) => (
        <span key={title} onClick={() => setIsActive(title)}>
          <IconButton title={title} isActive={isActive}>
            <Icon size={size} />
          </IconButton>
        </span>
      ))}
    </div>
  );
};

export default Menu;
