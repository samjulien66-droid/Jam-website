import Link from 'next/link'

// This will be replaced with Sanity data
const blogPosts = [
  {
    title: "The Epstein Files: What We Know and What We Don't",
    slug: 'epstein-files',
    category: 'Elite Networks',
    date: 'Jan 2026',
    excerpt: 'A comprehensive look at the Jeffrey Epstein case, the connections that remain unexplored, and why accountability remains elusive for those in power.',
  },
  {
    title: 'CIA, Cocaine, and the Crack Epidemic: A Timeline',
    slug: 'cia-cocaine-timeline',
    category: 'Drugs & Power',
    date: 'Dec 2025',
    excerpt: 'Documenting the declassified evidence linking intelligence operations to the drug trade that devastated American communities.',
  },
  {
    title: 'Who Profits From Homelessness? Following the Money',
    slug: 'homelessness-profits',
    category: 'Policy Analysis',
    date: 'Nov 2025',
    excerpt: 'An investigation into the billion-dollar industry built around homelessness — and why solutions remain out of reach.',
  },
  {
    title: 'Operation Condor: America\'s Forgotten Intervention',
    slug: 'operation-condor',
    category: 'CIA History',
    date: 'Oct 2025',
    excerpt: 'How US-backed operations across South America shaped a generation of political violence — and what the declassified documents reveal.',
  },
  {
    title: 'The Opioid Crisis: Pharma, Policy, and Power',
    slug: 'opioid-crisis-power',
    category: 'Drugs & Power',
    date: 'Sep 2025',
    excerpt: 'Connecting the dots between pharmaceutical lobbying, regulatory capture, and the deadliest drug epidemic in American history.',
  },
  {
    title: 'Why Musicians Should Talk About Hard Things',
    slug: 'musicians-hard-things',
    category: 'Personal',
    date: 'Aug 2025',
    excerpt: 'Reflections on using a platform for more than entertainment — and the responsibility that comes with an audience.',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="page-title">INVESTIGATIONS</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16 max-w-2xl">
          Deep dives into elite power structures, policy failures, and the
          systems behind America's biggest crises. Following the money and
          connecting the dots.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['All', 'Elite Networks', 'Drugs & Power', 'CIA History', 'Policy Analysis', 'Personal'].map((cat) => (
            <button
              key={cat}
              className={`font-mono text-xs tracking-wider uppercase px-4 py-2 rounded border transition-colors ${
                cat === 'All'
                  ? 'bg-sky-accent text-white border-sky-accent'
                  : 'border-sky-border text-sky-text-muted hover:border-sky-accent hover:text-sky-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="card p-8 border-l-4 border-l-sky-accent cursor-pointer hover:-translate-y-1"
            >
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="font-mono text-xs text-sky-accent uppercase tracking-wider bg-sky-accent/10 px-3 py-1 rounded">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-sky-text-muted py-1">
                  {post.date}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-sky-warm mb-3">
                {post.title}
              </h2>

              <p className="font-serif text-sky-text-muted leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <span className="font-mono text-sm text-sky-accent">
                Read More →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
