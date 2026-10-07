"use client";

import React from "react";
import { Star, ShieldCheck, CheckCircle2, Award, ArrowUpRight } from "lucide-react";

export function FreelancerLogo({ className = "h-5 w-auto" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Official Freelancer.com Geometric Bird Emblem */}
      <svg
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-6 flex-shrink-0"
      >
        <polygon points="10,48 48,15 48,48" fill="#139FF0" />
        <polygon points="48,15 88,4 48,48" fill="#29B2FE" />
        <polygon points="48,48 88,4 78,52" fill="#007FED" />
        <polygon points="48,48 78,52 42,75" fill="#0E86D4" />
        <polygon points="78,52 112,42 90,70" fill="#29B2FE" />
        <polygon points="78,52 90,70 65,84" fill="#007FED" />
        <polygon points="42,75 78,52 65,84" fill="#0267B8" />
      </svg>
      {/* Freelancer Wordmark */}
      <div className="flex items-baseline">
        <span className="text-white font-bold tracking-tight text-base sm:text-lg font-sans">
          freelancer
        </span>
        <span className="text-[#29b2fe] font-black text-xs sm:text-sm -ml-0.5">.com</span>
      </div>
    </div>
  );
}

interface FreelancerTrustBannerProps {
  category?: string;
  className?: string;
}

export function FreelancerTrustBanner({
  category = "AI & Enterprise Software",
  className = "",
}: FreelancerTrustBannerProps) {
  return (
    <div
      className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 ${className}`}
      style={{
        background: "linear-gradient(135deg, rgba(8, 14, 28, 0.95), rgba(13, 20, 38, 0.9))",
        border: "1px solid rgba(41, 178, 254, 0.25)",
        boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px -10px rgba(41, 178, 254, 0.15)",
      }}
    >
      {/* Ambient cyan glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-48 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle, #29b2fe 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left: Branding & Verification */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 self-start sm:self-auto">
            <FreelancerLogo />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#29b2fe] font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#29b2fe]" />
                Verified Global Delivery Track Record
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                100% Job Success
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              100+ Enterprise Products &amp; Services Delivered via Freelancer.com
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl">
              Proven architecture and deployment excellence spanning {category}, autonomous agents, real-time data pipelines, and custom enterprise SaaS solutions worldwide.
            </p>
          </div>
        </div>

        {/* Right: Key Performance Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 self-stretch lg:self-auto flex-shrink-0">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-black text-white font-mono">100+</div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
              Projects Shipped
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#29b2fe] font-mono flex items-center justify-center gap-1">
              5.0
              <Star className="w-3.5 h-3.5 fill-[#29b2fe] text-[#29b2fe]" />
            </div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
              Client Rating
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100%</div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
              On-Time Record
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
            <div className="text-xl sm:text-2xl font-black text-purple-300 font-mono">Top 1%</div>
            <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">
              Global Architect
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
