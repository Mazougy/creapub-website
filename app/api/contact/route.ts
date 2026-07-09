import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  const to = process.env.CONTACT_TO || "marzouguiadam82@gmail.com";

  // If SMTP env vars are present, attempt to send using nodemailer.
  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      // Dynamically import nodemailer to avoid loading it in Edge runtimes
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      const html = `<pre>${JSON.stringify(body, null, 2)}</pre>`;

      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || smtpUser,
        to,
        subject: `Contact form — Creapub website`,
        html,
        text: JSON.stringify(body, null, 2),
      });

      return NextResponse.json({ ok: true, info });
    } catch (err) {
      // Log error to server console for debugging
      console.error("/api/contact error:", err);
      return NextResponse.json({ ok: false, error: String(err) }, { status: 500 });
    }
  }

  // No SMTP creds — create an Ethereal test account and send a preview email automatically
  try {
    const nodemailer = await import("nodemailer");
    const testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: { user: testAccount.user, pass: testAccount.pass },
    });

    const html = `<pre>${JSON.stringify(body, null, 2)}</pre>`;
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || testAccount.user,
      to,
      subject: `Contact form — Creapub website (ethereal preview)`,
      html,
      text: JSON.stringify(body, null, 2),
    });

    const previewUrl = nodemailer.getTestMessageUrl(info) || null;
    console.info("Ethereal preview URL:", previewUrl);
    return NextResponse.json({ ok: true, previewUrl, info });
  } catch (err) {
    console.error("/api/contact ethereal error:", err);
    // SMTP not configured and fallback failed — inform caller so client can fallback to mailto.
    return NextResponse.json({ ok: false, error: "SMTP not configured" }, { status: 501 });
  }

  // SMTP not configured — inform caller so client can fallback to mailto.
  return NextResponse.json({ ok: false, error: "SMTP not configured" }, { status: 501 });
}
