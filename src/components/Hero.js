"use client";

import React, { useState, useEffect } from "react";
import { Play, Terminal, ArrowRight, CheckCircle2, Server, Cpu, Database, Mail, Award, Zap, Sparkles, ShieldCheck, Volume2 } from "lucide-react";
import { soundEffects } from "@/utils/sound";

export default function Hero() {
  const [activeNode, setActiveNode] = useState(0);

  // Cycle through automation pipeline nodes to show "live data flow"
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleNodeClick = (index) => {
    soundEffects.nodeSwitch();
    setActiveNode(index);
  };

  const pipelineNodes = [
    { id: 0, label: "Meta Ad Lead", icon: Play, desc: "Lead triggers form & captures intent", color: "text-brand-neon border-brand-neon" },
    { id: 1, label: "Make.com Webhook", icon: Zap, desc: "Instant raw capture & validation", color: "text-amber-400 border-amber-400" },
    { id: 2, label: "OpenAI Agent", icon: Cpu, desc: "AI enrichment & personalization", color: "text-pink-400 border-pink-400" },
    { id: 3, label: "HubSpot CRM", icon: Database, desc: "Lead scored & pipeline assigned", color: "text-orange-400 border-orange-400" },
    { id: 4, label: "Outreach Sequence", icon: Mail, desc: "AI tailored email sequence triggered", color: "text-indigo-400 border-indigo-400" },
    { id: 5, label: "Pipeline Created", icon: Award, desc: "Sales booking auto-scheduled", color: "text-brand-neon border-brand-neon" },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Gradient Mesh with Electric Pink & Neon Green */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-brand-neon/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse duration-[8000ms]"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-pink-500/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse duration-[6000ms]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Copy & Founder Profile Card */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            
            {/* Bold Founder Badge / Status */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-border/80 shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-gray-200 uppercase tracking-wider">
                  GTM Engineer & Automation Architect
                </span>
              </div>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI × REVENUE ENGINES</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
                I build automated <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-cyan-400 to-indigo-400">
                  GTM Engines
                </span> <br />
                that scale revenue.
              </h1>
              <p className="text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed font-sans">
                I replace fragile manual marketing with high-leverage data pipelines and AI-driven workflows. From raw ad clicks to predictive LTV dashboards, I turn acquisition spend into an autonomous profit center.
              </p>
            </div>

            {/* Bold Executive Profile Card Mockup */}
            <div className="glass-card rounded-2xl p-4 border border-white/[0.08] group-hover:border-brand-neon/40 transition-all duration-300 shadow-xl max-w-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 rounded-full blur-2xl pointer-events-none"></div>
              <div className="flex items-center space-x-4 relative z-10">
                {/* Profile Image with Cyber Border */}
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 group-hover:border-brand-neon transition-colors duration-300 shadow-[0_0_20px_rgba(0,255,136,0.15)] bg-brand-elevated">
                    <img
                      src="/1772430818318.jpg"
                      alt="Mansi Gaurkar - GTM Architect"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-brand-dark rounded-full p-1 border border-white/20">
                    <ShieldCheck className="w-4 h-4 text-brand-neon" />
                  </div>
                </div>

                {/* Profile Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-space font-bold text-base sm:text-lg text-white truncate">Mansi Gaurkar</h3>
                    <span className="text-[10px] font-mono bg-brand-neon/10 text-brand-neon border border-brand-neon/30 px-2 py-0.5 rounded font-bold uppercase shrink-0">
                      Top 1% Logic
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">// Revenue & Automation Architect</p>
                  <div className="flex items-center space-x-3 mt-2 pt-2 border-t border-white/[0.08] text-[11px] font-mono text-gray-300">
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse"></span>
                      <span>₹1L+/day Budget</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>10k+ Leads/mo</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <a
                href="#contact"
                onClick={() => soundEffects.click()}
                className="flex items-center justify-center space-x-2 text-sm font-mono font-bold text-brand-dark bg-gradient-to-r from-brand-neon to-emerald-400 hover:from-emerald-400 hover:to-brand-neon px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:-translate-y-0.5"
              >
                <span>[Book discovery call]</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#playbooks"
                onClick={() => soundEffects.click()}
                className="flex items-center justify-center space-x-2 text-sm font-mono font-bold text-white hover:text-brand-neon bg-white/5 hover:bg-white/10 border border-brand-border hover:border-brand-neon/40 px-6 py-4 rounded-xl transition-all duration-300"
              >
                <span>[Explore playbooks]</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-brand-border/60 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Managed Budget</p>
                <p className="text-xl font-bold font-mono text-white mt-1">₹1L+<span className="text-brand-neon text-sm font-normal">/day</span></p>
              </div>
              <div>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Acquisition Velocity</p>
                <p className="text-xl font-bold font-mono text-white mt-1">10k+<span className="text-pink-400 text-sm font-normal">/mo</span></p>
              </div>
              <div>
                <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">Automation Stack</p>
                <p className="text-xl font-bold font-mono text-white mt-1">15+<span className="text-indigo-400 text-sm font-normal"> Tools</span></p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Flow Visualizer Side */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full max-w-xl glass-card rounded-2xl p-6 border border-brand-border/80 shadow-2xl relative overflow-hidden group">
              
              {/* Card top toolbar */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-brand-muted">
                  <Terminal className="w-3.5 h-3.5 text-brand-neon animate-pulse" />
                  <span className="text-gray-300">gtm-pipeline-orchestration.sh</span>
                </div>
                <div className="text-[10px] font-mono text-brand-muted bg-white/5 px-2 py-0.5 rounded border border-brand-border/50">
                  INTERACTIVE
                </div>
              </div>

              {/* Automation Node flowchart list */}
              <div className="space-y-3.5 relative z-10">
                {pipelineNodes.map((node, index) => {
                  const IconComponent = node.icon;
                  const isActive = activeNode === index;
                  const isPassed = index < activeNode;

                  return (
                    <div
                      key={node.id}
                      onClick={() => handleNodeClick(index)}
                      className="relative cursor-pointer select-none group/node"
                    >
                      {/* Connection Line */}
                      {index < pipelineNodes.length - 1 && (
                        <div className="absolute left-6 top-11 w-0.5 h-6 bg-brand-border/80">
                          {isActive && (
                            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-brand-neon to-pink-500 shadow-[0_0_8px_#00ff88] animate-pulse"></div>
                          )}
                        </div>
                      )}

                      {/* Node Body */}
                      <div
                        className={`flex items-center p-3.5 rounded-xl transition-all duration-300 border ${
                          isActive
                            ? "bg-gradient-to-r from-brand-neon/15 via-pink-500/10 to-transparent border-brand-neon/60 translate-x-2 shadow-[0_0_20px_rgba(0,255,136,0.12)]"
                            : isPassed
                            ? "bg-brand-surface border-brand-border hover:border-brand-neon/30 opacity-95"
                            : "bg-brand-surface/50 border-brand-border/50 hover:border-brand-border opacity-65"
                        }`}
                      >
                        {/* Icon Indicator */}
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover/node:scale-110 ${
                            isActive
                              ? "bg-brand-neon/20 border-brand-neon text-brand-neon shadow-[0_0_12px_rgba(0,255,136,0.3)]"
                              : isPassed
                              ? "bg-pink-500/10 border-pink-500/30 text-pink-400"
                              : "bg-white/5 border-brand-border text-brand-muted"
                          }`}
                        >
                          <IconComponent className="w-4.5 h-4.5" />
                        </div>

                        {/* Text */}
                        <div className="ml-4 flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-sm font-space font-bold truncate ${
                                isActive ? "text-white" : "text-gray-300 group-hover/node:text-white"
                              }`}
                            >
                              {node.label}
                            </span>
                            <div className="flex items-center space-x-2">
                              {isPassed && (
                                <CheckCircle2 className="w-4 h-4 text-brand-neon" />
                              )}
                              {isActive && (
                                <span className="text-[10px] font-mono bg-brand-neon text-brand-dark font-bold px-2 py-0.5 rounded shadow-sm">
                                  RUNNING
                                </span>
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-brand-muted mt-0.5 font-mono truncate">{node.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Console log outputs */}
              <div className="mt-5 p-3.5 bg-brand-dark/95 border border-brand-border/80 rounded-xl font-mono text-[11px] text-brand-muted h-28 overflow-y-hidden flex flex-col justify-end shadow-inner">
                <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1 pb-1 border-b border-brand-border/40">
                  <span>SYSTEM TERMINAL v3.4</span>
                  <span>STATUS: HEALTHY</span>
                </div>
                {activeNode === 0 && <p className="text-brand-neon animate-pulse">[META-LEAD] New conversion captured: Campaign_ID #9941 (Healthcare)</p>}
                {activeNode === 1 && <p className="text-amber-400 animate-pulse">[MAKE-WEBHOOK] Payload parsed {'->'} 12 fields validated. Triggering AI...</p>}
                {activeNode === 2 && <p className="text-pink-400 animate-pulse">[AI-AGENT] OpenAI GPT-4o enriched company size {'&'} persona match: 94%</p>}
                {activeNode === 3 && <p className="text-orange-400 animate-pulse">[HUBSPOT-CRM] Contact updated: Lead Score = 94/100 {'->'} Priority tier</p>}
                {activeNode === 4 && <p className="text-indigo-400 animate-pulse">[OUTREACH] Sequence triggered: &quot;AI Personalization Blueprint #4&quot;</p>}
                {activeNode === 5 && <p className="text-emerald-400 animate-pulse">[REVENUE] Discovery call booked! Pipeline value added: $12,500</p>}
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] font-mono text-gray-500 hover:text-gray-400 transition-colors">
                  💡 Click any pipeline step above to interact manually and test sound output
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
