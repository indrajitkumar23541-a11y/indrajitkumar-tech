"use client";

import React from "react";
import { FlaskConical } from "lucide-react";

export function LabSection() {
  const labExperiments = [
    {
      id: "exp-01",
      title: "Velocity X — 3D Rigid Body Sandbox",
      category: "3D & Physics",
      status: "R&D Prototype",
      tech: ["Three.js", "React Three Fiber", "Cannon-es"],
      objective:
        "Real-time browser vehicle suspension physics, friction raycasting, and hardware-accelerated shaders targeting stable 60 FPS.",
      indicator: "#F7B955",
    },
    {
      id: "exp-02",
      title: "Astraview — Orbital Ephemeris HUD",
      category: "Spatial Telemetry",
      status: "Experimental",
      tech: ["WebGL", "NASA API", "Logarithmic Buffering"],
      objective:
        "Keplerian orbit spline calculations and planetary visual HUD projections handling massive astronomical distance ratios.",
      indicator: "#9E77ED",
    },
    {
      id: "exp-03",
      title: "Neural Reticle — Visual State Feedback",
      category: "AI & Interfaces",
      status: "Integrated in OS",
      tech: ["Canvas API", "CSS Shaders", "Web Audio API"],
      objective:
        "Dynamic procedural orb pulsation representing speech synthesis and active AI reasoning states.",
      indicator: "#00E5FF",
    },
  ];

  return (
    <section id="lab" aria-label="INDRA Lab" className="py-20 border-t border-[#24303A]">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] tracking-widest uppercase mb-1">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>04 // EXPERIMENTAL RESEARCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
          INDRA LAB
        </h2>
        <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
          Exploratory research sandbox focusing on 3D computer graphics, physics simulation,
          and futuristic UI experimentation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {labExperiments.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#41515F] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#24303A] mb-3">
                <span className="text-[10px] font-mono text-[#66717D]">
                  LAB_EXP // {exp.id.toUpperCase()}
                </span>
                <span
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#111820] border border-[#24303A]"
                  style={{ color: exp.indicator }}
                >
                  {exp.status}
                </span>
              </div>

              <h3 className="text-lg font-bold font-mono text-[#F5F7FA] group-hover:text-[#FFB000] transition-colors">
                {exp.title}
              </h3>
              <p className="text-xs text-[#A6B0BC] mt-3 leading-relaxed">
                {exp.objective}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#24303A] flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111820] text-[#A6B0BC] border border-[#24303A]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
