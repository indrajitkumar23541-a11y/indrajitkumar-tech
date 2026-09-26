"use client";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { systemCommands } from "@/data";
import { projectsData } from "@/data";
import { SystemCommand } from "@/types";
import { Search, X, Terminal, CornerDownLeft, Sparkles, FolderGit2 } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (action: string) => void;
}

export function CommandPalette({ isOpen, onClose, onSelectAction }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const projectCommands = useMemo<SystemCommand[]>(
    () =>
      projectsData.map((project) => ({
        id: `project-${project.id}`,
        name: `Project: ${project.name}`,
        description: project.tagline,
        category: "projects",
        actionType: "navigate",
        payload: `#projects`,
        icon: "folder",
      })),
    []
  );

  const allItems = useMemo<SystemCommand[]>(
    () => [...systemCommands, ...projectCommands],
    [projectCommands]
  );

  const filteredItems = useMemo<SystemCommand[]>(() => {
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [allItems, query]);

  const handleExecute = useCallback(
    (item: SystemCommand) => {
      onClose();
      if (item.actionType === "navigate" && item.payload) {
        window.location.hash = item.payload;
      } else if (item.actionType === "link" && item.payload) {
        window.open(item.payload, "_blank", "noopener,noreferrer");
      } else if (item.actionType === "action" && item.payload && onSelectAction) {
        onSelectAction(item.payload);
      } else if (item.actionType === "arxon") {
        window.location.hash = "#arxon";
      }
    },
    [onClose, onSelectAction]
  );

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onClose();
      }
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        e.preventDefault();
        handleExecute(filteredItems[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, handleExecute]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="System Command Center"
      className="fixed inset-0 z-50 bg-[#050608]/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0D1218] border border-[#41515F] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#24303A] gap-3 bg-[#111820]/70">
          <Search className="w-5 h-5 text-[#FFB000]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or topic (e.g. PraGo, skills, recruiter)..."
            className="w-full bg-transparent text-[#F5F7FA] placeholder-[#66717D] text-sm font-mono focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close command palette"
            className="p-1 rounded text-[#66717D] hover:text-[#F5F7FA] hover:bg-[#24303A] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-[#66717D] font-mono text-xs">
              NO MATCHING COMMANDS FOUND IN INDRA OS REGISTRY.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleExecute(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl font-mono flex items-center justify-between transition-colors ${
                    isSelected
                      ? "bg-[#111820] text-[#F5F7FA] border border-[#FFB000]/60 shadow-[0_0_10px_rgba(255,176,0,0.15)]"
                      : "text-[#A6B0BC] hover:bg-[#111820]/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg border text-xs ${
                        isSelected
                          ? "bg-[#FFB000]/15 border-[#FFB000] text-[#FFB000]"
                          : "bg-[#050608] border-[#24303A] text-[#66717D]"
                      }`}
                    >
                      {item.category === "arxon" ? (
                        <Sparkles className="w-3.5 h-3.5 text-[#00E5FF]" />
                      ) : item.category === "projects" ? (
                        <FolderGit2 className="w-3.5 h-3.5" />
                      ) : (
                        <Terminal className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className="text-[10px] text-[#66717D] uppercase tracking-wider">
                          [{item.category}]
                        </span>
                      </div>
                      <div className="text-[11px] text-[#66717D] line-clamp-1">
                        {item.description}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.shortcut && (
                      <div className="hidden sm:flex items-center gap-1">
                        {item.shortcut.map((key: string) => (
                          <kbd
                            key={key}
                            className="px-1.5 py-0.5 text-[10px] bg-[#050608] border border-[#24303A] rounded text-[#A6B0BC]"
                          >
                            {key}
                          </kbd>
                        ))}
                      </div>
                    )}
                    <CornerDownLeft
                      className={`w-3.5 h-3.5 ${
                        isSelected ? "text-[#FFB000]" : "text-transparent"
                      }`}
                    />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hints */}
        <div className="px-4 py-2 bg-[#090D12] border-t border-[#24303A] flex items-center justify-between text-[10px] font-mono text-[#66717D]">
          <div className="flex items-center gap-3">
            <span>↑↓ NAVIGATE</span>
            <span>↵ EXECUTE</span>
            <span>ESC DISMISS</span>
          </div>
          <span className="text-[#FFB000]">INDRA OS REGISTRY</span>
        </div>
      </div>
    </div>
  );
}
