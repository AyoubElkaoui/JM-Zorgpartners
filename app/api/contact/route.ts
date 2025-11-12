import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    // Validatie
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Alle velden zijn verplicht' },
        { status: 400 }
      )
    }

    // Get uploaded files
    const files: File[] = []
    const fileFields = ['file-0', 'file-1', 'file-2', 'file-3', 'file-4']
    
    for (const field of fileFields) {
      const file = formData.get(field)
      if (file instanceof File) {
        files.push(file)
      }
    }

    // Mailer configuratie
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Prepare attachments
    const attachments = await Promise.all(
      files.map(async (file) => {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        
        return {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        }
      })
    )

    // Email versturen
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Contactformulier: ${subject}`,
      html: `
        <h2>Nieuw bericht van contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefoon:</strong> ${phone}</p>
        <p><strong>Onderwerp:</strong> ${subject}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        ${files.length > 0 ? `<p><strong>Bijlagen:</strong> ${files.length} bestand(en)</p>` : ''}
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Er ging iets mis bij het versturen van het bericht' },
      { status: 500 }
    )
  }
}
