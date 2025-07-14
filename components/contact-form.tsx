"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, AlertCircle, Send, Loader2, Mail } from "lucide-react"
import { submitContactForm } from "@/actions/contact"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

    // Clear submit status when user starts typing again
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus("success")
        setSubmitMessage(result.message)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        setSubmitMessage(result.message)
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
            Name *
          </label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Your name"
            className={`bg-gray-800/50 border text-white placeholder-gray-400 focus:border-purple-500 rounded-lg transition-colors ${
              errors.name ? "border-red-500 focus:border-red-500" : "border-gray-600"
            }`}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="your.email@example.com"
            className={`bg-gray-800/50 border text-white placeholder-gray-400 focus:border-purple-500 rounded-lg transition-colors ${
              errors.email ? "border-red-500 focus:border-red-500" : "border-gray-600"
            }`}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">
            Subject *
          </label>
          <Input
            id="subject"
            value={formData.subject}
            onChange={(e) => handleInputChange("subject", e.target.value)}
            placeholder="How can I help you?"
            className={`bg-gray-800/50 border text-white placeholder-gray-400 focus:border-purple-500 rounded-lg transition-colors ${
              errors.subject ? "border-red-500 focus:border-red-500" : "border-gray-600"
            }`}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.subject}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
            Message *
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Your message..."
            className={`bg-gray-800/50 border text-white placeholder-gray-400 focus:border-purple-500 rounded-lg transition-colors resize-none ${
              errors.message ? "border-red-500 focus:border-red-500" : "border-gray-600"
            }`}
            rows={6}
            disabled={isSubmitting}
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-400 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Submit Button */}
      <motion.div whileHover={{ scale: isSubmitting ? 1 : 1.02 }} whileTap={{ scale: isSubmitting ? 1 : 0.98 }}>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full py-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      {/* Status Messages */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-green-900/20 border border-green-500/50 rounded-lg p-4 flex items-start text-green-400"
          >
            <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Message sent successfully!</p>
              <p className="text-sm text-green-300 mt-1">{submitMessage}</p>
              <div className="flex items-center mt-2 text-sm text-green-300">
                <Mail className="h-4 w-4 mr-1" />
                Check your email for confirmation
              </div>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-red-900/20 border border-red-500/50 rounded-lg p-4 flex items-start text-red-400"
          >
            <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Failed to send message</p>
              <p className="text-sm text-red-300 mt-1">{submitMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Character Counters */}
      <div className="text-xs text-gray-500 space-y-1">
        <div className="flex justify-between">
          <span>Subject: {formData.subject.length}/100</span>
          <span>Message: {formData.message.length}/1000</span>
        </div>
      </div>
    </form>
  )
}
