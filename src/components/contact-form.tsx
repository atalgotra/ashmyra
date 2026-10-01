"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  companySize: string;
  requirement: string;
  budgetRange: string;
  timeline: string;
  message: string;
  honeypot: string; // Anti-bot honeypot
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    companySize: "11-50 employees",
    requirement: "AI / Agentic AI Systems",
    budgetRange: "$25k - $50k",
    timeline: "1 - 3 months",
    message: "",
    honeypot: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      // Bot detected silently
      return;
    }

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill in your name, work email, and a brief description of your requirements.");
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);

    // Simulate reliable API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="bg-[#0a0d16] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-xl mx-auto shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted</h3>
        <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
          Thank you, <span className="text-white font-medium">{formData.name}</span>. An Ashmyra solutions architect will review your project requirements and connect with you at <span className="text-indigo-300 font-mono">{formData.email}</span> within one business day.
        </p>
        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-neutral-400 font-mono text-left mb-6">
          <p><strong className="text-white">Selected Scope:</strong> {formData.requirement}</p>
          <p><strong className="text-white">Company:</strong> {formData.company || "Direct Inquiry"}</p>
          <p><strong className="text-white">Estimated Timeline:</strong> {formData.timeline}</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              companySize: "11-50 employees",
              requirement: "AI / Agentic AI Systems",
              budgetRange: "$25k - $50k",
              timeline: "1 - 3 months",
              message: "",
              honeypot: "",
            });
          }}
          className="text-xs text-indigo-400 hover:text-indigo-300 underline font-medium"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0d16] border border-white/[0.08] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 blur-[80px] pointer-events-none" />

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
        {/* Honeypot field (hidden from human visitors) */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="security_check"
            tabIndex={-1}
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            autoComplete="off"
          />
        </div>

        {errorMsg && (
          <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-neutral-500" />
              Full Name <span className="text-indigo-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Alex Mercer"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-neutral-500" />
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Technologies"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Work Email */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              Work Email <span className="text-indigo-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-neutral-500" />
              Phone / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Company Size & Requirement Dropdown */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Company Size
            </label>
            <select
              value={formData.companySize}
              onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="1-10 employees">1 - 10 employees (Early stage)</option>
              <option value="11-50 employees">11 - 50 employees (Growing team)</option>
              <option value="51-200 employees">51 - 200 employees (Mid-market)</option>
              <option value="201-1000 employees">201 - 1,000 employees (Scaleup)</option>
              <option value="1000+ employees">1,000+ employees (Enterprise)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Primary Focus Area
            </label>
            <select
              value={formData.requirement}
              onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="AI / Agentic AI Systems">AI / Agentic AI Systems</option>
              <option value="Ashmyra SEO Intelligence">Ashmyra SEO Intelligence</option>
              <option value="Ashmyra HRMS Deployment">Ashmyra HRMS Platform</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="Workflow Automation Platform">Workflow Automation Platform</option>
              <option value="High-Performance Web App">High-Performance Web App</option>
              <option value="Business Analytics & BI">Business Analytics &amp; BI</option>
              <option value="Other Enterprise Consultation">Other Enterprise Consultation</option>
            </select>
          </div>
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Anticipated Investment Range
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="Under $10k">Under $10,000 (Scoping / Audit)</option>
              <option value="$10k - $25k">$10,000 - $25,000</option>
              <option value="$25k - $50k">$25,000 - $50,000</option>
              <option value="$50k - $100k">$50,000 - $100,000</option>
              <option value="$100k+">$100,000+ (Enterprise Transformation)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-300 mb-1.5">
              Desired Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
            >
              <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
              <option value="1 - 3 months">1 - 3 months</option>
              <option value="3 - 6 months">3 - 6 months</option>
              <option value="Exploratory / Q3-Q4">Exploratory / Planning phase</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-medium text-neutral-300 mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-neutral-500" />
            Project Objectives &amp; Requirements <span className="text-indigo-400">*</span>
          </label>
          <textarea
            required
            rows={4}
            placeholder="Tell us what you are looking to build or automate, current bottlenecks, or specific systems to connect..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#07090e] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 transition-colors resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 disabled:opacity-50 px-8 py-3.5 rounded-xl shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.01]"
          >
            <span>{isSubmitting ? "Transmitting Requirements..." : "Start a Conversation"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/[0.06] text-xs text-neutral-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Non-Disclosure &amp; strict confidentiality guaranteed.
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            Average response time: &lt; 24 hours.
          </span>
        </div>
      </form>
    </div>
  );
}
