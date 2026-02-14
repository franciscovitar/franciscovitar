import { Resend } from "resend";

const resend = new Resend("re_5MvA5P9w_AV77NaxungrK67U4YBmuDLhW");

export async function POST(req) {
  try {
    const { name, email, company, message } = await req.json();

    // Validación mínima
    if (!name || !email || !message) {
      return Response.json(
        { ok: false, error: "Missing fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["franvitar15@gmail.com"],
      replyTo: email,
      subject: `Project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
