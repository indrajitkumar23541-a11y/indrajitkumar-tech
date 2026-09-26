export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
  primary?: boolean;
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution?: string;
  period: string;
  status: "Completed" | "In Progress";
  highlights?: string[];
}

export interface SystemStat {
  label: string;
  value: string | number;
  suffix?: string;
  description?: string;
  category: "engineering" | "academic" | "ai" | "system";
}

export interface ProfileData {
  name: string;
  codename: string;
  title: string;
  roles: string[];
  tagline: string;
  summary: string;
  mission: string;
  status: {
    state: "ONLINE" | "STANDBY" | "BUSY" | "OFFLINE";
    availability: string;
    location: string;
    coordinates?: string;
  };
  education: EducationEntry[];
  stats: SystemStat[];
  socials: Record<string, SocialLink>;
}
