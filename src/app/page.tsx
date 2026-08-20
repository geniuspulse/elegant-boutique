import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products, getNewArrivals, getFeatured, categories } from '@/data/products';

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const featured = getFeatured();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80"
            alt="Elegant fashion"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/30 to-ink/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <p className="text-cream/80 text-sm tracking-widest2 uppercase mb-4 animate-fade-in">
            Malawi's Premier Fashion Boutique
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-cream leading-tight mb-6 animate-fade-in">
            ELEGANT <span className="italic text-gold">•</span> STYLISH <span className="italic text-gold">•</span> YOU
          </h1>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-8 font-light animate-fade-in">
            Discover curated formal wear, dresses, and two-piece sets.
            From Small to 2XL — elegance has no size limit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              href="/shop"
              className="bg-gold text-ink px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
            >
              Shop Collection
            </Link>
            <a
              href="https://wa.me/265997544522"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cream/40 text-cream px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-cream hover:text-ink transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-ink text-cream py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: 'Small to 2XL', icon: '📏' },
            { label: 'Area 49, Gulliver', icon: '📍' },
            { label: 'Reserve on WhatsApp', icon: '💬' },
            { label: 'New Stock Weekly', icon: '✨' },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-sm text-cream/70">
              <span>{item.icon}</span>
              <span className="tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-sm tracking-widest2 uppercase mb-2">Just Arrived</p>
            <h2 className="font-serif text-4xl text-ink">New Arrivals</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-block border border-ink text-ink px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-ink hover:text-cream transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80"
            alt="Elegant style"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h2 className="font-serif text-4xl sm:text-5xl text-cream mb-4">
            Elegance for Every Woman
          </h2>
          <p className="text-cream/80 text-lg max-w-xl mx-auto mb-6 font-light">
            From everyday chic to show-stopping formal wear, we have something for every occasion.
          </p>
          <Link
            href="/shop"
            className="bg-gold text-ink px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            Browse Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 bg-cream-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-sm tracking-widest2 uppercase mb-2">Curated Selection</p>
            <h2 className="font-serif text-4xl text-ink">Featured Pieces</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {featured.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="py-12 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.filter(c => c !== 'All').map((cat) => (
              <Link
                key={cat}
                href={`/shop?category=${encodeURIComponent(cat)}`}
                className="border border-ink/20 text-ink px-6 py-2.5 text-sm font-medium tracking-wide uppercase hover:bg-ink hover:text-cream transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-ink text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-cream mb-4">
            Can't Find Your Size?
          </h2>
          <p className="text-cream/60 mb-6">
            We restock weekly and take custom orders. Message us on WhatsApp and we'll help you find the perfect fit.
          </p>
          <a
            href="https://wa.me/265997544522?text=Hi%20Elegant%20Boutique%2C%20I'm%20looking%20for%20a%20specific%20size"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Chat With Us
          </a>
        </div>
      </section>
    </div>
  );
}
