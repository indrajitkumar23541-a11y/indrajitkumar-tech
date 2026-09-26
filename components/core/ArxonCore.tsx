"use client";

import React, { useEffect, useRef } from "react";
import { ArxonState } from "@/types";

interface ArxonCoreProps {
  state: ArxonState;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function ArxonCore({ state, size = "md", onClick }: ArxonCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Dynamic particle/wave animation loop on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const baseRadius = canvas.width * 0.32;

      // Draw subtle energy rings
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = state === "ERROR" ? "#FF5C5C" : state === "THINKING" ? "#FFB000" : "#00E5FF";
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = state === "THINKING" ? 0.8 : 0.4;
      ctx.stroke();

      // Rotating dashed reticle
      ctx.beginPath();
      ctx.setLineDash([4, 6]);
      ctx.arc(cx, cy, baseRadius + 10, angle, angle + Math.PI * 2);
      ctx.strokeStyle = state === "THINKING" ? "#FFB000" : "#00E5FF";
      ctx.globalAlpha = 0.5;
      ctx.stroke();
      ctx.restore();

      // Draw pulsing center nodes
      const pulseMultiplier = state === "THINKING" ? 4 : state === "RESPONDING" ? 2 : 1;
      angle += 0.02 * pulseMultiplier;

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [state]);

  const sizeClasses = {
    sm: "w-20 h-20",
    md: "w-32 h-32",
    lg: "w-44 h-44",
  };

  const ringSpeed =
    state === "THINKING"
      ? "animate-spin [animation-duration:3s]"
      : state === "RESPONDING"
      ? "animate-spin [animation-duration:6s]"
      : "animate-spin [animation-duration:16s]";

  return (
    <div
      onClick={onClick}
      className={`relative ${sizeClasses[size]} flex items-center justify-center cursor-pointer select-none group`}
      title={`ARXON Core State: ${state}`}
    >
      {/* Background glow halo */}
      <div
        className={`absolute inset-0 rounded-full blur-xl transition-all duration-500 pointer-events-none ${
          state === "ERROR"
            ? "bg-[#FF5C5C]/25"
            : state === "THINKING"
            ? "bg-[#FFB000]/30 scale-110"
            : state === "RESPONDING"
            ? "bg-[#00E5FF]/35 scale-105"
            : "bg-[#00E5FF]/20"
        }`}
      />

      {/* Rotating outer orbital ring */}
      <div
        className={`absolute inset-0 rounded-full border border-dashed border-[#00E5FF]/40 ${ringSpeed} pointer-events-none`}
      />

      {/* Internal Canvas Ring */}
      <canvas
        ref={canvasRef}
        width={160}
        height={160}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Central Identity Capsule */}
      <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050608] border border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.4)] flex flex-col items-center justify-center p-1 group-hover:scale-105 transition-transform">
        <span className="text-[10px] font-mono font-bold text-[#00E5FF] tracking-wider">
          ARXON
        </span>
        <span
          className={`text-[8px] font-mono font-bold ${
            state === "THINKING"
              ? "text-[#FFB000]"
              : state === "RESPONDING"
              ? "text-[#32D583]"
              : "text-[#A6B0BC]"
          }`}
        >
          {state}
        </span>
      </div>
    </div>
  );
}
