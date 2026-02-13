export default function MusicPage() {
  const releases = [
    { title: 'TRACK TITLE 1', type: 'Single', year: '2025' },
    { title: 'TRACK TITLE 2', type: 'Single', year: '2025' },
    { title: 'TRACK TITLE 3', type: 'Single', year: '2025' },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="page-title">MUSIC</h1>

        {/* Releases */}
        <section className="mb-20">
          <p className="section-label">Releases</p>
          <div className="grid md:grid-cols-3 gap-8">
            {releases.map((release, i) => (
              <div
                key={i}
                className="card overflow-hidden cursor-pointer hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-sky-accent/10 to-sky-coral/15 flex items-center justify-center">
                  <span className="font-mono text-sm text-sky-text-muted">
                    [Cover Art]
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-sky-warm tracking-wider mb-2">
                    {release.title}
                  </h3>
                  <p className="font-mono text-xs text-sky-text-muted">
                    {release.type} • {release.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section>
          <p className="section-label">Performance Videos</p>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-video card flex items-center justify-center relative cursor-pointer hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-sky-accent flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-white ml-1" />
                </div>
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-sm text-sky-warm">
                    Live Performance {i}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
