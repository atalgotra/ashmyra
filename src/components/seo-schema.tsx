import React from "react";

export function SeoSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ashmyra Technologies",
    "url": "https://ashmyra.com",
    "logo": "https://ashmyra.com/brand/ashmyra-logo.jpg",
    "description": "AI-native technology company building intelligent systems that act: autonomous agents, SEO intelligence, HRMS platforms, and enterprise software.",
    "founders": [
      {
        "@type": "Person",
        "name": "Manita",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Swati",
        "jobTitle": "Co-Founder"
      }
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Ashish Talgotra",
        "jobTitle": "AI Engineer & Data Scientist",
        "sameAs": "https://www.linkedin.com/in/atalgotra/"
      }
    ],
    "knowsAbout": [
      "Agentic AI Development",
      "Autonomous AI Agents",
      "SEO Intelligence & Automation",
      "Generative Engine Optimization (GEO)",
      "HRMS & Workforce Intelligence",
      "Enterprise Software Engineering",
      "Data Science & Prompt Engineering"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ashmyra Intelligent Systems Suite",
    "operatingSystem": "Web, Cloud, Distributed",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Ashmyra Technologies"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ashmyra Agentic AI & SEO Intelligence",
    "description": "Autonomous multi-agent orchestration, continuous search telemetry, and enterprise business systems.",
    "brand": {
      "@type": "Brand",
      "name": "Ashmyra"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does Ashmyra build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ashmyra builds intelligent systems that act — including autonomous agent swarms, real-time SEO intelligence, HRMS platforms, project management systems, and enterprise data solutions."
        }
      },
      {
        "@type": "Question",
        "name": "How does Ashmyra's SEO intelligence differ from standard audit tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most tools only report what is wrong. Ashmyra isolates the exact root cause, calculates PageRank distribution, and generates verified code solutions and implementation steps."
        }
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
        "item": "https://ashmyra.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Intelligent Systems",
        "item": "https://ashmyra.com/#systems"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
