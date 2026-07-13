"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BentoServices from "@/components/BentoServices";
import Playbooks from "@/components/Playbooks";
import TechStack from "@/components/TechStack";
import AboutTimeline from "@/components/AboutTimeline";
import RoiCalculator from "@/components/RoiCalculator";
import Contact from "@/components/Contact";
import CommandPalette from "@/components/CommandPalette";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  // Monitor for global Ctrl+K / Cmd+K triggers
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <InteractiveBackground>
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setPaletteOpen(true)} />

      {/* Core Pages / Sections Container */}
      <main className="relative">
        
        {/* Section 1: GTM Pipeline Hero */}
        <Hero />

        {/* Section 2: Metric counters strip */}
        <Stats />

        {/* Section 3: Offerings grid (Bento) */}
        <BentoServices />

        {/* Section 4: Detailed playbooks tabs */}
        <Playbooks />

        {/* Section 5: Tech stack capability meters */}
        <TechStack />

        {/* Section 6: About & Timeline tracker */}
        <AboutTimeline />

        {/* Section 7: Interactive ROI calculator */}
        <RoiCalculator />

        {/* Section 8: Connect endpoints */}
        <Contact />

      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-brand-border/60 bg-brand-surface/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs font-mono text-brand-muted">
          <div>
            <span>© 2026 Mansi Gaurkar. All system nodes active.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#hero" className="hover:text-white transition-colors">BACK TO TOP</a>
            <span>•</span>
            <a href="/resume" className="hover:text-white text-brand-neon transition-colors">[INTERACTIVE RESUME]</a>
          </div>
        </div>
      </footer>

      {/* Global Command Palette search bar */}
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </InteractiveBackground>
  );
}
