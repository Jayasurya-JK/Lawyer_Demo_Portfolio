import CTAButton from '@/components/ui/CTAButton'
import { LAWYER_PROFILE } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="relative bg-primary-900 text-white overflow-hidden">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-navy-900 to-primary-800 opacity-95"></div>
      
      {/* Optional: Add a subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container-custom relative z-10">
        {/* Mobile-First Layout: min-h-screen-60 on mobile, adjusted on larger screens */}
        <div className="flex flex-col items-center justify-center text-center min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] py-12 md:py-16 lg:py-20">
          
          {/* Main Content */}
          <div className="max-w-4xl w-full">
            {/* Name - Large and prominent */}
            <h1 className="heading-xl mb-4 md:mb-6 text-balance">
              {LAWYER_PROFILE.name}
            </h1>

            {/* Title with accent color */}
            <p className="text-xl sm:text-2xl md:text-3xl text-accent-400 mb-6 md:mb-8 font-semibold">
              {LAWYER_PROFILE.title}
            </p>

            {/* Tagline - Clear value proposition */}
            <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto px-4">
              {LAWYER_PROFILE.tagline}
            </p>

            {/* Experience Badge */}
            <div className="inline-block glass rounded-full px-6 py-3 mb-8 md:mb-10 border border-white/20">
              <p className="text-accent-300 font-bold text-sm sm:text-base">
                ⚖️ {LAWYER_PROFILE.experience}+ Years of Legal Excellence
              </p>
            </div>

            {/* CTA Buttons - Stacked on mobile, side-by-side on desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0 mb-12 md:mb-16">
              <CTAButton 
                href="/contact/" 
                variant="primary" 
                className="w-full sm:w-auto min-w-[200px] text-base sm:text-lg"
              >
                Get Free Consultation
              </CTAButton>
              <CTAButton 
                href="/practice-areas/" 
                variant="secondary" 
                className="w-full sm:w-auto min-w-[200px] glass border-white text-white hover:bg-white hover:text-primary-900 text-base sm:text-lg"
              >
                View Services
              </CTAButton>
            </div>

            {/* Trust Indicators - Stacked on mobile, horizontal on desktop */}
            <div className="pt-8 md:pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 md:gap-8 text-center px-4">
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-400 mb-2">500+</p>
                  <p className="text-primary-200 text-sm sm:text-base">Clients Served</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-400 mb-2">15+</p>
                  <p className="text-primary-200 text-sm sm:text-base">Years Experience</p>
                </div>
                <div className="transform hover:scale-105 transition-transform duration-200">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-400 mb-2">98%</p>
                  <p className="text-primary-200 text-sm sm:text-base">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator (visible only on larger screens) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
