import type { Metadata } from 'next'
import { SITE_CONFIG } from '@/lib/constants'
import { BreadcrumbSchema } from '@/components/seo/Schema'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Case Experience & Legal Insights',
  description: 'Learn about the types of legal matters handled and the approach to solving complex business and corporate legal issues.',
  openGraph: {
    title: 'Case Experience & Legal Insights',
    description: 'Professional experience in handling diverse corporate and business legal matters.',
    url: `${SITE_CONFIG.url}/case-experience/`,
  },
}

export default function CaseExperiencePage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Case Experience', url: `${SITE_CONFIG.url}/case-experience/` },
  ]

  const experienceAreas = [
    {
      title: 'Business Formation & Structuring',
      description: 'Advised numerous startups and established businesses on optimal entity structure, helping them choose between sole proprietorship, partnership, LLP, and private limited company based on their specific needs and growth plans.',
      outcomes: [
        'Successfully structured 100+ businesses for tax efficiency and liability protection',
        'Guided founder teams through equity distribution and vesting schedules',
        'Facilitated smooth business transitions and restructuring',
      ],
    },
    {
      title: 'Contract Negotiation & Drafting',
      description: 'Drafted and negotiated hundreds of commercial contracts across various industries, from simple service agreements to complex multi-party transactions.',
      outcomes: [
        'Prevented potential disputes through precise contract language',
        'Negotiated favorable terms for clients in high-stakes transactions',
        'Created standardized contract templates saving clients time and costs',
      ],
    },
    {
      title: 'Funding & Investment Documentation',
      description: 'Supported startups and growing businesses through funding rounds, from angel investments to Series A and beyond, ensuring founder interests are protected while meeting investor requirements.',
      outcomes: [
        'Facilitated funding transactions totaling over ₹50 crores',
        'Protected founder control through careful term sheet negotiation',
        'Structured investment deals balancing growth and governance',
      ],
    },
    {
      title: 'Corporate Compliance & Governance',
      description: 'Helped businesses establish robust compliance frameworks and governance structures, preventing regulatory issues and building strong operational foundations.',
      outcomes: [
        'Implemented compliance systems for 50+ businesses',
        'Conducted legal audits identifying and resolving potential issues',
        'Established board governance practices for corporate clients',
      ],
    },
    {
      title: 'Property & Asset Transactions',
      description: 'Conducted due diligence and managed legal aspects of property acquisitions, ensuring clean titles and secure transactions for clients.',
      outcomes: [
        'Managed property transactions worth over ₹100 crores',
        'Identified title defects preventing costly problems',
        'Structured asset purchase agreements protecting buyer interests',
      ],
    },
    {
      title: 'Dispute Resolution & Advisory',
      description: 'Resolved business disputes through negotiation, mediation, and strategic advice, helping clients avoid costly litigation while protecting their interests.',
      outcomes: [
        'Resolved 90% of disputes through negotiation and mediation',
        'Saved clients significant costs by avoiding litigation',
        'Maintained business relationships through amicable resolutions',
      ],
    },
  ]

  const approach = [
    {
      phase: 'Understanding',
      description: 'Deep dive into your business, industry, and specific situation to understand the complete context.',
    },
    {
      phase: 'Analysis',
      description: 'Thorough legal and business analysis identifying risks, opportunities, and various options available.',
    },
    {
      phase: 'Strategy',
      description: 'Develop a practical strategy that balances legal protection with business objectives and constraints.',
    },
    {
      phase: 'Execution',
      description: 'Implement the solution with attention to detail, ensuring all legal requirements are properly addressed.',
    },
    {
      phase: 'Support',
      description: 'Ongoing support and guidance as situations evolve, adjusting strategies as needed.',
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Case Experience & Legal Insights
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Real-world experience solving complex legal challenges for businesses
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <p className="text-lg text-primary-700 leading-relaxed mb-6">
            Over 15+ years of practice, I have handled a diverse range of legal matters for businesses 
            across industries. While client confidentiality prevents me from sharing specific case details, 
            I can provide insights into the types of matters I handle and my approach to solving them.
          </p>
          <p className="text-lg text-primary-700 leading-relaxed">
            My experience spans from advising early-stage startups on their first legal steps to guiding 
            established corporations through complex transactions. Each matter teaches valuable lessons 
            that enhance my ability to serve future clients better.
          </p>
        </div>
      </section>

      {/* Experience Areas */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
            Areas of Experience
          </h2>
          <div className="space-y-8">
            {experienceAreas.map((area, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                  {area.title}
                </h3>
                <p className="text-primary-700 mb-6 leading-relaxed">
                  {area.description}
                </p>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary-900 mb-3">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {area.outcomes.map((outcome, outIndex) => (
                      <li key={outIndex} className="flex items-start">
                        <span className="text-accent-500 mr-2 mt-1">✓</span>
                        <span className="text-primary-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 text-center">
            My Approach to Legal Matters
          </h2>
          <div className="space-y-6">
            {approach.map((phase, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {phase.phase}
                  </h3>
                  <p className="text-primary-700 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Education */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6 text-center">
            Educating Clients
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-primary-700 leading-relaxed mb-4">
              I believe that an informed client makes better decisions. That's why I take time to explain 
              legal concepts, processes, and implications in plain language. My goal is not just to provide 
              advice, but to help you understand the "why" behind it.
            </p>
            <p className="text-primary-700 leading-relaxed">
              Through clear communication and client education, I empower businesses to make confident 
              legal decisions and recognize potential issues early. This preventive approach has helped 
              countless clients avoid problems before they arise.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
