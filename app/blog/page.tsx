import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_CONFIG, BLOG_POSTS } from '@/lib/constants'
import { BreadcrumbSchema } from '@/components/seo/Schema'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Legal Insights & Articles',
  description: 'Expert insights on business law, corporate compliance, contracts, and legal strategies for startups and businesses in India.',
  keywords: [
    'legal blog',
    'business law articles',
    'corporate compliance',
    'legal insights',
    'startup legal advice',
  ],
  openGraph: {
    title: 'Legal Insights & Articles',
    description: 'Expert legal insights for businesses and startups.',
    url: `${SITE_CONFIG.url}/blog/`,
  },
}

export default function BlogPage() {
  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Legal Insights', url: `${SITE_CONFIG.url}/blog/` },
  ]

  // Group posts by category
  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)))

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Legal Insights & Articles
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Expert guidance on business law, compliance, and legal strategies
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <span className="px-4 py-2 bg-accent-500 text-white rounded-full font-medium">
              All Articles
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium hover:bg-primary-200 cursor-pointer transition-colors"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="card h-full flex flex-col">
                <div className="flex items-center text-sm text-primary-500 mb-3">
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-serif font-bold text-primary-900 mb-3">
                  <Link href={`/blog/${post.slug}/`} className="hover:text-accent-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-primary-600 mb-4 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-primary-200">
                  <span className="text-sm text-primary-500">
                    {formatDate(post.publishedAt)}
                  </span>
                  <Link 
                    href={`/blog/${post.slug}/`}
                    className="text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Stay Informed on Legal Matters
          </h2>
          <p className="text-lg text-primary-200 mb-8">
            Get practical legal insights delivered to your inbox. Subscribe to receive 
            updates on business law, compliance, and legal strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-md text-primary-900 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button className="btn-primary">Subscribe</button>
          </div>
          <p className="text-sm text-primary-300 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </>
  )
}
