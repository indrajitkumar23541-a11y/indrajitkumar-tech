"use client";

import React, { useState } from "react";
import { profileData } from "@/data";
import { sound } from "@/lib/sound";
import { ArxonCore } from "@/components/core/ArxonCore";
import { Sparkles, FolderGit2, FileDown } from "lucide-react";
import { ArxonState } from "@/types";

export function HeroSection() {
  const [coreState, setCoreState] = useState<ArxonState>("IDLE");

  const handleCorePulse = () => {
    sound.playPulse();
    setCoreState("THINKING");
    setTimeout(() => {
      setCoreState("IDLE");
    }, 1200);
  };

  return (
    <section
      id="hero"
      aria-label="Terminal Hero"
      className="min-h-[85vh] flex flex-col justify-center py-12 md:py-16 relative"
    >
      {/* Decorative Top Reticle */}
      <div className="flex items-center justify-between pb-6 border-b border-[#24303A] text-xs font-mono text-[#66717D]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-ping" />
          <span className="text-[#F5F7FA]">NODE: 01 // INDRA OS KERNEL</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[#A6B0BC]">
          <span>SECTOR: ASIA-SOUTH</span>
          <span>LATENCY: 12ms</span>
          <span className="text-[#32D583]">STABLE</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Primary Developer Identity */}
        <div className="lg:col-span-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111820] border border-[#FFB000]/40 text-[#FFB000] font-mono text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide">AI-POWERED DEVELOPER OPERATING SYSTEM</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-mono text-[#F5F7FA]">
              {profileData.name.toUpperCase()}
            </h1>
            <p className="text-lg sm:text-2xl font-mono text-[#FFB000] tracking-wide">
              {profileData.title}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#A6B0BC] max-w-2xl leading-relaxed">
            {profileData.summary}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              onClick={() => sound.playClick()}
              className="px-5 py-3 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-mono font-bold text-sm tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,176,0,0.25)] hover:shadow-[0_0_30px_rgba(255,176,0,0.4)]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>EXPLORE PROJECTS</span>
            </a>

            <a
              href="#arxon"
              onClick={() => sound.playPulse()}
              className="px-5 py-3 rounded-xl bg-[#0D1218] text-[#00E5FF] hover:bg-[#111820] border border-[#00E5FF]/40 hover:border-[#00E5FF] font-mono font-semibold text-sm tracking-wide flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(0,229,255,0.15)]"
            >
              <Sparkles className="w-4 h-4 text-[#00E5FF]" />
              <span>CONSULT ARXON</span>
            </a>

            <a
              href="/resume.pdf"
              onClick={() => sound.playClick()}
              className="px-5 py-3 rounded-xl bg-[#0D1218] text-[#F5F7FA] hover:text-[#FFB000] border border-[#24303A] hover:border-[#41515F] font-mono text-sm flex items-center gap-2 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>RESUME</span>
            </a>
          </div>
        </div>

        {/* Right Column: ARXON Core & Diagnostic HUD Frame */}
        <div className="lg:col-span-4">
          <div className="p-5 rounded-2xl bg-[#0D1218] border border-[#24303A] shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative overflow-hidden group hover:border-[#41515F] transition-all">
            {/* Corner Decorative HUD Brackets */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#FFB000]/70 pointer-events-none" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#FFB000]/70 pointer-events-none" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#FFB000]/70 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#FFB000]/70 pointer-events-none" />

            <div className="flex items-center justify-between pb-3 border-b border-[#24303A] text-xs font-mono">
              <span className="text-[#A6B0BC] font-semibold">ARXON CORE ENGINE</span>
              <span className="text-[#00E5FF] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                ONLINE
              </span>
            </div>

            {/* Glowing Core Visualizer */}
            <div className="my-6 py-4 flex flex-col items-center justify-center relative">
              <ArxonCore state={coreState} size="md" onClick={handleCorePulse} />
              <span className="mt-3 text-[11px] font-mono text-[#66717D] tracking-wider">
                PERSONAL INTELLIGENCE CORE
              </span>
            </div>

            {/* Live Telemetry Lines */}
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2 rounded bg-[#050608] border border-[#24303A] flex justify-between">
                <span className="text-[#66717D]">DSA CHALLENGES:</span>
                <span className="text-[#FFB000] font-bold">380+ VERIFIED</span>
              </div>
              <div className="p-2 rounded bg-[#050608] border border-[#24303A] flex justify-between">
                <span className="text-[#66717D]">EDUCATION:</span>
                <span className="text-[#F5F7FA]">B.TECH CSE (2023–27)</span>
              </div>
              <div className="p-2 rounded bg-[#050608] border border-[#24303A] flex justify-between">
                <span className="text-[#66717D]">INTELLIGENCE:</span>
                <span className="text-[#00E5FF]">ZERO HALLUCINATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="mt-12 pt-6 border-t border-[#24303A] grid grid-cols-2 md:grid-cols-4 gap-4">
        {profileData.stats.map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl bg-[#0D1218]/60 border border-[#24303A] flex flex-col justify-between"
          >
            <span className="text-xs font-mono text-[#66717D] uppercase tracking-wider">
              {stat.label}
            </span>
            <div className="mt-2 text-2xl font-bold font-mono text-[#F5F7FA]">
              {stat.value}
            </div>
            <span className="text-[11px] font-mono text-[#A6B0BC] mt-0.5">
              {stat.suffix}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
