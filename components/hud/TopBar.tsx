"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Sparkles, Search, Briefcase, Volume2, VolumeX, RotateCcw } from "lucide-react";
import { SystemExperienceMode } from "@/types";
import { sound } from "@/lib/sound";

interface TopBarProps {
  activeMode: SystemExperienceMode;
  onToggleRecruiterMode: () => void;
  onOpenCommandPalette: () => void;
  onRebootSystem?: () => void;
}

export function TopBar({
  activeMode,
  onToggleRecruiterMode,
  onOpenCommandPalette,
  onRebootSystem,
}: TopBarProps) {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMuted(sound.isMuted());
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleToggleSound = () => {
    const nextMuted = sound.toggleMute();
    setIsMuted(nextMuted);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-14 bg-[#050608]/85 backdrop-blur-md border-b border-[#24303A] px-4 md:px-8 flex items-center justify-between transition-colors">
      {/* Brand & System Kernel */}
      <div className="flex items-center gap-3 md:gap-6">
        <a
          href="#hero"
          onClick={() => sound.playClick()}
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-1 focus:ring-[#FFB000]"
          aria-label="INDRA OS Home"
        >
          <div className="w-8 h-8 rounded bg-[#111820] border border-[#FFB000]/60 flex items-center justify-center text-[#FFB000] font-mono font-bold text-xs shadow-[0_0_10px_rgba(255,176,0,0.2)] group-hover:border-[#FFB000] transition-colors">
            IN
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-bold text-sm tracking-widest text-[#F5F7FA]">
                INDRA<span className="text-[#FFB000]">OS</span>
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.2 text-[10px] font-mono font-semibold bg-[#111820] text-[#A6B0BC] border border-[#24303A] rounded">
                v1.0.4
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#66717D] tracking-wider hidden sm:block">
              PERSONAL INTELLIGENCE SYSTEM
            </span>
          </div>
        </a>

        {/* Telemetry Dots */}
        <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-[#24303A] text-[11px] font-mono">
          <div className="flex items-center gap-1.5 text-[#32D583]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#32D583] animate-pulse" />
            <span className="tracking-wide">SYS: ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#00E5FF]">
            <Sparkles className="w-3 h-3 text-[#00E5FF]" />
            <span className="tracking-wide">ARXON: READY</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#A6B0BC]">
            <Cpu className="w-3 h-3 text-[#A6B0BC]" />
            <span className="tracking-wide">ARCHON_GRID</span>
          </div>
        </div>
      </div>

      {/* Right Controls: Sound, Reboot, Command & Recruiter Mode */}
      <div className="flex items-center gap-1.5 sm:gap-3">
        {/* Sound FX Toggle */}
        <button
          onClick={handleToggleSound}
          className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
            !isMuted
              ? "bg-[#FFB000]/15 text-[#FFB000] border-[#FFB000]"
              : "bg-[#0D1218] text-[#66717D] border-[#24303A] hover:text-[#A6B0BC]"
          }`}
          title={isMuted ? "Enable system sound effects" : "Mute system audio"}
          aria-label="Toggle system sound"
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        {/* Reboot Overlay Button */}
        {onRebootSystem && (
          <button
            onClick={() => {
              sound.playClick();
              onRebootSystem();
            }}
            className="p-2 rounded-lg bg-[#0D1218] text-[#66717D] hover:text-[#FFB000] border border-[#24303A] hover:border-[#41515F] transition-colors"
            title="Reboot system sequence"
            aria-label="Reboot system"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Recruiter Fast Mode Button */}
        <button
          onClick={() => {
            sound.playClick();
            onToggleRecruiterMode();
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-mono border transition-all ${
            activeMode === "RECRUITER"
              ? "bg-[#FFB000]/15 text-[#FFB000] border-[#FFB000] shadow-[0_0_12px_rgba(255,176,0,0.25)]"
              : "bg-[#0D1218] text-[#A6B0BC] border-[#24303A] hover:border-[#41515F] hover:text-[#F5F7FA]"
          }`}
          title="Toggle high-density recruiter view"
          aria-label="Toggle Recruiter Mode"
        >
          <Briefcase className="w-3.5 h-3.5" />
          <span className="hidden sm:inline font-semibold">
            {activeMode === "RECRUITER" ? "RECRUITER ACTIVE" : "RECRUITER MODE"}
          </span>
        </button>

        {/* Command Palette Trigger */}
        <button
          onClick={() => {
            sound.playClick();
            onOpenCommandPalette();
          }}
          className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#0D1218] text-[#A6B0BC] hover:text-[#F5F7FA] border border-[#24303A] hover:border-[#41515F] text-xs font-mono transition-colors"
          title="Open Command Palette (Ctrl+K or /)"
          aria-label="Search and command palette"
        >
          <Search className="w-3.5 h-3.5 text-[#FFB000]" />
          <span className="hidden md:inline text-[#66717D]">COMMAND</span>
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#111820] text-[#A6B0BC] border border-[#24303A] rounded">
            ⌘K
          </kbd>
        </button>

        {/* Quick Link to Terminal */}
        <a
          href="#contact"
          onClick={() => sound.playClick()}
          className="px-3 py-1.5 rounded bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] text-xs font-mono font-bold tracking-wider transition-colors"
        >
          TRANSMIT
        </a>
      </div>
    </header>
  );
}
