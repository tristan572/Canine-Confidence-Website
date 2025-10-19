import { Resend } from 'resend';
import type { Booking, Consultation, ContactSubmission } from '@shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = 'info@canineconfidence.com.au';

export async function sendBookingNotification(booking: Booking) {
  try {
    await resend.emails.send({
      from: 'Canine Confidence <noreply@canineconfidence.com.au>',
      to: BUSINESS_EMAIL,
      subject: `New Booking Request - ${booking.clientName}`,
      html: `
        <h2>New Booking Request</h2>
        <p>You have received a new booking request from your website.</p>
        
        <h3>Customer Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${booking.clientName}</li>
          <li><strong>Email:</strong> ${booking.clientEmail}</li>
          <li><strong>Phone:</strong> ${booking.clientPhone || 'Not provided'}</li>
          <li><strong>Dog Name:</strong> ${booking.dogName}</li>
          ${booking.dogBreed ? `<li><strong>Dog Breed:</strong> ${booking.dogBreed}</li>` : ''}
          ${booking.dogAge ? `<li><strong>Dog Age:</strong> ${booking.dogAge}</li>` : ''}
        </ul>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Service ID:</strong> ${booking.serviceId}</li>
          <li><strong>Preferred Date:</strong> ${booking.preferredDate || 'Not specified'}</li>
          <li><strong>Preferred Time:</strong> ${booking.preferredTime || 'Flexible'}</li>
        </ul>
        
        ${booking.behaviorConcerns ? `<h3>Behavior Concerns:</h3><p>${booking.behaviorConcerns}</p>` : ''}
        ${booking.previousTraining ? `<h3>Previous Training:</h3><p>${booking.previousTraining}</p>` : ''}
        
        <p><em>This booking was submitted on ${booking.createdAt ? new Date(booking.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Booking notification sent for ${booking.clientName}`);
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
      subject: `New Free Consultation Request - ${consultation.clientName}`,
      html: `
        <h2>New Free Consultation Request</h2>
        <p>Someone has requested a free phone consultation through your website.</p>
        
        <h3>Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${consultation.clientName}</li>
          <li><strong>Email:</strong> ${consultation.clientEmail}</li>
          <li><strong>Phone:</strong> ${consultation.clientPhone}</li>
          ${consultation.preferredCallTime ? `<li><strong>Preferred Call Time:</strong> ${consultation.preferredCallTime}</li>` : ''}
        </ul>
        
        ${consultation.dogInfo ? `<h3>Dog Information:</h3><p>${consultation.dogInfo}</p>` : ''}
        ${consultation.concerns ? `<h3>Concerns:</h3><p>${consultation.concerns}</p>` : ''}
        
        <p><em>This consultation request was submitted on ${consultation.createdAt ? new Date(consultation.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Consultation notification sent for ${consultation.clientName}`);
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
        
        <p><em>This message was submitted on ${contact.createdAt ? new Date(contact.createdAt).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }) : 'Unknown date'}</em></p>
      `,
    });
    console.log(`✉️ Contact form notification sent for ${contact.name}`);
  } catch (error) {
    console.error('Failed to send contact form notification email:', error);
    throw error;
  }
}
