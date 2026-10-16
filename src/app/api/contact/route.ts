import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      email,
      phone,
      companySize,
      requirement,
      budgetRange,
      timeline,
      message,
      honeypot,
    } = body;

    // Silent rejection for spam bots triggering honeypot field
    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "info@ashmyra.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    if (!apiKey) {
      console.warn(
        "[CONTACT_FORM] RESEND_API_KEY is not defined in environment variables. Inquiry payload logged:",
        { name, company, email, phone, requirement, budgetRange, timeline, message }
      );
      // Return success with warning so user experience is smooth, but notify development
      return NextResponse.json(
        {
          success: true,
          notice: "Inquiry recorded in local logs. Please add RESEND_API_KEY in Vercel to receive email notifications.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0c0f17; color: #f1f5f9; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
        <div style="margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px;">
          <h2 style="color: #ffffff; margin: 0 0 6px 0; font-size: 20px;">New Enterprise Engagement Inquiry</h2>
          <p style="color: #818cf8; margin: 0; font-size: 13px; font-family: monospace;">Via www.ashmyra.com/contact</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #94a3b8; width: 140px;">Full Name:</td>
            <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Work Email:</td>
            <td style="padding: 8px 0; color: #38bdf8;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Company Name:</td>
            <td style="padding: 8px 0; color: #ffffff;">${company || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Phone / WhatsApp:</td>
            <td style="padding: 8px 0; color: #ffffff;">${phone || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Company Size:</td>
            <td style="padding: 8px 0; color: #ffffff;">${companySize || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Primary Requirement:</td>
            <td style="padding: 8px 0; color: #34d399; font-weight: bold;">${requirement}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Budget Range:</td>
            <td style="padding: 8px 0; color: #ffffff;">${budgetRange || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #94a3b8;">Desired Timeline:</td>
            <td style="padding: 8px 0; color: #ffffff;">${timeline || "Not specified"}</td>
          </tr>
        </table>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <h4 style="margin: 0 0 8px 0; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Project Requirements & Scope:</h4>
          <p style="margin: 0; color: #f1f5f9; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;">
          <a href="mailto:${email}?subject=Re:%20Ashmyra%20Technologies%20Consultation" style="display: inline-block; background: #4f46e5; color: #ffffff; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 13px; font-weight: bold;">
            Reply Directly to ${name}
          </a>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `Ashmyra Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Inquiry from ${name} (${company || "Direct"}) - ${requirement}`,
      html: emailHtml,
      text: `New Inquiry from ${name} (${email})\nCompany: ${company}\nRequirement: ${requirement}\nTimeline: ${timeline}\nBudget: ${budgetRange}\nMessage: ${message}`,
    });

    if (error) {
      console.error("[CONTACT_API] Resend API dispatch error:", error);
      return NextResponse.json(
        { error: "Failed to dispatch email. Please email info@ashmyra.com directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[CONTACT_API] Unhandled error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please reach us at info@ashmyra.com." },
      { status: 500 }
    );
  }
}
