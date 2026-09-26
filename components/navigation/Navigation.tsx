"use client";

import React, { useEffect, useState } from "react";
import { navigationLinks } from "@/data";
import { Terminal, FolderGit2, Cpu, History, FlaskConical, Bot, Send } from "lucide-react";

const iconsMap: Record<string, React.ReactNode> = {
  hero: <Terminal className="w-4 h-4" />,
  projects: <FolderGit2 className="w-4 h-4" />,
  skills: <Cpu className="w-4 h-4" />,
  timeline: <History className="w-4 h-4" />,
  lab: <FlaskConical className="w-4 h-4" />,
  arxon: <Bot className="w-4 h-4 text-[#00E5FF]" />,
  contact: <Send className="w-4 h-4 text-[#FFB000]" />,
};

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navigationLinks) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="System Section Navigation"
      className="fixed bottom-4 sm:bottom-12 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] px-2 py-1.5 rounded-xl bg-[#0D1218]/90 backdrop-blur-md border border-[#24303A] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-1 sm:gap-2 overflow-x-auto"
    >
      {navigationLinks.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono transition-all whitespace-nowrap ${
              isActive
                ? "bg-[#111820] text-[#FFB000] border border-[#FFB000]/50 shadow-[0_0_12px_rgba(255,176,0,0.2)]"
                : "text-[#A6B0BC] hover:text-[#F5F7FA] hover:bg-[#111820]/60 border border-transparent"
            }`}
          >
            {iconsMap[item.id] || <Terminal className="w-3.5 h-3.5" />}
            <span className="hidden md:inline font-semibold">{item.label}</span>
            {item.badge && (
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                  item.id === "arxon"
                    ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30"
                    : "bg-[#24303A] text-[#A6B0BC]"
                }`}
              >
                {item.badge}
              </span>
            )}
          </a>
        );
      })}
    </nav>
  );
}
