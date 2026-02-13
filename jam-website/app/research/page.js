import Link from 'next/link'

const researchCategories = [
  {
    title: 'CIA & Foreign Intervention',
    count: '32 sources',
    description: 'Declassified documents, regime change operations, and covert actions',
  },
  {
    title: 'Elite Networks',
    count: '18 sources',
    description: 'Epstein, offshore finance, private intelligence, and accountability gaps',
  },
  {
    title: 'Drugs & Power',
    count: '27 sources',
    description: 'Intelligence-drug trade connections, pharma lobbying, policy capture',
  },
  {
    title: 'Housing & Homelessness',
    count: '24 sources',
    description: 'Who profits, policy failures, and evidence-based solutions',
  },
]

const featuredResearch = [
  {
    title: 'CIA Activities in Chile (Church Committee)',
    source: 'U.S. Senate Select Committee',
    year: '1975',
    type: 'Primary Source',
  },
  {
    title: 'Dark Alliance: The CIA, the Contras, and the Crack Cocaine Explosion',
    source: 'Gary Webb / San Jose Mercury News',
    year: '1996',
    type: 'Investigation',
  },
  {
    title: 'The Jeffrey Epstein VI Foundation: Financial Trails',
    source: 'Court Documents / FOIA',
    year: '2019-2024',
    type: 'Primary Source',
  },
  {
    title: 'Housing First: A Decade of Evidence',
    source: 'Journal of Urban Policy',
    year: '2024',
    type: 'Academic',
  },
  {
    title: 'Operation Condor Declassified Documents',
    source: 'National Security Archive',
    year: '2016',
    type: 'Primary Source',
  },
  {
    title: 'The Opioid Industry\'s Capture of the FDA',
    source: 'JAMA Internal Medicine',
    year: '2023',
    type: 'Academic',
  },
]

export default function ResearchPage() {
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
            {researchCategories.map((cat, i) => (
              <div
                key={i}
                className="card p-8 cursor-pointer hover:-translate-y-1"
              >
                <h3 className="font-display text-2xl text-sky-warm tracking-wider mb-2">
                  {cat.title}
                </h3>
                <p className="font-serif text-sky-text-muted text-sm mb-3">
                  {cat.description}
                </p>
                <p className="font-mono text-xs text-sky-accent">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Research */}
        <section className="mb-20">
          <p className="section-label">Featured Sources</p>
          <div className="space-y-4">
            {featuredResearch.map((study, i) => (
              <div
                key={i}
                className="card p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 cursor-pointer hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-sky-accent/10 text-sky-accent">
                      {study.type}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg text-sky-warm mb-1">
                    {study.title}
                  </h4>
                  <p className="font-mono text-xs text-sky-text-muted">
                    {study.source} • {study.year}
                  </p>
                </div>
                <span className="text-sky-accent text-xl">→</span>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology Note */}
        <section className="card p-8 bg-sky-highlight border-sky-coral/20">
          <p className="section-label text-sky-coral">A Note on Sources</p>
          <p className="font-serif text-sky-text leading-relaxed">
            This research library prioritizes primary sources — declassified
            government documents, court filings, FOIA releases — alongside
            peer-reviewed academic work and award-winning investigative
            journalism. The goal is evidence over speculation, documentation
            over conspiracy. If you have sources to contribute, get in touch.
          </p>
        </section>
      </div>
    </div>
  )
}
