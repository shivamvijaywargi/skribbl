"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

import { useMenuStore, useToolbarStore } from "@/store";
import { ACTION_MENU_ITEMS } from "@/constants";

const CanvasBoard = () => {
  const { theme } = useTheme();

  const { activeMenuItem, actionMenuItem, setActionMenu } = useMenuStore();
  const { tools } = useToolbarStore();

  const { color, size } = tools[activeMenuItem];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    if (actionMenuItem === ACTION_MENU_ITEMS.DOWNLOAD) {
      const URL = canvas.toDataURL();

      // Set the background color of the canvas
      ctx.fillStyle = theme === "dark" ? "#09090B" : "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const link = document.createElement("a");
      link.href = URL;
      link.download = `Skribbl-${Date.now()}.jpg`;
      link.click();

      setActionMenu(null);
    }
  }, [actionMenuItem, setActionMenu, theme]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas width and height on mount
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseDown = (e: MouseEvent) => {
      shouldDraw.current = true;

      ctx?.beginPath();
      ctx?.moveTo(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!shouldDraw.current) return;

      ctx?.lineTo(e.clientX, e.clientY);
      ctx?.stroke();
    };

    const handleMouseUp = () => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const changeConfig = () => {
      if (ctx) {
        ctx.strokeStyle = color;
        ctx.lineWidth = size;
      }
    };

    changeConfig();
  }, [color, size]);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasBoard;
