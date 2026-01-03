import Link from 'next/link'
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-primary-200 mb-6 text-sm sm:text-base leading-relaxed">
              Expert legal advisor for businesses, startups, and corporate matters. 
              Providing professional legal consultation services with a focus on 
              practical, business-oriented solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="touch-target text-accent-400 hover:text-accent-300 transition-colors"
                aria-label="Email us"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="touch-target text-accent-400 hover:text-accent-300 transition-colors"
                aria-label="Call us"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors text-sm sm:text-base inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-200">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="hover:text-accent-400 transition-colors text-sm sm:text-base inline-block"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone}`}
                  className="hover:text-accent-400 transition-colors text-sm sm:text-base inline-block"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
              <li className="text-sm text-primary-300">{SITE_CONFIG.contact.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 md:mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-300 text-sm text-center md:text-left">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <Link href="/contact/" className="text-primary-300 hover:text-accent-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact/" className="text-primary-300 hover:text-accent-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-primary-400 text-xs mt-6 text-center md:text-left leading-relaxed">
            <strong>Disclaimer:</strong> The information provided on this website is for general informational 
            purposes only and does not constitute legal advice. For specific legal matters, please consult 
            with a qualified attorney.
          </p>
        </div>
      </div>
    </footer>
  )
}
