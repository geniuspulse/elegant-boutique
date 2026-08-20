'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/about', label: 'About' },
    { href: '/delivery', label: 'Delivery' },
    { href: '/locations', label: 'Locations' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/95 backdrop-blur-sm shadow-lg'
          : 'bg-ink'
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-gold text-cream text-center py-1.5 text-[11px] font-medium tracking-widest2 uppercase">
        Area 49, Gulliver · Next to Southern Bottlers Depot, Lilongwe
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-9 h-9 flex-shrink-0">
              <Image
                src="https://media.base44.com/images/public/6a85ec11d66075f7f89911f8/0d3563e74_logo_real_white_version.png"
                alt="Elegant Boutique MW logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-serif text-2xl text-cream tracking-wide leading-none">
              Elegant <span className="text-gold italic">Boutique</span>
              <span className="text-cream/50 text-sm not-italic align-top"> MW</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-gold transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/265997544522?text=Hi%20Elegant%20Boutique%2C%20I'd%20like%20to%20enquire%20about%20a%20product"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-cream px-5 py-2 text-sm font-medium tracking-wide uppercase hover:bg-gold-dark transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-cream/80 hover:text-gold transition-colors py-2.5 text-sm font-medium tracking-wide uppercase border-b border-cream/10"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/265997544522?text=Hi%20Elegant%20Boutique%2C%20I'd%20like%20to%20enquire%20about%20a%20product"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-cream px-5 py-3 mt-2 text-sm font-medium tracking-wide uppercase text-center hover:bg-gold-dark transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
