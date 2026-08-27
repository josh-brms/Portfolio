import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

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
      console.warn("RESEND_API_KEY not configured. Email would be sent to joshuabermasworks@gmail.com");
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

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "joshuabermasworks@gmail.com",
      subject,
      text: body,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}