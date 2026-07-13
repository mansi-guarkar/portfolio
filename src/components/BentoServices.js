"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  AnimatedTarget, 
  AnimatedWorkflow, 
  AnimatedCpu, 
  AnimatedTrendingUp, 
  AnimatedDatabase, 
  AnimatedMail 
} from "@/components/AnimatedIcons";

export default function BentoServices() {
  const services = [
    {
      title: "Performance Ads Orchestration",
      description: "Scale-focused B2B and B2C acquisition across Meta and Google Ads, managing daily ad spend of ₹1L+ while matching booking targets and cost-efficient CPL.",
      icon: AnimatedTarget,
      iconColor: "#00ff88",
      tag: "Acquisition",
      class: "md:col-span-2 lg:col-span-2",
      glow: "hover:border-brand-neon/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]",
    },
    {
      title: "API & Webhook Integrations",
      description: "No-code and low-code pipeline architecture linking ad platforms, landing pages, and CRMs (HubSpot, Salesforce) through Make.com, Zapier, and raw webhooks.",
      icon: AnimatedWorkflow,
      iconColor: "#f59e0b",
      tag: "Automation",
      class: "md:col-span-1 lg:col-span-1",
      glow: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
    },
    {
      title: "AI-Driven Enrichment Engine",
      description: "Trigger real-time LLM prompts upon lead generation to enrich profiles, score quality based on company data, and draft tailored personalized outreach emails.",
      icon: AnimatedCpu,
      iconColor: "#06b6d4",
      tag: "Artificial Intelligence",
      class: "md:col-span-1 lg:col-span-1",
      glow: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
    },
    {
      title: "Predictive Analytics & Cohorts",
      description: "Harnessing SQL, BigQuery, and Python (Pandas) to run ETL pipelines, model churn probabilities, and construct real-time performance dashboards in Power BI.",
      icon: AnimatedTrendingUp,
      iconColor: "#6366f1",
      tag: "Data Science",
      class: "md:col-span-2 lg:col-span-2",
      glow: "hover:border-brand-indigo/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]",
    },
    {
      title: "Full-Funnel GA4 Tracking",
      description: "Advanced GTM setups to capture precise conversion parameters, custom user events, and marketing attribution paths, ensuring complete ROI accountability.",
      icon: AnimatedDatabase,
      iconColor: "#10b981",
      tag: "Attribution",
      class: "md:col-span-1 lg:col-span-1",
      glow: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(52,211,153,0.1)]",
    },
    {
      title: "Outreach & Nurture Flows",
      description: "Automate multi-channel sequences across LinkedIn and email (HubSpot drip campaigns, Zapier, outreach APIs) that engage leads dynamically based on behaviors.",
      icon: AnimatedMail,
      iconColor: "#ec4899",
      tag: "RevOps Operations",
      class: "md:col-span-1 lg:col-span-1",
      glow: "hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
            Core GTM & Automation Capabilities
          </h2>
          <p className="text-gray-400 mt-3 font-sans">
            I design and orchestrate clean, robust systems that handle the heavy lifting of revenue operations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover="hover"
                initial="idle"
                className={`group glass-card p-6 rounded-2xl border border-white/[0.08] transition-all duration-300 flex flex-col justify-between cursor-pointer ${service.class} ${service.glow}`}
              >
                <div className="space-y-4">
                  {/* Top Header */}
                  <div className="flex items-center justify-between">
                    <div className="group-hover:scale-115 transition-transform duration-300 shrink-0">
                      <Icon className="w-8 h-8" color={service.iconColor} />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-brand-neon tracking-wider bg-brand-neon/10 border border-brand-neon/30 px-2 py-0.5 rounded uppercase">
                      {service.tag}
                    </span>
                  </div>

                  {/* Body Text */}
                  <div>
                    <h3 className="font-space font-bold text-lg text-white mb-2 group-hover:text-brand-neon transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
