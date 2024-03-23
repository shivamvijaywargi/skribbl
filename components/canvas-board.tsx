"use client";

import React, { useEffect, useRef } from "react";

import { useMenuStore, useToolbarStore } from "@/store";

const CanvasBoard = () => {
  const { activeMenuItem } = useMenuStore();
  const { tools } = useToolbarStore();

  const { color, size } = tools[activeMenuItem];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef(false);

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
