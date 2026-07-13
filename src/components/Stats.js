"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { soundEffects } from "@/utils/sound";
import { AnimatedUsers, AnimatedTarget, AnimatedTrendingUp, AnimatedShieldCheck } from "@/components/AnimatedIcons";

function Counter({ targetValue, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseInt(targetValue.replace(/,/g, ""), 10);
    if (isNaN(end)) {
      setCount(targetValue);
      return;
    }

    const totalSteps = 60;
    const stepTime = duration / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.floor((end * step) / totalSteps);
      setCount(current);
      
      // Play high-frequency counting click every 2 steps
      if (step % 2 === 0) {
        soundEffects.tick();
      }

      if (step >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, targetValue, duration]);

  // Format number back to locale string
  const displayCount = typeof count === "number" ? count.toLocaleString() : count;

  return (
    <span ref={elementRef} className="font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white">
      {displayCount}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const statsData = [
    {
      id: 1,
      label: "Qualified Leads Generated",
      value: "10,000",
      suffix: "+",
      desc: "High intent conversions per month",
      icon: AnimatedUsers,
      iconColor: "#00ff88",
      color: "text-brand-neon bg-brand-neon/10 border-brand-neon/30",
    },
    {
      id: 2,
      label: "Daily Ad Budget Managed",
      value: "100,000",
      prefix: "₹",
      suffix: "+",
      desc: "Optimized Google/Meta campaigns",
      icon: AnimatedTarget,
      iconColor: "#6366f1",
      color: "text-brand-indigo bg-brand-indigo/10 border-brand-indigo/30",
    },
    {
      id: 3,
      label: "Average Cost-Per-Lead (CPL)",
      value: "38",
      suffix: "% Red.",
      desc: "Through continuous A/B testing & automation",
      icon: AnimatedTrendingUp,
      iconColor: "#06b6d4",
      color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    },
    {
      id: 4,
      label: "Client Revenue Tracked",
      value: "100",
      suffix: "% Visibility",
      desc: "GA4, GTM, and CRM integrations",
      icon: AnimatedShieldCheck,
      iconColor: "#10b981",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    },
  ];

  return (
    <section className="relative py-16 border-y border-white/[0.08] bg-[#04060B]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                whileHover="hover"
                initial="idle"
                className="group flex flex-col p-6 rounded-2xl glass-card border border-white/[0.08] hover:border-brand-neon/50 shadow-xl hover:shadow-[0_0_25px_rgba(0,255,136,0.1)] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-gray-400 uppercase tracking-wider group-hover:text-white transition-colors">
                    {stat.label}
                  </span>
                  <div className="group-hover:scale-115 transition-transform duration-300 shrink-0">
                    <Icon className="w-7 h-7" color={stat.iconColor} />
                  </div>
                </div>

                <div className="flex items-baseline space-x-1">
                  {stat.prefix && (
                    <span className="font-mono text-3xl font-bold text-white/90 mr-0.5">
                      {stat.prefix}
                    </span>
                  )}
                  <Counter targetValue={stat.value} suffix={stat.suffix} />
                </div>

                <p className="text-sm text-gray-400 mt-2 font-sans group-hover:text-gray-300 transition-colors">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
