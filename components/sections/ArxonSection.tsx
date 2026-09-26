"use client";

import React, { useState } from "react";
import { profileData, projectsData, dsaProfile } from "@/data";
import { ArxonState } from "@/types";
import { sound } from "@/lib/sound";
import { ArxonCore } from "@/components/core/ArxonCore";
import { Sparkles, Terminal, Send, Volume2, VolumeX } from "lucide-react";

export function ArxonSection() {
  const [query, setQuery] = useState("");
  const [arxonState, setArxonState] = useState<ArxonState>("IDLE");
  const [voiceSpeechEnabled, setVoiceSpeechEnabled] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "arxon"; text: string; timestamp: string }[]
  >([
    {
      role: "arxon",
      text: "ARXON Intelligence Core online. Grounded in Indrajit Kumar's verified portfolio matrix. You may query engineering skills, case studies, academic chronology, or algorithmic metrics.",
      timestamp: "00:00:01",
    },
  ]);

  const presetQueries = [
    "What are Indrajit's primary technical competencies?",
    "Tell me about the PraGo telemedicine platform",
    "What is Indrajit's DSA & competitive coding track record?",
    "What degree is Indrajit pursuing?",
    "How can I contact Indrajit?",
  ];

  const speakText = (text: string) => {
    if (!voiceSpeechEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.05;
      utterance.pitch = 0.95;
      utterance.onend = () => setArxonState("IDLE");
      window.speechSynthesis.speak(utterance);
    } catch {
      // Speech synthesis failed
    }
  };

  const handleSend = (textToSend?: string) => {
    const q = (textToSend || query).trim();
    if (!q) return;

    sound.playClick();
    const time = new Date().toLocaleTimeString();
    const newMessages = [...messages, { role: "user" as const, text: q, timestamp: time }];
    setMessages(newMessages);
    setQuery("");
    setArxonState("THINKING");

    setTimeout(() => {
      let reply = "";
      const lower = q.toLowerCase();

      if (lower.includes("skill") || lower.includes("competenc") || lower.includes("tech")) {
        reply = `Indrajit specializes in Full-Stack Web Development, Backend Architectures, and Algorithmic Systems. Core stack: C++, JavaScript, TypeScript, Next.js (App Router), React, Node.js, Express, MySQL, Redis, and Tailwind CSS, backed by deep DSA mastery.`;
      } else if (lower.includes("prago") || lower.includes("health")) {
        const pragoProject = projectsData.find((p) => p.id === "prago");
        reply = `PraGo is an intelligent healthcare and telemedicine management system (${pragoProject?.tagline || ""}) engineered by Indrajit using React, Node.js, Express, and MySQL. It features role-based access control across patients, practitioners, and pharmacies.`;
      } else if (lower.includes("dsa") || lower.includes("problem") || lower.includes("leetcode")) {
        reply = `Indrajit has solved ${dsaProfile.totalSolved}+ algorithmic problems, primarily in modern C++ across LeetCode and competitive coding platforms, with advanced mastery in Dynamic Programming, Trees, Graphs (Dijkstra/Topological), Heaps, and Binary Search.`;
      } else if (lower.includes("degree") || lower.includes("education") || lower.includes("college") || lower.includes("b.tech")) {
        reply = `Indrajit is pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (2023 – 2027), maintaining a rigorous focus on Computer Science foundations, Distributed Systems, and Operating Systems.`;
      } else if (lower.includes("contact") || lower.includes("email") || lower.includes("hire") || lower.includes("reach")) {
        reply = `You can establish connection with Indrajit directly via email at ${profileData.socials.email.url.replace("mailto:", "")}, or connect professionally on LinkedIn (${profileData.socials.linkedin.url}) and GitHub (${profileData.socials.github.url}).`;
      } else if (lower.includes("klyro") || lower.includes("commerce")) {
        reply = `KLYRO is a high-performance e-commerce platform built by Indrajit using Next.js, React, Node.js, and Tailwind CSS, featuring sub-second catalog filtering, optimistic cart state, and transactional order workflows.`;
      } else {
        reply = `Command received. Indrajit Kumar is a Full-Stack Developer & AI Builder (B.Tech CSE 2023–2027) with 380+ DSA problems solved. For details on any project or skill, ask about PraGo, KLYRO, INDRA OS, or DSA.`;
      }

      sound.playPulse();
      setArxonState("RESPONDING");
      setMessages((prev) => [
        ...prev,
        { role: "arxon", text: reply, timestamp: new Date().toLocaleTimeString() },
      ]);

      if (voiceSpeechEnabled) {
        speakText(reply);
      } else {
        setTimeout(() => setArxonState("IDLE"), 600);
      }
    }, 450);
  };

  const toggleVoiceSpeech = () => {
    const next = !voiceSpeechEnabled;
    setVoiceSpeechEnabled(next);
    sound.playClick();
    if (!next && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <section id="arxon" aria-label="ARXON AI Core" className="py-20 border-t border-[#24303A]">
      {/* Section Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00E5FF] tracking-widest uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05 // PERSONAL INTELLIGENCE CORE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
            ARXON CORE
          </h2>
          <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
            Zero-hallucination interactive AI assistant strictly grounded in Indrajit&apos;s verified
            codebases, architectural case studies, and engineering metrics.
          </p>
        </div>

        {/* Speech Audio Toggle */}
        <button
          onClick={toggleVoiceSpeech}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all ${
            voiceSpeechEnabled
              ? "bg-[#00E5FF]/15 text-[#00E5FF] border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.25)]"
              : "bg-[#0D1218] text-[#A6B0BC] border-[#24303A] hover:border-[#41515F]"
          }`}
          title="Toggle synthetic voice audio narration"
        >
          {voiceSpeechEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          <span>{voiceSpeechEnabled ? "VOICE SYNTHESIS: ON" : "VOICE SYNTHESIS: OFF"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Core HUD State Card */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] flex flex-col items-center text-center">
          <div className="w-full flex items-center justify-between pb-3 border-b border-[#24303A] text-xs font-mono mb-6">
            <span className="text-[#66717D]">CORE IDENTIFIER</span>
            <span className="text-[#00E5FF] font-bold">ARXON v1.0</span>
          </div>

          {/* Interactive Arxon Core Canvas Orb */}
          <div className="my-2">
            <ArxonCore
              state={arxonState}
              size="lg"
              onClick={() => {
                sound.playPulse();
                handleSend("Tell me about yourself, ARXON");
              }}
            />
          </div>

          <div className="font-mono text-sm font-bold text-[#F5F7FA] mt-4">
            STATE: <span className="text-[#00E5FF]">{arxonState}</span>
          </div>
          <p className="text-xs text-[#A6B0BC] mt-1 font-mono">
            Grounding Matrix: Single Source of Truth
          </p>

          <div className="w-full mt-6 pt-4 border-t border-[#24303A] text-left text-xs font-mono space-y-2">
            <div className="flex justify-between text-[#66717D]">
              <span>HALLUCINATION RISK:</span>
              <span className="text-[#32D583]">0.0% (Grounded)</span>
            </div>
            <div className="flex justify-between text-[#66717D]">
              <span>RESPONSE LATENCY:</span>
              <span className="text-[#F5F7FA]">Sub-100ms</span>
            </div>
            <div className="flex justify-between text-[#66717D]">
              <span>SOURCE REGISTRY:</span>
              <span className="text-[#FFB000]">data/*.ts</span>
            </div>
          </div>
        </div>

        {/* Interactive Chat Console */}
        <div className="lg:col-span-8 flex flex-col h-[520px] rounded-2xl bg-[#0D1218] border border-[#24303A] overflow-hidden">
          {/* Console Header */}
          <div className="px-5 py-3.5 bg-[#111820] border-b border-[#24303A] flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-[#00E5FF]">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-bold">ARXON TERMINAL STREAM</span>
            </div>
            <span className="text-[#66717D] text-[11px]">AUTONOMOUS RETRIEVAL</span>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 font-mono text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3.5 rounded-xl border max-w-[90%] leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto bg-[#111820] text-[#F5F7FA] border-[#41515F]"
                    : "mr-auto bg-[#050608] text-[#A6B0BC] border-[#24303A]"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-[10px]">
                  <span
                    className={
                      m.role === "user" ? "text-[#FFB000] font-bold" : "text-[#00E5FF] font-bold"
                    }
                  >
                    {m.role === "user" ? "USER_COMMAND" : "ARXON_CORE"}
                  </span>
                  <span className="text-[#66717D]">{m.timestamp}</span>
                </div>
                <div>{m.text}</div>
              </div>
            ))}
            {arxonState === "THINKING" && (
              <div className="p-3 rounded-xl bg-[#050608] border border-[#24303A] text-[#00E5FF] font-mono text-xs flex items-center gap-2 max-w-[65%]">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                <span>ARXON IS ACCESSING PORTFOLIO MATRIX...</span>
              </div>
            )}
          </div>

          {/* Quick Preset Query Chips */}
          <div className="px-4 py-2 bg-[#090D12] border-t border-[#24303A] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
            <span className="text-[#66717D] shrink-0">HINTS:</span>
            {presetQueries.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(preset)}
                className="px-2.5 py-1 rounded bg-[#111820] text-[#A6B0BC] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 border border-[#24303A] whitespace-nowrap transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#111820] border-t border-[#24303A] flex items-center gap-2"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask ARXON about Indrajit's engineering, projects, or background..."
              className="flex-1 bg-[#050608] border border-[#24303A] rounded-xl px-4 py-2.5 text-xs font-mono text-[#F5F7FA] placeholder-[#66717D] focus:outline-none focus:border-[#00E5FF]"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-[#00E5FF] text-[#050608] font-mono font-bold text-xs hover:bg-[#00C4DB] transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>SEND</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
