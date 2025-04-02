import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;
    
    const msg = {
      to: 'adigunabdulrahman3@gmail.com', // Your email address
      from: 'your-website@example.com', // Verified sender email
      subject: `Portfolio Contact: ${subject || 'New message'}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br><br>
        <strong>Message:</strong><br>
        ${message.replace(/\n/g, '<br>')}
      `,
    };
    
    await sgMail.send(msg);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}