"use client";

import React, { useRef, useEffect, useState } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

export default function AboutTimeline() {
  const [activeIdx, setActiveIdx] = useState(0);

  const careerSteps = [
    {
      role: "Growth Marketing Head",
      company: "KNM Studio, Pune",
      duration: "Feb 2026 – Present",
      type: "work",
      highlights: [
        "Manage end-to-end online and offline marketing initiatives for major brands including Vivo and Godrej.",
        "Lead lead generation initiatives across LinkedIn, Meta Ads, and Google Ads for B2B & B2C acquisition.",
        "Build outreach pipelines and conversion-focused campaign operations to maximize reach and marketing impact."
      ]
    },
    {
      role: "Assistant Digital Marketing Manager",
      company: "Reborn Skin & Hair Clinics, Pune",
      duration: "Sept 2024 – Dec 2025",
      type: "work",
      highlights: [
        "Led performance marketing analytics and reporting for multi-branch healthcare clinics.",
        "Optimized large-scale Meta and Google Ads campaigns managing daily ad budgets of ₹1L+.",
        "Built funnel performance dashboards tracking city-wise leads, CPL, conversions, and ROI."
      ]
    },
    {
      role: "Digital Marketing Executive",
      company: "Pune Aesthetics, Pune",
      duration: "Jan 2023 – Aug 2024",
      type: "work",
      highlights: [
        "Executed and optimized local Meta Ads lead generation campaigns.",
        "Maintained campaign metrics including CPL, CTR, conversion rates, and ROI.",
        "Implemented GA4 and GTM tracking for accurate booking and conversion attribution."
      ]
    },
    {
      role: "Bachelor's Degree",
      company: "RTMNU",
      duration: "Graduated 2022",
      type: "edu",
      highlights: [
        "Completed degree with an aggregate score of 75%.",
        "Focused study in digital communications and marketing fundamentals."
      ]
    }
  ];

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Biography Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
              Behind the Systems
            </h2>
            <div className="h-1 w-20 bg-brand-neon"></div>
            <div className="space-y-4 text-sm text-brand-muted leading-relaxed font-sans">
              <p>
                I am a results-driven Growth Marketing and GTM Systems professional with 2.5+ years of experience in performance marketing, automation engineering, and business data analytics.
              </p>
              <p>
                My core philosophy: <strong className="text-white">Every manual task is a system bug.</strong> I believe modern marketing teams should operate like software systems — lean, automated, data-dense, and highly predictable.
              </p>
              <p>
                Rather than treating ad campaigns and sales operations as separate silos, I bridge the gap by building custom ETL pipelines, API triggers, and AI filters. This guarantees full-funnel visibility from ad click to closed deal.
              </p>
            </div>

            {/* Certifications Card */}
            <div className="glass-card rounded-2xl p-6 border border-brand-border/60">
              <h3 className="font-space font-bold text-sm text-white mb-4 flex items-center space-x-2">
                <Award className="w-4 h-4 text-brand-neon" />
                <span>Verified Credentials</span>
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/5 border border-brand-border/40 text-gray-300">
                  Google Analytics (GA4)
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-brand-border/40 text-gray-300">
                  Meta Ads Performance
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-brand-border/40 text-gray-300">
                  Power BI Business Analytics
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-brand-border/40 text-gray-300">
                  SQL for Data Analysis
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-space font-bold text-lg text-white">Career Progression</h3>
              <div className="flex items-center space-x-2 text-xs font-mono text-brand-muted">
                <Calendar className="w-3.5 h-3.5" />
                <span>Active Track Record</span>
              </div>
            </div>

            <div className="relative border-l border-brand-border pl-6 space-y-12">
              {careerSteps.map((step, idx) => {
                const Icon = step.type === "work" ? Briefcase : GraduationCap;
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveIdx(idx)}
                  >
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[31px] top-0 w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? "bg-brand-neon border-brand-neon scale-110 shadow-[0_0_10px_rgba(0,255,136,0.6)]"
                          : "bg-brand-dark border-brand-border group-hover:border-brand-neon"
                      }`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-brand-dark" : "bg-transparent"}`}></div>
                    </div>

                    {/* Content Block */}
                    <div
                      className={`p-5 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-brand-surface border-brand-neon/40 shadow-[0_0_15px_rgba(0,255,136,0.02)]"
                          : "bg-brand-surface/40 border-brand-border/60 hover:border-brand-border"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div>
                          <h4 className="font-space font-bold text-white text-base">{step.role}</h4>
                          <p className="text-xs font-mono text-brand-neon mt-0.5">{step.company}</p>
                        </div>
                        <span className="text-xs font-mono text-brand-muted mt-2 sm:mt-0">
                          {step.duration}
                        </span>
                      </div>

                      {/* Expandable details */}
                      <div
                        className={`mt-4 space-y-2 border-t border-brand-border/40 pt-4 transition-all duration-300 overflow-hidden ${
                          isActive ? "max-h-60 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                      >
                        {step.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start space-x-2 text-xs text-brand-muted font-sans">
                            <span className="text-brand-neon font-mono mt-0.5">•</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
