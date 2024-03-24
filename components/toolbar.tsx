"use client";

import { ChangeEvent, useState } from "react";

import { cn } from "@/lib/utils";
import { useMenuStore, useToolbarStore } from "@/store";

import { Input } from "./ui/input";
import { Colors } from "../constants";

const Toolbar = () => {
  const { activeMenuItem } = useMenuStore();
  const { changeWidth, changeColor, tools } = useToolbarStore();

  const { size } = tools[activeMenuItem];

  const [isActive, setIsActive] = useState("");

  const updateStrokeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    changeWidth(activeMenuItem, parseInt(e.target.value, 10));
  };

  const handleChangeColor = (color: Colors) => {
    setIsActive(color);
    changeColor(activeMenuItem, color);
  };

  return (
    <div className="max-sm:top-24 dark:bg-secondary p-3 ml-4 mt-8 rounded-xl space-y-4 border shadow max-w-48 absolute top-12">
      <div>
        <h3 className="text-sm mb-1">Stroke Color</h3>
        <div className="flex flex-wrap gap-2">
          {Object.values(Colors).map((color) => (
            <div
              className={cn(
                isActive === color ? "ring" : "",
                "h-4 w-4 cursor-pointer hover:ring rounded"
              )}
              style={{ backgroundColor: color }}
              key={color}
              title={color}
              onClick={() => handleChangeColor(color)}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm">Stroke Width</h3>
        <Input
          type="range"
          min={1}
          max={10}
          step={1}
          defaultValue={size}
          onChange={updateStrokeWidth}
          className="p-0"
        />
      </div>
    </div>
  );
};

export default Toolbar;
