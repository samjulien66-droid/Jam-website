export default function TourPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="page-title">TOUR</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16">
          Live shows coming soon. Sign up to be the first to know.
        </p>

        {/* Email Signup */}
        <section className="card p-8 md:p-12 mb-16">
          <p className="section-label">Get Notified</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 bg-white border border-sky-border rounded-lg font-mono text-sm focus:outline-none focus:border-sky-accent"
            />
            <button className="btn-primary whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </section>

        {/* Placeholder Dates */}
        <section>
          <p className="section-label text-sky-text-muted">Upcoming Shows</p>
          <div className="card p-16 md:p-24 border-2 border-dashed border-sky-border text-center">
            <p className="font-mono text-sm text-sky-text-muted">
              Tour dates coming soon...
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
