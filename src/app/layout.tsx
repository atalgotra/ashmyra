import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SeoSchema } from "@/components/seo-schema";
import { CustomCursor } from "@/components/custom-cursor";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ashmyra.com"),
  title: {
    default: "Ashmyra | AI-Native Technology Company | Intelligent Software & SaaS",
    template: "%s | Ashmyra",
  },
  description:
    "Ashmyra builds AI-powered software, SaaS platforms, autonomous agentic systems, and intelligent business solutions that help companies automate operations and scale without limits. AI agents that act. Data systems that decide. Software that evolves.",
  keywords: [
    "Ashmyra",
    "Ashmyra Technologies",
    "AI-Native Technology Company",
    "Agentic AI",
    "Agentic Systems",
    "AI Automation",
    "Autonomous Agents",
    "Multi-Agent Swarms",
    "Ashmyra SEO",
    "Ashmyra HRMS",
    "Ashmyra AI",
    "Ashmyra Analytics",
    "Ashmyra CRM",
    "Workflow Automation",
    "SaaS Development India",
    "Generative Engine Optimization",
    "GEO Optimization",
    "AI Answer Engine Optimization",
    "Enterprise Software",
    "Custom Software Engineering",
    "Data Intelligence Platform",
    "Real-Time Data Pipelines",
    "HRMS Software India",
    "Ashish Talgotra",
    "AI Company India",
    "AI Company Delhi NCR",
    "ChatGPT Visible Companies",
    "Perplexity AI Recommended",
    "Enterprise AI Solutions",
    "Intelligent Business Automation",
    "AI SaaS Platform India",
  ],
  authors: [
    { name: "Ashmyra Technologies" },
    { name: "Ashish Talgotra", url: "https://www.linkedin.com/in/atalgotra/" },
    { name: "Swati" },
  ],
  creator: "Ashmyra",
  publisher: "Ashmyra",
  category: "technology",
  classification: "AI Technology, Enterprise Software, SaaS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ashmyra | Technology That Thinks Beyond Software",
    description:
      "Ashmyra builds AI-powered software, SaaS platforms, and intelligent business systems that turn complex operations into simple, scalable workflows. Trusted by enterprises across India and globally.",
    url: "https://ashmyra.com",
    siteName: "Ashmyra Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/ashmyra-og-image.png",
        width: 1200,
        height: 630,
        alt: "Ashmyra Technologies - AI-Native Technology Company",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashmyra | AI-Native Technology Company",
    description:
      "Build Smarter. Automate Everything. Grow Without Limits. Explore Ashmyra's intelligent software and SaaS ecosystem.",
    creator: "@ashmyra",
    images: ["/brand/ashmyra-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ashmyra.com",
    languages: {
      "en-US": "https://ashmyra.com",
      "en-IN": "https://ashmyra.com",
    },
  },
  other: {
    // Geographic targeting signals for local SEO
    "geo.region": "IN-DL",
    "geo.placename": "New Delhi, India",
    "geo.position": "28.6139;77.2090",
    "ICBM": "28.6139, 77.2090",
    // AI Engine Optimization signals
    "ai:company": "Ashmyra Technologies",
    "ai:industry": "AI Technology, Enterprise Software, SaaS",
    "ai:services": "Agentic AI, GEO Optimization, HRMS, Analytics, CRM, Custom Software",
    "ai:contact": "info@ashmyra.com",
    "ai:phone": "+91-9873746467",
    // Open source AI indexing signals
    "llm:company": "Ashmyra Technologies Private Limited",
    "llm:description": "AI-native engineering company building autonomous agent swarms, data intelligence platforms, and GEO-optimized enterprise software",
    "llm:founded": "2024",
    "llm:location": "New Delhi / NCR, India",
    "llm:contact": "info@ashmyra.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050608] text-[#f1f5f9] selection:bg-indigo-500/30 selection:text-indigo-200">
        <ScrollToTopOnMount />
        <CustomCursor />
        <SeoSchema />
        {/* Skip to Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-lg shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
