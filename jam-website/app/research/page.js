import { getResearchItems } from '@/sanity/lib/client'

const categoryLabels = {
  'cia-intervention': 'CIA & Foreign Intervention',
  'elite-networks': 'Elite Networks',
  'drugs-power': 'Drugs & Power',
  'housing-homelessness': 'Housing & Homelessness',
}

const typeLabels = {
  'primary': 'Primary Source',
  'academic': 'Academic',
  'investigation': 'Investigation',
  'book': 'Book',
  'documentary': 'Documentary',
}

export const revalidate = 60

export default async function ResearchPage() {
  const items = await getResearchItems()

  // Group by category
  const grouped = {}
  if (items) {
    items.forEach((item) => {
      const cat = item.category || 'other'
      if (!grouped[cat]) grouped[cat] = []
      grouped[cat].push(item)
    })
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="page-title">RESEARCH</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16 max-w-3xl">
          Curated primary sources, declassified documents, academic studies, and
          investigative journalism. Real evidence for understanding the systems
          behind the crises.
        </p>

        {/* Research Categories */}
        <section className="mb-20">
          <p className="section-label">Browse by Category</p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <div key={key} className="card p-8 cursor-pointer hover:-translate-y-1">
                <h3 className="font-display text-2xl text-sky-warm tracking-wider mb-2">
                  {label}
                </h3>
                <p className="font-mono text-xs text-sky-accent">
                  {(grouped[key] || []).length} sources
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* All Research Items */}
        <section className="mb-20">
          <p className="section-label">All Sources</p>
          <div className="space-y-4">
            {items && items.length > 0 ? (
              items.map((item) => (
                <a
                  key={item._id}
                  href={item.url || '#'}
                  target={item.url ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer hover:-translate-y-1 block"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-sky-accent/10 text-sky-accent">
                        {typeLabels[item.type] || item.type}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-sky-bg text-sky-text-muted">
                        {categoryLabels[item.category] || item.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-lg text-sky-warm mb-1">
                      {item.title}
                    </h4>
                    <p className="font-mono text-xs text-sky-text-muted">
                      {item.source} • {item.year}
                    </p>
                    {item.description && (
                      <p className="font-serif text-sm text-sky-text-muted mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  {item.url && <span className="text-sky-accent text-xl">→</span>}
                </a>
              ))
            ) : (
              <div className="card p-12 text-center">
                <p className="font-mono text-sm text-sky-text-muted">
                  Research items coming soon...
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Methodology Note */}
        <section className="card p-8 bg-sky-highlight border-sky-coral/20">
          <p className="section-label" style={{ color: '#e8846e' }}>A Note on Sources</p>
          <p className="font-serif text-sky-text leading-relaxed">
            This research library prioritizes primary sources — declassified
            government documents, court filings, FOIA releases — alongside
            peer-reviewed academic work and award-winning investigative
            journalism. The goal is evidence over speculation, documentation
            over conspiracy.
          </p>
        </section>
      </div>
    </div>
  )
}
