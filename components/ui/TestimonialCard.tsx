import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-primary-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-primary-700 italic mb-6 leading-relaxed flex-grow text-sm sm:text-base">
        "{testimonial.content}"
      </blockquote>

      {/* Author Info */}
      <div className="border-t border-primary-200 pt-4 mt-auto">
        <p className="font-semibold text-primary-900 text-sm sm:text-base">{testimonial.name}</p>
        <p className="text-sm text-primary-600">{testimonial.role}</p>
      </div>
    </div>
  )
}
