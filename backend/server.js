
import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import fs from 'fs';

const app = express();

// Enable CORS to allow requests from the frontend
app.use(cors());
app.use(express.json());

// SMTP Configuration (reads from environment variables when available)
const SMTP_HOST = process.env.SMTP_HOST || 'mail.spacemail.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_SECURE = (process.env.SMTP_SECURE || 'true') === 'true';
const SMTP_USER = process.env.SMTP_USER || 'info@tripmatezanzibar.com';
const SMTP_PASS = process.env.SMTP_PASS || 'Hacker@255';

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verify SMTP connection on startup
transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Server is ready to send emails");
  }
});

app.post('/api/send-booking', async (req, res) => {
  const data = req.body;
  const isContactForm = data.type === 'contact';

  try {
    // Common Styles for Email
    const emailHeader = `
      <div style="background-color: #0d9488; padding: 20px; text-align: center;">
        <h1 style="color: white; font-family: 'Playfair Display', serif; margin: 0;">Zanzibar Best One</h1>
        <p style="color: #f0fdfa; font-family: sans-serif; margin: 5px 0 0;">Discover the Magic of Zanzibar</p>
      </div>
    `;

    const emailFooter = `
      <div style="background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; font-family: sans-serif;">
        <p>Zanzibar Best One | Mwanakwerekwe, Zanzibar, Tanzania</p>
        <p>WhatsApp: +255 777 707 010 | Email: info@tripmatezanzibar.com</p>
        <p>&copy; ${new Date().getFullYear()} Zanzibar Best One. All rights reserved.</p>
      </div>
    `;

    // 1. Email to ADMIN
    const adminSubject = isContactForm 
      ? `[New Message] Contact Inquiry from ${data.fullName}`
      : `[New Booking] ${data.type.toUpperCase()} - ${data.itemName || 'Custom Trip'} - ${data.fullName}`;

    const adminMailOptions = {
      from: '"Zanzibar Best One System" <info@tripmatezanzibar.com>',
      to: "info@tripmatezanzibar.com", 
      subject: adminSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; border: 1px solid #e2e8f0;">
          <div style="background-color: #0f172a; padding: 15px; color: white;">
            <h2 style="margin: 0;">New Web Request</h2>
          </div>
          <div style="padding: 20px;">
            <h3 style="border-bottom: 2px solid #0d9488; padding-bottom: 5px;">Client Details</h3>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            
            <h3 style="border-bottom: 2px solid #0d9488; padding-bottom: 5px; margin-top: 20px;">Request Details</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f1f5f9;">
                <td style="padding: 8px; font-weight: bold;">Type</td>
                <td style="padding: 8px;">${data.type.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Item/Tour</td>
                <td style="padding: 8px;">${data.itemName || 'N/A'}</td>
              </tr>
              <tr style="background-color: #f1f5f9;">
                <td style="padding: 8px; font-weight: bold;">Travel Date</td>
                <td style="padding: 8px;">${data.travelDate || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: bold;">Pax</td>
                <td style="padding: 8px;">${data.travelers}</td>
              </tr>
            </table>

            <h3 style="margin-top: 20px;">Message / Notes</h3>
            <div style="background-color: #fff7ed; padding: 15px; border-left: 4px solid #d97706;">
              ${data.details.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `
    };

    // 2. Confirmation Email to CLIENT
    const clientSubject = isContactForm
      ? "We received your message - Zanzibar Best One"
      : `Booking Received: ${data.itemName || 'Your Trip'} - Zanzibar Best One`;

    const clientBodyContent = isContactForm
      ? `<p>Thank you for contacting <strong>Zanzibar Best One</strong>. We have received your message and a member of our team will get back to you shortly.</p>
         <p><strong>Your Message:</strong><br/><i>"${data.details}"</i></p>`
      : `<p>Asante sana (Thank you) for choosing <strong>Zanzibar Best One</strong>! We are thrilled that you are planning your adventure with us.</p>
         <p>We have received your booking request. This email serves as a confirmation that we have your details. Our team is currently reviewing availability for your chosen dates.</p>
         
         <div style="background-color: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 8px; padding: 20px; margin: 20px 0;">
           <h3 style="color: #0f766e; margin-top: 0;">Your Trip Summary</h3>
           <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
             <tr>
               <td style="padding: 5px 0; color: #64748b;">Experience:</td>
               <td style="padding: 5px 0; font-weight: bold; color: #334155;">${data.itemName || 'Custom Itinerary'}</td>
             </tr>
             <tr>
               <td style="padding: 5px 0; color: #64748b;">Date:</td>
               <td style="padding: 5px 0; font-weight: bold; color: #334155;">${data.travelDate || 'To Be Confirmed'}</td>
             </tr>
             <tr>
               <td style="padding: 5px 0; color: #64748b;">Travelers:</td>
               <td style="padding: 5px 0; font-weight: bold; color: #334155;">${data.travelers} People</td>
             </tr>
           </table>
         </div>

         <p><strong>What happens next?</strong></p>
         <ol>
           <li>Our reservation manager will check availability.</li>
           <li>We will send you a formal quote or confirmation via WhatsApp/Email within 24 hours.</li>
           <li>Once confirmed, we will arrange the deposit and finalize your itinerary.</li>
         </ol>`;

    const clientMailOptions = {
      from: '"Zanzibar Best One" <info@tripmatezanzibar.com>',
      to: data.email,
      subject: clientSubject,
      html: `
        <div style="font-family: 'Lato', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          ${emailHeader}
          <div style="padding: 30px; color: #334155; line-height: 1.6;">
            <h2 style="color: #0f172a; font-family: 'Playfair Display', serif; margin-top: 0;">Jambo ${data.fullName},</h2>
            ${clientBodyContent}
            <p style="margin-top: 30px;">If you have any urgent questions, feel free to reply to this email or chat with us directly on WhatsApp.</p>
            <a href="https://wa.me/255777707010" style="display: inline-block; background-color: #25D366; color: white; text-decoration: none; padding: 12px 24px; border-radius: 50px; font-weight: bold; margin-top: 10px;">Chat on WhatsApp</a>
          </div>
          ${emailFooter}
        </div>
      `
    };

    // Send both emails and capture results for debugging
    let adminResult = null;
    let clientResult = null;

    try {
      adminResult = await transporter.sendMail(adminMailOptions);
    } catch (err) {
      console.error('Error sending ADMIN email:', err);
    }

    try {
      clientResult = await transporter.sendMail(clientMailOptions);
    } catch (err) {
      console.error('Error sending CLIENT email:', err);
    }

    const debugRecord = {
      timestamp: new Date().toISOString(),
      toAdmin: adminMailOptions.to,
      toClient: clientMailOptions.to,
      adminResult: adminResult || null,
      clientResult: clientResult || null,
      payload: data
    };

    try {
      fs.writeFileSync('./backend/last-email.json', JSON.stringify(debugRecord, null, 2));
    } catch (fsErr) {
      console.error('Failed to write debug file:', fsErr);
    }

    const sentAny = (adminResult && adminResult.messageId) || (clientResult && clientResult.messageId);

    if (sentAny) {
      console.log(`✅ Emails sent (or accepted) for ${data.fullName} (${data.type})`);
      res.status(200).json({ success: true, message: 'Emails sent (or accepted) by SMTP server', debug: debugRecord });
    } else {
      console.error('❌ No emails were accepted by SMTP server. Check SMTP logs and credentials.');
      res.status(500).json({ success: false, message: 'No emails were accepted by SMTP server', debug: debugRecord });
    }

  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});
