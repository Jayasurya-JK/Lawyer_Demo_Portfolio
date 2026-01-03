import type { Metadata } from 'next'
import { SITE_CONFIG, LAWYER_PROFILE } from '@/lib/constants'
import { PersonSchema, BreadcrumbSchema } from '@/components/seo/Schema'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${LAWYER_PROFILE.name}, a dedicated legal professional with ${LAWYER_PROFILE.experience}+ years of experience in business and corporate law.`,
  openGraph: {
    title: `About ${LAWYER_PROFILE.name}`,
    description: `Professional background, credentials, and legal philosophy of ${LAWYER_PROFILE.name}.`,
    url: `${SITE_CONFIG.url}/about/`,
  },
}

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'About', url: `${SITE_CONFIG.url}/about/` },
  ]

  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            About {LAWYER_PROFILE.name}
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            {LAWYER_PROFILE.tagline}
          </p>
        </div>
      </section>

      {/* Professional Background */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
            Professional Background
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-primary-700 leading-relaxed mb-4">
              With over {LAWYER_PROFILE.experience} years of dedicated practice in corporate and business law, 
              I have built a reputation for delivering practical, results-oriented legal solutions that 
              empower businesses to grow confidently while staying protected.
            </p>
            <p className="text-primary-700 leading-relaxed mb-4">
              My journey in law began with a passion for understanding how legal frameworks can enable 
              business success rather than hinder it. Throughout my career, I have worked with startups, 
              established businesses, and individual entrepreneurs, providing guidance on everything from 
              business formation to complex corporate transactions.
            </p>
            <p className="text-primary-700 leading-relaxed">
              What sets my practice apart is the combination of deep legal expertise with genuine business 
              acumen. I don't just understand the law—I understand business realities, constraints, and 
              objectives. This dual perspective allows me to provide advice that is not only legally sound 
              but also commercially sensible.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Philosophy */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
            Legal Philosophy
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-accent-500">
            <p className="text-lg text-primary-700 leading-relaxed italic">
              "{LAWYER_PROFILE.philosophy}"
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Preventive Legal Care</h3>
              <p className="text-primary-700">
                I believe in preventing legal problems before they arise. Through careful planning, 
                thorough documentation, and proactive advice, most legal disputes can be avoided entirely.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Client Education</h3>
              <p className="text-primary-700">
                An informed client makes better decisions. I take time to explain legal matters in 
                plain language, ensuring you understand your options and their implications.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Long-Term Relationships</h3>
              <p className="text-primary-700">
                I view my role as a long-term partner in your business journey, not just a service 
                provider for isolated transactions. This perspective allows me to provide advice that 
                considers your broader business context and future goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Education
              </h2>
              <ul className="space-y-4">
                {LAWYER_PROFILE.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-accent-500 rounded-full mr-4"></div>
                    <span className="text-primary-700">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Certifications
              </h2>
              <ul className="space-y-4">
                {LAWYER_PROFILE.certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 bg-accent-500 rounded-full mr-4"></div>
                    <span className="text-primary-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
            Areas of Specialization
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {LAWYER_PROFILE.specializations.map((spec, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">⚖️</span>
                  <span className="text-lg font-medium text-primary-900">{spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
            Professional Memberships
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {LAWYER_PROFILE.memberships.map((membership, index) => (
              <div key={index} className="bg-primary-50 p-6 rounded-lg text-center">
                <p className="text-primary-900 font-medium">{membership}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
