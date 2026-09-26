"use client";

import React from "react";
import { skillsData, dsaProfile } from "@/data";
import { Cpu, Award } from "lucide-react";

export function SkillsSection() {
  return (
    <section id="skills" aria-label="Engineering DNA" className="py-20 border-t border-[#24303A]">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] tracking-widest uppercase mb-1">
          <Cpu className="w-3.5 h-3.5" />
          <span>02 // ARCHITECTURE & CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
          ENGINEERING DNA
        </h2>
        <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
          Core technical competencies grounded in algorithmic problem-solving, modern distributed
          web backends, and full-stack software development.
        </p>
      </div>

      {/* DSA Rigor Spotlight Banner */}
      <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0D1218] border border-[#FFB000]/40 shadow-[0_0_25px_rgba(255,176,0,0.1)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB000]/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#FFB000]/15 text-[#FFB000] border border-[#FFB000]/40 text-xs font-mono font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>COMPETITIVE PROBLEM SOLVING</span>
            </div>
            <div className="text-4xl sm:text-5xl font-mono font-bold text-[#F5F7FA]">
              {dsaProfile.totalSolved}+
              <span className="text-lg font-normal text-[#FFB000] ml-2">PROBLEMS SOLVED</span>
            </div>
            <p className="text-xs text-[#A6B0BC] font-mono">
              Primary language: <span className="text-[#F5F7FA] font-bold">{dsaProfile.primaryLanguage}</span> across LeetCode & competitive evaluation matrices.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {dsaProfile.topics.map((topic) => (
              <div
                key={topic.name}
                className="p-3.5 rounded-xl bg-[#111820] border border-[#24303A] flex flex-col justify-between"
              >
                <div className="text-xs font-mono font-bold text-[#F5F7FA] flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000]" />
                  <span>{topic.name}</span>
                </div>
                <p className="text-[11px] text-[#A6B0BC] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Matrix Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((group) => (
          <div
            key={group.category}
            className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#41515F] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#24303A] mb-4">
                <h3 className="text-sm font-mono font-bold text-[#FFB000] uppercase tracking-wider">
                  {group.category}
                </h3>
                <span className="text-[11px] font-mono text-[#66717D]">
                  {group.skills.length} MODULES
                </span>
              </div>
              <p className="text-xs text-[#A6B0BC] mb-4">{group.description}</p>

              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#111820] border border-[#24303A] hover:border-[#41515F] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#F5F7FA]">
                        {skill.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          skill.level === "Advanced"
                            ? "bg-[#FFB000]/15 text-[#FFB000] border-[#FFB000]/40"
                            : "bg-[#24303A] text-[#A6B0BC] border-[#41515F]"
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                    {skill.description && (
                      <p className="text-[11px] text-[#A6B0BC] mt-1.5 leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                    {skill.projects.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {skill.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#050608] text-[#66717D]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
