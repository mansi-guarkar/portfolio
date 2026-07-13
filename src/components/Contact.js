"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Phone, Calendar } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [activeTab, setActiveTab] = useState("schedule"); // 'schedule' | 'message'

  // If the user needs to customize their Calendly username:
  const calendlyUsername = "gaurkarmansi07";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    // Simulate webhook POST to Make.com/Zapier
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", company: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white">
            Connect / Build
          </h2>
          <p className="text-gray-400 mt-3 font-sans">
            Ready to audit your conversions, automate CRM flows, or optimize performance campaigns? Book a call directly or submit the pipeline integration form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-2xl p-6 border border-white/[0.08] space-y-6 flex-1 bg-[#0b0e17]/60">
              <h3 className="font-space font-bold text-sm text-white border-b border-white/[0.08] pb-3 uppercase tracking-wider font-mono">
                System Endpoint Info
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-brand-neon/10 text-brand-neon border border-brand-neon/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">EMAIL</span>
                    <a href="mailto:gaurkarmansi@gmail.com" className="text-white hover:text-brand-neon font-mono transition-colors">
                      gaurkarmansi@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/30 shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">LINKEDIN</span>
                    <a
                      href="https://linkedin.com/in/mansi-gaurkar-4286b6398"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-brand-neon font-mono transition-colors"
                    >
                      linkedin.com/in/mansi-gaurkar-4286b6398
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">TELEPHONE</span>
                    <a href="tel:+918788119411" className="text-white hover:text-brand-neon font-mono transition-colors">
                      +91 8788119411
                    </a>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="pt-4 border-t border-white/[0.08]">
                <span className="text-[10px] font-mono text-brand-neon uppercase tracking-wider block font-bold">
                  Operational Status
                </span>
                <p className="text-xs text-gray-400 mt-2 font-sans leading-relaxed">
                  Located in Pune, India. Coordinating remote operations across Global timelines (IST / EST / CET).
                </p>
              </div>
            </div>

            {/* Testimonials snippet */}
            <div className="p-5 rounded-2xl bg-brand-neon/5 border border-brand-neon/10 text-xs font-sans text-gray-400 leading-relaxed italic relative">
              "Mansi restructured our multi-city campaign tracking and attribution funnel within days. Her technical capacity in data engineering combined with performance analytics is rare."
              <span className="block mt-2 font-mono font-bold text-white not-italic">— Product Manager, KNM Client Brand</span>
            </div>
          </div>

          {/* Form / Scheduler Panel */}
          <div className="lg:col-span-7 glass-card rounded-2xl border border-white/[0.08] p-6 sm:p-8 shadow-2xl flex flex-col justify-between bg-[#0b0e17]/60">
            <div>
              {/* Custom High-Tech Toggle Tabs */}
              <div className="flex border-b border-white/[0.08] pb-3 mb-6 items-center justify-between">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab("schedule")}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs font-bold transition-all duration-300 ${activeTab === "schedule"
                      ? "bg-brand-neon/10 text-brand-neon border border-brand-neon/30"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    [1] BOOK A DISCOVERY CALL
                  </button>
                  <button
                    onClick={() => setActiveTab("message")}
                    className={`px-3 py-1.5 rounded-md font-mono text-xs font-bold transition-all duration-300 ${activeTab === "message"
                      ? "bg-brand-neon/10 text-brand-neon border border-brand-neon/30"
                      : "text-gray-400 hover:text-white"
                      }`}
                  >
                    [2] SEND MSG PAYLOAD
                  </button>
                </div>
                <span className="text-[9px] font-mono text-gray-500 uppercase hidden sm:inline">
                  {activeTab === "schedule" ? "calendly.api" : "POST /api/inquire"}
                </span>
              </div>
              {activeTab === "schedule" ? (
                /* Embedded Dark-Themed Calendly Widget */
                <div className="relative w-full rounded-xl overflow-hidden bg-[#0b0e17]/40 min-h-[660px]">
                  <iframe
                    src={`https://calendly.com/${calendlyUsername}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0e17&text_color=ffffff&primary_color=00ff88`}
                    style={{ width: "100%", height: "660px", border: "0" }}
                    title="Mansi Gaurkar - Discovery Call Scheduling"
                  />
                </div>
              ) : (
                /* Inquiry Webhook Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase">Name *</label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#04060b] border border-white/[0.12] focus:border-brand-neon/60 rounded-lg p-3 text-sm font-sans text-white focus:outline-none"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase">Email Endpoint *</label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#04060b] border border-white/[0.12] focus:border-brand-neon/60 rounded-lg p-3 text-sm font-sans text-white focus:outline-none"
                        placeholder="jane@company.io"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400 uppercase">Company (Optional)</label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full bg-[#04060b] border border-white/[0.12] focus:border-brand-neon/60 rounded-lg p-3 text-sm font-sans text-white focus:outline-none"
                      placeholder="GrowthScale Inc."
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-gray-400 uppercase">Message Payload *</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#04060b] border border-white/[0.12] focus:border-brand-neon/60 rounded-lg p-3 text-sm font-sans text-white focus:outline-none h-24 resize-none"
                      placeholder="We want to automate lead routing from Meta Ads into our CRM..."
                    />
                  </div>

                  {/* Status messages */}
                  {status === "success" && (
                    <div className="flex items-center space-x-2 text-brand-neon text-xs font-mono bg-brand-neon/10 border border-brand-neon/20 p-3 rounded-lg">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Payload synced successfully! Talk to you soon.</span>
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center space-x-2 text-red-400 text-xs font-mono bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                      <AlertCircle className="w-4 h-4" />
                      <span>Required fields are missing in the payload validation.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 bg-white/5 hover:bg-brand-neon border border-white/[0.12] hover:border-brand-neon hover:text-brand-dark text-white font-mono font-bold text-xs rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "sending" ? "TRANSMITTING..." : "[TRANSMIT PAYLOAD]"}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Custom configurations info */}
            <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-gray-500 gap-2">
              <span>* Configured for direct secure booking operations</span>
              <span className="text-gray-400 hover:text-white transition-colors cursor-pointer select-none">
                [Calendly Endpoint Synced]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

