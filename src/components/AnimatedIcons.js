"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Custom Interactive Animated Icon Library powered by Framer Motion.
 * Each icon features continuous ambient micro-animations PLUS reactive whileHover/whileTap animations.
 */

// 1. Qualified Leads: Users Silhouette with Pulsing Connection Wave
export function AnimatedUsers({ className = "w-5 h-5", color = "#00ff88" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Primary User Head & Body */}
      <motion.circle
        cx="9"
        cy="7"
        r="4"
        variants={{
          idle: { scale: 1, y: 0 },
          hover: { scale: 1.15, y: -2, transition: { duration: 0.3 } }
        }}
      />
      <motion.path
        d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"
        variants={{
          idle: { pathLength: 1 },
          hover: { strokeWidth: 2.5, transition: { duration: 0.3 } }
        }}
      />
      {/* Secondary User (Background) */}
      <motion.path
        d="M16 3.13a4 4 0 0 1 0 7.75"
        variants={{
          idle: { opacity: 0.6, x: 0 },
          hover: { opacity: 1, x: 2, transition: { duration: 0.3 } }
        }}
      />
      <motion.path
        d="M21 21v-2a4 4 0 0 0-3-3.85"
        variants={{
          idle: { opacity: 0.6, x: 0 },
          hover: { opacity: 1, x: 2, transition: { duration: 0.3 } }
        }}
      />
      {/* Interactive Pulsing Signal Rings on Hover */}
      <motion.circle
        cx="9"
        cy="7"
        r="6"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2 2"
        variants={{
          idle: { opacity: 0, scale: 0.8 },
          hover: { opacity: [0, 0.8, 0], scale: [0.8, 1.6], transition: { duration: 1, repeat: Infinity } }
        }}
      />
    </motion.svg>
  );
}

// 2. Ad Budget / Performance: Rotating Radar Target Crosshair
export function AnimatedTarget({ className = "w-5 h-5", color = "#6366f1" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Outer Ring with continuous subtle rotation */}
      <motion.circle
        cx="12"
        cy="12"
        r="10"
        strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Middle Ring */}
      <motion.circle
        cx="12"
        cy="12"
        r="6"
        variants={{
          idle: { scale: 1, opacity: 0.8 },
          hover: { scale: 1.15, opacity: 1, strokeWidth: 2.5, transition: { duration: 0.3 } }
        }}
      />
      {/* Center Bullseye */}
      <motion.circle
        cx="12"
        cy="12"
        r="2"
        fill={color}
        variants={{
          idle: { scale: 1 },
          hover: { scale: [1, 1.5, 1], transition: { duration: 0.6, repeat: Infinity } }
        }}
      />
      {/* Radar Crosshairs */}
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
    </motion.svg>
  );
}

// 3. Cost-Per-Lead (CPL) Reduction: Dynamic Upward Growth Vector
export function AnimatedTrendingUp({ className = "w-5 h-5", color = "#06b6d4" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Chart baseline & grid */}
      <path d="M3 20h18" opacity="0.3" strokeWidth="1.5" />
      
      {/* Animated Path drawing */}
      <motion.path
        d="M3 16l6-6 4 4 8-8"
        variants={{
          idle: { pathLength: 1 },
          hover: { pathLength: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } }
        }}
      />
      
      {/* Arrowhead bouncing on hover */}
      <motion.path
        d="M14 6h7v7"
        variants={{
          idle: { x: 0, y: 0 },
          hover: { x: [0, 2, 0], y: [0, -2, 0], transition: { duration: 0.5, repeat: Infinity } }
        }}
      />
      
      {/* Glowing data dots along the line */}
      <motion.circle
        cx="9"
        cy="10"
        r="1.5"
        fill={color}
        variants={{
          idle: { opacity: 0.6 },
          hover: { opacity: [0.6, 1, 0.6], scale: [1, 1.8, 1], transition: { duration: 0.8, repeat: Infinity } }
        }}
      />
      <motion.circle
        cx="21"
        cy="6"
        r="2"
        fill={color}
        variants={{
          idle: { opacity: 0.8 },
          hover: { opacity: 1, scale: [1, 1.6, 1], transition: { duration: 0.6, repeat: Infinity } }
        }}
      />
    </motion.svg>
  );
}

