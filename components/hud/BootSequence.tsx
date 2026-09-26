"use client";

import React, { useState, useEffect, useCallback } from "react";
import { sound } from "@/lib/sound";

interface BootSequenceProps {
  onComplete?: () => void;
  forceShow?: boolean;
  onDismiss?: () => void;
}

export function BootSequence({ onComplete, forceShow = false, onDismiss }: BootSequenceProps) {
  const [visible, setVisible] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);

  const bootLogs = [
    { text: "INITIALIZING INDRA OS KERNEL v1.0.4...", status: "OK", color: "#FFB000" },
    { text: "CALIBRATING AEROSPACE HUD MATRIX...", status: "ONLINE", color: "#32D583" },
    { text: "LOADING ARXON PERSONAL INTELLIGENCE CORE...", status: "LINKED", color: "#00E5FF" },
    { text: "FETCHING 380+ VERIFIED DSA SOLVE REGISTRY...", status: "VERIFIED", color: "#FFB000" },
    { text: "SYSTEM DIAGNOSTICS: 0 ERRORS DETECTED", status: "READY", color: "#32D583" },
  ];

  const handleDismiss = useCallback(() => {
    sound.playChime();
    if (typeof window !== "undefined") {
      sessionStorage.setItem("indra_os_booted", "true");
    }
    setVisible(false);
    if (onComplete) onComplete();
    if (onDismiss) onDismiss();
  }, [onComplete, onDismiss]);

  // Initial check on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (forceShow) {
        setVisible(true);
        setStepIndex(0);
        sound.playBoot();
      } else {
        const hasBooted = sessionStorage.getItem("indra_os_booted");
        if (!hasBooted) {
          setVisible(true);
          sound.playBoot();
        }
      }
    }, 10);
    return () => clearTimeout(timer);
  }, [forceShow]);

  // Step-by-step progress
  useEffect(() => {
    if (!visible) return;

    if (stepIndex < bootLogs.length) {
      const timer = setTimeout(() => {
        sound.playClick();
        setStepIndex((prev) => prev + 1);
      }, 350);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => {
        handleDismiss();
      }, 700);
      return () => clearTimeout(exitTimer);
    }
  }, [visible, stepIndex, bootLogs.length, handleDismiss]);

  // Listen for Escape key to skip
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && visible) {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, handleDismiss]);

  if (!visible) return null;

  const progress = Math.min(100, Math.round(((stepIndex + 1) / bootLogs.length) * 100));

  return (
    <div
      role="dialog"
      aria-label="System Boot Sequence"
      className="fixed inset-0 z-50 bg-[#050608] flex flex-col items-center justify-center p-4 select-none animate-in fade-in duration-200"
    >
      {/* Background Reticle Grid */}
      <div className="absolute inset-0 hud-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute w-96 h-96 rounded-full bg-[#FFB000]/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-xl p-8 rounded-2xl bg-[#0D1218] border border-[#24303A] shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative z-10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#24303A] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFB000] animate-ping" />
            <span className="text-[#F5F7FA] font-bold tracking-widest">INDRA OS // SYSTEM BOOT</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-[11px] px-2 py-1 rounded bg-[#111820] text-[#A6B0BC] hover:text-[#FFB000] border border-[#24303A] hover:border-[#FFB000]/40 transition-colors"
          >
            SKIP [ESC]
          </button>
        </div>

        {/* Step-by-step logs */}
        <div className="space-y-2.5 min-h-[170px] font-mono text-xs">
          {bootLogs.slice(0, stepIndex + 1).map((log, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between text-xs animate-in slide-in-from-left-2 duration-150"
            >
              <span className="text-[#A6B0BC]">{log.text}</span>
              <span className="font-bold ml-2 shrink-0" style={{ color: log.color }}>
                [{log.status}]
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 pt-4 border-t border-[#24303A]">
          <div className="flex justify-between font-mono text-xs">
            <span className="text-[#66717D]">INITIALIZING SUBSYSTEMS</span>
            <span className="text-[#FFB000] font-bold">{progress}%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-[#111820] overflow-hidden border border-[#24303A]">
            <div
              className="h-full bg-[#FFB000] transition-all duration-300 shadow-[0_0_12px_rgba(255,176,0,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
