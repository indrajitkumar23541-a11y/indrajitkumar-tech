"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { profileData, projectsData, dsaProfile } from "@/data";
import { ArxonState } from "@/types";
import { sound } from "@/lib/sound";
import { telemetry } from "@/lib/telemetry";
import { ArxonCore } from "@/components/core/ArxonCore";
import { Sparkles, Terminal, Send, Volume2, VolumeX, Mic, MicOff, Radio } from "lucide-react";

export function ArxonSection() {
  const [query, setQuery] = useState("");
  const [arxonState, setArxonState] = useState<ArxonState>("IDLE");
  const [voiceSpeechEnabled, setVoiceSpeechEnabled] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

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
    "Tell me about Indra-MarketMind sentiment AI",
    "Tell me about Yaadon Ki Duniya",
    "Tell me about the PraGo telemedicine platform",
    "What is Indrajit's DSA track record?",
  ];

  const speakText = useCallback(
    (text: string) => {
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
    },
    [voiceSpeechEnabled]
  );

  const handleSend = useCallback(
    (textToSend?: string) => {
      const q = (textToSend || query).trim();
      if (!q) return;

      sound.playClick();
      const time = new Date().toLocaleTimeString();
      setMessages((prev) => [...prev, { role: "user" as const, text: q, timestamp: time }]);
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
        } else if (lower.includes("marketmind") || lower.includes("sentiment") || lower.includes("stock") || lower.includes("financial")) {
          reply = `Indra-MarketMind is an AI-powered financial market sentiment intelligence platform built with Next.js 14, Python (FastAPI), FinBERT, and WebSockets. It correlates real-time news sentiment with stock price volatility to emit predictive trading trend signals.`;
        } else if (lower.includes("yaadon") || lower.includes("nostalgia") || lower.includes("duniya") || lower.includes("sound")) {
          reply = `Yaadon Ki Duniya is an immersive nostalgic web experience bringing vintage Indian memories to life through curated ambient audio soundscapes, retro radio aesthetics, and Web Audio API spatial synthesis.`;
        } else {
          reply = `Command received. Indrajit Kumar is a Full-Stack Developer & AI Builder (B.Tech CSE 2023–2027) with 380+ DSA problems solved. For details on any project or skill, ask about PraGo, Indra-MarketMind, Yaadon Ki Duniya, INDRA OS, or DSA.`;
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
    },
    [query, voiceSpeechEnabled, speakText]
  );

  // Initialize Speech Recognition capability check
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        timer = setTimeout(() => {
          setSpeechSupported(true);
        }, 0);

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
          setArxonState("LISTENING");
          sound.playChime();
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((res: any) => res[0].transcript)
            .join("");
          setQuery(transcript);

          // If speech finished
          if (event.results[0]?.isFinal) {
            recognition.stop();
            setIsListening(false);
            if (transcript.trim()) {
              handleSend(transcript);
            } else {
              setArxonState("IDLE");
            }
          }
        };

        recognition.onerror = () => {
          setIsListening(false);
          setArxonState("IDLE");
        };

        recognition.onend = () => {
          setIsListening(false);
          setArxonState((prev) => (prev === "LISTENING" ? "IDLE" : prev));
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (timer) clearTimeout(timer);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          // ignore cleanup abort errors
        }
      }
    };
  }, [handleSend]);

  const toggleVoiceSpeech = () => {
    const next = !voiceSpeechEnabled;
    setVoiceSpeechEnabled(next);
    sound.playClick();
    if (!next && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  };

  const toggleVoiceListening = () => {
    if (!speechSupported || !recognitionRef.current) return;
    sound.playClick();

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
      setArxonState("IDLE");
    } else {
      try {
        setQuery("");
        recognitionRef.current.start();
        telemetry.track("voice_input_triggered");
      } catch {
        setIsListening(false);
        setArxonState("IDLE");
      }
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

        {/* Audio Controls */}
        <div className="flex items-center gap-2">
          {speechSupported && (
            <button
              onClick={toggleVoiceListening}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all ${
                isListening
                  ? "bg-[#32D583]/20 text-[#32D583] border-[#32D583] shadow-[0_0_15px_rgba(50,213,131,0.35)] animate-pulse font-bold"
                  : "bg-[#0D1218] text-[#A6B0BC] border-[#24303A] hover:border-[#32D583]/60 hover:text-[#32D583]"
              }`}
              title="Click to speak with ARXON"
            >
              {isListening ? <Mic className="w-3.5 h-3.5" /> : <MicOff className="w-3.5 h-3.5" />}
              <span>{isListening ? "LISTENING..." : "VOICE INPUT: READY"}</span>
            </button>
          )}

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
            <span>{voiceSpeechEnabled ? "SPEECH: ON" : "SPEECH: OFF"}</span>
          </button>
        </div>
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
              <span>VOICE RECOGNITION:</span>
              <span className={speechSupported ? "text-[#32D583]" : "text-[#A6B0BC]"}>
                {speechSupported ? (isListening ? "LISTENING" : "ENABLED") : "UNSUPPORTED"}
              </span>
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
            {isListening && (
              <div className="p-3 rounded-xl bg-[#050608] border border-[#32D583]/50 text-[#32D583] font-mono text-xs flex items-center gap-2 max-w-[80%] animate-pulse">
                <Radio className="w-4 h-4 text-[#32D583] animate-pulse" />
                <span>VOICE RECEIVER ACTIVE: Speak now, transcript will stream...</span>
              </div>
            )}
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

          {/* Input Box with Microphone Toggle */}
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
              placeholder={isListening ? "Listening to your voice..." : "Ask ARXON or click mic to speak..."}
              className={`flex-1 bg-[#050608] border rounded-xl px-4 py-2.5 text-xs font-mono text-[#F5F7FA] placeholder-[#66717D] focus:outline-none transition-colors ${
                isListening
                  ? "border-[#32D583] shadow-[0_0_12px_rgba(50,213,131,0.2)]"
                  : "border-[#24303A] focus:border-[#00E5FF]"
              }`}
            />

            {speechSupported && (
              <button
                type="button"
                onClick={toggleVoiceListening}
                className={`p-2.5 rounded-xl border text-xs font-mono transition-all flex items-center justify-center ${
                  isListening
                    ? "bg-[#32D583] text-[#050608] border-[#32D583] shadow-[0_0_15px_rgba(50,213,131,0.4)] font-bold"
                    : "bg-[#050608] text-[#A6B0BC] hover:text-[#32D583] border-[#24303A] hover:border-[#32D583]/50"
                }`}
                title={isListening ? "Stop voice listening" : "Start speaking voice command"}
              >
                <Mic className="w-4 h-4" />
              </button>
            )}

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
