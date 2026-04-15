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

export async function sendEmail(payload: ContactPayload): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Elgreen Metex <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
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

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return {
      ok: false,
      status: response.status,
      error: details,
    };
  }

  return { ok: true, status: 200 };
}

