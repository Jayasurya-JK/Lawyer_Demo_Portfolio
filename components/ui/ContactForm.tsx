'use client'

import { useState } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  consent: boolean
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  consent?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  })
  
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = () => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[+]?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // In a real application, send data to API
      setSubmitted(true)
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
      })
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-serif font-bold text-green-900 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 mb-4">
          Your consultation request has been received. I will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-accent-600 hover:text-accent-700 font-medium"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.name ? 'border-red-500' : 'border-primary-300'
          } focus:outline-none focus:ring-2 focus:ring-accent-500`}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-primary-300'
          } focus:outline-none focus:ring-2 focus:ring-accent-500`}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-primary-900 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.phone ? 'border-red-500' : 'border-primary-300'
          } focus:outline-none focus:ring-2 focus:ring-accent-500`}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-600">
            {errors.phone}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
          Your Legal Requirement *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.message ? 'border-red-500' : 'border-primary-300'
          } focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none`}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 mr-3 w-4 h-4 text-accent-600 focus:ring-accent-500 border-primary-300 rounded"
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="text-sm text-primary-700">
            I agree to the privacy policy and consent to being contacted regarding my legal inquiry. 
            I understand that this does not create an attorney-client relationship. *
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn-primary w-full">
        Request Consultation
      </button>
    </form>
  )
}
