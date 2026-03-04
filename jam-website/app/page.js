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

export default async function Home() {
  const allPosts = await getBlogPosts().catch(() => [])
  const posts = (allPosts || []).slice(0, 3)

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-sky-accent/10 rounded-full blur-[80px] top-1/4 left-1/4 -translate-x-1/2" />
        <div className="absolute w-[400px] h-[400px] bg-sky-coral/10 rounded-full blur-[60px] bottom-1/4 right-1/4 translate-x-1/2" />

        <h1 className="font-display text-7xl md:text-[140px] tracking-[12px] md:tracking-[20px] text-sky-warm relative z-10">
          SAM JULIEN
        </h1>

        <p className="font-mono text-sm tracking-[6px] md:tracking-[8px] text-sky-text-muted uppercase mt-6 relative z-10">
          Music • Mission • Movement
        </p>

        <div className="mt-16 flex flex-col sm:flex-row gap-4 relative z-10">
          <Link href="/music" className="btn-primary">
            Listen Now
          </Link>
          <Link href="/research" className="btn-secondary">
            The Investigation
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 md:px-12 bg-sky-bg-secondary">
        <div className="max-w-6xl mx-auto">
          <p className="section-label">Latest Release</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-sky-accent/10 to-sky-coral/10 rounded-xl flex items-center justify-center border border-sky-border shadow-lg">
              <span className="text-sky-text-muted font-mono text-sm">[Album Art]</span>
            </div>
            <div>
              <h2 className="font-display text-5xl md:text-6xl text-sky-warm tracking-[4px] mb-4">
                UPCOMING ALBUM
              </h2>
              <p className="font-serif text-xl text-sky-text-muted leading-relaxed mb-8">
                A fusion of indie soul, driving rhythms, and honest lyrics.
                Music that moves your body and mind.
              </p>
              <button className="btn-secondary">Pre-Save →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Teaser */}
      <section className="py-24 px-6 md:px-12 text-center">
        <p className="section-label">The Investigation</p>
        <h2 className="font-serif text-3xl md:text-4xl font-normal text-sky-warm max-w-4xl mx-auto leading-relaxed italic">
          "Following the money, the power, and the policies behind America's
          addiction and homelessness crisis. From CIA drug operations to elite
          networks — connecting the dots they don't want connected."
        </h2>
        <Link href="/research" className="btn-secondary mt-12 inline-block">
          Explore the Research →
        </Link>
      </section>

      {/* Recent Blog Posts from Sanity */}
      <section className="py-20 px-6 md:px-12 bg-sky-bg-secondary">
        <div className="max-w-4xl mx-auto">
          <p className="section-label">Latest Investigations</p>
          <div className="space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <article
                  key={post._id}
                  className="card p-8 border-l-4 border-l-sky-accent cursor-pointer hover:-translate-y-1"
                >
                  <div className="flex gap-4 mb-3">
                    <span className="font-mono text-xs text-sky-accent uppercase tracking-wider bg-sky-accent/10 px-3 py-1 rounded">
                      {categoryLabels[post.category] || post.category}
                    </span>
                    <span className="font-mono text-xs text-sky-text-muted py-1">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-sky-warm">
                    {post.title}
                  </h3>
                </article>
              ))
            ) : (
              <div className="card p-8 text-center">
                <p className="font-mono text-sm text-sky-text-muted">
                  Posts coming soon...
                </p>
              </div>
            )}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              Read All Posts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
