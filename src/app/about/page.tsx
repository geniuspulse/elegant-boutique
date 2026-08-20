import Image from 'next/image';

export const metadata = {
  title: 'About — Elegant Boutique MW',
  description: 'The story of Elegant Boutique — Malawi\'s premier destination for elegant formal wear.',
};

export default function AboutPage() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80"
          alt="Elegant Boutique"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl text-cream">Our Story</h1>
        </div>
      </section>

      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-gold text-sm tracking-widest2 uppercase mb-2">ELEGANT • STYLISH • YOU</p>
          <h2 className="font-serif text-4xl text-ink">About Elegant Boutique</h2>
        </div>

        <div className="space-y-6 text-ink-muted leading-relaxed text-lg">
          <p>
            Elegant Boutique MW was born from a simple belief: every woman deserves to feel
            elegant, stylish, and confidently herself. We started out at Pacific Mall in
            Blantyre, growing into one of the country's most preferred destinations for
            formal wear and elegant fashion.
          </p>
          <p>
            What started as a passion for helping women find the perfect dress for special
            occasions has become a destination for size-inclusive fashion that celebrates
            every body. From Small to 2XL, we believe elegance has no size limit.
          </p>
          <p>
            We've since relocated to Area 49, Gulliver in Lilongwe, next to Southern Bottlers
            Depot — with new stock arriving every week. Every piece is hand-selected for
            quality, style, and that unmistakable touch of elegance that sets our boutique apart.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Elegant', text: 'Every piece in our collection is chosen for its timeless elegance and quality.' },
            { title: 'Stylish', text: 'We stay ahead of trends while honouring classic silhouettes that never go out of fashion.' },
            { title: 'You', text: 'Size-inclusive from Small to 2XL — because elegance belongs to every woman.' },
          ].map((value) => (
            <div key={value.title} className="text-center p-6 bg-cream-card border border-ink/10">
              <h3 className="font-serif text-2xl text-gold mb-2">{value.title}</h3>
              <p className="text-sm text-ink-muted">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-12 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-3xl text-cream mb-4">Visit Us Today</h2>
          <p className="text-cream/60 mb-6">
            Come experience the elegance in person at our shop in Lilongwe.
          </p>
          <a
            href="/locations"
            className="inline-block bg-gold text-ink px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            Find Our Shops
          </a>
        </div>
      </section>
    </div>
  );
}
