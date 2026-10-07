import React from "react";
import type { Metadata } from "next";
import { CapabilityProof } from "@/components/capability-proof";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";

export const metadata: Metadata = {
  title: "Our Work | Ashmyra Technologies",
  description:
    "Explore Ashmyra's engineering capabilities — AI systems, data intelligence, agentic automation, and enterprise software built for real-world execution.",
  alternates: { canonical: "https://ashmyra.com/our-work" },
};

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090e] text-white selection:bg-indigo-500/30 selection:text-indigo-200">
      <ScrollToTopOnMount />

      {/* Page header */}
      <div className="relative bg-[#050608] border-b border-white/[0.06] pt-28 pb-12 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(99,102,241,0.09)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-mono tracking-widest text-indigo-300 uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Engineering Proof
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Work
          </h1>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto">
            Systems we&apos;ve engineered — AI architectures, data pipelines, and enterprise
            platforms built for production, at scale.
          </p>
        </div>
      </div>

      {/* Full capability + selected work section */}
      <CapabilityProof />
    </div>
  );
}
