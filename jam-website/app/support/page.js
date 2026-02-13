export default function SupportPage() {
  const tiers = [
    {
      name: 'Supporter',
      amount: '$10/mo',
      perks: ['Newsletter access', 'Research updates', 'Community Discord'],
      featured: false,
    },
    {
      name: 'Advocate',
      amount: '$25/mo',
      perks: ['All Supporter perks', 'Early music access', 'Name in credits'],
      featured: true,
    },
    {
      name: 'Champion',
      amount: '$50/mo',
      perks: ['All Advocate perks', 'Monthly AMA access', 'Exclusive merch'],
      featured: false,
    },
  ]

  const otherWays = [
    {
      title: 'Share the Research',
      desc: 'Spread evidence-based investigations on social media',
    },
    {
      title: 'Join the Debate',
      desc: 'Participate in community discussions and forums',
    },
    {
      title: 'Volunteer',
      desc: 'Help with research, outreach, or events',
    },
    {
      title: 'One-Time Donation',
      desc: 'Support the cause with a single contribution',
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="page-title">SUPPORT</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16 max-w-3xl">
          Help fund independent research, investigative journalism, and real
          solutions. Every contribution keeps this work going.
        </p>

        {/* Donation Tiers */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`card p-8 relative ${
                  tier.featured
                    ? 'border-2 border-sky-accent shadow-lg'
                    : ''
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-accent text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded">
                    Popular
                  </span>
                )}

                <h3 className="font-display text-2xl text-sky-warm tracking-wider mb-2">
                  {tier.name}
                </h3>

                <p className="font-mono text-3xl text-sky-accent mb-6">
                  {tier.amount}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.perks.map((perk, j) => (
                    <li
                      key={j}
                      className="font-serif text-sm text-sky-text-muted flex items-center gap-2"
                    >
                      <span className="text-sky-accent">✓</span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-mono text-xs uppercase tracking-wider ${
                    tier.featured
                      ? 'bg-sky-accent text-white'
                      : 'border-2 border-sky-accent text-sky-accent hover:bg-sky-accent hover:text-white'
                  }`}
                >
                  Support
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Other Ways */}
        <section>
          <p className="section-label">Other Ways to Get Involved</p>
          <div className="grid md:grid-cols-2 gap-4">
            {otherWays.map((item, i) => (
              <div key={i} className="card p-6 cursor-pointer hover:-translate-y-1">
                <h4 className="font-display text-lg text-sky-warm tracking-wider mb-2">
                  {item.title}
                </h4>
                <p className="font-serif text-sm text-sky-text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
