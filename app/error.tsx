"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, Terminal } from "lucide-react";
import { sound } from "@/lib/sound";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    sound.playAlert();
    console.error("[INDRA OS KERNEL FAULT]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] font-mono flex items-center justify-center p-4 sm:p-6 selection:bg-[#FF5C5C]/30 selection:text-[#FF5C5C]">
      <div className="w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#0D1218] border border-[#FF5C5C]/40 shadow-[0_0_50px_rgba(255,92,92,0.15)] relative overflow-hidden space-y-6">
        {/* Glow vector */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5C5C]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Diagnostic Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#24303A] text-xs">
          <div className="flex items-center gap-2 text-[#FF5C5C]">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
            <span className="font-bold tracking-wider">SYSTEM FAULT DETECTED</span>
          </div>
          <span className="text-[#66717D] text-[10px]">
            DIGEST // {error.digest || "UNKNOWN_SIG"}
          </span>
        </div>

        {/* Error Terminal Log */}
        <div className="space-y-2">
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
            Anomaly in System Telemetry
          </h1>
          <p className="text-xs text-[#A6B0BC] leading-relaxed">
            The active subsystem encountered an unexpected exception while rendering telemetry.
            Safe fallback state is active.
          </p>

          <div className="mt-4 p-4 rounded-xl bg-[#050608] border border-[#24303A] text-xs text-[#FF5C5C] font-mono break-words flex items-start gap-2.5">
            <Terminal className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error.message || "An unexpected subsystem anomaly occurred."}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={() => {
              sound.playClick();
              reset();
            }}
            className="px-5 py-2.5 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,176,0,0.2)]"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RECALIBRATE (RESET)</span>
          </button>

          <Link
            href="/"
            onClick={() => sound.playClick()}
            className="px-5 py-2.5 rounded-xl bg-[#111820] text-[#A6B0BC] hover:text-[#F5F7FA] border border-[#24303A] hover:border-[#41515F] text-xs flex items-center gap-2 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
