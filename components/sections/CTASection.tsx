import CTAButton from '@/components/ui/CTAButton'

export default function CTASection() {
  return (
    <section className="bg-primary-900 text-white section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 md:mb-8">
            Need Legal Guidance for Your Business?
          </h2>
          <p className="text-base sm:text-lg text-primary-200 mb-8 md:mb-10 leading-relaxed px-4">
            Get expert legal consultation tailored to your specific needs. 
            Schedule a confidential discussion to understand how we can protect 
            and empower your business.
          </p>
          
          {/* CTA Buttons - Stacked on mobile, side-by-side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <CTAButton 
              href="/contact/" 
              variant="primary"
              className="w-full sm:w-auto min-w-[200px]"
            >
              Schedule Consultation
            </CTAButton>
            <CTAButton 
              href={`tel:+919876543210`} 
              variant="secondary"
              className="w-full sm:w-auto min-w-[200px] glass border-white text-white hover:bg-white hover:text-primary-900"
            >
              📞 +91 98765 43210
            </CTAButton>
          </div>

          {/* Trust Signals */}
          <div className="mt-8 md:mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-primary-200">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Confidential</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>24hr Response</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>15+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
