"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data server-side
    if (!data.name || !data.email || !data.subject || !data.message) {
      return {
        success: false,
        message: "All fields are required.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      }
    }

    // Send email to yourself (notification)
    const notificationEmail = await resend.emails.send({
      from: "Portfolio Contact <noreply@yourdomain.com>", // Replace with your verified domain
      to: ["your-email@example.com"], // Replace with your actual email
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>Reply to:</strong> ${data.email}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the user
    const confirmationEmail = await resend.emails.send({
      from: "IGAL V <noreply@yourdomain.com>", // Replace with your verified domain
      to: [data.email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">IGAL V</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Creative Portfolio</p>
          </div>
          
          <div style="padding: 30px; background: white; border-radius: 0 0 8px 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #374151; margin-top: 0;">Thank you for reaching out, ${data.name}!</h2>
            
            <p style="color: #6b7280; line-height: 1.6;">
              I've received your message about "<strong>${data.subject}</strong>" and I'll get back to you as soon as possible, usually within 24-48 hours.
            </p>
            
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
              <h3 style="margin-top: 0; color: #374151;">Your Message Summary</h3>
              <p style="margin: 0; color: #6b7280; white-space: pre-wrap;">${data.message.substring(0, 200)}${data.message.length > 200 ? "..." : ""}</p>
            </div>
            
            <p style="color: #6b7280; line-height: 1.6;">
              In the meantime, feel free to check out my latest work on my portfolio or connect with me on social media.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://yourwebsite.com" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6, #ec4899); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
                View My Portfolio
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #9ca3af; font-size: 14px; text-align: center; margin: 0;">
              Best regards,<br>
              <strong>IGAL V</strong><br>
              Creative Storyteller & Digital Artist
            </p>
          </div>
        </div>
      `,
    })

    if (notificationEmail.error || confirmationEmail.error) {
      console.error("Email sending error:", notificationEmail.error || confirmationEmail.error)
      return {
        success: false,
        message: "There was an issue sending your message. Please try again or contact me directly.",
      }
    }

    return {
      success: true,
      message: "Message sent successfully! Check your email for confirmation.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    }
  }
}
