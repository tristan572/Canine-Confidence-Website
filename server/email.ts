import { Resend } from 'resend';
import type { Booking, Consultation, ContactSubmission } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = 'info@canineconfidence.com.au';

export async function sendBookingNotification(booking: Booking) {
  try {
    await resend.emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Booking Request - ${booking.customerName}`,
      html: `
        <h2>New Booking Request</h2>
        <p>You have received a new booking request from your website.</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${booking.customerName}</li>
          <li><strong>Email:</strong> ${booking.customerEmail}</li>
          <li><strong>Phone:</strong> ${booking.customerPhone}</li>
          <li><strong>Dog Name:</strong> ${booking.dogName || 'Not provided'}</li>
        </ul>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Service/Package:</strong> ${booking.serviceName}</li>
          <li><strong>Preferred Date:</strong> ${booking.preferredDate}</li>
          <li><strong>Preferred Time:</strong> ${booking.preferredTime || 'Flexible'}</li>
        </ul>
        
        ${booking.notes ? `<h3>Additional Notes:</h3><p>${booking.notes}</p>` : ''}
        
        <p><em>This booking was submitted on ${new Date(booking.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })}</em></p>
      `,
    });
    console.log(`✉️ Booking notification sent for ${booking.customerName}`);
  } catch (error) {
    console.error('Failed to send booking notification email:', error);
    throw error;
  }
}

export async function sendConsultationNotification(consultation: Consultation) {
  try {
    await resend.emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Free Consultation Request - ${consultation.name}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p>Someone has requested a free phone consultation through your website.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${consultation.name}</li>
          <li><strong>Email:</strong> ${consultation.email}</li>
          <li><strong>Phone:</strong> ${consultation.phone}</li>
        </ul>
        
        ${consultation.message ? `<h3>Message:</h3><p>${consultation.message}</p>` : ''}
        
        <p><em>This consultation request was submitted on ${new Date(consultation.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })}</em></p>
      `,
    });
    console.log(`✉️ Consultation notification sent for ${consultation.name}`);
  } catch (error) {
    console.error('Failed to send consultation notification email:', error);
    throw error;
  }
}

export async function sendContactFormNotification(contact: ContactSubmission) {
  try {
    await resend.emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Contact Form Submission - ${contact.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p>You have received a new message through your website contact form.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${contact.name}</li>
          <li><strong>Email:</strong> ${contact.email}</li>
          ${contact.phone ? `<li><strong>Phone:</strong> ${contact.phone}</li>` : ''}
        </ul>
        
        <h3>Message:</h3>
        <p>${contact.message}</p>
        
        <p><em>This message was submitted on ${new Date(contact.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })}</em></p>
      `,
    });
    console.log(`✉️ Contact form notification sent for ${contact.name}`);
  } catch (error) {
    console.error('Failed to send contact form notification email:', error);
    throw error;
  }
}
