"use client";

import { ChangeEvent } from "react";

import { Input } from "./ui/input";
import { Colors } from "../constants";

const Toolbar = () => {
  const updateStrokeWidth = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className="dark:bg-secondary p-3 ml-4 mt-8 rounded-xl space-y-4 border shadow max-w-48">
      <div>
        <h3 className="text-sm mb-1">Stroke Color</h3>
        <div className="flex flex-wrap gap-2">
          {Object.values(Colors).map((color) => (
            <div
              className="h-4 w-4 cursor-pointer hover:ring rounded"
              style={{ backgroundColor: color }}
              key={color}
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
          onChange={updateStrokeWidth}
        />
      </div>
    </div>
  );
};

export default Toolbar;
