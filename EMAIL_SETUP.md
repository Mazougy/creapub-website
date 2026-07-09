Enable server-side email

1. Copy `.env.local.example` to `.env.local` in the project root.

2. Fill the SMTP values with real credentials from your SMTP provider (SendGrid, Mailgun, Postmark, SES, or your host):

- `SMTP_HOST` — SMTP server hostname (e.g. smtp.sendgrid.net)
- `SMTP_PORT` — SMTP port (587 for STARTTLS, 465 for TLS)
- `SMTP_USER` — SMTP username
- `SMTP_PASS` — SMTP password
- `SMTP_FROM` — Optional: from address shown in email (e.g. "Creapub <no-reply@creapub.com>")
- `CONTACT_TO` — recipient address (defaults to marzouguiadam82@gmail.com)

3. Restart the dev server:

```bash
npm run dev
```

4. Test by submitting the contact form in the UI or calling the API directly:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

5. Check the server terminal for logs. If nodemailer sends successfully, the API returns `{ ok: true }`.

Troubleshooting
- If you see `SMTP not configured` response, confirm `.env.local` is in the project root and the server was restarted.
- If nodemailer throws an error, check credentials and provider docs (ports/secure flag).

Security
- Never commit `.env.local` with real secrets. Keep it out of git.
