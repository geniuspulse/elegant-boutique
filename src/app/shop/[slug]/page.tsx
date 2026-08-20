import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProduct } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import WhatsAppButton from '@/components/WhatsAppButton';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-ink-muted tracking-wide">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2 text-ink-muted/50">/</span>
          <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2 text-ink-muted/50">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
               priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden bg-cream-dark cursor-pointer hover:opacity-80 transition-opacity">
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div>
              <p className="text-gold text-xs tracking-widest2 uppercase mb-1">
                {product.category}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
                {product.name}
              </h1>
            </div>

            <p className="text-2xl text-ink font-medium">{product.priceFormatted}</p>

            <p className="text-ink-muted leading-relaxed">{product.description}</p>

            {/* Colors */}
            <div>
              <p className="text-xs tracking-widest2 uppercase text-ink-muted mb-2">Colour</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="border border-ink/20 px-3 py-1 text-sm text-ink"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-xs tracking-widest2 uppercase text-ink-muted mb-2">Available Sizes</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="border border-ink/20 min-w-[2.5rem] text-center px-3 py-1.5 text-sm text-ink font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
              {product.inStock ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-sm text-ink-muted">In Stock — Reserve Now</span>
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="text-sm text-ink-muted">Currently Sold Out</span>
                </>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-3 space-y-3">
              <WhatsAppButton
                productName={product.name}
                price={product.priceFormatted}
              />
              <p className="text-xs text-ink-muted">
                Tap to reserve on WhatsApp. We'll confirm availability and arrange pickup or delivery.
              </p>
            </div>

            {/* Shop info */}
            <div className="border-t border-ink/10 pt-5 space-y-2 text-sm text-ink-muted">
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Pacific Mall, Shop A5, Blantyre
              </p>
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Old Gulliver Market, Area 49, Lilongwe
              </p>
              <Link href="/delivery" className="inline-flex items-center gap-1 text-gold hover:text-gold-dark transition-colors">
                View delivery information →
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-ink/10">
            <h2 className="font-serif text-3xl text-ink text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
