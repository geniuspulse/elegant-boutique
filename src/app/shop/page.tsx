'use client';

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('newest');

  const filtered = useMemo(() => {
    let result = activeCategory === 'All'
      ? [...products]
      : products.filter((p) => p.category === activeCategory);

    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price);
    if (sortBy === 'newest') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold text-sm tracking-widest2 uppercase mb-2">Collection</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink">Shop Elegant Boutique</h1>
          <p className="text-ink-muted mt-3 max-w-xl mx-auto">
            Formal wear, dresses, and two-piece sets. Small to 2XL.
            Reserve any item instantly on WhatsApp.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-[73px] z-40 bg-cream/95 backdrop-blur-sm border-b border-ink/10 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Category pills */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium tracking-wide uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat
                    ? 'bg-ink text-cream'
                    : 'border border-ink/20 text-ink hover:bg-ink/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-muted tracking-wide uppercase">Sort</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-ink/20 bg-cream-card px-3 py-1.5 text-ink focus:outline-none focus:border-gold"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-sm text-ink-muted mb-6">
          {filtered.length} {filtered.length === 1 ? 'item' : 'items'}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
