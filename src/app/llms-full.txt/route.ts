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
- Ingestion Gateway: Cloud webhook stream ingesting Meta WhatsApp Cloud API, SendGrid/Postmark inbound webhooks, and WebSocket livechat.
- Autonomous Copilot: Semantic intent classifier with deterministic escalation boundaries and tool calling capabilities.

### 4. Ashmyra Unveil Architecture
- Live Endpoint: https://unveil.ashmyra.com/
- Generative Radar: Headless browser cluster executing real-time prompts against Perplexity, ChatGPT, and Google Gemini.
- Schema Validator: Automated JSON-LD syntax and entity hierarchy validator detecting missing Wikidata / Wikipedia sameAs entity linkages.
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
