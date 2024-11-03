export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Mirage AI',
  description:
    'Transform your ideas into stunning visuals with Mirage AI. Our cutting-edge AI technology brings your imagination to life through text-to-image generation.',
  url: 'https://mirageai.vercel.app',
  applicationCategory: ['Multimedia', 'Design', 'Artificial Intelligence'],
  operatingSystem: 'Any',
  author: {
    '@type': 'Person',
    name: 'Adhham Safwan',
  },
  screenshot: [
    {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/screenshots/mirage-desktop.png',
      caption: 'Homescreen of Mirage on desktop',
    },
    {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/screenshots/mirage-mobile.jpg',
      caption: 'Homescreen of Mirage on mobile',
    },
  ],
  featureList: [
    'Text-to-Image Generation',
    'Customizable Aspect Ratios',
    'Responsive Design',
    'Real-time Feedback',
    'Image Download',
  ],
  keywords:
    'AI image generation, text-to-image conversion, artificial intelligence art, creative design tools, Mirage AI platform, digital art creation, visual content generation, AI-assisted creativity, machine learning art, innovative imaging technology, Flux AI',
  softwareVersion: '0.1.0',
  creator: {
    '@type': 'Organization',
    name: 'Mirage AI',
    url: 'https://mirageai.vercel.app',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mirageai.vercel.app/logo.png',
    },
    sameAs: ['https://twitter.com/MirageAI'],
  },
};

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adhham Safwan',
  url: 'https://adhham.me',
  sameAs: ['https://x.com/AdhhamDev', 'https://github.com/adhhamdev'],
  image: 'https://adhham.me/avatar.png',
  jobTitle: 'Software Engineer',
};
