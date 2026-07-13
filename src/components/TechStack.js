"use client";

import React, { useState } from "react";
import { Hammer, Star } from "lucide-react";

export default function TechStack() {
  const [hoveredTool, setHoveredTool] = useState(null);

  const categories = [
    {
      name: "Acquisition Engines",
      tools: [
        { name: "Meta Ads", stars: 5, use: "Managed ₹1L+/day local & multi-city lead generation campaigns." },
        { name: "Google Ads", stars: 4, use: "Search and Performance Max target acquisition campaigns." },
        { name: "LinkedIn outreach", stars: 4, use: "Orchestrated B2B outreach & connection workflows." },
      ],
    },
    {
      name: "Automation Node Networks",
      tools: [
        { name: "Make.com", stars: 4, use: "Build multi-step workflow logic streams connecting forms, AI and CRM." },
        { name: "Zapier", stars: 4, use: "Rapid endpoint matching and app integrations." },
        { name: "n8n", stars: 3, use: "Deploy open-source automated logic flows." },
      ],
    },
    {
      name: "Attribution & Operations",
      tools: [
        { name: "GA4", stars: 5, use: "Instrument conversion audits and funnel drop-off analysis." },
        { name: "GTM", stars: 5, use: "Advanced dataLayer event tracking & trigger mapping." },
        { name: "BigQuery", stars: 4, use: "Execute large-scale raw event extraction." },
      ],
    },
    {
      name: "CRM Systems & Syncs",
      tools: [
        { name: "HubSpot", stars: 4, use: "Sync pipelines, set up custom contact properties, and trigger workflows." },
        { name: "Salesforce", stars: 3, use: "Manage customer mappings and lead score alerts." },
        { name: "Excel / Sheets", stars: 5, use: "VBA scripts, Pivot Tables, and raw dashboard reports." },
      ],
    },
    {
      name: "Data & Artificial Intelligence",
      tools: [
        { name: "OpenAI API", stars: 4, use: "Construct automated prompt parameters for lead enrichment." },
        { name: "Python / Pandas", stars: 4, use: "Run RFM algorithms and clean database payloads." },
        { name: "SQL / Power Query", stars: 5, use: "Orchestrate database joins and clean ETL tables." },
        { name: "Power BI", stars: 5, use: "Construct dashboards tracking CPL, conversion rates and ROI." },
      ],
    },
  ];

  return (
    <section id="stack" className="py-20 relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
            The Technical Arsenal
          </h2>
          <p className="text-brand-muted mt-3 font-sans">
            Hover over any node in the grid to inspect how I deploy that technology inside GTM systems.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {categories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="glass-card rounded-2xl p-6 border border-brand-border/60 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold text-brand-neon uppercase tracking-wider mb-6 border-b border-brand-border pb-3 flex items-center justify-between">
                  <span>{cat.name}</span>
                  <Hammer className="w-3.5 h-3.5" />
                </h3>

                <div className="space-y-4">
                  {cat.tools.map((tool, toolIdx) => (
                    <div
                      key={toolIdx}
                      className="relative p-3 rounded-xl bg-brand-surface/40 hover:bg-brand-elevated border border-brand-border/40 hover:border-brand-neon/30 transition-all duration-300 cursor-pointer"
                      onMouseEnter={() => setHoveredTool(tool)}
                      onMouseLeave={() => setHoveredTool(null)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-space font-bold text-white">{tool.name}</span>
                        <div className="flex space-x-0.5 text-brand-neon">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < tool.stars ? "fill-brand-neon" : "text-gray-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Tooltip panel below the grid */}
        <div className="mt-8 h-20 w-full glass-card border border-brand-neon/20 rounded-xl p-4 flex items-center justify-center text-center">
          {hoveredTool ? (
            <div className="animate-fade-in">
              <span className="font-mono text-xs text-brand-neon font-bold uppercase tracking-wider block mb-1">
                Use Case — {hoveredTool.name}
              </span>
              <p className="text-sm text-gray-300 font-sans">{hoveredTool.use}</p>
            </div>
          ) : (
            <p className="text-xs font-mono text-brand-muted">
              [Hover over any tool block to inspect operational use case]
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
