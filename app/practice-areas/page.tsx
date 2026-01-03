import type { Metadata } from 'next'
import { SITE_CONFIG, PRACTICE_AREAS } from '@/lib/constants'
import { LegalServiceSchema, BreadcrumbSchema } from '@/components/seo/Schema'
import CTASection from '@/components/sections/CTASection'
import CTAButton from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Practice Areas - Legal Services',
  description: 'Comprehensive legal services including Business & Corporate Law, Contract Drafting, Property Advisory, Startup Support, and Compliance services.',
  keywords: [
    'business law',
    'corporate legal services',
    'contract drafting',
    'startup legal advisor',
    'compliance services',
    'property legal advisory',
  ],
  openGraph: {
    title: 'Practice Areas - Legal Services',
    description: 'Expert legal services for businesses, startups, and corporate matters.',
    url: `${SITE_CONFIG.url}/practice-areas/`,
  },
}

export default function PracticeAreasPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Practice Areas', url: `${SITE_CONFIG.url}/practice-areas/` },
  ]

  return (
    <>
      <LegalServiceSchema />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Practice Areas
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Comprehensive legal services tailored to your business needs
          </p>
        </div>
      </section>

      {/* Practice Areas Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="space-y-16">
            {PRACTICE_AREAS.map((area, index) => (
              <article 
                key={area.id} 
                id={area.id}
                className={`scroll-mt-24 ${index !== 0 ? 'border-t border-primary-200 pt-16' : ''}`}
              >
                {/* Area Header */}
                <div className="flex items-start mb-6">
                  <span className="text-5xl mr-6">{area.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-3">
                      {area.title}
                    </h2>
                    <p className="text-xl text-primary-600">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="bg-primary-50 p-8 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    What I Offer
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {area.details}
                  </p>
                </div>

                {/* Process */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    My Approach
                  </h3>
                  <ol className="space-y-3">
                    {area.process.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-semibold mr-4">
                          {stepIndex + 1}
                        </span>
                        <span className="text-primary-700 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <CTAButton href="/contact/" variant="primary">
                    Discuss Your {area.title === 'Business & Corporate Law' ? 'Business' : area.title.split('&')[0].trim()} Needs
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Approach */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
            Why This Approach Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-primary-700">
                Every business is unique. I don't believe in one-size-fits-all templates. 
                Each solution is crafted specifically for your situation, industry, and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Business-First Thinking
              </h3>
              <p className="text-primary-700">
                Legal advice that considers your business realities, budget constraints, 
                and growth objectives—not just legal technicalities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Preventive Focus
              </h3>
              <p className="text-primary-700">
                Identifying and addressing potential issues before they become problems 
                saves you time, money, and stress in the long run.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Clear Communication
              </h3>
              <p className="text-primary-700">
                Complex legal matters explained in plain language. You'll always 
                understand your options and the implications of your decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
