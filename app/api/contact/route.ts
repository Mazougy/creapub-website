import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(body: ContactPayload): string {
  const firstName = escapeHtml(body.firstName || "—");
  const lastName = escapeHtml(body.lastName || "—");
  const companyName = escapeHtml(body.company || "—");
  const email = escapeHtml(body.email || "—");
  const phone = escapeHtml(body.phone || "—");
  const projectType = escapeHtml(body.projectType || "—");
  const message = escapeHtml(body.message || "—").replace(/\n/g, "<br/>");

  const now = new Date();
  const currentDate = now.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const currentTime = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:6px 0;color:#5c6b8f;font-size:13px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:6px 0;color:#24304f;font-size:14px;font-weight:600;">${value}</td>
    </tr>
  `;

  const sectionCard = (icon: string, title: string, rowsHtml: string) => `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
      <tr>
        <td style="background:#ffffff;border:1px solid rgba(73,90,168,0.14);border-radius:20px;padding:20px 24px;">
          <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:#495AA8;">
            ${icon} ${title}
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${rowsHtml}
          </table>
        </td>
      </tr>
    </table>
  `;

  return `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Nouvelle demande de devis</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f7ff;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7ff;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
            <tr>
              <td style="background:linear-gradient(135deg,#495AA8,#3E4E95);border-radius:24px 24px 0 0;padding:28px 28px;">
                <p style="margin:0;font-size:20px;font-weight:800;color:#ffffff;">📩 Nouvelle demande de devis</p>
                <p style="margin:6px 0 0;font-size:13px;color:rgba(255,255,255,0.75);">Formulaire de contact — site Creapub</p>
              </td>
            </tr>
            <tr>
              <td style="background:#eef3ff;padding:24px 20px 32px;border-radius:0 0 24px 24px;">
                ${sectionCard(
                  "👤",
                  "Client",
                  row("Prénom", firstName) + row("Nom", lastName) + row("Société", companyName)
                )}
                ${sectionCard("📞", "Contact", row("Email", email) + row("Téléphone", phone))}
                ${sectionCard(
                  "🛠",
                  "Projet",
                  row("Service", projectType) +
                    `<tr><td colspan="2" style="padding-top:8px;color:#24304f;font-size:14px;line-height:1.6;">${message}</td></tr>`
                )}
                ${sectionCard("📅", "Date", row("Date", currentDate) + row("Heure", currentTime))}
                <p style="margin:20px 0 0;text-align:center;font-size:12px;color:#5c6b8f;">
                  Envoyé automatiquement depuis le formulaire de contact Creapub.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildEmailText(body: ContactPayload): string {
  const now = new Date();
  return [
    "Nouvelle demande de devis — Creapub",
    "",
    "Client",
    `  Prénom: ${body.firstName || "—"}`,
    `  Nom: ${body.lastName || "—"}`,
    `  Société: ${body.company || "—"}`,
    "",
    "Contact",
    `  Email: ${body.email || "—"}`,
    `  Téléphone: ${body.phone || "—"}`,
    "",
    "Projet",
    `  Service: ${body.projectType || "—"}`,
    `  Description: ${body.message || "—"}`,
    "",
    "Date",
    `  ${now.toLocaleDateString("fr-FR")} à ${now.toLocaleTimeString("fr-FR")}`,
  ].join("\n");
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactPayload;

  const to = process.env.CONTACT_TO || "marzouguiadam82@gmail.com";
  const subject = `Nouvelle demande de devis — ${body.firstName || ""} ${body.lastName || ""}`.trim();
  const html = buildEmailHtml(body);
  const text = buildEmailText(body);

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const nodemailer = await import("nodemailer");

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: { user: smtpUser, pass: smtpPass },
      });

      const info = await transporter.sendMail({
        from: process.env.SMTP_FROM || smtpUser,
        to,
        subject,
        html,
        text,
      });

      return NextResponse.json({ ok: true, info });
    } catch (err) {
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

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || testAccount.user,
      to,
      subject: `${subject} (ethereal preview)`,
      html,
      text,
    });

    const previewUrl = nodemailer.getTestMessageUrl(info) || null;
    console.info("Ethereal preview URL:", previewUrl);
    return NextResponse.json({ ok: true, previewUrl, info });
  } catch (err) {
    console.error("/api/contact ethereal error:", err);
    return NextResponse.json({ ok: false, error: "SMTP not configured" }, { status: 501 });
  }
}