import React from "react";
import Link from "next/link";
import { Home, Compass, ArrowRight, ShieldAlert } from "lucide-react";

export default function NotFound() {
  const suggestedSectors = [
    { label: "PRAGO HEALTHCARE PLATFORM", href: "/projects/prago" },
    { label: "INDRA OS SYSTEM ARCHIVES", href: "/projects/indra-os" },
    { label: "ENGINEERING DNA & 380+ DSA", href: "/#skills" },
    { label: "ESTABLISH CONNECTION", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] font-mono flex items-center justify-center p-4 sm:p-6 selection:bg-[#FFB000]/25 selection:text-[#FFB000]">
      <div className="w-full max-w-xl p-6 sm:p-10 rounded-3xl bg-[#0D1218] border border-[#24303A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-8 text-center sm:text-left">
        {/* Radar background aura */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB000]/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#24303A] gap-2 text-xs">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#FFB000]">
            <ShieldAlert className="w-4 h-4" />
            <span className="font-bold tracking-widest">SIGNAL_VECTOR_LOST</span>
          </div>
          <span className="text-[#66717D] text-[11px]">STATUS CODE: 404</span>
        </div>

        {/* Main 404 Content */}
        <div className="space-y-3">
          <div className="text-5xl sm:text-6xl font-bold tracking-tight text-[#F5F7FA] font-mono">
            404<span className="text-[#FFB000]">.</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#F5F7FA]">
            Uncharted Coordinates
          </h1>
          <p className="text-xs sm:text-sm text-[#A6B0BC] leading-relaxed">
            The requested telemetry sector or case study specification does not exist in the active INDRA OS matrix.
          </p>
        </div>

        {/* Suggested Valid Sectors */}
        <div className="p-4 rounded-2xl bg-[#111820] border border-[#24303A] space-y-3 text-left">
          <div className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-wider flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            <span>RE-ROUTE SUGGESTIONS:</span>
          </div>
          <div className="space-y-1.5">
            {suggestedSectors.map((sec) => (
              <Link
                key={sec.label}
                href={sec.href}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#050608] hover:bg-[#111820] border border-[#24303A] hover:border-[#FFB000]/50 text-xs text-[#A6B0BC] hover:text-[#F5F7FA] transition-all group"
              >
                <span>{sec.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#66717D] group-hover:text-[#FFB000] group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Return Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,176,0,0.25)]"
          >
            <Home className="w-3.5 h-3.5" />
            <span>RETURN TO OS CONSOLE</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
