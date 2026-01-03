import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon?: string
  href?: string
  className?: string
}

export default function Card({ title, description, icon, href, className = '' }: CardProps) {
  const content = (
    <>
      {icon && (
        <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="heading-sm mb-3 group-hover:text-accent-600 transition-colors duration-200">
        {title}
      </h3>
      <p className="text-primary-600 leading-relaxed text-sm sm:text-base">
        {description}
      </p>
      {href && (
        <div className="mt-4 text-accent-500 font-semibold flex items-center group-hover:text-accent-600 transition-colors">
          Learn More
          <svg 
            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className={`card group hover:border-accent-500 border-2 border-transparent 
                   transition-all duration-300 hover:-translate-y-1 
                   cursor-pointer block h-full ${className}`}
      >
        {content}
      </Link>
    )
  }

  return (
    <div className={`card h-full ${className}`}>
      {content}
    </div>
  )
}
