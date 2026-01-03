'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  value: number
  suffix: string
  label: string
  icon: string
}

const stats: Stat[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Successful Cases',
    icon: '⚖️'
  },
  {
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    icon: '🎯'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    icon: '📅'
  },
  {
    value: 200,
    suffix: '+',
    label: 'Happy Clients',
    icon: '😊'
  }
]

// Counter animation hook
function useCountUp(end: number, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const startValue = 0

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)
      
      setCount(Math.floor(startValue + (end - startValue) * easedProgress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return count
}

function StatCard({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, 2000, isVisible)

  return (
    <div className="text-center transform hover:scale-105 transition-transform duration-300">
      <div className="text-4xl sm:text-5xl mb-3">{stat.icon}</div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent-500 mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm sm:text-base text-primary-600 font-medium">
        {stat.label}
      </div>
    </div>
  )
}

export default function CaseResults() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-br from-primary-900 to-navy-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading-lg mb-4 md:mb-6 text-white">
            Proven Track Record
          </h2>
          <p className="text-base sm:text-lg text-primary-200 max-w-3xl mx-auto px-4">
            Numbers that speak to our commitment and success in delivering exceptional legal services
          </p>
        </div>

        {/* Stats Grid - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="glass border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent-400">Notable Cases</h3>
              <ul className="space-y-2 text-sm sm:text-base text-primary-200">
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>Successfully handled 100+ corporate mergers and acquisitions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>Assisted 200+ startups with legal structuring and funding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>Drafted and reviewed 1000+ business contracts</span>
                </li>
              </ul>
            </div>

            <div className="glass border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-accent-400">Client Satisfaction</h3>
              <ul className="space-y-2 text-sm sm:text-base text-primary-200">
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>98% client satisfaction rate across all services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>Average 4.9/5 rating from client reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-400 mr-2">✓</span>
                  <span>85% of clients return for ongoing legal support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
