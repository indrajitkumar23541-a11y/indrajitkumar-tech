"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { sound } from "@/lib/sound";
import { Play, Activity, ExternalLink } from "lucide-react";

type LabDemoMode = "VELOCITY_X" | "ASTRAVIEW" | "NEURAL_RETICLE";

export function LabSandbox() {
  const [activeDemo, setActiveDemo] = useState<LabDemoMode>("VELOCITY_X");
  const [fps, setFps] = useState(60);
  const [isRunning, setIsRunning] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Mouse interaction state
  const mouseRef = useRef<{ x: number; y: number; isDown: boolean }>({
    x: 0,
    y: 0,
    isDown: false,
  });

  // Track FPS and render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frameCount = 0;
    let lastFpsUpdate = performance.now();

    // Simulation Data Structures
    // 1. Velocity X: Physics particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 500 + 50,
      y: Math.random() * 260 + 40,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      radius: Math.random() * 3.5 + 2,
      color: Math.random() > 0.5 ? "#FFB000" : "#00E5FF",
    }));

    // 2. Astraview: Orbital bodies
    const planets = [
      { r: 40, speed: 0.03, angle: 0, color: "#F7B955", size: 3.5, name: "ALPHA" },
      { r: 75, speed: 0.018, angle: 1.2, color: "#00E5FF", size: 5, name: "TERRA" },
      { r: 115, speed: 0.01, angle: 3.4, color: "#9E77ED", size: 6.5, name: "JOVE" },
      { r: 155, speed: 0.006, angle: 5.1, color: "#32D583", size: 4, name: "KRONOS" },
    ];

    // 3. Neural Reticle: Wave parameters
    let wavePhase = 0;

    const render = (time: number) => {
      // Calculate FPS
      frameCount++;
      if (time - lastFpsUpdate >= 500) {
        setFps(Math.round((frameCount * 1000) / (time - lastFpsUpdate)));
        frameCount = 0;
        lastFpsUpdate = time;
      }

      // Match canvas internal resolution to display size
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }

      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Dark futuristic background clear with subtle trail fade
      ctx.fillStyle = "rgba(5, 6, 8, 0.28)";
      ctx.fillRect(0, 0, w, h);

      if (activeDemo === "VELOCITY_X") {
        // --- 1. VELOCITY X PHYSICS SIMULATION ---
        const mouse = mouseRef.current;

        // Draw HUD grid lines
        ctx.strokeStyle = "rgba(36, 48, 58, 0.35)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let x = 0; x < w; x += 40) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
        }
        for (let y = 0; y < h; y += 40) {
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
        }
        ctx.stroke();

        // Mouse gravity beacon
        if (mouse.x > 0 && mouse.y > 0) {
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, mouse.isDown ? 35 : 20, 0, Math.PI * 2);
          ctx.strokeStyle = mouse.isDown ? "#FF5C5C" : "#00E5FF";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          if (isRunning) {
            // Apply mouse gravity/repulsion
            if (mouse.x > 0 && mouse.y > 0) {
              const dx = mouse.x - p.x;
              const dy = mouse.y - p.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist > 5 && dist < 180) {
                const force = (mouse.isDown ? -120 : 60) / (dist * dist);
                p.vx += (dx / dist) * force * speedMultiplier;
                p.vy += (dy / dist) * force * speedMultiplier;
              }
            }

            p.x += p.vx * speedMultiplier;
            p.y += p.vy * speedMultiplier;

            // Restitution bounce against canvas walls
            if (p.x < p.radius) {
              p.x = p.radius;
              p.vx *= -0.85;
            } else if (p.x > w - p.radius) {
              p.x = w - p.radius;
              p.vx *= -0.85;
            }
            if (p.y < p.radius) {
              p.y = p.radius;
              p.vy *= -0.85;
            } else if (p.y > h - p.radius) {
              p.y = h - p.radius;
              p.vy *= -0.85;
            }

            // Air drag friction
            p.vx *= 0.99;
            p.vy *= 0.99;
          }

          // Draw spring connector lines between nearby particles
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 75) {
              ctx.strokeStyle = `rgba(0, 229, 255, ${0.35 * (1 - dist / 75)})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }

          // Draw particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      } else if (activeDemo === "ASTRAVIEW") {
        // --- 2. ASTRAVIEW ORBITAL HUD ---
        // Sun center
        ctx.beginPath();
        ctx.arc(cx, cy, 14, 0, Math.PI * 2);
        ctx.fillStyle = "#FFB000";
        ctx.shadowColor = "#FFB000";
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw planetary orbits and bodies
        planets.forEach((p) => {
          if (isRunning) {
            p.angle += p.speed * speedMultiplier;
          }

          // Orbit guide ring
          ctx.beginPath();
          ctx.arc(cx, cy, p.r, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(36, 48, 58, 0.7)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Planet coordinates
          const px = cx + Math.cos(p.angle) * p.r;
          const py = cy + Math.sin(p.angle) * p.r;

          // Velocity vector vector line
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(px - Math.sin(p.angle) * 12, py + Math.cos(p.angle) * 12);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Planet sphere
          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Planetary tag
          ctx.fillStyle = "#A6B0BC";
          ctx.font = "9px monospace";
          ctx.fillText(p.name, px + 8, py - 4);
        });

        // Circular reticle overlay
        ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, 175, 0, Math.PI * 2);
        ctx.stroke();
      } else if (activeDemo === "NEURAL_RETICLE") {
        // --- 3. NEURAL RETICLE WAVE SHADER SIMULATION ---
        if (isRunning) {
          wavePhase += 0.04 * speedMultiplier;
        }

        // Draw multiple harmonic frequency rings
        for (let ring = 1; ring <= 4; ring++) {
          const ringRadius = 45 * ring;
          ctx.beginPath();

          const segments = 90;
          for (let s = 0; s <= segments; s++) {
            const theta = (s / segments) * Math.PI * 2;
            const wave =
              Math.sin(theta * (ring + 2) + wavePhase * ring) * (6 + ring * 2.5) +
              Math.cos(theta * 3 - wavePhase) * 4;
            const r = ringRadius + wave;

            const rx = cx + Math.cos(theta) * r;
            const ry = cy + Math.sin(theta) * r;

            if (s === 0) {
              ctx.moveTo(rx, ry);
            } else {
              ctx.lineTo(rx, ry);
            }
          }

          ctx.closePath();
          ctx.strokeStyle = ring % 2 === 0 ? "#FFB000" : "#00E5FF";
          ctx.globalAlpha = 0.85 - ring * 0.15;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Central reasoning core
        ctx.beginPath();
        ctx.arc(cx, cy, 10 + Math.sin(wavePhase * 3) * 3, 0, Math.PI * 2);
        ctx.fillStyle = "#00E5FF";
        ctx.shadowColor = "#00E5FF";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [activeDemo, isRunning, speedMultiplier]);

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleCanvasMouseDown = () => {
    mouseRef.current.isDown = true;
    sound.playClick();
  };

  const handleCanvasMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  const handleCanvasMouseLeave = () => {
    mouseRef.current.x = -100;
    mouseRef.current.y = -100;
    mouseRef.current.isDown = false;
  };

  const demoMetadata = {
    VELOCITY_X: {
      name: "Velocity X Physics Sandbox",
      type: "Rigid-Body & Spring Dynamics",
      instructions: "Move mouse to exert gravity pull. Click & hold to trigger repulsive explosion force.",
      slug: "velocity-x",
    },
    ASTRAVIEW: {
      name: "Astraview Orbital Telemetry",
      type: "Keplerian Ephemeris Engine",
      instructions: "Real-time orbital tracking with velocity vectors and logarithmic depth simulation.",
      slug: "astraview",
    },
    NEURAL_RETICLE: {
      name: "Neural Reticle Procedural Wave",
      type: "Audio & Synthetic State Visualizer",
      instructions: "Procedural Fourier harmonic frequency waves representing live AI reasoning state.",
      slug: "indra-os",
    },
  };

  return (
    <div className="rounded-3xl bg-[#0D1218] border border-[#24303A] overflow-hidden">
      {/* Top Diagnostics Toolbar */}
      <div className="px-5 py-3.5 bg-[#111820] border-b border-[#24303A] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#FFB000]" />
          <span className="font-bold text-[#F5F7FA]">LAB_SIMULATION_SANDBOX</span>
          <span className="text-[#66717D] hidden sm:inline">{"// HARDWARE ACCELERATED"}</span>
        </div>

        {/* Experiment Selector Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#050608] border border-[#24303A]">
          <button
            onClick={() => {
              sound.playClick();
              setActiveDemo("VELOCITY_X");
            }}
            className={`px-3 py-1 rounded-lg text-xs transition-colors ${
              activeDemo === "VELOCITY_X"
                ? "bg-[#FFB000] text-[#050608] font-bold"
                : "text-[#A6B0BC] hover:text-[#F5F7FA]"
            }`}
          >
            VELOCITY X
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveDemo("ASTRAVIEW");
            }}
            className={`px-3 py-1 rounded-lg text-xs transition-colors ${
              activeDemo === "ASTRAVIEW"
                ? "bg-[#00E5FF] text-[#050608] font-bold"
                : "text-[#A6B0BC] hover:text-[#F5F7FA]"
            }`}
          >
            ASTRAVIEW
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setActiveDemo("NEURAL_RETICLE");
            }}
            className={`px-3 py-1 rounded-lg text-xs transition-colors ${
              activeDemo === "NEURAL_RETICLE"
                ? "bg-[#9E77ED] text-[#050608] font-bold"
                : "text-[#A6B0BC] hover:text-[#F5F7FA]"
            }`}
          >
            NEURAL RETICLE
          </button>
        </div>
      </div>

      {/* Interactive Simulation Viewport */}
      <div className="relative w-full h-[320px] sm:h-[400px] bg-[#050608] cursor-crosshair">
        <canvas
          ref={canvasRef}
          onMouseMove={handleCanvasMouseMove}
          onMouseDown={handleCanvasMouseDown}
          onMouseUp={handleCanvasMouseUp}
          onMouseLeave={handleCanvasMouseLeave}
          className="w-full h-full block"
        />

        {/* Real-time HUD Telemetry Badge Overlay */}
        <div className="absolute top-4 left-4 p-3 rounded-xl bg-[#0D1218]/85 backdrop-blur-md border border-[#24303A] font-mono text-[11px] space-y-1 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#32D583] animate-pulse" />
            <span className="text-[#32D583] font-bold">ACTIVE: {fps} FPS</span>
          </div>
          <div className="text-[#A6B0BC]">{demoMetadata[activeDemo].type}</div>
        </div>

        {/* Viewport Action Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => {
              sound.playClick();
              setIsRunning(!isRunning);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#111820]/90 backdrop-blur-md border border-[#24303A] text-[#F5F7FA] hover:border-[#FFB000] flex items-center gap-1.5 transition-colors"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isRunning ? "PAUSE" : "RESUME"}</span>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1));
            }}
            className="px-3 py-1.5 rounded-lg bg-[#111820]/90 backdrop-blur-md border border-[#24303A] text-[#00E5FF] hover:border-[#00E5FF] transition-colors"
          >
            {speedMultiplier}x SPEED
          </button>
        </div>
      </div>

      {/* Footer Info & Case Study Link */}
      <div className="p-4 sm:p-5 bg-[#0D1218] border-t border-[#24303A] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
        <div className="space-y-1">
          <div className="text-[#FFB000] font-bold">{demoMetadata[activeDemo].name}</div>
          <div className="text-[#A6B0BC] text-[11px]">{demoMetadata[activeDemo].instructions}</div>
        </div>

        <Link
          href={`/projects/${demoMetadata[activeDemo].slug}`}
          onClick={() => sound.playClick()}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#111820] text-[#00E5FF] hover:bg-[#00E5FF]/10 border border-[#24303A] hover:border-[#00E5FF]/40 transition-colors shrink-0"
        >
          <span>INSPECT EXPERIMENTAL SPEC</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
