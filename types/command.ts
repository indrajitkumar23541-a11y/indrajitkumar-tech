export type CommandCategory = "navigation" | "system" | "arxon" | "external" | "settings" | "projects";

export interface SystemCommand {
  id: string;
  name: string;
  description: string;
  category: CommandCategory;
  shortcut?: string[];
  actionType: "navigate" | "action" | "link" | "arxon";
  payload?: string;
  icon?: string;
}
