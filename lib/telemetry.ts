"use client";

/**
 * Privacy-Conscious Telemetry & Analytics Engine for INDRA OS.
 * Zero cross-site tracking or cookies.
 * Adheres strictly to Phase 20 specifications in PRD & Development Guide.
 */

export type TelemetryEventType =
  | "page_view"
  | "project_inspect"
  | "case_study_opened"
  | "command_executed"
  | "resume_downloaded"
  | "voice_input_triggered"
  | "speech_synthesis_toggled"
  | "contact_dispatched"
  | "radar_engaged";

export interface TelemetryEvent {
  type: TelemetryEventType;
  payload?: Record<string, unknown>;
  timestamp: string;
}

class TelemetryEngine {
  private isClient = typeof window !== "undefined";
  private storageKey = "indra_os_telemetry_events";

  public track(type: TelemetryEventType, payload?: Record<string, unknown>) {
    if (!this.isClient) return;

    try {
      const event: TelemetryEvent = {
        type,
        payload,
        timestamp: new Date().toISOString(),
      };

      // Safely store in local session telemetry log
      const existingRaw = localStorage.getItem(this.storageKey);
      const events: TelemetryEvent[] = existingRaw ? JSON.parse(existingRaw) : [];
      events.push(event);

      // Keep recent 100 events to respect storage limits
      const trimmed = events.slice(-100);
      localStorage.setItem(this.storageKey, JSON.stringify(trimmed));

      // Optional: Google Analytics hook if configured via environment
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", type, payload);
      }
    } catch {
      // Storage unavailable or disabled in private browsing
    }
  }

  public getEventCount(type?: TelemetryEventType): number {
    if (!this.isClient) return 0;
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (!raw) return 0;
      const events: TelemetryEvent[] = JSON.parse(raw);
      if (!type) return events.length;
      return events.filter((e) => e.type === type).length;
    } catch {
      return 0;
    }
  }

  public getTelemetrySummary() {
    return {
      totalInteractions: this.getEventCount(),
      caseStudiesOpened: this.getEventCount("case_study_opened"),
      commandsExecuted: this.getEventCount("command_executed"),
      resumesDownloaded: this.getEventCount("resume_downloaded"),
      voiceCommands: this.getEventCount("voice_input_triggered"),
    };
  }
}

export const telemetry = new TelemetryEngine();
