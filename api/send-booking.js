import nodemailer from 'nodemailer';

// Keep transporter across invocations when possible (warm functions)
let transporter;
function getTransporter() {
  if (transporter) return transporter;

  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '465', 10);
  const secure = (process.env.SMTP_SECURE || 'true') === 'true';

  transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      // allow self-signed (set SMTP_REJECT_UNAUTHORIZED=false to disable)
      rejectUnauthorized: (process.env.SMTP_REJECT_UNAUTHORIZED || 'false') === 'true',
    },
  });

  return transporter;
}

export default async function handler(req, res) {
  // Basic CORS handling (Vercel may set this for you)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  let data = req.body;
  // Some runtimes may pass the body as a raw string; handle that defensively
  if (!data || typeof data === 'string') {
    try {
      data = JSON.parse(typeof data === 'string' && data.length ? data : req.rawBody || '{}');
    } catch (parseErr) {
      console.error('Failed to parse request body as JSON:', parseErr);
      return res.status(400).json({ success: false, message: 'Invalid JSON body' });
    }
  }

  try {
    const transporter = getTransporter();

    const isContactForm = data.type === 'contact';

    const adminSubject = isContactForm
      ? `[New Message] Contact Inquiry from ${data.fullName}`
      : `[New Booking] ${data.type?.toUpperCase() || 'BOOKING'} - ${data.itemName || 'Custom Trip'} - ${data.fullName}`;

    const adminMailOptions = {
      from: `"Zanzibar Best One System" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: adminSubject,
      html: `<p>New request from ${data.fullName} (${data.email})</p><pre>${JSON.stringify(data, null, 2)}</pre>`,
    };

    const clientSubject = isContactForm
      ? 'We received your message - Zanzibar Best One'
      : `Booking Received: ${data.itemName || 'Your Trip'} - Zanzibar Best One`;

    const clientMailOptions = {
      from: `"Zanzibar Best One" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: data.email,
      subject: clientSubject,
      html: `<p>Hi ${data.fullName},</p><p>Thanks — we received your request. We'll be in touch shortly.</p>`,
    };

    const adminResult = await transporter.sendMail(adminMailOptions);
    const clientResult = await transporter.sendMail(clientMailOptions);

    // Return SMTP responses for debugging (don't include secrets in production)
    return res.status(200).json({ success: true, adminResult, clientResult });
  } catch (err) {
    console.error('Error in /api/send-booking:', err);
    return res.status(500).json({ success: false, message: err.message || 'Internal error' });
  }
}
