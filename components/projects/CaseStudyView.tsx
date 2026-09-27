"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Project } from "@/types";
import { projectsData } from "@/data";
import { sound } from "@/lib/sound";
import { telemetry } from "@/lib/telemetry";
import { GithubIcon } from "@/components/ui/Icons";
import {
  ArrowLeft,
  ExternalLink,
  Share2,
  Check,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  Sparkles,
  Workflow,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  Send,
  Code2,
} from "lucide-react";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const [copied, setCopied] = useState(false);

  // Determine previous and next projects for carousel navigation
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  // Track case study open event
  useEffect(() => {
    telemetry.track("case_study_opened", {
      projectId: project.id,
      projectName: project.name,
      category: project.category,
    });
  }, [project.id, project.name, project.category]);

  const handleCopyLink = () => {
    sound.playClick();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const caseStudy = project.caseStudy;

  return (
    <div className="min-h-screen bg-[#050608] text-[#F5F7FA] font-sans selection:bg-[#FFB000]/25 selection:text-[#FFB000]">
      {/* Top Diagnostics Header */}
      <header className="sticky top-0 z-40 h-14 bg-[#050608]/90 backdrop-blur-md border-b border-[#24303A] px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/#projects"
            onClick={() => sound.playClick()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111820] border border-[#24303A] text-xs font-mono text-[#A6B0BC] hover:text-[#FFB000] hover:border-[#FFB000]/60 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">RETURN TO OS CONSOLE</span>
            <span className="sm:hidden">CONSOLE</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#66717D]">
            <span>{"//"}</span>
            <span className="text-[#A6B0BC]">SYSTEM ARCHIVES</span>
            <span>{"//"}</span>
            <span className="text-[#FFB000] uppercase font-bold">{project.id}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111820] border border-[#24303A] text-xs font-mono text-[#A6B0BC] hover:text-[#00E5FF] hover:border-[#00E5FF]/60 transition-colors"
            title="Copy direct case study URL"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#32D583]" />
                <span className="text-[#32D583]">COPIED</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">SHARE SPEC</span>
              </>
            )}
          </button>

          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              className="p-2 rounded-lg bg-[#111820] border border-[#24303A] text-[#A6B0BC] hover:text-[#F5F7FA] hover:border-[#F5F7FA]/40 transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}

          {project.links.live && project.links.live !== "#" && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playChime()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-mono font-bold text-xs transition-colors shadow-[0_0_12px_rgba(255,176,0,0.25)]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>LIVE SYSTEM</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        {/* Project Header Banner */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#0D1218] border border-[#24303A] relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB000]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-[#111820] text-[#FFB000] border border-[#FFB000]/30 tracking-wider">
                CODENAME // {project.codename || "CORE_SPEC"}
              </span>
              <span
                className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded border ${
                  project.status === "ACTIVE"
                    ? "bg-[#32D583]/10 text-[#32D583] border-[#32D583]/40"
                    : project.status === "COMPLETED"
                    ? "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/40"
                    : "bg-[#FFB000]/10 text-[#FFB000] border-[#FFB000]/40"
                }`}
              >
                STATUS // {project.status}
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-[#111820] text-[#A6B0BC] border border-[#24303A]">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-mono text-[#F5F7FA] tracking-tight">
              {project.name}
            </h1>

            <p className="text-base sm:text-lg font-mono text-[#FFB000] max-w-3xl">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#A6B0BC] leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-[#24303A] font-mono text-xs">
              <div className="p-3 rounded-xl bg-[#111820] border border-[#24303A]">
                <div className="text-[#66717D] text-[10px]">ENGINEERING ROLE</div>
                <div className="text-[#F5F7FA] font-bold mt-0.5 truncate">{project.role}</div>
              </div>
              <div className="p-3 rounded-xl bg-[#111820] border border-[#24303A]">
                <div className="text-[#66717D] text-[10px]">DEVELOPMENT CYCLE</div>
                <div className="text-[#F5F7FA] font-bold mt-0.5">{project.year}</div>
              </div>
              {project.metrics && project.metrics.length > 0 && (
                <>
                  <div className="p-3 rounded-xl bg-[#111820] border border-[#24303A]">
                    <div className="text-[#66717D] text-[10px]">{project.metrics[0].label}</div>
                    <div className="text-[#00E5FF] font-bold mt-0.5 truncate">
                      {project.metrics[0].value}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#111820] border border-[#24303A]">
                    <div className="text-[#66717D] text-[10px]">
                      {project.metrics[1]?.label || "DEPLOYMENT"}
                    </div>
                    <div className="text-[#32D583] font-bold mt-0.5 truncate">
                      {project.metrics[1]?.value || "Production Ready"}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section 01: Executive Overview & Problem Context */}
        {caseStudy && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <div className="sticky top-20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>SECTION 01</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                  PROBLEM & OBJECTIVE
                </h2>
                <p className="text-xs text-[#A6B0BC]">
                  Ground-truth engineering context, operational bottlenecks, and core architectural goals.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <div className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#FFB000] uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>SYSTEM OVERVIEW</span>
                </h3>
                <p className="text-sm text-[#A6B0BC] leading-relaxed">{caseStudy.overview}</p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] space-y-3">
                <h3 className="text-xs font-mono font-bold text-[#F7B955] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F7B955]" />
                  <span>THE ENGINEERING PROBLEM</span>
                </h3>
                <p className="text-sm text-[#A6B0BC] leading-relaxed">{caseStudy.problem}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#111820] border border-[#24303A] space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#00E5FF] uppercase">
                    PRIMARY OBJECTIVE
                  </h4>
                  <p className="text-xs text-[#A6B0BC] leading-relaxed">{caseStudy.goal}</p>
                </div>
                <div className="p-5 rounded-2xl bg-[#111820] border border-[#24303A] space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#32D583] uppercase">
                    ENGINEERED SOLUTION
                  </h4>
                  <p className="text-xs text-[#A6B0BC] leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 02: Architectural Layers */}
        {caseStudy && caseStudy.architectureLayers && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#24303A] pt-12">
            <div className="md:col-span-4">
              <div className="sticky top-20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] uppercase tracking-widest">
                  <Layers className="w-3.5 h-3.5" />
                  <span>SECTION 02</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                  SYSTEM TOPOLOGY
                </h2>
                <p className="text-xs text-[#A6B0BC]">
                  Decoupled structural layers ensuring fault isolation, maintainability, and clean boundaries.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              {caseStudy.architectureLayers.map((layer, index) => (
                <div
                  key={layer.layer}
                  className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#41515F] transition-all"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#24303A] mb-4">
                    <span className="text-xs font-mono font-bold text-[#F5F7FA] flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-[#111820] border border-[#24303A] text-[#00E5FF] text-[10px] flex items-center justify-center font-bold">
                        0{index + 1}
                      </span>
                      {layer.layer}
                    </span>
                    <span className="text-[10px] font-mono text-[#66717D]">
                      {layer.components.length} COMPONENTS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {layer.components.map((comp) => (
                      <div
                        key={comp}
                        className="p-3 rounded-xl bg-[#111820] border border-[#24303A] flex items-center gap-2 text-xs font-mono text-[#A6B0BC]"
                      >
                        <Workflow className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                        <span className="truncate">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 03: Engineering Decisions & Tradeoffs */}
        {caseStudy && caseStudy.engineeringDecisions && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#24303A] pt-12">
            <div className="md:col-span-4">
              <div className="sticky top-20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#32D583] uppercase tracking-widest">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SECTION 03</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                  KEY TRADEOFFS
                </h2>
                <p className="text-xs text-[#A6B0BC]">
                  Intentional architectural decisions and deliberate engineering choices made during development.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              {caseStudy.engineeringDecisions.map((decision, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D1218] border border-[#24303A] flex items-start gap-3.5"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#111820] border border-[#32D583]/40 text-[#32D583] flex items-center justify-center shrink-0 text-xs font-mono font-bold mt-0.5">
                    ✓
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs sm:text-sm text-[#F5F7FA] font-mono leading-relaxed">
                      {decision}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 04: Technical Challenges & Solutions */}
        {caseStudy && caseStudy.challenges && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#24303A] pt-12">
            <div className="md:col-span-4">
              <div className="sticky top-20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#F7B955] uppercase tracking-widest">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>SECTION 04</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                  CHALLENGES SOLVED
                </h2>
                <p className="text-xs text-[#A6B0BC]">
                  Complex bugs, synchronization locks, latency constraints, and performance breakthroughs.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4">
              {caseStudy.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D1218] border border-[#24303A] space-y-2"
                >
                  <div className="text-[10px] font-mono font-bold text-[#F7B955] uppercase tracking-wider">
                    CHALLENGE_VECTOR // 0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A6B0BC] leading-relaxed font-mono">
                    {challenge}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 05: Technology Matrix */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#24303A] pt-12">
          <div className="md:col-span-4">
            <div className="sticky top-20 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] uppercase tracking-widest">
                <Code2 className="w-3.5 h-3.5" />
                <span>SECTION 05</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                STACK & TOOLING
              </h2>
              <p className="text-xs text-[#A6B0BC]">
                Production dependencies, libraries, and frameworks integrated in this codebase.
              </p>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A]">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-[#111820] text-[#F5F7FA] border border-[#24303A] text-xs font-mono font-medium hover:border-[#FFB000]/60 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Future Engineering Roadmap */}
        {caseStudy && caseStudy.futureRoadmap && (
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start border-t border-[#24303A] pt-12">
            <div className="md:col-span-4">
              <div className="sticky top-20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SECTION 06</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
                  ROADMAP & EVOLUTION
                </h2>
                <p className="text-xs text-[#A6B0BC]">
                  Next engineering sprints, architectural optimizations, and feature expansions.
                </p>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3">
              {caseStudy.futureRoadmap.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#0D1218] border border-[#24303A] flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF]" />
                  <span className="text-xs font-mono text-[#A6B0BC]">{item}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Project Switcher & CTA */}
        <section className="border-t border-[#24303A] pt-12 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.id}`}
              onClick={() => sound.playClick()}
              className="p-5 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#FFB000]/60 transition-all flex items-center gap-4 group"
            >
              <div className="p-2 rounded-xl bg-[#111820] text-[#A6B0BC] group-hover:text-[#FFB000] border border-[#24303A]">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono text-[#66717D]">PREVIOUS CASE STUDY</div>
                <div className="text-sm font-mono font-bold text-[#F5F7FA] group-hover:text-[#FFB000] truncate">
                  {prevProject.name}
                </div>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              onClick={() => sound.playClick()}
              className="p-5 rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#00E5FF]/60 transition-all flex items-center justify-between gap-4 group text-right"
            >
              <div className="overflow-hidden">
                <div className="text-[10px] font-mono text-[#66717D]">NEXT CASE STUDY</div>
                <div className="text-sm font-mono font-bold text-[#F5F7FA] group-hover:text-[#00E5FF] truncate">
                  {nextProject.name}
                </div>
              </div>
              <div className="p-2 rounded-xl bg-[#111820] text-[#A6B0BC] group-hover:text-[#00E5FF] border border-[#24303A]">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Connect CTA */}
          <div className="p-8 rounded-3xl bg-[#0D1218] border border-[#FFB000]/30 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-[#F5F7FA]">
              Interested in Discussing This System Architecture?
            </h3>
            <p className="text-xs sm:text-sm text-[#A6B0BC] max-w-xl mx-auto">
              Indrajit Kumar is actively open to engineering roles, high-impact collaborations, and technical discussions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/#contact"
                onClick={() => sound.playClick()}
                className="px-6 py-3 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-mono font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(255,176,0,0.25)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>INITIATE TRANSMISSION</span>
              </Link>
              <Link
                href="/#projects"
                onClick={() => sound.playClick()}
                className="px-6 py-3 rounded-xl bg-[#111820] text-[#A6B0BC] hover:text-[#F5F7FA] border border-[#24303A] font-mono text-xs transition-colors"
              >
                BACK TO OS CONSOLE
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
