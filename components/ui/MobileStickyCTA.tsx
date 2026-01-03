'use client'

import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '@/lib/constants'

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA bar after scrolling down 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Sticky Bottom CTA Bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-primary-900 border-t-2 border-accent-500 shadow-2xl">
          <div className="flex">
            {/* Call Button */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-white hover:bg-primary-800 transition-colors touch-target border-r border-primary-700"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-xs font-semibold">Call</span>
            </a>

            {/* Contact Button */}
            <a
              href="/contact/"
              className="flex-1 flex flex-col items-center justify-center py-3 px-2 bg-accent-500 text-white hover:bg-accent-600 transition-colors touch-target border-r border-accent-600"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-xs font-semibold">Contact</span>
            </a>

            {/* WhatsApp Button (optional - can be enabled if needed) */}
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex-1 flex flex-col items-center justify-center py-3 px-2 text-white hover:bg-primary-800 transition-colors touch-target"
            >
              <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-xs font-semibold">Email</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
