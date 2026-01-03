import CTAButton from '@/components/ui/CTAButton'
import { LAWYER_PROFILE } from '@/lib/constants'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-balance">
            {LAWYER_PROFILE.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-accent-200 mb-6 font-medium">
            {LAWYER_PROFILE.title}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            {LAWYER_PROFILE.tagline}
          </p>

          {/* Experience Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <p className="text-accent-200 font-semibold">
              {LAWYER_PROFILE.experience}+ Years of Legal Excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact/" variant="primary" className="w-full sm:w-auto">
              Request Confidential Consultation
            </CTAButton>
            <CTAButton href="/practice-areas/" variant="secondary" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900">
              Explore Services
            </CTAButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-accent-300 mb-2">500+</p>
                <p className="text-primary-200">Clients Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-300 mb-2">15+</p>
                <p className="text-primary-200">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-300 mb-2">98%</p>
                <p className="text-primary-200">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
