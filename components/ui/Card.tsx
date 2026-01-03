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
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">
        {title}
      </h3>
      <p className="text-primary-600 leading-relaxed">
        {description}
      </p>
      {href && (
        <div className="mt-4 text-accent-500 font-medium flex items-center">
          Learn More
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`card group hover:border-accent-500 border-2 border-transparent ${className}`}>
        {content}
      </Link>
    )
  }

  return <div className={`card ${className}`}>{content}</div>
}
