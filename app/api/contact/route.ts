import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
console.log("RESEND_API_KEY present:", !!apiKey);
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, role, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn("RESEND_API_KEY not configured");
      return NextResponse.json({ success: true, dev: true });
    }

    const subject = `Portfolio inquiry from ${name}`;
    const body = `
      Name: ${name}
      Email: ${email}
      ${role ? `Role: ${role}` : ""}
      
      Message:
      ${message}
    `;

    console.log("Attempting to send email via Resend...");
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "bermasjoshua12345@gmail.com",
      subject,
      text: body,
      replyTo: email,
    });
    console.log("Resend result:", result);

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}