'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What types of businesses do you work with?",
    answer: "I work with a wide range of businesses including startups, SMEs, MSMEs, and established corporations across various industries. Whether you're just starting out or looking to expand, I provide tailored legal solutions to meet your specific needs."
  },
  {
    question: "How do you charge for your services?",
    answer: "I offer flexible fee structures including hourly rates, fixed fees for specific services, and retainer arrangements for ongoing legal support. During our initial consultation, we'll discuss your needs and agree on a fee structure that works for your budget and requirements."
  },
  {
    question: "Do you provide free initial consultation?",
    answer: "Yes, I offer a complimentary initial consultation to understand your legal needs and discuss how I can help. This allows us to determine if we're a good fit and gives you a clear understanding of the services and costs involved."
  },
  {
    question: "How quickly can you respond to urgent legal matters?",
    answer: "For urgent matters, I prioritize immediate response. Retainer clients receive priority access with same-day or next-business-day response times. For new clients, I strive to respond within 24 hours and can accommodate urgent consultations when needed."
  },
  {
    question: "What documents should I prepare for our first meeting?",
    answer: "Please bring any relevant documents related to your legal matter, such as contracts, incorporation papers, correspondence, or other legal documents. If you're unsure what to bring, we can discuss this during our initial phone conversation."
  },
  {
    question: "Can you help with business incorporation?",
    answer: "Absolutely! I assist with all aspects of business incorporation including choosing the right business structure, preparing and filing incorporation documents, drafting founder agreements, and ensuring compliance with all regulatory requirements."
  },
  {
    question: "Do you handle litigation cases?",
    answer: "My primary focus is on preventive legal care and corporate advisory services. However, if disputes arise, I can represent clients in negotiations, mediation, and arbitration. For complex litigation, I work with trusted litigation specialists to ensure you receive the best representation."
  },
  {
    question: "What makes your approach different from other lawyers?",
    answer: "I take a business-oriented approach, focusing on practical solutions rather than just legal technicalities. I emphasize preventive legal care to avoid problems before they arise, and I'm committed to building long-term relationships where I understand your business deeply and can provide strategic, proactive advice."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading-lg mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-primary-600 max-w-3xl mx-auto px-4">
            Find answers to common questions about our legal services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-primary-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 sm:px-8 sm:py-5 text-left flex justify-between items-center bg-white hover:bg-primary-50 transition-colors duration-200 touch-target"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-semibold text-primary-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-accent-500 transform transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 sm:px-8 sm:pb-5 pt-2">
                    <p className="text-primary-700 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA after FAQ */}
          <div className="mt-8 md:mt-12 text-center p-6 sm:p-8 bg-primary-50 rounded-xl">
            <h3 className="heading-sm mb-3">
              Still have questions?
            </h3>
            <p className="text-primary-600 mb-6 text-sm sm:text-base">
              Get in touch for a personalized consultation
            </p>
            <a href="/contact/" className="btn-primary">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
