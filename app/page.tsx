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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Why Choose {LAWYER_PROFILE.name}?
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Combining deep legal expertise with practical business understanding to deliver 
              solutions that protect and empower your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Comprehensive legal services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          <div className="text-center mt-12">
            <a href="/practice-areas/" className="btn-primary inline-block">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Professional Credentials
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">Education</h3>
              <ul className="space-y-3">
                {LAWYER_PROFILE.education.map((edu, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span className="text-primary-700">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                Professional Memberships
              </h3>
              <ul className="space-y-3">
                {LAWYER_PROFILE.memberships.map((membership, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent-500 mr-2">✓</span>
                    <span className="text-primary-700">{membership}</span>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-primary-600 max-w-3xl mx-auto">
              Trusted by businesses and professionals across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
