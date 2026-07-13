"use client";

import React from "react";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { soundEffects } from "@/utils/sound";

export default function ResumePage() {
  const handlePrint = () => {
    soundEffects.execute();
    window.print();
  };

  const skills = [
    { cat: "GTM Orchestration", items: ["API Integrations", "Make.com", "Zapier", "Webhooks", "Lead Scoring", "Pipeline Syncing"] },
    { cat: "Acquisition & Paid", items: ["Meta Ads", "Google Ads", "Audience Targeting", "CPL Optimization", "Funnel Mapping"] },
    { cat: "Data & Analytics", items: ["GA4", "GTM Event Tracking", "SQL & BigQuery", "Power Query", "Python (Pandas)", "Power BI"] },
    { cat: "Strategy", items: ["Competitor Analysis", "Attribution Modeling", "Onboarding Sequences", "A/B Testing", "CRO"] },
  ];

  const experiences = [
    {
      role: "Growth Marketing Head",
      company: "KNM Studio, Pune",
      duration: "Feb 2026 – Present",
      bullets: [
        "Manage end-to-end online and offline marketing initiatives for major brands including Vivo and Godrej, coordinating campaign strategy, execution, and performance tracking to maximize reach and marketing impact.",
        "Led lead generation initiatives across LinkedIn, Meta Ads, and Google Ads for B2B and B2C acquisition.",
        "Built outreach pipelines and conversion-focused campaigns to generate qualified opportunities.",
        "Conducted audience research and campaign optimization to improve lead quality and conversion rates.",
        "Tracked KPIs and refined growth strategies to maximize ROI and scalability."
      ]
    },
    {
      role: "Assistant Digital Marketing Manager",
      company: "Reborn Skin & Hair Clinics, Pune",
      duration: "Sept 2024 – Dec 2025",
      bullets: [
        "Led performance marketing analytics and reporting for multi-branch healthcare clinics.",
        "Optimized large-scale Meta and Google Ads campaigns through daily monitoring and analysis, managing ad budgets exceeding ₹1L+/day across campaigns.",
        "Built leadership dashboards for funnel performance, ROI attribution, and revenue tracking.",
        "Integrated CRM, GA4, and ad platforms to improve end-to-end funnel visibility."
      ]
    },
    {
      role: "Digital Marketing Executive",
      company: "Pune Aesthetics, Pune",
      duration: "Jan 2023 – Aug 2024",
      bullets: [
        "Executed and optimized Meta Ads lead-generation campaigns across local markets.",
        "Managed campaign metrics including CPL, CTR, conversion rate, and ROI.",
        "Implemented GA4 and GTM for accurate campaign tracking and reporting.",
        "Collaborated with sales teams to align marketing efforts with booking targets."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans print:bg-white print:text-black py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Controls Bar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <a
          href="/"
          onClick={() => soundEffects.click()}
          className="flex items-center space-x-2 text-sm font-mono text-brand-muted hover:text-brand-neon transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>[Back to Home]</span>
        </a>

        <button
          onClick={handlePrint}
          className="flex items-center space-x-2 text-xs font-mono font-bold text-brand-dark bg-brand-neon hover:bg-brand-neon-hover px-4 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]"
        >
          <Printer className="w-4 h-4" />
          <span>[PRINT / SAVE PDF]</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto glass-card border-brand-border/60 rounded-2xl p-8 sm:p-12 shadow-2xl print:border-none print:shadow-none print:bg-transparent print:p-0">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-brand-border/60 print:border-black/20 pb-8 space-y-4 md:space-y-0">
          <div>
            <h1 className="font-space font-bold text-3xl sm:text-4xl text-white print:text-black tracking-tight uppercase">
              Mansi Gaurkar
            </h1>
            <p className="text-sm font-mono font-bold text-brand-neon mt-2 tracking-wide uppercase">
              GTM & Revenue Automation Architect
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-brand-muted print:text-black/80">
            <div className="flex items-center space-x-2">
              <Mail className="w-3.5 h-3.5 text-brand-neon print:text-black" />
              <a href="mailto:gaurkarmansi@gmail.com" className="hover:text-white print:hover:text-black transition-colors">
                gaurkarmansi@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-3.5 h-3.5 text-brand-neon print:text-black" />
              <a href="tel:+918788119411" className="hover:text-white print:hover:text-black transition-colors">
                +91 8788119411
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <LinkedinIcon className="w-3.5 h-3.5 text-brand-neon print:text-black" />
              <a
                href="https://linkedin.com/in/mansi-gaurkar-4286b6398"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white print:hover:text-black transition-colors"
              >
                linkedin.com/in/mansi-gaurkar
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-brand-neon print:text-black" />
              <span>Pune, India</span>
            </div>
          </div>
        </div>

        {/* Summary Block */}
        <div className="py-8 border-b border-brand-border/60 print:border-black/20 space-y-3">
          <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
            // Operational Executive Summary
          </h2>
          <p className="text-sm text-brand-muted print:text-black/80 leading-relaxed font-sans">
            Results-driven Growth Marketing and GTM Systems professional with 2.5+ years of experience in performance marketing, automated lead generation, attribution modeling, and data pipelines. Proven track record of managing daily ad spend of ₹1L+ across Google and Meta, generating 10,000+ qualified leads per month, and scaling ROI visibility by building end-to-end automation pipelines and dashboard analytics.
          </p>
        </div>

        {/* Skills Block */}
        <div className="py-8 border-b border-brand-border/60 print:border-black/20 space-y-4">
          <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
            // Core Competencies & Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((s, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xs font-mono font-bold text-brand-neon print:text-black border-b border-brand-border/40 print:border-black/10 pb-1">
                  {s.cat}
                </h3>
                <ul className="space-y-1.5">
                  {s.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-xs text-brand-muted print:text-black/80 flex items-center space-x-1.5 font-sans">
                      <span className="text-brand-neon print:text-black font-mono">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Experience */}
        <div className="py-8 border-b border-brand-border/60 print:border-black/20 space-y-6">
          <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
            // Work History
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="font-space font-bold text-base text-white print:text-black">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-mono text-brand-neon print:text-black mt-0.5 font-bold uppercase tracking-wider">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-brand-muted print:text-black/80 mt-1 sm:mt-0">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2 pl-4 border-l border-brand-border/40 print:border-black/10">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="text-xs text-brand-muted print:text-black/80 leading-relaxed font-sans list-disc list-outside ml-3">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div className="py-8 border-b border-brand-border/60 print:border-black/20 space-y-4">
          <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
            // Key Impact Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-brand-border/40 print:border-black/10 print:bg-transparent">
              <span className="text-[10px] font-mono text-brand-neon print:text-black font-bold block">ACQUISITION SCALE</span>
              <p className="text-xl font-bold font-mono text-white print:text-black mt-1">10,000+ leads</p>
              <p className="text-[10px] text-brand-muted print:text-black/80 mt-1 font-sans">Qualified conversions in a month via Meta and Google Ads.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-brand-border/40 print:border-black/10 print:bg-transparent">
              <span className="text-[10px] font-mono text-brand-neon print:text-black font-bold block">BUDGET MANAGEMENT</span>
              <p className="text-xl font-bold font-mono text-white print:text-black mt-1">₹1,00,000+/day</p>
              <p className="text-[10px] text-brand-muted print:text-black/80 mt-1 font-sans">Large-scale performance campaign management across industries.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-brand-border/40 print:border-black/10 print:bg-transparent">
              <span className="text-[10px] font-mono text-brand-neon print:text-black font-bold block">BUSINESS BI INTEGRATION</span>
              <p className="text-xl font-bold font-mono text-white print:text-black mt-1">Real-time ROI</p>
              <p className="text-[10px] text-brand-muted print:text-black/80 mt-1 font-sans">Custom visual dashboards tracking campaigns, CPL, and bookings.</p>
            </div>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
              // Education
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-brand-border/40 print:border-black/10 print:bg-transparent">
              <h3 className="font-space font-bold text-sm text-white print:text-black">Bachelor’s Degree</h3>
              <p className="text-xs font-mono text-brand-neon print:text-black mt-0.5">RTMNU | Graduated 2022</p>
              <p className="text-xs text-brand-muted print:text-black/80 mt-2 font-mono">Aggregate Score: 75%</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-space font-bold text-sm text-white print:text-black uppercase tracking-wider font-mono">
              // Credentials
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-brand-border/40 print:border-black/10 print:bg-transparent space-y-2">
              <div className="flex items-center space-x-2 text-xs font-sans text-brand-muted print:text-black/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon print:text-black shrink-0" />
                <span>Google Analytics (GA4) Certification</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-sans text-brand-muted print:text-black/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon print:text-black shrink-0" />
                <span>Performance Marketing & Meta Ads Certification</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-sans text-brand-muted print:text-black/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon print:text-black shrink-0" />
                <span>Power BI for Business Analytics Certification</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-sans text-brand-muted print:text-black/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-neon print:text-black shrink-0" />
                <span>SQL for Data Analysis Certification</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
