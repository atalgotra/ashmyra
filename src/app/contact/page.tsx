import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { 
  Mail, 
  MessageSquare, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MapPin 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Ashmyra | Book a Demo | info@ashmyra.com | +91-9873746467",
  description:
    "Connect with Ashmyra Technologies. Email info@ashmyra.com or call +91-9873746467. Request a tailored demo of Ashmyra AI, Ashmyra SEO, Ashmyra HRMS, or discuss bespoke enterprise software engineering. Based in Delhi NCR, India.",
  keywords: [
    "Contact Ashmyra",
    "Ashmyra Demo",
    "info@ashmyra.com",
    "Ashmyra Phone Number",
    "Book AI Demo India",
    "Enterprise Software Consultation",
    "Ashmyra Delhi NCR",
    "AI Company Contact India",
  ],
  openGraph: {
    title: "Contact Ashmyra Technologies | Book a Demo",
    description:
      "Reach Ashmyra's engineering team. Email info@ashmyra.com or call +91-9873746467 to discuss AI systems, automation, and enterprise software built for scale.",
    url: "https://ashmyra.com/contact",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Ashmyra Technologies",
      },
    ],
  },
  alternates: {
    canonical: "https://ashmyra.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs text-indigo-300 font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Direct Engineering Engagement</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Have a Problem Worth Solving?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Whether you need to automate multi-departmental operations, deploy autonomous AI agents, or architect a scalable custom SaaS product, our senior team is ready to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Value Prop */}
          <div className="lg:col-span-4 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 space-y-4">
              <h2 className="text-lg font-bold text-white">What to Expect:</h2>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct consultation with technical leads, not high-pressure sales reps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent feasibility audit and preliminary architecture diagram.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict confidentiality and mutual non-disclosure protection.</span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-7 space-y-4 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Response SLA</span>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                All inquiries reviewed by our engineering leadership within 24 business hours.
              </p>
              <div className="pt-2 border-t border-white/[0.06]">
                <span className="text-neutral-500 block mb-1">Company:</span>
                <span className="text-white font-bold">Ashmyra</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1">Domain:</span>
                <span className="text-indigo-300">ashmyra.com</span>
              </div>
              <div>
                <span className="text-neutral-500 block mb-1">Leadership:</span>
                <Link href="/team" className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1">
                  <span>Executive Technical Leadership</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
