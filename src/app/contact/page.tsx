import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumb } from "@/components/breadcrumb";
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
  title: "Contact Engineering & Sales",
  description:
    "Connect with Ashmyra Technologies in Delhi NCR, India. Book a tailored live demo of our AI platforms or discuss bespoke enterprise software engineering.",
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
    url: "https://www.ashmyra.com/contact",
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
    canonical: "https://www.ashmyra.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div
      className="pt-32 pb-24 min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Breadcrumb Navigation Trail */}
          <div className="mb-6 flex justify-center">
            <Breadcrumb items={[{ name: "Contact" }]} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono mb-4" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
            <Sparkles className="w-3.5 h-3.5" style={{ color: "var(--accent, #4f46e5)" }} />
            <span className="font-semibold">Direct Engineering Engagement</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}>
            Have a Problem Worth Solving?
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Whether you need to automate multi-departmental operations, deploy autonomous AI agents, or architect a scalable custom SaaS product, our senior team is ready to talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Value Prop */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl p-6 sm:p-7 space-y-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>What to Expect:</h2>
              <div className="space-y-3 text-xs" style={{ color: "var(--text-muted)" }}>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-emerald, #059669)" }} />
                  <span>Direct consultation with technical leads, not high-pressure sales reps.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-emerald, #059669)" }} />
                  <span>Transparent feasibility audit and preliminary architecture diagram.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "var(--accent-emerald, #059669)" }} />
                  <span>Strict confidentiality and mutual non-disclosure protection.</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="rounded-3xl p-6 sm:p-7 space-y-4" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <h2 className="text-base font-bold" style={{ color: "var(--text)" }}>Direct Communication Channels</h2>
              
              <div className="space-y-3">
                <a
                  href="mailto:info@ashmyra.com"
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all group hover:scale-[1.01]"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--theme-pill-bg, rgba(79,70,229,0.1))", border: "1px solid var(--border)", color: "var(--accent, #4f46e5)" }}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>Direct Email</div>
                    <div className="text-xs sm:text-sm font-semibold truncate transition-colors" style={{ color: "var(--text)" }}>
                      info@ashmyra.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/919873746467"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-2xl transition-all group hover:scale-[1.01]"
                  style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(5, 150, 105, 0.1)", border: "1px solid var(--border)", color: "#059669" }}>
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>Phone / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold truncate transition-colors" style={{ color: "var(--text)" }}>
                      +91-9873746467
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-2xl" style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)" }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(2, 132, 199, 0.1)", border: "1px solid var(--border)", color: "#0284c7" }}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono" style={{ color: "var(--text-muted)" }}>Engineering HQ</div>
                    <div className="text-xs sm:text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                      New Delhi / NCR, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-6 sm:p-7 space-y-4 text-xs font-mono" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-muted)" }}>
              <div className="flex items-center gap-2 font-semibold" style={{ color: "var(--text)" }}>
                <Clock className="w-4 h-4" style={{ color: "var(--accent, #4f46e5)" }} />
                <span>Response SLA</span>
              </div>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                All inquiries reviewed by our engineering leadership within 24 business hours.
              </p>
              <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="block mb-1" style={{ color: "var(--text-muted)" }}>Company:</span>
                <span className="font-bold" style={{ color: "var(--text)" }}>Ashmyra Technologies</span>
              </div>
              <div>
                <span className="block mb-1" style={{ color: "var(--text-muted)" }}>Domain:</span>
                <span className="font-semibold" style={{ color: "var(--accent, #4f46e5)" }}>www.ashmyra.com</span>
              </div>
              <div>
                <span className="block mb-1" style={{ color: "var(--text-muted)" }}>Leadership:</span>
                <Link href="/team#team" className="hover:underline transition-colors flex items-center gap-1 font-semibold" style={{ color: "var(--accent, #4f46e5)" }}>
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
