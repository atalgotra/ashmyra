"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, Key } from "lucide-react";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen bg-[#07090e] text-white flex items-center justify-center p-6">
        <div className="max-w-lg w-full p-8 rounded-3xl border border-white/[0.1] bg-neutral-900/50 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Key className="w-6 h-6" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Sanity Studio Setup
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Connect Your Free Sanity Project
            </h1>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Your Sanity Studio is ready! To log in and start publishing blogs, connect your free project ID:
            </p>
          </div>

          <div className="p-4 rounded-xl bg-black/50 border border-white/[0.08] space-y-3 text-xs text-neutral-300 font-mono">
            <div>1. Go to <a href="https://sanity.io" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">sanity.io</a> &amp; create a free project</div>
            <div>2. Copy your <strong>Project ID</strong></div>
            <div>3. Add to <span className="text-white">.env.local</span>:
              <pre className="mt-1.5 p-2 rounded bg-neutral-950 text-cyan-300 overflow-x-auto text-[11px]">
                NEXT_PUBLIC_SANITY_PROJECT_ID=&quot;your_id&quot;{"\n"}
                NEXT_PUBLIC_SANITY_DATASET=&quot;production&quot;
              </pre>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/blog"
              className="text-xs text-neutral-400 hover:text-white transition-colors"
            >
              &larr; Back to Blog
            </Link>
            <a
              href="https://sanity.io/manage"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 text-xs font-semibold inline-flex items-center gap-1.5 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Get Free Sanity ID</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
