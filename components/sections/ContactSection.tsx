"use client";

import React, { useState } from "react";
import { profileData } from "@/data";
import { Send, Mail, Code, FileDown, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"IDLE" | "TRANSMITTING" | "SUCCESS">("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("TRANSMITTING");
    setTimeout(() => {
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" aria-label="Establish Connection" className="py-20 border-t border-[#24303A]">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#FFB000] tracking-widest uppercase mb-1">
          <Send className="w-3.5 h-3.5" />
          <span>06 // TRANSMISSION CHANNEL</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold font-mono text-[#F5F7FA]">
          ESTABLISH CONNECTION
        </h2>
        <p className="text-sm text-[#A6B0BC] mt-2 max-w-xl">
          Direct communication gateway for engineering roles, technical collaborations,
          and architectural discussions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Resume */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#0D1218] border border-[#24303A] space-y-4">
            <h3 className="text-xs font-mono font-bold text-[#FFB000] uppercase tracking-wider">
              PRIMARY TRANSMISSION VECTORS
            </h3>

            <a
              href={profileData.socials.email.url}
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#111820] border border-[#24303A] hover:border-[#FFB000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050608] text-[#FFB000]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#F5F7FA]">DIRECT EMAIL</div>
                  <div className="text-xs text-[#A6B0BC]">{profileData.socials.email.url.replace("mailto:", "")}</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#FFB000]">SEND ›</span>
            </a>

            <a
              href={profileData.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#111820] border border-[#24303A] hover:border-[#FFB000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050608] text-[#F5F7FA]">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#F5F7FA]">GITHUB MATRIX</div>
                  <div className="text-xs text-[#A6B0BC]">{profileData.socials.github.handle}</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#A6B0BC] group-hover:text-[#F5F7FA]">OPEN ›</span>
            </a>

            <a
              href={profileData.socials.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#111820] border border-[#24303A] hover:border-[#FFB000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050608] text-[#00E5FF]">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#F5F7FA]">LINKEDIN NETWORK</div>
                  <div className="text-xs text-[#A6B0BC]">{profileData.socials.linkedin.handle}</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#A6B0BC] group-hover:text-[#F5F7FA]">OPEN ›</span>
            </a>

            <a
              href={profileData.socials.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-[#111820] border border-[#24303A] hover:border-[#FFB000] transition-colors group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#050608] text-[#F7B955]">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#F5F7FA]">LEETCODE / DSA</div>
                  <div className="text-xs text-[#A6B0BC]">380+ Algorithmic Challenges</div>
                </div>
              </div>
              <span className="text-xs font-mono text-[#A6B0BC] group-hover:text-[#F5F7FA]">OPEN ›</span>
            </a>
          </div>

          {/* Resume Download Card */}
          <div className="p-5 rounded-2xl bg-[#111820] border border-[#FFB000]/40 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-[#FFB000]">OFFICIAL RESUME</div>
              <div className="text-xs text-[#A6B0BC] mt-0.5">Verified engineering credentials</div>
            </div>
            <a
              href="/resume.pdf"
              className="px-4 py-2 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-mono font-bold text-xs flex items-center gap-1.5 transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>DOWNLOAD</span>
            </a>
          </div>
        </div>

        {/* Right Column: Encrypted Message Form */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0D1218] border border-[#24303A]">
          <h3 className="text-xs font-mono font-bold text-[#F5F7FA] uppercase tracking-wider mb-6 flex items-center justify-between">
            <span>TRANSMIT DISPATCH</span>
            <span className="text-[#32D583] text-[11px] font-normal">CHANNEL OPEN</span>
          </h3>

          {status === "SUCCESS" ? (
            <div className="p-8 rounded-xl bg-[#111820] border border-[#32D583]/50 text-center space-y-3 font-mono">
              <CheckCircle2 className="w-10 h-10 text-[#32D583] mx-auto" />
              <div className="text-sm font-bold text-[#F5F7FA]">TRANSMISSION LOGGED</div>
              <p className="text-xs text-[#A6B0BC]">
                Your message has been safely received. Indrajit will respond via email shortly.
              </p>
              <button
                onClick={() => setStatus("IDLE")}
                className="mt-4 px-4 py-2 rounded-lg bg-[#050608] text-[#FFB000] border border-[#24303A] text-xs"
              >
                TRANSMIT ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-[#A6B0BC]">NAME / SENDER</label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name..."
                    className="w-full bg-[#111820] border border-[#24303A] rounded-xl px-4 py-3 text-xs text-[#F5F7FA] placeholder-[#66717D] focus:outline-none focus:border-[#FFB000]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-[#A6B0BC]">RETURN EMAIL</label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com..."
                    className="w-full bg-[#111820] border border-[#24303A] rounded-xl px-4 py-3 text-xs text-[#F5F7FA] placeholder-[#66717D] focus:outline-none focus:border-[#FFB000]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="text-[#A6B0BC]">SUBJECT / REASON</label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Engineering role, collaboration, or consultation..."
                  className="w-full bg-[#111820] border border-[#24303A] rounded-xl px-4 py-3 text-xs text-[#F5F7FA] placeholder-[#66717D] focus:outline-none focus:border-[#FFB000]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-[#A6B0BC]">MESSAGE PAYLOAD</label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Provide transmission details..."
                  className="w-full bg-[#111820] border border-[#24303A] rounded-xl px-4 py-3 text-xs text-[#F5F7FA] placeholder-[#66717D] focus:outline-none focus:border-[#FFB000] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "TRANSMITTING"}
                className="w-full py-3.5 rounded-xl bg-[#FFB000] text-[#050608] hover:bg-[#E09B00] font-bold text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,176,0,0.2)] disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>
                  {status === "TRANSMITTING" ? "SENDING TRANSMISSION..." : "SEND TRANSMISSION"}
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
