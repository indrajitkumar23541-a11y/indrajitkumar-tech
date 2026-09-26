import { SystemStatus } from "@/types";

export const initialSystemStatus: SystemStatus = {
  osName: "INDRA OS",
  osVersion: "v1.0.4",
  codename: "ARCHON_GRID",
  bootTime: "2026.09.27",
  status: "ONLINE",
  activeMode: "STANDARD",
  arxonStatus: "IDLE",
  soundEnabled: false,
  reducedMotion: false,
  performanceTier: "HIGH",
};

export const bootSequenceLogs = [
  "INITIALIZING INDRA OS KERNEL...",
  "CORE SUBSYSTEMS ................ ONLINE",
  "NEURAL INTERFACE [ARXON] ........ LINKED",
  "PROJECT MATRIX ................. READY",
  "ENGINEERING DNA ................ LOADED",
  "SYSTEM STATUS: OPERATIONAL",
];
