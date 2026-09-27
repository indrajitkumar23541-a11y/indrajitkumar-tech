"use client";

import React, { useState, useEffect } from "react";
import { projectsData } from "@/data";
import { Project } from "@/types";
import { sound } from "@/lib/sound";
import { BookOpen } from "lucide-react";

interface ProjectUniverseProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectUniverse({ onSelectProject }: ProjectUniverseProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define orbital radii and layout positions
  const centerProject = projectsData.find((p) => p.id === "indra-os") || projectsData[0];
  const orbitingProjects = projectsData.filter((p) => p.id !== centerProject.id);

  const nodePositions = [
    { project: orbitingProjects[0], r: 110, angle: 35 },
    { project: orbitingProjects[1], r: 110, angle: 215 },
    { project: orbitingProjects[2], r: 185, angle: 105 },
    { project: orbitingProjects[3], r: 185, angle: 285 },
    { project: orbitingProjects[4], r: 255, angle: 165 },
    { project: orbitingProjects[5], r: 255, angle: 345 },
  ];

  return (
    <div className="relative w-full rounded-2xl bg-[#0D1218] border border-[#24303A] p-4 sm:p-8 flex flex-col items-center overflow-hidden">
      {/* HUD Telemetry Overlay on Top */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-[#24303A] font-mono text-xs">
        <div className="flex items-center gap-2 text-[#FFB000]">
          <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" />
          <span className="font-bold">CONSTELLATION RADAR ACTIVE</span>
        </div>
        <div className="text-[#66717D] text-[11px] hidden sm:block">
          HOVER NODE TO SCAN // CLICK TO INSPECT CASE STUDY
        </div>
      </div>

      {/* Orbit Visualization Canvas Container */}
      <div className="relative w-[340px] h-[340px] sm:w-[580px] sm:h-[580px] flex items-center justify-center my-6">
        {/* Concentric Orbital Rings */}
        <div className="absolute w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-[#24303A] animate-spin [animation-duration:90s] pointer-events-none" />
        <div className="absolute w-[300px] h-[300px] sm:w-[520px] sm:h-[520px] rounded-full border border-[#24303A] opacity-60 pointer-events-none" />
        <div className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] rounded-full border border-[#24303A] opacity-40 pointer-events-none" />

        {/* Central Hub Node (INDRA OS) */}
        <button
          onClick={() => {
            sound.playChime();
            onSelectProject(centerProject);
          }}
          onMouseEnter={() => {
            sound.playClick();
            setHoveredProject(centerProject);
          }}
          className="relative z-20 group focus:outline-none"
          aria-label={`Inspect ${centerProject.name}`}
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#050608] border-2 border-[#FFB000] shadow-[0_0_30px_rgba(255,176,0,0.35)] flex flex-col items-center justify-center p-2 group-hover:scale-105 transition-transform">
            <span className="text-[10px] font-mono text-[#FFB000] font-bold">SYSTEM CORE</span>
            <span className="text-xs sm:text-sm font-mono font-bold text-[#F5F7FA] text-center">
              {centerProject.name}
            </span>
            <span className="text-[9px] font-mono text-[#32D583]">ONLINE</span>
          </div>
        </button>

        {/* Orbiting Satellite Project Nodes */}
        {nodePositions.map(({ project, r, angle }) => {
          if (!project) return null;
          const responsiveR = isMobile ? r * 0.6 : r;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * responsiveR;
          const y = Math.sin(rad) * responsiveR;

          const isHovered = hoveredProject?.id === project.id;

          return (
            <button
              key={project.id}
              onClick={() => {
                sound.playChime();
                onSelectProject(project);
              }}
              onMouseEnter={() => {
                sound.playClick();
                setHoveredProject(project);
              }}
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
              className="absolute z-20 focus:outline-none transition-all duration-300"
              aria-label={`Inspect ${project.name}`}
            >
              {/* Node Beacon */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#050608] border flex flex-col items-center justify-center p-1 transition-all ${
                  isHovered
                    ? "border-[#FFB000] scale-125 shadow-[0_0_20px_rgba(255,176,0,0.5)] z-30"
                    : "border-[#41515F] hover:border-[#00E5FF] shadow-[0_0_12px_rgba(0,0,0,0.6)]"
                }`}
              >
                <div
                  className="w-2 h-2 rounded-full mb-1"
                  style={{
                    backgroundColor: project.universeCoordinates?.color || "#00E5FF",
                  }}
                />
                <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#F5F7FA] truncate max-w-[42px] sm:max-w-[55px]">
                  {project.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Target Inspection Telemetry Card */}
      <div className="w-full max-w-xl p-4 rounded-xl bg-[#111820] border border-[#24303A] font-mono min-h-[90px] flex items-center justify-between gap-4">
        {hoveredProject ? (
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#FFB000]">TARGET: {hoveredProject.name}</span>
              <span className="text-[10px] text-[#00E5FF]">[{hoveredProject.category}]</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#050608] text-[#32D583]">
                {hoveredProject.status}
              </span>
            </div>
            <p className="text-xs text-[#A6B0BC] line-clamp-2">
              {hoveredProject.description}
            </p>
          </div>
        ) : (
          <div className="text-xs text-[#66717D]">
            HOVER OVER ANY ORBITAL NODE TO LOCK TARGET TELEMETRY.
          </div>
        )}

        {hoveredProject && (
          <button
            onClick={() => {
              sound.playClick();
              onSelectProject(hoveredProject);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#FFB000] text-[#050608] font-bold text-xs flex items-center gap-1.5 shrink-0 hover:bg-[#E09B00] transition-colors"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>CASE STUDY</span>
          </button>
        )}
      </div>
    </div>
  );
}
