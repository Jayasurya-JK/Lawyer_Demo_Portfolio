import Hero from '@/components/sections/Hero'
import Card from '@/components/ui/Card'
import TestimonialCard from '@/components/ui/TestimonialCard'
import CTASection from '@/components/sections/CTASection'
import { PersonSchema, LegalServiceSchema, LocalBusinessSchema } from '@/components/seo/Schema'
import { PRACTICE_AREAS, TESTIMONIALS, LAWYER_PROFILE } from '@/lib/constants'

export default function Home() {
  return (
    <>
      <PersonSchema />
      <LegalServiceSchema />
      <LocalBusinessSchema />

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-lg mb-4 md:mb-6">
              Why Choose {LAWYER_PROFILE.name}?
            </h2>
            <p className="text-base sm:text-lg text-primary-600 max-w-3xl mx-auto px-4">
              Combining deep legal expertise with practical business understanding to deliver 
              solutions that protect and empower your business.
            </p>
          </div>

          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card
              icon="🎯"
              title="Business-Focused Approach"
              description="Legal solutions designed with your business goals in mind, not just legal technicalities."
            />
            <Card
              icon="🛡️"
              title="Preventive Legal Care"
              description="Proactive guidance to prevent problems before they arise, saving you time and money."
            />
            <Card
              icon="🤝"
              title="Trusted Partner"
              description="Long-term relationships built on trust, transparency, and consistent delivery of results."
            />
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-lg mb-4 md:mb-6">
              Practice Areas
            </h2>
            <p className="text-base sm:text-lg text-primary-600 max-w-3xl mx-auto px-4">
              Comprehensive legal services tailored to your business needs
            </p>
          </div>

          {/* Mobile: Single column, Tablet: 2 columns, Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRACTICE_AREAS.map((area) => (
              <Card
                key={area.id}
                icon={area.icon}
                title={area.title}
                description={area.description}
                href={`/practice-areas/#${area.id}`}
              />
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a href="/practice-areas/" className="btn-primary inline-block">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-lg mb-4">
              Professional Credentials
            </h2>
          </div>

          {/* Mobile: Single column, Desktop: 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="card">
              <h3 className="heading-sm mb-4 md:mb-6">Education</h3>
              <ul className="space-y-3">
                {LAWYER_PROFILE.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span className="text-primary-700 text-sm sm:text-base">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3 className="heading-sm mb-4 md:mb-6">
                Professional Memberships
              </h3>
              <ul className="space-y-3">
                {LAWYER_PROFILE.memberships.map((membership, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-500 mr-3 text-xl flex-shrink-0">✓</span>
                    <span className="text-primary-700 text-sm sm:text-base">{membership}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading-lg mb-4 md:mb-6">
              Client Testimonials
            </h2>
            <p className="text-base sm:text-lg text-primary-600 max-w-3xl mx-auto px-4">
              Trusted by businesses and professionals across industries
            </p>
          </div>

          {/* Mobile: Single column, Desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
