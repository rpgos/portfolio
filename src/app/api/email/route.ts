import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_SECRET,
    }
  })

  const mailOptions: Mail.Options = {
    from: process.env.GMAIL_ID,
    to: process.env.GMAIL_ID,
    subject: `Message from ${name} - ${email}`,
    text: message
  }

  const res = await transport.sendMail(mailOptions)
  
  if(res.accepted.length) {
    return NextResponse.json({ success: true });
  }
  
  return NextResponse.json({ success: false }, { status: 500 });
}
