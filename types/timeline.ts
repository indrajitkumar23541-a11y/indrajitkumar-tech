export interface MissionLogEntry {
  id: string;
  year: string;
  period: string;
  title: string;
  codename?: string;
  category: "academic" | "engineering" | "project" | "milestone";
  summary: string;
  details: string[];
  tags: string[];
  status: "Completed" | "In Progress" | "Planned";
}
