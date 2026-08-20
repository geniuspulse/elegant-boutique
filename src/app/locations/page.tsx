export const metadata = {
  title: 'Location — Elegant Boutique MW',
  description: 'Find Elegant Boutique MW in Area 49, Gulliver, Lilongwe, Malawi.',
};

export default function LocationsPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-cream-dark py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gold text-sm tracking-widest2 uppercase mb-2">Visit Us</p>
          <h1 className="font-serif text-4xl sm:text-5xl text-ink">Our Location</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Relocation notice */}
        <div className="bg-gold/10 border border-gold/30 text-center p-4 mb-8">
          <p className="text-sm text-ink">
            <span className="font-semibold text-gold-dark">We've relocated!</span> We've moved
            from Pacific Mall, Blantyre to our new home in Area 49, Gulliver, Lilongwe.
          </p>
        </div>

        {/* Lilongwe */}
        <div className="bg-cream-card border border-ink/10 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gold/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d6127d" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-ink">Lilongwe</h3>
          </div>
          <div className="space-y-3 text-sm text-ink-muted">
            <p className="font-medium text-ink">Area 49, Gulliver</p>
            <p>Next to Southern Bottlers Depot</p>
            <p>Lilongwe, Malawi</p>
            <div className="pt-3 border-t border-ink/10">
              <p className="font-medium text-ink mb-1">Hours</p>
              <p>Monday – Saturday: 8:00 AM – 5:00 PM</p>
            </div>
            <div className="pt-3 space-y-1">
              <a href="tel:+265997544522" className="block text-gold hover:text-gold-dark transition-colors font-medium">
                +265 997 544 522
              </a>
              <a href="tel:+265888522590" className="block text-gold hover:text-gold-dark transition-colors font-medium">
                +265 888 522 590
              </a>
            </div>
            <div className="pt-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Area+49+Gulliver+Lilongwe+Malawi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold hover:text-gold-dark transition-colors text-sm font-medium"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://wa.me/265997544522?text=Hi%20Elegant%20Boutique%2C%20I'd%20like%20directions%20to%20your%20shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-cream px-8 py-3.5 text-sm font-medium tracking-wide uppercase hover:bg-gold-dark transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            Message for Directions
          </a>
        </div>
      </div>
    </div>
  );
}
