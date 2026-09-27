import React from "react";
import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] font-mono flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated HUD spinner */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#FFB000] animate-spin [animation-duration:8s]" />
          <div className="absolute inset-1.5 rounded-full border border-[#00E5FF]/40 animate-pulse" />
          <div className="w-4 h-4 rounded-full bg-[#FFB000] shadow-[0_0_15px_rgba(255,176,0,0.5)] flex items-center justify-center text-[#050608]">
            <Sparkles className="w-2.5 h-2.5 animate-spin [animation-duration:3s]" />
          </div>
        </div>

        {/* Telemetry status text */}
        <div className="text-center space-y-1">
          <div className="text-xs font-bold text-[#FFB000] tracking-widest uppercase">
            INDRA OS // STREAM SYNC
          </div>
          <p className="text-[11px] text-[#A6B0BC]">
            Synchronizing telemetry with ARXON core...
          </p>
        </div>
      </div>
    </div>
  );
}