// 4. Revenue Visibility: Cyber Shield with Laser Scan Check
export function AnimatedShieldCheck({ className = "w-5 h-5", color = "#10b981" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Shield Body */}
      <motion.path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.06, strokeWidth: 2.3, transition: { duration: 0.3 } }
        }}
      />
      
      {/* Laser Checkmark */}
      <motion.path
        d="M9 12l2 2 4-4"
        variants={{
          idle: { pathLength: 1 },
          hover: { pathLength: [0, 1], transition: { duration: 0.45, ease: "easeOut" } }
        }}
      />
      
      {/* Laser Scan Line across Shield on Hover */}
      <motion.line
        x1="4"
        y1="12"
        x2="20"
        y2="12"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="2 2"
        variants={{
          idle: { opacity: 0, y: 0 },
          hover: { opacity: [0, 0.8, 0], y: [-6, 6], transition: { duration: 1.2, repeat: Infinity } }
        }}
      />
    </motion.svg>
  );
}

// 5. AI / Microprocessor: Pulsing Circuit CPU Core
export function AnimatedCpu({ className = "w-5 h-5", color = "#00ff88" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* CPU Box */}
      <motion.rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.05, strokeWidth: 2.3, transition: { duration: 0.3 } }
        }}
      />
      
      {/* Inner AI Core */}
      <motion.rect
        x="9"
        y="9"
        width="6"
        height="6"
        rx="1"
        fill={color}
        fillOpacity="0.2"
        variants={{
          idle: { scale: 1, fillOpacity: 0.2 },
          hover: { scale: [1, 1.2, 1], fillOpacity: [0.2, 0.6, 0.2], transition: { duration: 0.8, repeat: Infinity } }
        }}
      />

      {/* Pins pulsing */}
      <path d="M9 1v3" />
      <path d="M15 1v3" />
      <path d="M9 20v3" />
      <path d="M15 20v3" />
      <path d="M20 9h3" />
      <path d="M20 14h3" />
      <path d="M1 9h3" />
      <path d="M1 14h3" />
    </motion.svg>
  );
}

// 6. Automation Flow: Traveling Light Pulses between Nodes
export function AnimatedWorkflow({ className = "w-5 h-5", color = "#06b6d4" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Nodes */}
      <motion.rect
        x="3"
        y="3"
        width="6"
        height="6"
        rx="1.5"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.15, transition: { duration: 0.3 } }
        }}
      />
      <motion.rect
        x="15"
        y="15"
        width="6"
        height="6"
        rx="1.5"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.15, transition: { duration: 0.3 } }
        }}
      />
      <motion.rect
        x="15"
        y="3"
        width="6"
        height="6"
        rx="1.5"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.15, transition: { duration: 0.3 } }
        }}
      />
      
      {/* Connection Lines */}
      <path d="M6 9v3a3 3 0 0 0 3 3h3" />
      <path d="M18 9v6" />

      {/* Traveling Light Pulse on Hover */}
      <motion.circle
        r="2"
        fill={color}
        variants={{
          idle: { opacity: 0, cx: 6, cy: 9 },
          hover: {
            opacity: [0, 1, 1, 0],
            cx: [6, 6, 12, 15],
            cy: [9, 15, 15, 15],
            transition: { duration: 1.2, repeat: Infinity }
          }
        }}
      />
    </motion.svg>
  );
}

// 7. Data Pipeline: Levitating Database Stack
export function AnimatedDatabase({ className = "w-5 h-5", color = "#8b5cf6" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      {/* Top Cylinder */}
      <motion.path
        d="M21 5c0 1.66-4 3-9 3s-9-1.34-9-3 4-3 9-3 9 1.34 9 3z"
        variants={{
          idle: { y: 0 },
          hover: { y: -2, transition: { duration: 0.3 } }
        }}
      />
      {/* Middle Cylinder */}
      <motion.path
        d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
        variants={{
          idle: { y: 0 },
          hover: { y: 0, transition: { duration: 0.3 } }
        }}
      />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      
      {/* Bottom status indicator pulsing */}
      <motion.circle
        cx="12"
        cy="19"
        r="1.5"
        fill={color}
        variants={{
          idle: { opacity: 0.4 },
          hover: { opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1], transition: { duration: 0.6, repeat: Infinity } }
        }}
      />
    </motion.svg>
  );
}

// 8. Outreach / Email: Envelope with Outgoing Laser Beam
export function AnimatedMail({ className = "w-5 h-5", color = "#ec4899" }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      whileHover="hover"
      initial="idle"
    >
      <motion.rect
        x="2"
        y="4"
        width="20"
        height="16"
        rx="2"
        variants={{
          idle: { scale: 1 },
          hover: { scale: 1.05, transition: { duration: 0.3 } }
        }}
      />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      
      {/* Outgoing signal spark */}
      <motion.circle
        cx="12"
        cy="10"
        r="2"
        fill={color}
        variants={{
          idle: { opacity: 0, scale: 0, y: 0 },
          hover: { opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5], y: [0, -6, -12], transition: { duration: 0.8, repeat: Infinity } }
        }}
      />
    </motion.svg>
  );
}
