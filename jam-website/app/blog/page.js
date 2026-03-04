import Link from 'next/link'
import { client } from '@/sanity/lib/client'

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
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      featured
    }
  `)
}

async function getPost(slug) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      category,
      publishedAt,
      excerpt,
      body[] {
        ...,
        _type == "block" => {
          style,
          "text": children[].text
        }
      }
    }`,
    { slug }
  )
}

export const revalidate = 60

export default async function BlogPage({ searchParams }) {
  const slug = searchParams?.post

  // If a specific post is requested, show it
  if (slug) {
    const post = await getPost(slug)

    if (!post) {
      return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="page-title">POST NOT FOUND</h1>
            <Link href="/blog" className="btn-secondary mt-8 inline-block">
              Back to Blog
            </Link>
          </div>
        </div>
      )
    }

    return (
      <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="font-mono text-sm text-sky-accent hover:text-sky-accent-hover mb-12 inline-block"
          >
            ← Back to Investigations
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="font-mono text-xs text-sky-accent uppercase tracking-wider bg-sky-accent/10 px-3 py-1 rounded">
                {categoryLabels[post.category] || post.category}
              </span>
              <span className="font-mono text-xs text-sky-text-muted py-1">
                {formatDate(post.publishedAt)}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl text-sky-warm leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="font-serif text-xl text-sky-text-muted leading-relaxed border-l-4 border-sky-accent pl-6">
                {post.excerpt}
              </p>
            )}
          </header>

          <div className="w-16 h-px bg-sky-accent mb-12" />

          <div>
            {post.body && post.body.length > 0 ? (
              post.body.map((block, i) => {
                if (block._type === 'block') {
                  const text = (block.text || []).join('')
                  if (!text) return null
                  if (block.style === 'h2') {
                    return <h2 key={i} className="font-display text-3xl text-sky-warm tracking-wider mt-12 mb-4">{text}</h2>
                  }
                  if (block.style === 'h3') {
                    return <h3 key={i} className="font-display text-2xl text-sky-warm tracking-wider mt-8 mb-3">{text}</h3>
                  }
                  if (block.style === 'blockquote') {
                    return <blockquote key={i} className="border-l-4 border-sky-accent pl-6 my-8 font-serif text-xl italic text-sky-text-muted">{text}</blockquote>
                  }
                  return <p key={i} className="font-serif text-lg text-sky-text leading-relaxed mb-6">{text}</p>
                }
                return null
              })
            ) : (
              <p className="font-serif text-lg text-sky-text-muted">
                Full article coming soon...
              </p>
            )}
          </div>

          <div className="mt-16 pt-8 border-t border-sky-border">
            <Link href="/blog" className="btn-secondary inline-block">
              ← More Investigations
            </Link>
          </div>
        </article>
      </div>
    )
  }

  // Otherwise show the blog listing
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

        <div className="space-y-8">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <Link key={post._id} href={`/blog?post=${post.slug}`}>
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
