"use client";

import React from "react";
import { missionLogData } from "@/data";
import { History } from "lucide-react";

export function TimelineSection() {
  return (
    <section id="timeline" aria-label="Mission Log" className="py-20 border-t border-[#24303A]">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] tracking-widest uppercase mb-1">
          <History className="w-3.5 h-3.5" />
          <span>03 // CHRONOLOGY & PROGRESSION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
          MISSION LOG
        </h2>
        <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
          Verified academic and technical milestones tracking computer science education,
          algorithmic training, and system deployments.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-[#24303A] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {missionLogData.map((log) => (
          <div key={log.id} className="relative group">
            {/* Timeline Marker Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#050608] flex items-center justify-center transition-colors ${
                log.status === "In Progress"
                  ? "border-[#FFB000] shadow-[0_0_12px_rgba(255,176,0,0.5)]"
                  : "border-[#32D583]"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  log.status === "In Progress" ? "bg-[#FFB000] animate-pulse" : "bg-[#32D583]"
                }`}
              />
            </div>

            {/* Content Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#41515F] transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-[#111820] text-[#FFB000] font-bold border border-[#24303A]">
                    {log.year}
                  </span>
                  <span className="text-[#66717D]">{log.period}</span>
                  {log.codename && (
                    <span className="hidden sm:inline text-[#A6B0BC]">
                      [{log.codename}]
                    </span>
                  )}
                </div>

                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    log.status === "In Progress"
                      ? "bg-[#FFB000]/15 text-[#FFB000] border-[#FFB000]/40"
                      : "bg-[#32D583]/10 text-[#32D583] border-[#32D583]/30"
                  }`}
                >
                  {log.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-mono text-[#F5F7FA]">
                {log.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A6B0BC] mt-2 leading-relaxed">
                {log.summary}
              </p>

              {/* Bullet Details */}
              <ul className="mt-3 space-y-1.5">
                {log.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#A6B0BC]">
                    <span className="text-[#00E5FF] font-mono font-bold mt-0.5">›</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#24303A]">
                {log.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#111820] text-[#66717D]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
