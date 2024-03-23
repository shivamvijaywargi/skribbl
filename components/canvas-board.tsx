"use client";

import React, { useEffect, useRef } from "react";

import { useMenuStore, useToolbarStore } from "@/store";

const CanvasBoard = () => {
  const { activeMenuItem } = useMenuStore();
  const { tools } = useToolbarStore();

  const { color, size } = tools[activeMenuItem];

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas width and height on mount
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default CanvasBoard;
