import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Elegant Boutique MW — ELEGANT • STYLISH • YOU',
  icons: {
    icon: [
      { url: 'https://media.base44.com/images/public/6a85ec11d66075f7f89911f8/22ead13f7_favicon_512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: 'https://media.base44.com/images/public/6a85ec11d66075f7f89911f8/22ead13f7_favicon_512.png',
  },
  description:
    'Elegant Boutique MW — Malawi’s premier destination for elegant formal wear, dresses, and two-piece sets. Visit us in Area 49, Gulliver, Lilongwe.',
  keywords: ['elegant boutique', 'lilongwe fashion', 'malawi clothing', 'formal wear malawi', 'gulliver lilongwe'],
  openGraph: {
    title: 'Elegant Boutique MW — ELEGANT • STYLISH • YOU',
    description: 'Malawi’s premier destination for elegant formal wear and dresses. Area 49, Gulliver, Lilongwe.',
    type: 'website',
    locale: 'en_MW',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
