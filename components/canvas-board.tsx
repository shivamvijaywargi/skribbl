"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

import { useMenuStore, useToolbarStore } from "@/store";
import { ACTION_MENU_ITEMS, ACTIVE_MENU_ITEMS } from "@/constants";

const CanvasBoard = () => {
  const { theme } = useTheme();

  const { activeMenuItem, actionMenuItem, setActionMenu } = useMenuStore();
  const { tools } = useToolbarStore();

  const { color, size } = tools[activeMenuItem];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const canvasHistory = useRef<ImageData[]>([]);
  const historyPosition = useRef(0);

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
    } else if (
      actionMenuItem === ACTION_MENU_ITEMS.UNDO ||
      actionMenuItem === ACTION_MENU_ITEMS.REDO
    ) {
      if (
        historyPosition.current > 0 &&
        actionMenuItem === ACTION_MENU_ITEMS.UNDO
      ) {
        historyPosition.current--;
        ctx.putImageData(canvasHistory.current[historyPosition.current], 0, 0);
      }

      if (
        historyPosition.current < canvasHistory.current.length - 1 &&
        actionMenuItem === ACTION_MENU_ITEMS.REDO
      ) {
        historyPosition.current++;
        ctx.putImageData(canvasHistory.current[historyPosition.current], 0, 0);
      }
    } else if (actionMenuItem === ACTION_MENU_ITEMS.CLEAR) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      canvasHistory.current.push(imageData);
      historyPosition.current = canvasHistory.current.length - 1;
      ctx.putImageData(canvasHistory.current[historyPosition.current], 0, 0);

      setActionMenu(null);
    }

    setActionMenu(null);
  }, [actionMenuItem, setActionMenu, theme]);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // Set canvas width and height on mount
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleStartDrawing = (x: number, y: number) => {
      shouldDraw.current = true;

      ctx.beginPath();
      ctx.moveTo(x, y);

      if (
        activeMenuItem === ACTIVE_MENU_ITEMS.LINE ||
        activeMenuItem === ACTIVE_MENU_ITEMS.RECTANGLE
      ) {
        startX.current = x;
        startY.current = y;
      }
    };

    const handleDrawing = (x: number, y: number) => {
      if (!shouldDraw.current) return;

      ctx.strokeStyle = color;
      ctx.lineWidth = size;

      if (canvasHistory.current.length > 0) {
        ctx.putImageData(canvasHistory.current[historyPosition.current], 0, 0);
      }

      if (activeMenuItem === ACTIVE_MENU_ITEMS.LINE) {
        ctx.beginPath();
        ctx.moveTo(startX.current, startY.current);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else if (activeMenuItem === ACTIVE_MENU_ITEMS.RECTANGLE) {
        const width = x - startX.current;
        const height = y - startY.current;
        ctx.strokeRect(startX.current, startY.current, width, height);
      } else {
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    };

    const handleStopDrawing = () => {
      shouldDraw.current = false;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      canvasHistory.current.push(imageData);
      historyPosition.current = canvasHistory.current.length - 1;
    };

    const handleMouseDown = (e: MouseEvent) => {
      handleStartDrawing(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleDrawing(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      handleStopDrawing();
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleStartDrawing(touch.clientX, touch.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      handleDrawing(touch.clientX, touch.clientY);
    };

    const handleTouchEnd = () => {
      handleStopDrawing();
    };

    // Desktop events
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    // Mobile events
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Clean up Desktop event listeners
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);

      // Clean up Mobile event listeners
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeMenuItem, color, size]);

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
