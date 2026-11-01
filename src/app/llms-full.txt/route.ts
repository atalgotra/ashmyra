import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "llms.txt");
    const baseContent = fs.readFileSync(filePath, "utf-8");

    const fullContent = `${baseContent}

## Comprehensive Technical Architecture & Integration Specifications

### 1. Ashmyra MailFlow Architecture
- Live Endpoint: https://mailflow.ashmyra.com/
- Protocol: Multi-threaded SMTP / IMAP warmup proxy network with dynamic IP reputation cycling.
- Deliverability Telemetry: Real-time DNS verification (DKIM selector check, SPF alignment, DMARC policy enforcement: p=reject).
- AI Writing Core: Fine-tuned cold outreach models optimizing for low spam score tokens and high reply intent.

### 2. Prospect IQ Architecture
- Live Endpoint: https://prospectiq.ashmyra.com/
- Data Pipeline: Asynchronous waterfall enrichment querying company registries, professional graphs, and real-time MX mailbox pings.
- Accuracy Verification: Direct SMTP handshake verification with catch-all domain detection (<1.2s latency).

### 3. Omnira Architecture
- Live Endpoint: https://omnira.ashmyra.com/
- Core Function: Autonomous Agentic AI Social Media Manager for YouTube, LinkedIn, Facebook, and Instagram.
- Capabilities: Deep channel performance auditing, real-time market news and competitor playbook intelligence, automated post creation, video scripts, and high-intent hashtag cluster optimization.

### 4. Ashmyra Unveil Architecture
- Live Endpoint: https://unveil.ashmyra.com/
- Media Processing Engine: High-fidelity AI neural inpainting and segmentation for photos and videos.
- Capabilities: Watermark and moving watermark removal across video frames, background and noise eraser, unwanted object removal, and multi-file batch processing (MP4, MOV, WebM, PNG, JPG).

### 5. Veyrix Search Intelligence Architecture
- Live Endpoint: https://veyrix.ashmyra.com/
- Deep Spider Crawler: Multi-threaded headless engine executing deep architectural audits, internal link graphs, and HTTP forensic telemetry.
- Telemetry Integration: Bi-directional OAuth sync with Google Search Console & GA4 streaming live click trends, cannibalization detection, and query rankings.
- GEO Citation Radar: Real-time brand entity tracking across AI answer engines (ChatGPT, Perplexity, Google Gemini).
`;

    return new NextResponse(fullContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (error) {
    return new NextResponse("Not Found", { status: 404 });
  }
}
