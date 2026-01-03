import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { SITE_CONFIG, BLOG_POSTS } from '@/lib/constants'
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/Schema'
import { formatDate } from '@/lib/utils'
import CTASection from '@/components/sections/CTASection'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `${SITE_CONFIG.url}/blog/${post.slug}/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const breadcrumbs = [
    { name: 'Home', url: SITE_CONFIG.url },
    { name: 'Legal Insights', url: `${SITE_CONFIG.url}/blog/` },
    { name: post.title, url: `${SITE_CONFIG.url}/blog/${post.slug}/` },
  ]

  // Get related posts (same category, excluding current post)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 3)

  return (
    <>
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        publishedAt={post.publishedAt}
        author={post.author}
        url={`${SITE_CONFIG.url}/blog/${post.slug}/`}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Article Header */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-primary-600">
              <li>
                <Link href="/" className="hover:text-accent-600">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog/" className="hover:text-accent-600">Legal Insights</Link>
              </li>
              <li>/</li>
              <li className="text-primary-800">{post.title}</li>
            </ol>
          </nav>

          {/* Category & Read Time */}
          <div className="flex items-center text-sm text-primary-500 mb-4">
            <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-medium">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-primary-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center pb-8 mb-8 border-b border-primary-200">
            <div className="w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center font-serif font-bold text-xl mr-4">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-primary-900">{post.author}</p>
              <p className="text-sm text-primary-600">Legal Consultant</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div
              className="text-primary-700 leading-relaxed"
              style={{ whiteSpace: 'pre-line' }}
            >
              {post.content}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-primary-200">
            <h3 className="text-lg font-semibold text-primary-900 mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-primary-50">
          <div className="container-custom max-w-6xl">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="card">
                  <div className="text-sm text-primary-500 mb-3">
                    <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-medium">
                      {relatedPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">
                    <Link href={`/blog/${relatedPost.slug}/`} className="hover:text-accent-600 transition-colors">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="text-primary-600 mb-4 text-sm">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${relatedPost.slug}/`}
                    className="text-accent-600 hover:text-accent-700 font-medium text-sm flex items-center"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
