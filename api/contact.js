import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, company } = req.body

  if (!name || !email || !company) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    const result = await resend.emails.send({
      from: 'N-ablly <noreply@stormlearning.com>',
      to: ['dm@stormlearning.com', 'rey@stormlearning.com'],
      reply_to: email,
      subject: `New Demo Request — ${name} · ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px;">
          <div style="margin-bottom: 24px;">
            <span style="background: #FB8F23; color: #fff; font-size: 11px; font-weight: 700;
              letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px;
              border-radius: 99px;">New Demo Request</span>
          </div>

          <h2 style="font-size: 22px; font-weight: 800; color: #1A2027; margin: 0 0 24px;">
            ${name} wants to chat
          </h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 16px; background: #F3F4F6; border-radius: 8px 8px 0 0;
                font-size: 12px; font-weight: 700; color: #6B7785; text-transform: uppercase;
                letter-spacing: .08em;">Full Name</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #E5E7EB; border-top: none;
                font-size: 15px; color: #1A2027;">${name}</td>
            </tr>
            <tr><td style="height: 12px;"></td></tr>
            <tr>
              <td style="padding: 12px 16px; background: #F3F4F6; border-radius: 8px 8px 0 0;
                font-size: 12px; font-weight: 700; color: #6B7785; text-transform: uppercase;
                letter-spacing: .08em;">Work Email</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #E5E7EB; border-top: none;
                font-size: 15px; color: #1A2027;">
                <a href="mailto:${email}" style="color: #FB8F23;">${email}</a>
              </td>
            </tr>
            <tr><td style="height: 12px;"></td></tr>
            <tr>
              <td style="padding: 12px 16px; background: #F3F4F6; border-radius: 8px 8px 0 0;
                font-size: 12px; font-weight: 700; color: #6B7785; text-transform: uppercase;
                letter-spacing: .08em;">Company</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border: 1px solid #E5E7EB; border-top: none;
                font-size: 15px; color: #1A2027;">${company}</td>
            </tr>
          </table>

          <div style="margin-top: 32px; padding: 16px; background: #FFF7EE;
            border: 1px solid #FFE4BB; border-radius: 10px; font-size: 13px; color: #6B7785;">
            Hit reply to respond directly to ${name} at ${email}.
          </div>

          <p style="margin-top: 28px; font-size: 12px; color: #9CA3AF;">
            Sent from the N-ablly website contact form · nably-site.vercel.app
          </p>
        </div>
      `,
    })

    console.log('Resend result:', JSON.stringify(result))
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return res.status(500).json({ error: 'Failed to send email. Please try again.' })
  }
}
