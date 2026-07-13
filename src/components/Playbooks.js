"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  ArrowUpRight,
  ArrowRight,
  ChevronRight,
  Code,
  BarChart as LucideBarChart
} from "lucide-react";
import { 
  AnimatedCpu, 
  AnimatedTrendingUp, 
  AnimatedDatabase, 
  AnimatedMail, 
  AnimatedWorkflow 
} from "@/components/AnimatedIcons";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, LineChart, Line, BarChart as RechartsBarChart, Bar } from "recharts";
import { soundEffects } from "@/utils/sound";

export default function Playbooks() {
  const [activePlaybook, setActivePlaybook] = useState(0);

  const playbooks = [
    {
      title: "AI-Driven Lead Enrichment Engine",
      subtitle: "Autonomous Enrichment & CRM Routing",
      tag: "AI & Automation",
      icon: AnimatedCpu,
      iconColor: "#00ff88",
      summary: "Built a fully autonomous workflow linking ad platform lead forms directly to HubSpot CRM. The system intercepts the lead via a webhook, calls OpenAI for profile enrichment, scores the lead, and drafts a hyper-personalized outreach draft in real-time.",
      duration: "4 days build",
      stack: ["Make.com", "OpenAI API", "HubSpot API", "Hunter.io API", "Slack API"],
      problem: "Marketing team was generating high volumes of raw leads, but SDRs spent 60% of their day manually researching company sizes, industries, and drafting introductory emails. Lead response time exceeded 4 hours.",
      design: [
        { step: "1. Lead Capture", tool: "Meta Ads / Webhook", detail: "Lead submits details, trigger Make.com webhook node" },
        { step: "2. Domain Match", tool: "Hunter.io API", detail: "Lookup company domain, domain validation & email verification" },
        { step: "3. Enrichment", tool: "OpenAI GPT-4o", detail: "Enrich with funding data, employee count, and ICP matching rules" },
        { step: "4. CRM Injection", tool: "HubSpot API", detail: "Create contact, calculate custom lead score (0-100), assign owner" },
        { step: "5. Notification", tool: "Slack Webhook", detail: "Alert sales channel with rich card containing AI outreach draft" },
      ],
      codeSample: `{
  "lead": {
    "email": "harsh@growthscale.io",
    "name": "Harsh Vardhan",
    "source": "Meta Ads"
  },
  "enrichment_payload": {
    "company": "GrowthScale",
    "industry": "B2B SaaS",
    "size": "52 employees",
    "funding_stage": "Series A ($6.4M)",
    "icp_match": true,
    "lead_score": 88
  },
  "ai_generated_outreach": "Hi Harsh, saw GrowthScale recently closed Series A. Given your 52-person team is scaling B2B SaaS acquisition, here is a custom dashboard framework tailored for your stack..."
}`,
      metrics: [
        { label: "Lead Response Time", before: "4.2 hours", after: "45 seconds", change: "99%" },
        { label: "SDR Research Time", before: "18 mins/lead", after: "0 mins/lead", change: "100%" },
        { label: "Meeting Booking Rate", before: "8.2%", after: "14.6%", change: "+78%" }
      ],
      visualData: [
        { name: "Day 1", before: 4, after: 45 },
        { name: "Day 2", before: 18, after: 45 },
        { name: "Day 3", before: 12, after: 45 },
        { name: "Day 4", before: 22, after: 45 },
        { name: "Day 5", before: 9, after: 45 },
      ]
    },
    {
      title: "Healthcare Lead Engine (10k+ Leads)",
      subtitle: "Multi-City Funnel & Attribution",
      tag: "Performance Marketing",
      icon: AnimatedTrendingUp,
      iconColor: "#06b6d4",
      summary: "Designed and scaled a multi-city performance advertising model for Reborn Skin & Hair Clinics. Synced campaign operations directly with lead captures, conversion reporting in GA4, and a city-wise dashboard.",
      duration: "15 Months management",
      stack: ["Meta Ads", "Google Ads", "GA4", "GTM", "Power BI", "SQL"],
      problem: "Client lacked unified visibility across 5+ clinic locations. Local budgets were allocated arbitrarily, leading to high CPL ($12+) in competitive metros and wasted spend.",
      design: [
        { step: "1. Traffic Acquisition", tool: "Meta & Google Ads", detail: "Geo-targeted campaigns segmented by treatment categories" },
        { step: "2. Capture & Tagging", tool: "GTM custom events", detail: "Inject location & treatment parameters dynamically into UTMs" },
        { step: "3. Conversion API", tool: "Meta CAPI Integration", detail: "Deduplicated browser-server tracking matching user records" },
        { step: "4. Database Sync", tool: "SQL ETL pipelines", detail: "Extract leads, clean null data, match clinic bookings" },
        { step: "5. ROI Dashboard", tool: "Power BI Reporting", detail: "Real-time cost, lead quality, and booking revenue attribution" }
      ],
      codeSample: `SELECT 
  c.city,
  COUNT(l.id) AS total_leads,
  SUM(c.ad_spend) AS total_spend,
  (SUM(c.ad_spend) / COUNT(l.id)) AS cost_per_lead,
  COUNT(CASE WHEN l.status = 'booked' THEN 1 END) AS bookings,
  (COUNT(CASE WHEN l.status = 'booked' THEN 1 END) * 100.0 / COUNT(l.id)) AS conversion_rate
FROM campaign_performance c
JOIN leads l ON c.campaign_id = l.campaign_id
GROUP BY c.city
ORDER BY total_leads DESC;`,
      metrics: [
        { label: "Leads/Month", before: "2,400", after: "10,200+", change: "+325%" },
        { label: "Average CPL", before: "₹520", after: "₹310", change: "-40%" },
        { label: "Attribution Accuracy", before: "60%", after: "98.2%", change: "+63%" }
      ],
      visualData: [
        { name: "Month 1", Leads: 2400, CPL: 520 },
        { name: "Month 3", Leads: 4100, CPL: 450 },
        { name: "Month 6", Leads: 6800, CPL: 380 },
        { name: "Month 9", Leads: 8900, CPL: 340 },
        { name: "Month 12", Leads: 10200, CPL: 310 },
      ]
    },
    {
      title: "Predictive LTV & Churn Dashboard",
      subtitle: "Python Pipeline & Power BI Modeling",
      tag: "Data & Analytics",
      icon: AnimatedDatabase,
      iconColor: "#6366f1",
      summary: "Leveraged historical customer purchase data to train a predictive cohort retention model in Python (Pandas). Visualized customer lifetime value (LTV) and churn risk scores dynamically inside a dashboard.",
      duration: "1 week build",
      stack: ["Python", "Pandas", "Scikit-Learn", "BigQuery", "Power BI"],
      problem: "Retention marketing campaigns were reactive. High-value customers who were showing early signs of churn were only targeted after they had already ceased purchasing.",
      design: [
        { step: "1. Data Extraction", tool: "BigQuery / SQL", detail: "Pull historical order data, transaction frequency, and recency" },
        { step: "2. Feature Engineering", tool: "Python (Pandas)", detail: "Calculate RFM variables (Recency, Frequency, Monetary value)" },
        { step: "3. ML Modelling", tool: "Scikit-Learn", detail: "Train BG/NBD and Gamma-Gamma retention models" },
        { step: "4. Churn Probability", tool: "Predictive engine", detail: "Generate 30-60-90 day active probabilities for individual IDs" },
        { step: "5. Visual Reporting", tool: "Power BI Embed", detail: "Interactive segment matrix separating VIP, At-Risk, and Churned" }
      ],
      codeSample: `import pandas as pd
from lifetimes import BetaGeoFitter, GammaGammaRMD

# Calculate RFM characteristics
rfm_df = pd.DataFrame()
rfm_df['frequency'] = df['orders_count'] - 1
rfm_df['recency'] = df['days_between_first_and_last']
rfm_df['T'] = df['days_since_first_order']
rfm_df['monetary_value'] = df['avg_order_value']

bgf = BetaGeoFitter(penalizer_coef=0.0)
bgf.fit(rfm_df['frequency'], rfm_df['recency'], rfm_df['T'])

# Predict next 3 months transactions
rfm_df['predicted_purchases'] = bgf.predict(90, rfm_df['frequency'], rfm_df['recency'], rfm_df['T'])
`,
      metrics: [
        { label: "Target Outbound Match", before: "Manual list", after: "Automated Predict", change: "100% Auto" },
        { label: "Churn Recovery Rate", before: "4.1%", after: "11.8%", change: "+187%" },
        { label: "LTV Prediction Accuracy", before: "N/A", after: "91.4% accuracy", change: "Verified" }
      ],
      visualData: [
        { name: "VIP", count: 820 },
        { name: "Sustaining", count: 1420 },
        { name: "At-Risk", count: 320 },
        { name: "High-Risk", count: 150 },
      ]
    },
    {
      title: "GTM SaaS Playbook",
      subtitle: "Launch Planning & Onboarding Flow",
      tag: "Strategy & Copywriting",
      icon: AnimatedMail,
      iconColor: "#ec4899",
      summary: "Authored an end-to-end launch plan for a mock AI customer support product. Outlined TAM modeling, customer persona mapping, channel validation rules, and built an automated onboarding drip sequence.",
      duration: "3 days build",
      stack: ["Funnels strategy", "HubSpot sequences", "TAM Modeling", "UX Copywriting"],
      problem: "New SaaS launches often fail due to mismatched ICP definitions, untracked trial onboarding milestones, and lack of automated sequence feedback.",
      design: [
        { step: "1. Market Sizing", tool: "TAM-SAM-SOM Matrix", detail: "Calculate total addressable market and realistic beachhead segments" },
        { step: "2. ICP Blueprinting", tool: "Persona Architect", detail: "Map pain points, software budgets, and decision triggers" },
        { step: "3. Trial Onboarding", tool: "Drip sequence blueprint", detail: "7-step automated onboarding sequence mapping triggers" },
        { step: "4. Lead Scoring", tool: "HubSpot behavior triggers", detail: "Trigger notifications based on high-intent product usage" },
        { step: "5. Conversion Flow", tool: "Webinars & Case study", detail: "Middle-funnel content pathways tailored to convert trials" }
      ],
      codeSample: `Subject: Re: Prompt to Production: Day 3 onboarding milestone.

Hi {{first_name}}, 

Yesterday I noticed you configured your first AI routing rule for {{company}}. 
To save you time, I whipped up a 90-second video on integrating database variables 
into that prompt.

Click here to view: [vimeo.com/mansi/ai-variables]

Cheers,
Mansi (Growth Operations)`,
      metrics: [
        { label: "Trial-to-Paid Conv.", before: "2.8%", after: "4.9%", change: "+75%" },
        { label: "Onboarding Dropoff", before: "42%", after: "21%", change: "-50%" },
        { label: "Email Open Rate", before: "18.2%", after: "38.6%", change: "+112%" }
      ],
      visualData: [
        { name: "Email 1", OpenRate: 58 },
        { name: "Email 2", OpenRate: 46 },
        { name: "Email 3", OpenRate: 41 },
        { name: "Email 4", OpenRate: 35 },
        { name: "Email 5", OpenRate: 32 },
      ]
    },
    {
      title: "Brand Campaign Command Center",
      subtitle: "Cross-Channel Budget Orchestration",
      tag: "Performance Marketing",
      icon: AnimatedWorkflow,
      iconColor: "#f59e0b",
      summary: "Orchestrated performance campaigns for Vivo and Godrej at KNM Studio, coordinating cross-channel marketing operations, and real-time dashboard performance metrics to optimize daily spend allocation.",
      duration: "Feb 2026 – Present",
      stack: ["Meta Ads", "Google Ads", "LinkedIn Outreach", "Attribution Models"],
      problem: "Managing multiple high-budget campaign entities simultaneously caused siloed performance reporting, leading to budget misallocation and late performance responses.",
      design: [
        { step: "1. Strategy Alignment", tool: "GTM Matrix", detail: "Align digital campaign structures with corporate offline targets" },
        { step: "2. Media Orchestration", tool: "Meta & Google Manager", detail: "Deploy structured audience target parameters across regions" },
        { step: "3. CRM Connection", tool: "Lead syncing rules", detail: "Direct API lead syncing into brand CRM channels" },
        { step: "4. Real-time reporting", tool: "Unified MIS Dashboard", detail: "Daily performance tracking of ROI metrics, leads, and conversion" },
        { step: "5. Active optimization", tool: "Budget scaling rule", detail: "Shift budgets dynamically from lower performing campaigns" }
      ],
      codeSample: `# Mock attribution scaling config
scaling_config = {
  "meta_ads": {
    "min_roi": 2.2,
    "scale_multiplier": 1.15
  },
  "google_ads": {
    "min_roi": 2.5,
    "scale_multiplier": 1.10
  }
}`,
      metrics: [
        { label: "Cross-Channel Reach", before: "Siloed", after: "Unified", change: "100% Unified" },
        { label: "Budget Efficiency", before: "Manual shift", after: "Daily optimal", change: "+18% efficiency" },
        { label: "Reporting Speed", before: "Weekly", after: "Real-time", change: "Instant sync" }
      ],
      visualData: [
        { name: "Week 1", Spend: 62000, Revenue: 135000 },
        { name: "Week 2", Spend: 85000, Revenue: 195000 },
        { name: "Week 3", Spend: 98000, Revenue: 232000 },
        { name: "Week 4", Spend: 110000, Revenue: 275000 },
      ]
    }
  ];

  const current = playbooks[activePlaybook];
  const ActiveIcon = current.icon;

  return (
    <section id="playbooks" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
              The GTM Playbooks
            </h2>
            <p className="text-brand-muted mt-2 font-sans">
              Click through my core case studies to explore the system design, code, and ROI details.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-mono text-brand-muted">
            <Workflow className="w-4 h-4 text-brand-neon" />
            <span>Select a system template</span>
          </div>
        </div>

        {/* Layout: Sidebar + Playbook Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {playbooks.map((p, index) => {
              const IconComp = p.icon;
              const isActive = activePlaybook === index;
              return (
                <motion.button
                  key={index}
                  whileHover="hover"
                  initial="idle"
                  onClick={() => {
                    soundEffects.nodeSwitch();
                    setActivePlaybook(index);
                  }}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center justify-between cursor-pointer group ${
                    isActive
                      ? "bg-brand-neon/10 border-brand-neon/40 text-white shadow-[0_0_20px_rgba(0,255,136,0.06)]"
                      : "bg-[#0b0e17]/60 border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="group-hover:scale-115 transition-transform duration-300 shrink-0">
                      <IconComp className="w-6 h-6" color={isActive ? p.iconColor : "#8b8d9e"} />
                    </div>
                    <div>
                      <h3 className="font-space font-bold text-sm tracking-wide transition-colors group-hover:text-white">{p.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{p.tag}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? "text-brand-neon translate-x-1" : "text-gray-500"}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Details Content Panel */}
          <div className="lg:col-span-8 glass-card border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-xl space-y-8">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <ActiveIcon className="w-9 h-9" color={current.iconColor} />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-neon uppercase tracking-wider bg-brand-neon/10 border border-brand-neon/20 px-2 py-0.5 rounded">
                    {current.tag}
                  </span>
                  <h3 className="font-space font-bold text-xl sm:text-2xl text-white mt-1.5">{current.title}</h3>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-left sm:text-right">
                <span className="text-xs font-mono text-brand-muted block">Duration</span>
                <span className="text-sm font-mono text-white font-bold">{current.duration}</span>
              </div>
            </div>

            {/* Overview / Stack */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-2">
                <h4 className="font-space font-bold text-white text-sm">System Concept</h4>
                <p className="text-sm text-brand-muted leading-relaxed font-sans">{current.summary}</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-space font-bold text-white text-sm">Tools Deployed</h4>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {current.stack.map((s, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-gray-300 bg-white/5 border border-brand-border px-2.5 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Problem Statements */}
            <div className="p-4 bg-red-950/10 border border-red-500/10 rounded-xl">
              <h4 className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center space-x-1.5">
                <span>The Revenue Bottleneck</span>
              </h4>
              <p className="text-sm text-brand-muted mt-2 font-sans">{current.problem}</p>
            </div>

            {/* Pipeline Flowchart steps */}
            <div className="space-y-4">
              <h4 className="font-space font-bold text-white text-sm flex items-center space-x-2">
                <Workflow className="w-4 h-4 text-brand-neon" />
                <span>System Architecture Node Flow</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {current.design.map((d, index) => (
                  <div key={index} className="p-3 bg-brand-surface/40 border border-brand-border rounded-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-brand-neon block font-bold">{d.step}</span>
                      <span className="text-xs font-space font-bold text-white block mt-1">{d.tool}</span>
                    </div>
                    <p className="text-[10px] text-brand-muted mt-2 font-mono leading-tight">{d.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics & Interactive Graph */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Metrics values */}
              <div className="space-y-4">
                <h4 className="font-space font-bold text-white text-sm flex items-center space-x-2">
                  <Workflow className="w-4 h-4 text-brand-indigo" />
                  <span>Validation Metrics</span>
                </h4>
                <div className="space-y-3">
                  {current.metrics.map((m, index) => (
                    <div key={index} className="p-3 rounded-xl bg-brand-surface border border-brand-border flex items-center justify-between">
                      <div>
                        <p className="text-xs text-brand-muted font-sans">{m.label}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs line-through text-red-500 font-mono">{m.before}</span>
                          <span className="text-brand-neon text-sm font-bold font-mono">→ {m.after}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-brand-neon bg-brand-neon/10 border border-brand-neon/20 px-2 py-1 rounded">
                        {m.change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Visualization Charts */}
              <div className="space-y-4">
                <h4 className="font-space font-bold text-white text-sm flex items-center space-x-2">
                  <LucideBarChart className="w-4 h-4 text-brand-indigo" />
                  <span>System Performance Timeline</span>
                </h4>
                <div className="h-44 w-full bg-brand-dark/40 border border-brand-border rounded-xl p-3 flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    {activePlaybook === 0 ? (
                      <LineChart data={current.visualData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#222a3a" />
                        <XAxis dataKey="name" stroke="#8b8d9e" fontSize={10} />
                        <YAxis stroke="#8b8d9e" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#222a3a" }} />
                        <Line type="monotone" dataKey="before" stroke="#ef4444" strokeWidth={2} name="Before (hours)" />
                        <Line type="monotone" dataKey="after" stroke="#00ff88" strokeWidth={2} name="After (seconds)" />
                      </LineChart>
                    ) : activePlaybook === 1 ? (
                      <AreaChart data={current.visualData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#222a3a" />
                        <XAxis dataKey="name" stroke="#8b8d9e" fontSize={10} />
                        <YAxis stroke="#8b8d9e" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#222a3a" }} />
                        <Area type="monotone" dataKey="Leads" stroke="#00ff88" fill="#00ff88" fillOpacity={0.1} name="Leads" />
                      </AreaChart>
                    ) : activePlaybook === 2 ? (
                      <RechartsBarChart data={current.visualData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#222a3a" />
                        <XAxis dataKey="name" stroke="#8b8d9e" fontSize={10} />
                        <YAxis stroke="#8b8d9e" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#222a3a" }} />
                        <Bar dataKey="count" fill="#6366f1" name="Customer Count" radius={[4, 4, 0, 0]} />
                      </RechartsBarChart>
                    ) : (
                      <LineChart data={current.visualData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#222a3a" />
                        <XAxis dataKey="name" stroke="#8b8d9e" fontSize={10} />
                        <YAxis stroke="#8b8d9e" fontSize={10} />
                        <Tooltip contentStyle={{ backgroundColor: "#0b0f19", borderColor: "#222a3a" }} />
                        <Line type="monotone" dataKey={current.visualData[0].OpenRate ? "OpenRate" : "Spend"} stroke="#00ff88" strokeWidth={2} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Code Pipeline Details */}
            <div className="space-y-3">
              <h4 className="font-space font-bold text-white text-sm flex items-center space-x-2">
                <Code className="w-4 h-4 text-brand-neon" />
                <span>API Code / System Config Snippet</span>
              </h4>
              <div className="relative">
                <pre className="bg-brand-dark/95 border border-brand-border rounded-xl p-4 font-mono text-xs text-green-400 overflow-x-auto leading-relaxed max-h-56">
                  {current.codeSample}
                </pre>
                <span className="absolute top-3 right-3 text-[10px] font-mono text-brand-muted uppercase bg-white/5 border border-brand-border px-2 py-0.5 rounded">
                  {activePlaybook === 2 ? "python" : activePlaybook === 1 ? "sql" : "json"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
