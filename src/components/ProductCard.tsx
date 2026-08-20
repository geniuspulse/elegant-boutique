import Image from 'next/image';
import Link from 'next/link';
import { Product, WHATSAPP_NUMBER } from '@/data/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group cursor-pointer">
      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark mb-3">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {product.isNew && (
            <span className="absolute top-3 left-3 bg-gold text-ink text-[10px] font-medium tracking-widest2 uppercase px-2.5 py-1">
              New
            </span>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-ink/50 flex items-center justify-center">
              <span className="text-cream text-sm tracking-widest2 uppercase">Sold Out</span>
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-[10px] tracking-widest2 uppercase text-gold font-medium">
            {product.category}
          </p>
          <h3 className="font-serif text-lg text-ink leading-tight group-hover:text-gold-dark transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-ink-muted font-medium">
              {product.priceFormatted}
            </p>
            <div className="flex gap-1">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="text-[10px] text-ink-muted"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink-muted">
            Sizes: {product.sizes.join(' · ')}
          </p>
        </div>
      </Link>
    </div>
  );
}
