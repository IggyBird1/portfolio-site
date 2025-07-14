/**
 * WordPress/BeTheme Contact Form JavaScript
 * Add this to your theme's JS files or enqueue it properly
 */

// Declare portfolioAjax variable
const portfolioAjax = {
  ajaxurl: "your_ajax_url_here", // Replace with actual ajax url
  nonce: "your_nonce_here", // Replace with actual nonce
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("portfolio-contact-form")

  if (!contactForm) return

  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault()

    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    const formData = new FormData(contactForm)

    // Add nonce for security
    formData.append("action", "submit_contact_form")
    formData.append("nonce", portfolioAjax.nonce)

    // Show loading state
    submitBtn.innerHTML = '<span class="spinner"></span> Sending...'
    submitBtn.disabled = true

    // Clear previous messages
    clearMessages()

    try {
      const response = await fetch(portfolioAjax.ajaxurl, {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        showMessage("success", result.data)
        contactForm.reset()
      } else {
        showMessage("error", result.data)
      }
    } catch (error) {
      showMessage("error", "An error occurred. Please try again.")
    } finally {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }
  })

  function showMessage(type, message) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `contact-message contact-message--${type}`
    messageDiv.innerHTML = `
            <div class="contact-message__icon">
                ${type === "success" ? "✓" : "⚠"}
            </div>
            <div class="contact-message__text">${message}</div>
        `

    contactForm.appendChild(messageDiv)

    // Auto remove after 5 seconds
    setTimeout(() => {
      messageDiv.remove()
    }, 5000)
  }

  function clearMessages() {
    const messages = contactForm.querySelectorAll(".contact-message")
    messages.forEach((msg) => msg.remove())
  }
})
