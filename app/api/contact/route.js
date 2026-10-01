import { Resend } from "resend";

export async function POST(req) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["franvitar15@gmail.com"],
      replyTo: email,
      subject: "Portfolio inquiry from " + name,
      text: [
        "Name: " + name,
        "Email: " + email,
        company ? "Company: " + company : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
