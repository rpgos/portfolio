'use server'

import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer';
import { z } from "zod"

const messageSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  message: z.string().min(5),
})

interface MessageFormState {
  success: boolean
  errors: {
    name?: string[],
    email?: string[],
    message?: string[],
    _form?: string[]
  }
}

export default async function sendEmail(formState: MessageFormState, formData: FormData): Promise<MessageFormState> {
  const parsedMessage = messageSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if(!parsedMessage.success) {
    return {
      success: false,
      errors: parsedMessage.error.flatten().fieldErrors
    }
  }

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
    subject: `Message from ${parsedMessage.data.name} - ${parsedMessage.data.email}`,
    text: parsedMessage.data.message
  }

  const res = await transport.sendMail(mailOptions)
  
  if(res.accepted.length) {
    return { success: true, errors: {} }
  }
  
  return {
    success: false,
    errors: {
      _form: ['Failed to send message. Please try again later.']
    }
  }
}
