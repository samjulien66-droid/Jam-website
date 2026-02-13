import Link from 'next/link'

const categories = [
  { name: 'Art & Prints', count: '12 items', icon: '🎨' },
  { name: 'Stickers', count: '24 items', icon: '✨' },
  { name: 'Home & Lifestyle', count: '8 items', icon: '🏠' },
  { name: 'Accessories', count: '15 items', icon: '👜' },
]

const products = [
  { name: 'Limited Edition Print', artist: 'Mira Byler', price: '$22.00' },
  { name: 'Floral Sticker Pack', artist: 'Mira Byler', price: '$12.00' },
  { name: 'Quilted Pencil Case', artist: 'Mira Byler', price: '$18.00' },
  { name: 'Canvas Tote Bag', artist: 'Mira Byler', price: '$20.00' },
  { name: 'Glitter Washi Tape', artist: 'Mira Byler', price: '$5.00' },
  { name: 'Art Print Bundle', artist: 'Mira Byler', price: '$55.00' },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="page-title">PRODUCTS I LOVE</h1>
        <p className="font-serif text-xl text-sky-text-muted mb-16 max-w-3xl">
          A curated collection of products from artists and makers I believe in.
          Every purchase supports independent creators.
        </p>

        {/* Featured Artist */}
        <section className="card p-8 md:p-12 mb-16">
          <span className="inline-block font-mono text-xs text-white uppercase tracking-wider bg-sky-coral px-3 py-1 rounded mb-6">
            Featured Artist
          </span>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-sky-warm tracking-wider mb-4">
                MIRA BYLER
              </h2>
              <p className="font-serif text-lg text-sky-text-muted leading-relaxed mb-6">
                Beautiful art prints, stickers, quilted bags, and more. Mira's
                work captures whimsy and wonder through impressionistic florals
                and nature-inspired designs.
              </p>
              <a
                href="https://mirabyler.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Visit Shop →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Art Prints', 'Stickers', 'Quilted Bags', 'Washi Tape'].map(
                (item, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-sky-accent/10 to-sky-coral/15 rounded-xl flex items-center justify-center border border-sky-border"
                  >
                    <span className="font-mono text-xs text-sky-text-muted text-center px-2">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <p className="section-label">Browse by Category</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <div
                key={i}
                className="card p-6 text-center cursor-pointer hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-display text-lg text-sky-warm tracking-wider mb-1">
                  {cat.name}
                </h3>
                <p className="font-mono text-xs text-sky-text-muted">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <p className="section-label">Recommended Products</p>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="card overflow-hidden cursor-pointer hover:-translate-y-1"
              >
                <div className="aspect-square bg-gradient-to-br from-sky-accent/10 to-sky-coral/15 flex items-center justify-center">
                  <span className="font-mono text-xs text-sky-text-muted">
                    [Product Image]
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg text-sky-warm mb-1">
                    {product.name}
                  </h3>
                  <p className="font-mono text-xs text-sky-text-muted mb-3">
                    by {product.artist}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm text-sky-accent font-bold">
                      {product.price}
                    </span>
                    <span className="font-mono text-xs text-sky-accent">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
