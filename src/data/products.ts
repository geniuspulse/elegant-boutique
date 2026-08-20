export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Dresses' | 'Two-Piece Sets' | 'Formal Wear' | 'Accessories';
  price: number;
  priceFormatted: string;
  colors: string[];
  sizes: string[];
  description: string;
  image: string;
  images: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  inStock: boolean;
};

export const WHATSAPP_NUMBER = '265997544522';

export const products: Product[] = [
  {
    id: '1',
    slug: 'white-elegance-dress',
    name: 'White Elegance Dress',
    category: 'Dresses',
    price: 95000,
    priceFormatted: 'K95,000',
    colors: ['White'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description:
      'A timeless white dress crafted for the woman who commands attention without saying a word. Flowing silhouette with a tailored fit that flatters every curve. Perfect for formal events, weddings, and special occasions.',
    image:
      'https://images.unsplash.com/photo-1595777457583-95e059d0e529?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d0e529?w=1200&q=80',
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '2',
    slug: 'crimson-statement-dress',
    name: 'Crimson Statement Dress',
    category: 'Dresses',
    price: 85000,
    priceFormatted: 'K85,000',
    colors: ['Red'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description:
      'Bold, confident, unforgettable. This crimson red dress is designed for the woman who isn’t afraid to stand out. Tailored to perfection with a figure-hugging fit and elegant hemline.',
    image:
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=1200&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d0e529?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '3',
    slug: 'cream-two-piece-set',
    name: 'Cream Two-Piece Set',
    category: 'Two-Piece Sets',
    price: 30000,
    priceFormatted: 'K30,000',
    colors: ['Cream'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Effortless sophistication in a coordinated two-piece. The cream set pairs a structured top with a flowing bottom — versatile enough for both casual outings and semi-formal events.',
    image:
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583846783214-7229a91b20ed?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '4',
    slug: 'classic-two-piece',
    name: 'Classic Two-Piece',
    category: 'Two-Piece Sets',
    price: 35000,
    priceFormatted: 'K35,000',
    colors: ['Multi'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'A wardrobe essential. This classic two-piece combines comfort with elegance, featuring clean lines and a tailored fit. Dress it up with heels or keep it chic with flats.',
    image:
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '5',
    slug: 'summer-floral-dress',
    name: 'Summer Floral Dress',
    category: 'Dresses',
    price: 26000,
    priceFormatted: 'K26,000',
    colors: ['Floral'],
    sizes: ['M', 'L', 'XL', '2XL'],
    description:
      'Light, breezy, and effortlessly feminine. This floral print dress is perfect for warm days and casual outings. The flowing fabric moves beautifully with every step.',
    image:
      'https://images.unsplash.com/photo-1612722432474-b971cdcea566?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1612722432474-b971cdcea566?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '6',
    slug: 'black-evening-gown',
    name: 'Black Evening Gown',
    category: 'Formal Wear',
    price: 95000,
    priceFormatted: 'K95,000',
    colors: ['Black'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description:
      'The epitome of elegance. This black evening gown features a floor-length silhouette with subtle draping that creates a stunning profile. For galas, weddings, and black-tie events.',
    image:
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=1200&q=80',
      'https://images.unsplash.com/photo-1495121605193-b116b5ce9c70?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '7',
    slug: 'blush-formal-dress',
    name: 'Blush Formal Dress',
    category: 'Formal Wear',
    price: 75000,
    priceFormatted: 'K75,000',
    colors: ['Blush'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Soft, romantic, and refined. This blush pink formal dress features a delicate silhouette that’s perfect for weddings, cocktail events, and evening occasions.',
    image:
      'https://images.unsplash.com/photo-1495121605193-b116b5ce9c70?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1495121605193-b116b5ce9c70?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '8',
    slug: 'emerald-cocktail-dress',
    name: 'Emerald Cocktail Dress',
    category: 'Dresses',
    price: 65000,
    priceFormatted: 'K65,000',
    colors: ['Green'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Make an entrance in this emerald green cocktail dress. The rich jewel tone complements every skin tone, while the tailored fit creates a silhouette that turns heads.',
    image:
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '9',
    slug: 'champagne-silk-blouse',
    name: 'Champagne Silk Blouse',
    category: 'Accessories',
    price: 45000,
    priceFormatted: 'K45,000',
    colors: ['Champagne'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Luxurious silk blouse in a warm champagne tone. Effortlessly transitions from office wear to evening elegance. Pair with trousers or a skirt for a polished look.',
    image:
      'https://images.unsplash.com/photo-1564257577-2d3c5c5f3b41?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564257577-2d3c5c5f3b41?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '10',
    slug: 'navy-power-blazer',
    name: 'Navy Power Blazer',
    category: 'Formal Wear',
    price: 55000,
    priceFormatted: 'K55,000',
    colors: ['Navy'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description:
      'Command the room. This navy blazer is tailored for a structured, powerful silhouette. Perfect for the boardroom, formal events, or layered over a dress for instant elegance.',
    image:
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80',
    ],
    isNew: false,
    isFeatured: false,
    inStock: true,
  },
  {
    id: '11',
    slug: 'rose-gold-evening-set',
    name: 'Rose Gold Evening Set',
    category: 'Two-Piece Sets',
    price: 80000,
    priceFormatted: 'K80,000',
    colors: ['Rose Gold'],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Dazzle in this rose gold two-piece evening set. The shimmering fabric catches the light with every movement, making it perfect for weddings, galas, and special celebrations.',
    image:
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
  {
    id: '12',
    slug: 'ivory-pearl-gown',
    name: 'Ivory Pearl Gown',
    category: 'Formal Wear',
    price: 120000,
    priceFormatted: 'K120,000',
    colors: ['Ivory'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    description:
      'Our premium piece. The Ivory Pearl Gown features hand-finished details and a flowing train that creates an unforgettable silhouette. For the woman who deserves the very best.',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
    ],
    isNew: true,
    isFeatured: true,
    inStock: true,
  },
];

export const categories = ['All', 'Dresses', 'Two-Piece Sets', 'Formal Wear', 'Accessories'] as const;

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getFeatured(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getByCategory(category: string): Product[] {
  if (category === 'All') return products;
  return products.filter((p) => p.category === category);
}
