"use client";

import React, { useState } from "react";
import { projectsData } from "@/data";
import { Project } from "@/types";
import Link from "next/link";
import { FolderGit2, ExternalLink, BookOpen, X, CheckCircle2, LayoutGrid, Orbit, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectUniverse } from "@/components/projects/ProjectUniverse";
import { sound } from "@/lib/sound";

export function ProjectsSection() {
  const [viewMode, setViewMode] = useState<"GRID" | "CONSTELLATION">("GRID");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["ALL", "AI Systems", "Full-Stack Platforms", "Spatial & 3D"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" aria-label="Projects Matrix" className="py-20 border-t border-[#24303A]">
      {/* Section Header & View Toggles */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] tracking-widest uppercase mb-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>01 // REPOSITORY & SYSTEM MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
            PROJECT CONSTELLATION
          </h2>
          <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
            Real software systems, distributed architectures, and experimental 3D laboratories.
            Each project backed by verified engineering design.
          </p>
        </div>

        {/* View Switcher & Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Constellation vs Grid Mode */}
          <div className="flex items-center p-1 rounded-xl bg-[#0D1218] border border-[#24303A]">
            <button
              onClick={() => {
                sound.playClick();
                setViewMode("GRID");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === "GRID"
                  ? "bg-[#FFB000] text-[#050608] font-bold shadow-[0_0_12px_rgba(255,176,0,0.25)]"
                  : "text-[#A6B0BC] hover:text-[#F5F7FA]"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
            <button
              onClick={() => {
                sound.playChime();
                setViewMode("CONSTELLATION");
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === "CONSTELLATION"
                  ? "bg-[#00E5FF] text-[#050608] font-bold shadow-[0_0_12px_rgba(0,229,255,0.25)]"
                  : "text-[#A6B0BC] hover:text-[#F5F7FA]"
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>RADAR</span>
            </button>
          </div>

          {/* Filter Pills (Shown in Grid Mode) */}
          {viewMode === "GRID" && (
            <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-[#0D1218] border border-[#24303A]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedCategory === cat
                      ? "bg-[#111820] text-[#FFB000] border border-[#FFB000]/60 font-bold"
                      : "text-[#A6B0BC] hover:text-[#F5F7FA]"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Main View Display */}
      {viewMode === "CONSTELLATION" ? (
        <ProjectUniverse onSelectProject={(p) => setActiveModalProject(p)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0D1218] border border-[#24303A] hover:border-[#41515F] p-6 flex flex-col justify-between transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] group relative"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#111820] text-[#A6B0BC] border border-[#24303A]">
                    {project.codename || "MODULE"}
                  </span>
                  <span
                    className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${
                      project.status === "ACTIVE"
                        ? "bg-[#32D583]/10 text-[#32D583] border-[#32D583]/40"
                        : project.status === "COMPLETED"
                        ? "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/40"
                        : "bg-[#FFB000]/10 text-[#FFB000] border-[#FFB000]/40"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-mono text-[#F5F7FA] group-hover:text-[#FFB000] transition-colors">
                  <Link
                    href={`/projects/${project.id}`}
                    onClick={() => sound.playClick()}
                    className="hover:underline flex items-center justify-between"
                  >
                    <span>{project.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FFB000]" />
                  </Link>
                </h3>
                <p className="text-xs text-[#FFB000]/90 font-mono mt-1 font-medium">
                  {project.tagline}
                </p>

                <p className="text-xs text-[#A6B0BC] mt-3 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#111820] text-[#A6B0BC] border border-[#24303A]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-[#66717D]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-[#24303A] flex items-center justify-between">
                <button
                  onClick={() => {
                    sound.playClick();
                    setActiveModalProject(project);
                  }}
                  className="text-xs font-mono text-[#00E5FF] hover:text-[#00C4DB] flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>CASE STUDY</span>
                </button>

                <div className="flex items-center gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A6B0BC] hover:text-[#F5F7FA] transition-colors"
                      aria-label={`GitHub repository for ${project.name}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.links.live && project.links.live !== "#" && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A6B0BC] hover:text-[#FFB000] transition-colors"
                      aria-label={`Live demo for ${project.name}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Full Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#050608]/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0D1218] border border-[#41515F] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-[#111820] text-[#A6B0BC] hover:text-[#F5F7FA] border border-[#24303A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-[#FFB000] uppercase tracking-wider">
                  ENGINEERING CASE STUDY
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-mono text-[#F5F7FA] mt-1">
                  {activeModalProject.name}
                </h3>
                <p className="text-sm font-mono text-[#00E5FF] mt-1">
                  {activeModalProject.tagline}
                </p>
              </div>

              {activeModalProject.caseStudy ? (
                <>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#A6B0BC] mb-2 font-semibold">
                      01 // PROBLEM STATEMENT & CONTEXT
                    </h4>
                    <p className="text-sm text-[#A6B0BC] leading-relaxed">
                      {activeModalProject.caseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#A6B0BC] mb-2 font-semibold">
                      02 // ARCHITECTURE & LAYERS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {activeModalProject.caseStudy.architectureLayers.map((layer) => (
                        <div
                          key={layer.layer}
                          className="p-3.5 rounded-xl bg-[#111820] border border-[#24303A]"
                        >
                          <div className="text-xs font-mono font-bold text-[#FFB000] mb-2">
                            {layer.layer}
                          </div>
                          <ul className="text-xs text-[#A6B0BC] space-y-1">
                            {layer.components.map((c) => (
                              <li key={c} className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-[#00E5FF]" />
                                <span>{c}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#A6B0BC] mb-2 font-semibold">
                      03 // ENGINEERING DECISIONS
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.caseStudy.engineeringDecisions.map((dec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#A6B0BC]">
                          <CheckCircle2 className="w-4 h-4 text-[#32D583] shrink-0 mt-0.5" />
                          <span>{dec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#A6B0BC] mb-2 font-semibold">
                      04 // CHALLENGES & OVERCOME
                    </h4>
                    <ul className="space-y-2">
                      {activeModalProject.caseStudy.challenges.map((chal, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#A6B0BC]">
                          <span className="font-mono text-[#FF5C5C] font-bold shrink-0">!</span>
                          <span>{chal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <p className="text-sm text-[#A6B0BC]">{activeModalProject.description}</p>
              )}

              {/* Action Buttons in Modal */}
              <div className="pt-4 border-t border-[#24303A] flex flex-wrap items-center justify-between gap-3">
                <Link
                  href={`/projects/${activeModalProject.id}`}
                  onClick={() => sound.playClick()}
                  className="px-4 py-2 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] hover:bg-[#00E5FF]/20 border border-[#00E5FF]/40 font-mono text-xs flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>FULL SPEC PAGE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  {activeModalProject.links.github && (
                    <a
                      href={activeModalProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#111820] text-[#F5F7FA] hover:border-[#FFB000] border border-[#24303A] font-mono text-xs flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>VIEW REPOSITORY</span>
                    </a>
                  )}
                  {activeModalProject.links.live && activeModalProject.links.live !== "#" && (
                    <a
                      href={activeModalProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-mono text-xs font-bold flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
