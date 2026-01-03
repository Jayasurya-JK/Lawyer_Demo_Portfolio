import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ href, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseStyles = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  
  return (
    <Link href={href} className={`${baseStyles} inline-block ${className}`}>
      {children}
    </Link>
  )
}
