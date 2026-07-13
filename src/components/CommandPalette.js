"use client";

import React, { useState, useEffect, useRef } from "react";
import { Search, Terminal, FileText, ArrowRight, X, Sparkles, Cpu, TrendingUp, BarChart, ExternalLink } from "lucide-react";
import { soundEffects } from "@/utils/sound";

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { name: "View GTM Pipeline Engine", href: "#hero", category: "Navigation", icon: Terminal },
    { name: "Healthcare Lead Engine Playbook", href: "#playbooks", category: "Playbooks", icon: TrendingUp },
    { name: "AI Lead Enrichment Engine Playbook", href: "#playbooks", category: "Playbooks", icon: Cpu },
    { name: "Predictive LTV Dashboard Playbook", href: "#playbooks", category: "Playbooks", icon: BarChart },
    { name: "GTM SaaS Playbook", href: "#playbooks", category: "Playbooks", icon: FileText },
    { name: "Inspect Technical Stack", href: "#stack", category: "Navigation", icon: Sparkles },
    { name: "Check Career Timeline", href: "#timeline", category: "Navigation", icon: FileText },
    { name: "Simulate ROI Savings", href: "#roi", category: "Navigation", icon: BarChart },
    { name: "Open Connections Form", href: "#contact", category: "Navigation", icon: Terminal },
    { name: "Open Interactive Resume", href: "/resume", category: "External", icon: FileText },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  // Reset selection index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Focus input and play sound on open
  useEffect(() => {
    if (isOpen) {
      soundEffects.openModal();
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSelectCommand = (cmd) => {
    if (!cmd) return;
    soundEffects.execute();
    onClose();

    if (cmd.href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        // Navigate to home page with hash
        window.location.href = "/" + cmd.href;
      } else {
        // Smooth scroll on same page
        const el = document.querySelector(cmd.href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = cmd.href;
        }
      }
    } else {
      window.location.href = cmd.href;
    }
  };

  // Handle keyboard navigation (ESC, ArrowUp, ArrowDown, Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = (prev + 1) % (filteredCommands.length || 1);
          soundEffects.nodeSwitch();
          return next;
        });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => {
          const next = (prev - 1 + (filteredCommands.length || 1)) % (filteredCommands.length || 1);
          soundEffects.nodeSwitch();
          return next;
        });
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleSelectCommand(filteredCommands[selectedIndex]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-sm animate-fade-in">
      {/* Backdrop overlay trigger click close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg glass-card border border-brand-neon/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between max-h-[440px] glow-neon">
        {/* Search header */}
        <div className="flex items-center space-x-3 px-4 py-3.5 border-b border-brand-border/60 bg-brand-surface/60">
          <Search className="w-4 h-4 text-brand-neon animate-pulse" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-sm text-white font-sans placeholder-brand-muted focus:ring-0"
            placeholder="Type a command or navigate (↑/↓ + Enter)..."
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-white/5 text-brand-muted hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command list content */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => {
              const CmdIcon = cmd.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={index}
                  onClick={() => handleSelectCommand(cmd)}
                  onMouseEnter={() => {
                    if (selectedIndex !== index) {
                      setSelectedIndex(index);
                      soundEffects.nodeSwitch();
                    }
                  }}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-150 group text-sm font-sans ${
                    isSelected
                      ? "bg-brand-neon/15 border border-brand-neon/40 text-white shadow-[0_0_15px_rgba(0,255,136,0.1)] translate-x-1"
                      : "hover:bg-brand-neon/10 border border-transparent hover:border-brand-neon/20 text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <CmdIcon className={`w-4 h-4 transition-colors ${isSelected ? "text-brand-neon" : "text-brand-muted group-hover:text-brand-neon"}`} />
                    <span className="font-medium">{cmd.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border transition-colors ${
                      isSelected
                        ? "bg-brand-neon/20 border-brand-neon/50 text-brand-neon"
                        : "text-brand-muted bg-white/5 border-brand-border group-hover:border-brand-neon/30 group-hover:text-brand-neon"
                    }`}>
                      {cmd.category}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-brand-neon animate-pulse" />}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-xs font-mono text-brand-muted">
              [No command endpoints matched "{query}"]
            </div>
          )}
        </div>

        {/* Footer controls info */}
        <div className="px-4 py-2 border-t border-brand-border/40 bg-brand-surface/40 flex justify-between items-center text-[10px] font-mono text-brand-muted">
          <div className="flex items-center space-x-3">
            <span>↑↓ Navigate</span>
            <span>↵ Execute</span>
          </div>
          <span>Esc to Exit</span>
        </div>

      </div>
    </div>
  );
}
