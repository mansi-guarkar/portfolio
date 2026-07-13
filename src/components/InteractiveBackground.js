"use client";

import React, { useEffect, useRef } from "react";

export default function InteractiveBackground({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#04060B] text-white">
      {/* 1. Base Engineering Schematic Matrix Grid */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 2. Micro Dot Overlay for Depth */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-25"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 255, 136, 0.25) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      {/* 3. Real-time Cursor Spotlight (Zero-latency CSS variable tracking) */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-90"
        style={{
          background: `
            radial-gradient(
              650px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh),
              rgba(0, 255, 136, 0.075),
              rgba(6, 182, 212, 0.04) 35%,
              rgba(99, 102, 241, 0.02) 55%,
              transparent 70%
            )
          `
        }}
      />

      {/* 4. Schematic HUD / Blueprint Corner Crosshairs */}
      <div className="fixed top-24 left-6 pointer-events-none z-0 hidden lg:flex flex-col space-y-1 text-[10px] font-mono text-white/20 select-none">
        <span className="text-brand-neon/60 font-bold">┌── [SYS // GTM.CORE.v3.4]</span>
        <span>│ LAT_SYNC: 99.98%</span>
        <span>│ NODE_METRIC: AUTOMATED</span>
      </div>

      <div className="fixed top-24 right-6 pointer-events-none z-0 hidden lg:flex flex-col items-end space-y-1 text-[10px] font-mono text-white/20 select-none">
        <span className="text-brand-neon/60 font-bold">[RAYCAST // LINEAR.UI] ──┐</span>
        <span>TARGET: REVENUE_ENGINE │</span>
        <span>STATUS: ACTIVE_PIPELINE │</span>
      </div>

      <div className="fixed bottom-6 left-6 pointer-events-none z-0 hidden lg:flex items-center space-x-2 text-[10px] font-mono text-white/20 select-none">
        <span className="text-brand-neon font-bold">⊕</span>
        <span>PRECISION_COORDINATE // MATRIX_GRID_32px</span>
      </div>

      <div className="fixed bottom-6 right-6 pointer-events-none z-0 hidden lg:flex items-center space-x-2 text-[10px] font-mono text-white/20 select-none">
        <span>ARCHITECT: M. GAURKAR</span>
        <span className="text-brand-neon font-bold">⊕</span>
      </div>

      {/* 5. Main Content Wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
