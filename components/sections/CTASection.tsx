import CTAButton from '@/components/ui/CTAButton'

export default function CTASection() {
  return (
    <section className="bg-navy-900 text-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Need Legal Guidance for Your Business?
          </h2>
          <p className="text-lg text-primary-200 mb-8 leading-relaxed">
            Get expert legal consultation tailored to your specific needs. 
            Schedule a confidential discussion to understand how we can protect 
            and empower your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton href="/contact/" variant="primary">
              Schedule Consultation
            </CTAButton>
            <CTAButton 
              href={`tel:+919876543210`} 
              variant="secondary"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-900"
            >
              Call: +91 98765 43210
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
