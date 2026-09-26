"use client";

import React from "react";
import { Terminal, Shield, Crosshair, Award } from "lucide-react";
import { dsaProfile } from "@/data";

export function StatusBar() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 h-8 bg-[#050608]/90 backdrop-blur-md border-t border-[#24303A] px-4 md:px-8 hidden sm:flex items-center justify-between text-[11px] font-mono text-[#66717D]">
      {/* Coordinates & Region */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-[#A6B0BC]">
          <Crosshair className="w-3 h-3 text-[#FFB000]" />
          <span>INDIA // 20.5937° N, 78.9629° E</span>
        </div>
        <div className="hidden lg:flex items-center gap-1.5 text-[#66717D] pl-3 border-l border-[#24303A]">
          <Shield className="w-3 h-3 text-[#32D583]" />
          <span>SECURITY: ISOLATED</span>
        </div>
      </div>

      {/* DSA Badge & Kernel Status */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 text-[#FFB000]">
          <Award className="w-3 h-3" />
          <span className="font-semibold">{dsaProfile.totalSolved}+ DSA SOLVED</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-[#A6B0BC] pl-3 border-l border-[#24303A]">
          <Terminal className="w-3 h-3 text-[#00E5FF]" />
          <span>ARXON INTERFACE v1.0</span>
        </div>
        <div className="text-[10px] text-[#66717D] pl-3 border-l border-[#24303A]">
          PRESS <kbd className="px-1 py-0.5 bg-[#111820] text-[#A6B0BC] border border-[#24303A] rounded">⌘K</kbd> FOR PALETTE
        </div>
      </div>
    </footer>
  );
}
