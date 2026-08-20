export const metadata = {
  title: 'Delivery — Elegant Boutique MW',
  description: 'Delivery information for Elegant Boutique orders within Malawi.',
};

export default function DeliveryPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold text-sm tracking-widest2 uppercase mb-2">Information</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink">Delivery</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* In-store pickup */}
          <div className="bg-cream-card border border-ink/10 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6127d" strokeWidth="1.5">
                  <path d="M3 9l2-5h14l2 5M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9M3 9h18" />
                  <path d="M9 13h6" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink mb-1">In-Store Pickup</h3>
                <p className="text-ink-muted text-sm">
                  Reserve any item on WhatsApp and pick it up at our shop in Area 49,
                  Gulliver, Lilongwe. No delivery fee.
                </p>
              </div>
            </div>
          </div>

          {/* Lilongwe delivery */}
          <div className="bg-cream-card border border-ink/10 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6127d" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink mb-1">Within Lilongwe</h3>
                <p className="text-ink-muted text-sm mb-2">
                  Delivery available within Lilongwe from our Area 49, Gulliver shop. Arrange via WhatsApp.
                </p>
                <p className="text-sm text-ink font-medium">
                  Delivery fee: Arranged on WhatsApp based on location
                </p>
              </div>
            </div>
          </div>

          {/* Nationwide */}
          <div className="bg-cream-card border border-ink/10 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gold/10 flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d6127d" strokeWidth="1.5">
                  <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl text-ink mb-1">Nationwide Delivery</h3>
                <p className="text-ink-muted text-sm mb-2">
                  We can arrange courier delivery to other parts of Malawi. Contact us on WhatsApp
                  with your location and we'll find the best option for you.
                </p>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-ink p-6 text-cream">
            <h3 className="font-serif text-2xl text-gold mb-4">How to Order</h3>
            <ol className="space-y-3 text-cream/70 text-sm">
              <li className="flex gap-3">
                <span className="text-gold font-serif text-lg">1.</span>
                <span>Browse our catalogue and find your perfect piece</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-serif text-lg">2.</span>
                <span>Tap "Reserve on WhatsApp" with your preferred size</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-serif text-lg">3.</span>
                <span>We confirm availability and arrange pickup or delivery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-serif text-lg">4.</span>
                <span>Pay on pickup or delivery — simple and secure</span>
              </li>
            </ol>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/265997544522?text=Hi%20Elegant%20Boutique%2C%20I'd%20like%20to%20know%20about%20delivery%20options"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-ink px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gold-light transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Ask About Delivery
          </a>
        </div>
      </div>
    </div>
  );
}
