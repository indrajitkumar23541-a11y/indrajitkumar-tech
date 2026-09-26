export interface NavItem {
  id: string;
  label: string;
  href: string;
  badge?: string;
  shortcut?: string;
}

export const navigationLinks: NavItem[] = [
  { id: "hero", label: "TERMINAL", href: "#hero", shortcut: "1" },
  { id: "projects", label: "PROJECTS", href: "#projects", badge: "6", shortcut: "2" },
  { id: "skills", label: "DNA / SKILLS", href: "#skills", shortcut: "3" },
  { id: "timeline", label: "MISSION LOG", href: "#timeline", shortcut: "4" },
  { id: "lab", label: "INDRA LAB", href: "#lab", badge: "R&D", shortcut: "5" },
  { id: "arxon", label: "ARXON AI", href: "#arxon", badge: "CORE", shortcut: "6" },
  { id: "contact", label: "CONTACT", href: "#contact", shortcut: "7" },
];

export const externalLinks = {
  github: "https://github.com/indrajitkumar",
  linkedin: "https://linkedin.com/in/indrajitkumar",
  leetcode: "https://leetcode.com",
  email: "contact@indrajitkumar.dev",
  resumePath: "/resume.pdf",
};
