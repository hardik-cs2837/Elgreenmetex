"use server";
import { Resend } from "resend";
type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

type SendEmailResult = {
  ok: boolean;
  status: number;
  error?: string;
};
const resend = new Resend(process.env.RESEND_API_KEY!);
export async function sendEmail(payload: ContactPayload): Promise<SendEmailResult> {
  
  const toEmail = process.env.CONTACT_TO_EMAIL;
  

  if (!process.env.RESEND_API_KEY || !toEmail) {
    return {
      ok: false,
      status: 500,
      error: "Mail service is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
    };
  }

  const subject = `New inquiry from ${payload.name}`;
  const html = `
    <h2>New contact inquiry</h2>
    <p><strong>Name:</strong> ${payload.name}</p>
    <p><strong>Email:</strong> ${payload.email}</p>
    <p><strong>Company:</strong> ${payload.company || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${payload.message.replace(/\n/g, "<br />")}</p>
  `;

  try {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: [toEmail!],
    reply_to: payload.email,
    subject,
    html,
  });

  return { ok: true, status: 200 };
} catch (error: any) {
  console.error(error);
  return {
    ok: false,
    status: 500,
    error: error?.message || "Email failed",
  };
}

 
}

