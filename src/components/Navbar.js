"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu, Volume2, VolumeX } from "lucide-react";
import { soundEffects } from "@/utils/sound";

export default function Navbar({ onOpenCommandPalette }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    soundEffects.click();
    if (href.startsWith("#") && typeof window !== "undefined") {
      if (window.location.pathname !== "/") {
        e.preventDefault();
        window.location.href = "/" + href;
      } else {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      }
    }
  };

  const toggleSound = () => {
    const isNowMuted = soundEffects.toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      soundEffects.execute();
    }
  };

  const navLinks = [
    { name: "Engine", href: "#hero" },
    { name: "Playbooks", href: "#playbooks" },
    { name: "Arsenal", href: "#stack" },
    { name: "Timeline", href: "#timeline" },
    { name: "ROI Calculator", href: "#roi" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#04060B]/85 backdrop-blur-xl border-b border-white/[0.06] py-3 shadow-2xl shadow-black"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Cyber-Architectural Monogram Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center space-x-3 group text-left select-none"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.12] group-hover:border-brand-neon/60 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_15px_rgba(0,255,136,0.15)]">
              <span className="font-mono text-xs font-bold text-brand-neon group-hover:scale-110 transition-transform">
                ⊕
              </span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-space font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-neon transition-colors">
                  mansi<span className="text-brand-neon">.gtm</span>
                </span>
                <span className="inline-flex items-center px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase bg-brand-neon/10 text-brand-neon border border-brand-neon/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-neon mr-1 animate-pulse"></span>
                  v3.4
                </span>
              </div>
              <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-300 transition-colors hidden sm:block">
                // Revenue Automation Architect
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-brand-muted hover:text-white transition-colors relative group py-1"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-neon shadow-[0_0_8px_rgba(0,255,136,0.6)] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Call to Action + Status */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className={`p-2 rounded-lg border text-xs font-mono transition-all flex items-center space-x-1.5 ${
                !muted
                  ? "bg-brand-neon/10 border-brand-neon/40 text-brand-neon hover:bg-brand-neon/20 shadow-[0_0_10px_rgba(0,255,136,0.15)]"
                  : "bg-white/5 border-brand-border text-brand-muted hover:text-white"
              }`}
              title={muted ? "Unmute sound effects" : "Mute sound effects"}
            >
              {!muted ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden lg:inline">{!muted ? "AUDIO ON" : "MUTED"}</span>
            </button>

            {/* CMD/Ctrl + K Hint */}
            <button
              onClick={() => {
                soundEffects.click();
                onOpenCommandPalette();
              }}
              className="flex items-center space-x-2 px-3 py-1.5 text-xs text-brand-muted hover:text-white bg-white/5 border border-brand-border hover:border-brand-neon/40 rounded-lg transition-colors font-mono"
              title="Search and navigate"
            >
              <Terminal className="w-3.5 h-3.5 text-brand-neon" />
              <span>⌘K</span>
            </button>

            <a
              href="/resume"
              onClick={() => soundEffects.click()}
              className="text-xs font-mono font-bold text-brand-dark bg-gradient-to-r from-brand-neon to-emerald-400 hover:from-emerald-400 hover:to-brand-neon px-4 py-2 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,136,0.4)] hover:-translate-y-0.5"
            >
              [Interactive Resume]
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleSound}
              className="p-2 text-brand-muted bg-white/5 border border-brand-border rounded-lg text-xs"
            >
              {!muted ? <Volume2 className="w-4 h-4 text-brand-neon" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundEffects.click();
                onOpenCommandPalette();
              }}
              className="p-1.5 text-brand-muted bg-white/5 border border-brand-border rounded-lg font-mono text-xs"
            >
              ⌘K
            </button>
            <button
              onClick={() => {
                soundEffects.click();
                setIsOpen(!isOpen);
              }}
              className="text-gray-400 hover:text-white focus:outline-none p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-brand-surface/95 backdrop-blur-xl border-b border-brand-border p-6 transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-lg font-medium text-gray-200 hover:text-brand-neon transition-colors py-2 flex items-center justify-between border-b border-brand-border/40"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-brand-muted">→</span>
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-brand-border">
              <span className="text-xs font-mono text-gray-300">SYSTEM AUDIO</span>
              <button
                onClick={toggleSound}
                className={`px-3 py-1 rounded text-xs font-mono ${
                  !muted ? "bg-brand-neon text-brand-dark font-bold" : "bg-white/10 text-brand-muted"
                }`}
              >
                {!muted ? "ENABLED" : "MUTED"}
              </button>
            </div>
            <a
              href="/resume"
              onClick={() => {
                soundEffects.click();
                setIsOpen(false);
              }}
              className="block text-center text-sm font-mono font-bold text-brand-dark bg-brand-neon hover:bg-brand-neon-hover py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(0,255,136,0.3)]"
            >
              Interactive Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
