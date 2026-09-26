export type ArxonState = 
  | "IDLE" 
  | "LISTENING" 
  | "THINKING" 
  | "RESPONDING" 
  | "NAVIGATING" 
  | "SUCCESS" 
  | "ERROR" 
  | "OFFLINE";

export type SystemExperienceMode = 
  | "STANDARD" 
  | "RECRUITER" 
  | "TERMINAL" 
  | "ACCESSIBLE";

export interface SystemStatus {
  osName: string;
  osVersion: string;
  codename: string;
  bootTime: string;
  status: "ONLINE" | "STANDBY" | "MAINTENANCE";
  activeMode: SystemExperienceMode;
  arxonStatus: ArxonState;
  soundEnabled: boolean;
  reducedMotion: boolean;
  performanceTier: "ULTRA" | "HIGH" | "BALANCED" | "LOW" | "2D";
}
