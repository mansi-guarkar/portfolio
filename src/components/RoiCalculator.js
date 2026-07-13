"use client";

import React, { useState } from "react";
import { Calculate, HelpCircle, CheckCircle, Clock, Percent, DollarSign, RotateCcw } from "lucide-react";
import { soundEffects } from "@/utils/sound";

export default function RoiCalculator() {
  const [leads, setLeads] = useState(1500);
  const [cpl, setCpl] = useState(400); // in INR
  const [teamSize, setTeamSize] = useState(3);

  // Constants for calculation
  const manualEnrichmentTimeMin = 15; // 15 mins per lead manually
  const averageHourlySalary = 450; // SDR hourly cost in INR
  const expectedCplReductionPercent = 38; // 38% CPL reduction through automation & attribution

  const handleLeadsChange = (e) => {
    soundEffects.tick();
    setLeads(Number(e.target.value));
  };

  const handleCplChange = (e) => {
    soundEffects.tick();
    setCpl(Number(e.target.value));
  };

  const handleTeamChange = (e) => {
    soundEffects.tick();
    setTeamSize(Number(e.target.value));
  };

  // Calculations
  const totalManualHoursPerMonth = Math.round((leads * manualEnrichmentTimeMin) / 60);
  const totalAutomatedHoursPerMonth = Math.round((leads * 0.05) / 60); // 5 seconds per lead automated
  const hoursSavedPerMonth = Math.max(0, totalManualHoursPerMonth - totalAutomatedHoursPerMonth);
  const hoursSavedPerWeekPerSdr = Math.round(hoursSavedPerMonth / 4.33 / teamSize);

  const currentSpend = leads * cpl;
  const automatedSpend = currentSpend * (1 - expectedCplReductionPercent / 100);
  const budgetSavedPerMonth = Math.round(currentSpend - automatedSpend);

  const wagesSavedPerMonth = Math.round(hoursSavedPerMonth * averageHourlySalary);
  const totalMonthlySavings = budgetSavedPerMonth + wagesSavedPerMonth;

  return (
    <section id="roi" className="py-20 relative border-t border-brand-border/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-indigo/5 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
            Operational ROI Simulator
          </h2>
          <p className="text-brand-muted mt-3 font-sans">
            Adjust the sliders below to estimate the potential budget optimization and hours recovered by converting manual processes into automated GTM systems.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto glass-card border-brand-border/60 rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Slider Inputs */}
            <div className="space-y-6">
              <h3 className="font-space font-bold text-base text-white border-b border-brand-border/60 pb-3">
                Input Operational Metrics
              </h3>

              {/* Slider 1: Monthly Leads */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-muted">Monthly Lead Intake</span>
                  <span className="text-brand-neon font-bold">{leads.toLocaleString()} leads</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="10000"
                  step="100"
                  value={leads}
                  onChange={handleLeadsChange}
                  className="w-full accent-brand-neon bg-brand-dark h-2 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-brand-muted font-mono flex justify-between">
                  <span>200</span>
                  <span>10,000+</span>
                </span>
              </div>

              {/* Slider 2: Average CPL */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-muted">Current CPL (Cost-Per-Lead)</span>
                  <span className="text-brand-neon font-bold">₹{cpl} INR</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1500"
                  step="10"
                  value={cpl}
                  onChange={handleCplChange}
                  className="w-full accent-brand-neon bg-brand-dark h-2 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-brand-muted font-mono flex justify-between">
                  <span>₹50</span>
                  <span>₹1,500</span>
                </span>
              </div>

              {/* Slider 3: Sales Reps */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-brand-muted">SDR Team Size (FTEs)</span>
                  <span className="text-brand-neon font-bold">{teamSize} Reps</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={teamSize}
                  onChange={handleTeamChange}
                  className="w-full accent-brand-neon bg-brand-dark h-2 rounded-lg cursor-pointer"
                />
                <span className="text-[10px] text-brand-muted font-mono flex justify-between">
                  <span>1 Rep</span>
                  <span>15 Reps</span>
                </span>
              </div>

              {/* Details card */}
              <div className="p-3.5 bg-brand-surface rounded-xl border border-brand-border/40 text-[11px] font-mono text-brand-muted space-y-1">
                <p>📊 Assumptions configured based on historical GTM builds:</p>
                <p>• Manual lead enrichment takes avg. {manualEnrichmentTimeMin} mins.</p>
                <p>• Automated GTM matching lowers CPL by avg. {expectedCplReductionPercent}% via data waterfalls.</p>
              </div>
            </div>

            {/* Calculations Outputs */}
            <div className="p-6 rounded-xl bg-brand-surface border border-brand-border flex flex-col justify-between h-full space-y-6">
              <div>
                <h3 className="font-space font-bold text-base text-white border-b border-brand-border/40 pb-3">
                  Projected Monthly Impact
                </h3>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {/* Metric 1 */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-muted uppercase flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-brand-neon" />
                      <span>Hours Saved</span>
                    </span>
                    <p className="text-2xl font-bold font-mono text-white">
                      {hoursSavedMonthString(hoursSavedPerMonth)}
                    </p>
                    <p className="text-[10px] text-brand-muted font-mono">
                      ~{hoursSavedPerWeekPerSdr} hrs/wk per Rep
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-brand-muted uppercase flex items-center space-x-1">
                      <Percent className="w-3.5 h-3.5 text-brand-indigo" />
                      <span>CPL Saving</span>
                    </span>
                    <p className="text-2xl font-bold font-mono text-white">
                      ₹{budgetSavedPerMonth.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-brand-muted font-mono">
                      At {expectedCplReductionPercent}% optimization
                    </p>
                  </div>
                </div>
              </div>

              {/* Combined Impact Score */}
              <div className="pt-6 border-t border-brand-border/60">
                <span className="text-[10px] font-mono text-brand-neon uppercase tracking-wider block font-bold">
                  Total Monthly Revenue Recovered
                </span>
                <p className="text-4xl font-bold font-mono text-white mt-2">
                  ₹{totalMonthlySavings.toLocaleString()}
                  <span className="text-xs text-brand-muted font-mono font-medium ml-1">/month</span>
                </p>
                <p className="text-[11px] text-brand-muted mt-2 font-sans leading-relaxed">
                  Calculated using hourly wages recovered from manual processes + direct ad spend optimization.
                </p>
              </div>

              {/* Call to action */}
              <a
                href="#contact"
                className="w-full text-center py-3 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark font-mono font-bold text-xs rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] block"
              >
                [Automate My Pipeline]
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function hoursSavedMonthString(hours) {
  if (hours >= 1000) {
    return `${(hours / 1000).toFixed(1)}k hrs`;
  }
  return `${hours} hrs`;
}
