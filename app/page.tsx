import { HUDShell } from "@/components/hud/HUDShell";
import {
  HeroSection,
  ProjectsSection,
  SkillsSection,
  TimelineSection,
  LabSection,
  ArxonSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <HUDShell>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <TimelineSection />
      <LabSection />
      <ArxonSection />
      <ContactSection />
    </HUDShell>
  );
}
