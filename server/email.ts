import { Resend } from 'resend';
import type { Booking, Consultation, ContactSubmission } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = 'info@canineconfidence.com.au';

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
    const data = await resend.emails.send({
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
    const data = await resend.emails.send({
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
    const data = await resend.emails.send({
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
