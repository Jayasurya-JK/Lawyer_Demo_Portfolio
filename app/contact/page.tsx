import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { BreadcrumbSchema } from '@/components/seo/Schema'
import ContactForm from '@/components/ui/ContactForm'

export const metadata: Metadata = {
  title: 'Contact - Request Legal Consultation',
  description: 'Get in touch for confidential legal consultation. Expert legal advisor for businesses, startups, and corporate matters.',
  openGraph: {
    title: 'Contact - Request Legal Consultation',
    description: 'Schedule a confidential consultation with an experienced legal advisor.',
    url: `${SITE_CONFIG.url}/contact/`,
  },
}

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Contact', url: `${SITE_CONFIG.url}/contact/` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-900 via-navy-900 to-primary-800 text-white py-12 md:py-16">
        <div className="container-custom">
          <h1 className="heading-lg mb-4 md:mb-6">
            Request Confidential Consultation
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl">
            Get expert legal guidance for your business. Schedule a consultation today.
          </p>
        </div>
      </section>

      {/* Quick Action Buttons - Mobile First */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="heading-md mb-4">Quick Actions</h2>
            <p className="text-primary-600 text-sm sm:text-base">Choose the best way to reach us</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
            {/* Call Now Button */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="card text-center group hover:border-accent-500 border-2 border-transparent 
                       transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
            >
              <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                📞
              </div>
              <h3 className="font-bold text-primary-900 mb-2 text-base sm:text-lg">Call Now</h3>
              <p className="text-accent-600 font-semibold text-sm sm:text-base">
                {SITE_CONFIG.contact.phone}
              </p>
            </a>

            {/* Email Us Button */}
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="card text-center group hover:border-accent-500 border-2 border-transparent 
                       transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
            >
              <div className="text-4xl sm:text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                ✉️
              </div>
              <h3 className="font-bold text-primary-900 mb-2 text-base sm:text-lg">Email Us</h3>
              <p className="text-accent-600 font-semibold text-sm sm:text-base break-all">
                {SITE_CONFIG.contact.email}
              </p>
            </a>

            {/* Office Hours Button */}
            <div className="card text-center border-2 border-primary-200">
              <div className="text-4xl sm:text-5xl mb-3">🕐</div>
              <h3 className="font-bold text-primary-900 mb-2 text-base sm:text-lg">Office Hours</h3>
              <p className="text-primary-700 text-sm sm:text-base">
                {SITE_CONFIG.contact.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="heading-md mb-6">
                Get In Touch
              </h2>
              <p className="text-primary-700 mb-8 leading-relaxed text-sm sm:text-base">
                I'm here to help with your legal needs. Whether you're starting a business, 
                need contract review, or require ongoing legal support, I provide personalized 
                legal solutions tailored to your specific situation.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1 text-sm sm:text-base">Email</h3>
                    <a 
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-accent-600 hover:text-accent-700 text-sm sm:text-base break-all"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1 text-sm sm:text-base">Phone</h3>
                    <a 
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="text-accent-600 hover:text-accent-700 text-sm sm:text-base"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-900 mb-1 text-sm sm:text-base">Office Hours</h3>
                    <p className="text-primary-700 text-sm sm:text-base">{SITE_CONFIG.contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-8 p-6 bg-primary-50 rounded-xl">
                <h3 className="font-semibold text-primary-900 mb-4 text-sm sm:text-base">What to Expect</h3>
                <ul className="space-y-3 text-primary-700 text-xs sm:text-sm">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 flex-shrink-0">✓</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 flex-shrink-0">✓</span>
                    <span>Confidential discussion of your legal needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 flex-shrink-0">✓</span>
                    <span>Clear explanation of how I can help</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2 flex-shrink-0">✓</span>
                    <span>Transparent fee structure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary-50 p-6 sm:p-8 rounded-xl">
              <h2 className="heading-sm mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-md mb-6 text-center text-white">
            Important Legal Notice
          </h2>
          <div className="glass border border-white/20 p-6 sm:p-8 rounded-xl text-primary-200 text-xs sm:text-sm leading-relaxed">
            <p className="mb-4">
              <strong className="text-accent-400">Attorney-Client Relationship:</strong> Contacting me through this website 
              or via email does not create an attorney-client relationship. An attorney-client 
              relationship is only formed after a written engagement agreement is signed.
            </p>
            <p className="mb-4">
              <strong className="text-accent-400">Confidentiality:</strong> While I treat all communications with 
              confidentiality and respect, please be aware that attorney-client privilege does 
              not apply to communications prior to establishing a formal attorney-client relationship.
            </p>
            <p>
              <strong className="text-accent-400">No Legal Advice:</strong> Information provided through initial consultations 
              is for general guidance only and should not be construed as legal advice. Each legal 
              situation is unique and requires proper assessment.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
