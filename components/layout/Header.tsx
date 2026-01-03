'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header 
      className={`bg-white border-b sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-primary-200 shadow-md' : 'border-transparent shadow-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="text-xl sm:text-2xl font-serif font-bold text-primary-900">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-700 hover:text-accent-500 font-medium transition-colors duration-200 text-sm xl:text-base relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent-500 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact/" className="btn-primary text-sm xl:text-base">
              Consult Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-700 hover:text-accent-500 z-50 touch-target transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Full-Screen Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-primary-900 z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ top: '64px' }} // Below header
        >
          <div className="flex flex-col items-center justify-center h-full px-6 py-8">
            <nav className="flex flex-col items-center space-y-6 w-full">
              {NAV_LINKS.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-white hover:text-accent-400 font-semibold text-2xl transition-all duration-300 transform ${
                    isMobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                className={`btn-primary w-full max-w-xs text-center text-lg mt-8 transform transition-all duration-300 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : '-translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${NAV_LINKS.length * 50}ms` : '0ms' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Free Consultation
              </Link>
            </nav>

            {/* Contact Info in Mobile Menu */}
            <div className={`mt-12 text-center text-primary-200 transform transition-all duration-300 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? `${(NAV_LINKS.length + 1) * 50}ms` : '0ms' }}
            >
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="block text-accent-400 hover:text-accent-300 font-semibold text-lg mb-3"
              >
                {SITE_CONFIG.contact.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="block text-primary-300 hover:text-accent-400 transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
