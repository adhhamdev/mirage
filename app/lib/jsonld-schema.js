export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mirage AI',
  alternateName: 'Mirage AI Image Generator',
  url: 'https://mirageai.vercel.app',
  logo: 'https://mirageai.vercel.app/logo.png',
  description:
    'Mirage AI is an AI-powered image generation tool that allows you to create stunning visuals from text descriptions extremely fast and in the best quality.',
  applicationCategory: [
    'Artificial Intelligence',
    'Image Generation',
    'Design Tools',
  ],
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Text-to-Image Generation',
    'Multiple Aspect Ratios',
    'Fast and Quality Generation Modes',
    'High-Resolution Output',
    'Instant Downloads',
  ],
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/screenshots/mirage-desktop.png',
      caption: 'Mirage AI Desktop Interface',
    },
    {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/screenshots/mirage-mobile.jpg',
      caption: 'Mirage AI Mobile Interface',
    },
  ],
  creator: {
    '@type': 'Person',
    name: 'Adhham Safwan',
    url: 'https://x.com/AdhhamDev',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mirage AI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/logo.png',
    },
  },
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
  softwareVersion: '1.0',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    ratingCount: '1',
    bestRating: '5',
    worstRating: '1',
  },
  keywords: [
    'AI image generation',
    'text to image',
    'artificial intelligence art',
    'creative design tools',
    'digital art creation',
    'AI art generator',
    'visual content generation',
    'AI image creator',
    'machine learning art',
    'AI design tool',
  ],
};
