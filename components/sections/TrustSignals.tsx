export default function TrustSignals() {
  const certifications = [
    {
      title: 'Bar Council of India',
      description: 'Registered and certified member',
      icon: '⚖️'
    },
    {
      title: 'Corporate Legal Advisor',
      description: 'Certified specialist in corporate law',
      icon: '🏢'
    },
    {
      title: 'International Bar Association',
      description: 'Active member since 2010',
      icon: '🌐'
    },
    {
      title: '15+ Years Experience',
      description: 'Serving businesses since 2009',
      icon: '🎓'
    }
  ]

  const awards = [
    {
      title: 'Best Legal Advisor 2024',
      organization: 'Indian Business Law Association',
      icon: '🏆'
    },
    {
      title: 'Top Rated Consultant',
      organization: 'Legal Excellence Awards',
      icon: '⭐'
    },
    {
      title: 'Client Choice Award',
      organization: 'Corporate Legal Forum',
      icon: '🎖️'
    }
  ]

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading-lg mb-4 md:mb-6">
            Credentials & Recognition
          </h2>
          <p className="text-base sm:text-lg text-primary-600 max-w-3xl mx-auto px-4">
            Trusted credentials and recognized excellence in legal practice
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-12 md:mb-16">
          <h3 className="heading-sm text-center mb-6 md:mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="card text-center group hover:border-accent-500 border-2 border-transparent transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-bold text-primary-900 mb-2 text-sm sm:text-base">
                  {cert.title}
                </h4>
                <p className="text-primary-600 text-xs sm:text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div>
          <h3 className="heading-sm text-center mb-6 md:mb-8">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="card text-center bg-gradient-to-br from-white to-primary-50 
                         border-2 border-transparent hover:border-accent-500 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{award.icon}</div>
                <h4 className="font-bold text-primary-900 mb-2 text-sm sm:text-base">
                  {award.title}
                </h4>
                <p className="text-primary-600 text-xs sm:text-sm">
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-primary-200">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">500+</div>
              <div className="text-xs sm:text-sm text-primary-600">Cases Handled</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">98%</div>
              <div className="text-xs sm:text-sm text-primary-600">Success Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">15+</div>
              <div className="text-xs sm:text-sm text-primary-600">Years Serving</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-bold text-accent-500 mb-1">4.9/5</div>
              <div className="text-xs sm:text-sm text-primary-600">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
