import Link from 'next/link'
import { getBlogPosts } from '@/sanity/lib/client'

const categoryLabels = {
  'elite-networks': 'Elite Networks',
  'drugs-power': 'Drugs & Power',
  'cia-history': 'CIA History',
  'policy-analysis': 'Policy Analysis',
  'personal': 'Personal',
}

function formatDate(dateString) {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="page-title">INVESTIGATIONS</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16 max-w-2xl">
          Deep dives into elite power structures, policy failures, and the
          systems behind America's biggest crises. Following the money and
          connecting the dots.
        </p>

        {/* Blog Posts */}
        <div className="space-y-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={`/blog/${post.slug}`}>
                <article className="card p-8 border-l-4 border-l-sky-accent cursor-pointer hover:-translate-y-1 mb-8">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="font-mono text-xs text-sky-accent uppercase tracking-wider bg-sky-accent/10 px-3 py-1 rounded">
                      {categoryLabels[post.category] || post.category}
                    </span>
                    <span className="font-mono text-xs text-sky-text-muted py-1">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-sky-warm mb-3">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="font-serif text-sky-text-muted leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  )}

                  <span className="font-mono text-sm text-sky-accent">
                    Read More →
                  </span>
                </article>
              </Link>
            ))
          ) : (
            <div className="card p-12 text-center">
              <p className="font-mono text-sm text-sky-text-muted">
                Posts coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
