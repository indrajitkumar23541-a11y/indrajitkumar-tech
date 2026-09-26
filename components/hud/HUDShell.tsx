"use client";

import React, { useState, useEffect, useCallback } from "react";
import { TopBar } from "./TopBar";
import { StatusBar } from "./StatusBar";
import { BootSequence } from "./BootSequence";
import { Navigation } from "../navigation/Navigation";
import { CommandPalette } from "../navigation/CommandPalette";
import { SystemExperienceMode } from "@/types";
import { sound } from "@/lib/sound";

interface HUDShellProps {
  children: React.ReactNode;
}

export function HUDShell({ children }: HUDShellProps) {
  const [activeMode, setActiveMode] = useState<SystemExperienceMode>("STANDARD");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  const handleToggleRecruiterMode = useCallback(() => {
    setActiveMode((prev) => (prev === "RECRUITER" ? "STANDARD" : "RECRUITER"));
  }, []);

  const handleCommandAction = (action: string) => {
    if (action === "toggle-recruiter") {
      handleToggleRecruiterMode();
    } else if (action === "reboot") {
      setIsBooting(true);
    }
  };

  // Global keyboard shortcuts (Cmd+K, /, b, m, r)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isInput =
        activeEl?.tagName === "INPUT" ||
        activeEl?.tagName === "TEXTAREA" ||
        (activeEl as HTMLElement)?.isContentEditable;

      // Command palette trigger
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
        return;
      }

      if (!isInput && !isCommandOpen && !isBooting) {
        if (e.key === "/") {
          e.preventDefault();
          setIsCommandOpen(true);
        } else if (e.key === "b" || e.key === "B") {
          e.preventDefault();
          setIsBooting(true);
        } else if (e.key === "m" || e.key === "M") {
          e.preventDefault();
          sound.toggleMute();
        } else if (e.key === "r" || e.key === "R") {
          e.preventDefault();
          sound.playClick();
          handleToggleRecruiterMode();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCommandOpen, isBooting, handleToggleRecruiterMode]);

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#F5F7FA] overflow-x-hidden">
      {/* Boot Sequence Overlay */}
      <BootSequence
        forceShow={isBooting}
        onDismiss={() => setIsBooting(false)}
        onComplete={() => setIsBooting(false)}
      />

      {/* Ambient Aerospace Grid & Glows */}
      <div className="fixed inset-0 hud-grid-bg pointer-events-none z-0 opacity-40" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[350px] bg-[#FFB000]/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[350px] bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Top HUD Telemetry Bar */}
      <TopBar
        activeMode={activeMode}
        onToggleRecruiterMode={handleToggleRecruiterMode}
        onOpenCommandPalette={() => setIsCommandOpen(true)}
        onRebootSystem={() => setIsBooting(true)}
      />

      {/* Main Experience Stream */}
      <main className="relative z-10 pt-16 pb-24 md:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeMode === "RECRUITER" && (
          <div className="mb-6 p-4 rounded-xl bg-[#111820] border border-[#FFB000]/50 shadow-[0_0_20px_rgba(255,176,0,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB000] animate-pulse" />
              <div>
                <span className="font-bold text-[#FFB000]">RECRUITER FAST OVERVIEW ACTIVE:</span>{" "}
                <span className="text-[#A6B0BC]">
                  High-density engineering profile, verified 380+ DSA problem records, and direct project repositories.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                onClick={() => sound.playClick()}
                className="px-3 py-1.5 rounded bg-[#FFB000] text-[#050608] font-bold hover:bg-[#E09B00] transition-colors"
              >
                DOWNLOAD RESUME
              </a>
              <button
                onClick={() => {
                  sound.playClick();
                  handleToggleRecruiterMode();
                }}
                className="px-3 py-1.5 rounded bg-[#0D1218] border border-[#24303A] text-[#A6B0BC] hover:text-[#F5F7FA]"
              >
                EXIT MODE
              </button>
            </div>
          </div>
        )}

        {children}
      </main>

      {/* Floating System Dock Navigation */}
      <Navigation />

      {/* Bottom Telemetry Bar */}
      <StatusBar />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onSelectAction={handleCommandAction}
      />
    </div>
  );
}
