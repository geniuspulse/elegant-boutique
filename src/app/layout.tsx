import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Elegant Boutique MW — ELEGANT • STYLISH • YOU',
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
