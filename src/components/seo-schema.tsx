import React from "react";

export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.ashmyra.com/#organization",
    "name": "Ashmyra Technologies",
    "legalName": "Ashmyra Technologies Private Limited",
    "alternateName": ["Ashmyra", "Ashmyra AI", "Ashmyra Technologies Private Limited"],
    "url": "https://www.ashmyra.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.ashmyra.com/brand/ashmyra-icon.png",
      "width": 512,
      "height": 512
    },
    "image": "https://www.ashmyra.com/brand/ashmyra-og-image.png",
    "description": "AI-native technology company engineering autonomous agent swarms, data intelligence platforms, generative engine optimization (GEO), HRMS, CRM, and enterprise software systems that act—not just assist.",
    "foundingDate": "2024",
    "email": "info@ashmyra.com",
    "telephone": "+91-9873746467",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN",
      "description": "New Delhi / NCR, India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6139,
      "longitude": 77.2090
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "Agentic AI Development",
      "Enterprise Software Engineering",
      "Generative Engine Optimization",
      "HRMS & Workforce Management",
      "Data Pipeline Engineering",
      "SaaS Product Development"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "11-50"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9873746467",
        "email": "info@ashmyra.com",
        "contactType": "customer service",
        "areaServed": "Worldwide",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-9873746467",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/ashmyra"
    ],
    "founder": [
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#swati-arora",
        "name": "Swati Arora",
        "jobTitle": "Founder"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#ashish-talgotra",
        "name": "Ashish Talgotra",
        "jobTitle": "AI Engineer / Data Scientist",
        "sameAs": [
          "https://www.linkedin.com/in/atalgotra/",
          "https://github.com/atalgotra"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#prince-rehan",
        "name": "Prince Rehan",
        "jobTitle": "Head - IT & Software Development"
      }
    ],
    "knowsAbout": [
      "Agentic AI Development",
      "Autonomous Multi-Agent Swarms",
      "Generative Engine Optimization (GEO)",
      "SEO Intelligence & Search Telemetry",
      "Enterprise SaaS Engineering",
      "Real-Time Data Pipelines",
      "Human-in-the-Loop AI Automation",
      "HRMS & Workforce Intelligence",
      "CRM & Customer Intelligence",
      "Workflow Automation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Ashmyra Intelligent Software Ecosystem",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra MailFlow",
            "description": "Autonomous cold email warmup, mailbox rotation, and conversion-optimized copywriting with 99.4% deliverability.",
            "applicationCategory": "BusinessApplication",
            "url": "https://mailflow.ashmyra.com/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Prospect IQ",
            "description": "B2B lead intelligence, contact enrichment, and verified contact scraping platform.",
            "applicationCategory": "BusinessApplication",
            "url": "https://prospectiq.ashmyra.com/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Omnira",
            "description": "Unified omnichannel AI communications stream consolidating WhatsApp, Email, and Web Chat.",
            "applicationCategory": "BusinessApplication",
            "url": "https://omnira.ashmyra.com/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra Unveil",
            "description": "Generative Engine Optimization (GEO) audit radar and LLM citation intelligence platform.",
            "applicationCategory": "BusinessApplication",
            "url": "https://unveil.ashmyra.com/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Veyrix",
            "description": "Search intelligence platform featuring autonomous deep spider crawling, multi-agent SEO forensics, GSC/GA4 telemetry, and GEO citation radar.",
            "applicationCategory": "BusinessApplication",
            "url": "https://veyrix.ashmyra.com/"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra AI",
            "description": "Autonomous multi-agent AI swarms for enterprise workflow automation and intelligent decision execution.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/ai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra SEO",
            "description": "Generative Engine Optimization (GEO) intelligence platform that makes businesses visible and citable by AI answer engines.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/seo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra HRMS",
            "description": "AI-powered workforce management platform covering attendance, payroll, performance, and employee intelligence.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/hrms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra Analytics",
            "description": "Real-time data intelligence platform with business analytics, dashboards, and predictive insights.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra CRM",
            "description": "AI-enhanced CRM with predictive lead scoring, automated workflows, and pipeline intelligence.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/crm"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra Automation",
            "description": "No-code enterprise workflow automation builder for complex business process automation.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/automation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "Ashmyra Web",
            "description": "AI-powered intelligent web presence and conversion optimization platform.",
            "applicationCategory": "BusinessApplication",
            "url": "https://www.ashmyra.com/products/web"
          }
        }
      ]
    }
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.ashmyra.com/#website",
    "name": "Ashmyra Technologies",
    "alternateName": "Ashmyra",
    "url": "https://www.ashmyra.com",
    "description": "Official website of Ashmyra Technologies — AI-native technology company building intelligent systems that act.",
    "inLanguage": "en-US",
    "publisher": {
      "@id": "https://www.ashmyra.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.ashmyra.com/resources?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.ashmyra.com/#webpage",
    "url": "https://www.ashmyra.com",
    "name": "Ashmyra | We Build Intelligent Systems That Act",
    "isPartOf": { "@id": "https://www.ashmyra.com/#website" },
    "about": { "@id": "https://www.ashmyra.com/#organization" },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.ashmyra.com/brand/ashmyra-og-image.png"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".speakable-content"]
    },
    "description": "Ashmyra Technologies engineers AI agents, agentic automation, enterprise SaaS, HRMS, CRM, and data intelligence platforms. Based in Delhi NCR, India.",
    "inLanguage": "en-US"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Ashmyra Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra Technologies is an AI-native engineering company headquartered in New Delhi, India, that builds autonomous agentic systems, enterprise software platforms, HRMS solutions, GEO intelligence tools, and real-time data pipelines for enterprises globally."
        }
      },
      {
        "@type": "Question",
        "name": "Who founded Ashmyra Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra Technologies was founded by engineering practitioners with over a decade of experience building AI architectures, data platforms, and enterprise systems for real-world production environments."
        }
      },
      {
        "@type": "Question",
        "name": "What products does Ashmyra Technologies offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra offers seven flagship intelligent software products: (1) Ashmyra AI — autonomous agentic AI swarms, (2) Ashmyra SEO — Generative Engine Optimization (GEO) intelligence, (3) Ashmyra HRMS — AI-powered workforce management, (4) Ashmyra Analytics — real-time data intelligence, (5) Ashmyra CRM — customer intelligence and pipeline management, (6) Ashmyra Automation — no-code workflow automation, and (7) Ashmyra Web — AI-powered web presence platform."
        }
      },
      {
        "@type": "Question",
        "name": "What is Generative Engine Optimization (GEO)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Generative Engine Optimization (GEO) is the discipline of optimizing digital content, structured data, and knowledge graphs so that AI answer engines — including ChatGPT, Perplexity, Google Gemini, and Anthropic Claude — accurately identify, cite, and recommend a business as the primary authoritative source for relevant queries."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Ashmyra Technologies located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra Technologies is headquartered in New Delhi / NCR (National Capital Region), India. The team delivers remote-first engineering to enterprises across India and globally."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Ashmyra Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reach Ashmyra Technologies by emailing info@ashmyra.com, calling +91-9873746467, or visiting the contact page at https://www.ashmyra.com/contact to book a demo or initiate an enterprise engagement."
        }
      },
      {
        "@type": "Question",
        "name": "What is Ashmyra HRMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra HRMS is an AI-powered Human Resource Management System built for enterprise-scale workforce intelligence. It covers attendance management, payroll processing, performance management, recruitment automation, and employee analytics — all powered by AI."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads Ashmyra Technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra Technologies was founded by Ashish Talgotra (Founder & Lead AI Architect) and Swati Arora (Co-Founder & Business Strategy), with Prince Rehan serving as Head - IT & Software Development. The leadership team brings over a decade of hands-on expertise building autonomous AI agent swarms, distributed data platforms, and enterprise software systems at scale."
        }
      },
      {
        "@type": "Question",
        "name": "Does Ashmyra serve clients outside India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While Ashmyra Technologies is headquartered in Delhi NCR, India, the company operates as a remote-first engineering firm and serves enterprise clients globally across multiple time zones."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I test working live demos of Ashmyra software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can test live interactive production demos at https://www.ashmyra.com/demos. Five systems are immediately accessible: Veyrix (search intelligence & deep spider forensics at https://veyrix.ashmyra.com/), Ashmyra MailFlow (cold email warmup & automation at https://mailflow.ashmyra.com/), Prospect IQ (B2B lead intelligence at https://prospectiq.ashmyra.com/), Omnira (omnichannel AI communications at https://omnira.ashmyra.com/), and Ashmyra Unveil (generative search & GEO radar at https://unveil.ashmyra.com/)."
        }
      },
      {
        "@type": "Question",
        "name": "Can Ashmyra platforms be deployed in our private VPC or on-premise cloud?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All Ashmyra platforms support dedicated single-tenant enterprise deployments inside client AWS, Google Cloud, Microsoft Azure, or private on-premise Kubernetes clusters with dedicated SLAs and custom fine-tuned LLMs."
        }
      }
    ]
  };

  const leadershipSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#swati-arora",
        "name": "Swati Arora",
        "jobTitle": "Founder",
        "worksFor": {
          "@id": "https://www.ashmyra.com/#organization"
        },
        "url": "https://www.ashmyra.com/team",
        "knowsAbout": [
          "Enterprise Business Strategy",
          "Go-To-Market & Market Scale",
          "Strategic Alliances",
          "Commercial Operations Delivery"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#ashish-talgotra",
        "name": "Ashish Talgotra",
        "jobTitle": "AI Engineer / Data Scientist",
        "worksFor": {
          "@id": "https://www.ashmyra.com/#organization"
        },
        "url": "https://www.ashmyra.com/team",
        "image": "https://www.ashmyra.com/hero/ashish-portrait.png",
        "sameAs": [
          "https://www.linkedin.com/in/atalgotra/",
          "https://github.com/atalgotra"
        ],
        "knowsAbout": [
          "Autonomous Multi-Agent AI Swarms",
          "Generative Engine Optimization (GEO)",
          "Enterprise LLMs & AI Systems",
          "Real-Time Data Pipelines",
          "Distributed Architecture"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.ashmyra.com/team#prince-rehan",
        "name": "Prince Rehan",
        "jobTitle": "Head - IT & Software Development",
        "worksFor": {
          "@id": "https://www.ashmyra.com/#organization"
        },
        "url": "https://www.ashmyra.com/team",
        "image": "https://www.ashmyra.com/team/prince-rehan.jpg",
        "knowsAbout": [
          "Enterprise IT Infrastructure",
          "Software Engineering Lifecycle",
          "Cloud Systems & DevOps",
          "Technical Systems Delivery",
          "Mission-Critical Architectures"
        ]
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.ashmyra.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Live Demos",
        "item": "https://www.ashmyra.com/demos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Products",
        "item": "https://www.ashmyra.com/products"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Services",
        "item": "https://www.ashmyra.com/services"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Team",
        "item": "https://www.ashmyra.com/team"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://www.ashmyra.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(leadershipSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
