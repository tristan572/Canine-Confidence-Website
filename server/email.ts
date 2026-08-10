import { Resend } from 'resend';
import { createHash } from 'crypto';
import type { Booking, Consultation, ContactSubmission } from '@shared/schema';

const BUSINESS_EMAIL = 'info@canineconfidence.com.au';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

// Escape HTML to prevent injection attacks
function escapeHtml(text: string | null | undefined): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendBookingNotification(booking: Booking) {
  try {
    const data = await getResendClient().emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Booking Request - ${escapeHtml(booking.clientName)}`,
      html: `
        <h2>New Booking Request</h2>
        <p>You have received a new booking request from your website.</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(booking.clientName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(booking.clientEmail)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(booking.clientPhone) || 'Not provided'}</li>
          <li><strong>Dog Name:</strong> ${escapeHtml(booking.dogName)}</li>
          ${booking.dogBreed ? `<li><strong>Dog Breed:</strong> ${escapeHtml(booking.dogBreed)}</li>` : ''}
          ${booking.dogAge ? `<li><strong>Dog Age:</strong> ${escapeHtml(booking.dogAge)}</li>` : ''}
        </ul>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Service ID:</strong> ${Number(booking.serviceId)}</li>
          <li><strong>Preferred Date:</strong> ${escapeHtml(booking.preferredDate) || 'Not specified'}</li>
          <li><strong>Preferred Time:</strong> ${escapeHtml(booking.preferredTime) || 'Flexible'}</li>
        </ul>
        
        ${booking.behaviorConcerns ? `<h3>Behavior Concerns:</h3><p>${escapeHtml(booking.behaviorConcerns)}</p>` : ''}
        ${booking.previousTraining ? `<h3>Previous Training:</h3><p>${escapeHtml(booking.previousTraining)}</p>` : ''}
        
        <p><em>This booking was submitted on ${booking.createdAt ? new Date(booking.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Booking notification sent for ${escapeHtml(booking.clientName)} (ID: ${data.data?.id})`);
  } catch (error) {
    console.error('Failed to send booking notification email:', error);
    throw error;
  }
}

export async function sendConsultationNotification(consultation: Consultation) {
  try {
    const data = await getResendClient().emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Free Consultation Request - ${escapeHtml(consultation.clientName)}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p>Someone has requested a free phone consultation through your website.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(consultation.clientName)}</li>
          <li><strong>Email:</strong> ${escapeHtml(consultation.clientEmail)}</li>
          <li><strong>Phone:</strong> ${escapeHtml(consultation.clientPhone)}</li>
          ${consultation.preferredCallTime ? `<li><strong>Preferred Call Time:</strong> ${escapeHtml(consultation.preferredCallTime)}</li>` : ''}
        </ul>
        
        ${consultation.dogInfo ? `<h3>Dog Information:</h3><p>${escapeHtml(consultation.dogInfo)}</p>` : ''}
        ${consultation.concerns ? `<h3>Concerns:</h3><p>${escapeHtml(consultation.concerns)}</p>` : ''}
        
        <p><em>This consultation request was submitted on ${consultation.createdAt ? new Date(consultation.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Consultation notification sent for ${escapeHtml(consultation.clientName)} (ID: ${data.data?.id})`);
  } catch (error) {
    console.error('Failed to send consultation notification email:', error);
    throw error;
  }
}

export async function sendContactFormNotification(contact: ContactSubmission) {
  try {
    const data = await getResendClient().emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Contact Form Submission - ${escapeHtml(contact.name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message through your website contact form.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${escapeHtml(contact.name)}</li>
          <li><strong>Email:</strong> ${escapeHtml(contact.email)}</li>
          ${contact.phone ? `<li><strong>Phone:</strong> ${escapeHtml(contact.phone)}</li>` : ''}
        </ul>
        
        <h3>Message:</h3>
        <p>${escapeHtml(contact.message)}</p>
        
        <p><em>This message was submitted on ${contact.createdAt ? new Date(contact.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Contact form notification sent for ${escapeHtml(contact.name)} (ID: ${data.data?.id})`);
  } catch (error) {
    console.error('Failed to send contact form notification email:', error);
    throw error;
  }
}

export async function sendRescueGuideEmail(email: string) {
  const guideUrl = 'https://www.canineconfidence.com.au/rescuedogguide?access=1';
  const recipientHash = createHash('sha256')
    .update(email.trim().toLowerCase())
    .digest('hex')
    .slice(0, 32);

  const { data, error } = await getResendClient().emails.send(
    {
      from: 'Tristan at Canine Confidence <noreply@canineconfidence.com.au>',
      to: email,
      replyTo: BUSINESS_EMAIL,
      subject: 'Your rescue dog guide is ready',
      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <h1 style="font-size: 26px; color: #142d4c;">Your rescue dog guide is ready</h1>
          <p>Thanks for requesting <strong>The Safety Net: Your First 7 Days with Your Rescue Dog</strong>.</p>
          <p>It covers the simple structure, management and routines that help a new rescue dog settle into your home.</p>
          <p style="margin: 28px 0;">
            <a href="${guideUrl}" style="background: #142d4c; color: #ffffff; padding: 13px 20px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Read your guide</a>
          </p>
          <p>Keep this email so you can return to the guide whenever you need it.</p>
          <p>Tristan<br />Canine Confidence</p>
        </div>
      `,
      text: `Your rescue dog guide is ready\n\nRead The Safety Net: Your First 7 Days with Your Rescue Dog here:\n${guideUrl}\n\nKeep this email so you can return to the guide whenever you need it.\n\nTristan\nCanine Confidence`,
    },
    {
      idempotencyKey: `rescue-guide-v1-${recipientHash}`,
    },
  );

  if (error) {
    throw new Error(`Resend could not deliver the guide email: ${error.message}`);
  }

  return data;
}
