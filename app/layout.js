import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Mirage AI - Imagine. Generate. Create.',
  description:
    'Transform your ideas into stunning visuals with Mirage AI. Our cutting-edge AI technology brings your imagination to life through text-to-image generation.',
  keywords:
    'AI image generation, text-to-image conversion, artificial intelligence art, creative design tools, Mirage AI platform, digital art creation, visual content generation, AI-assisted creativity, machine learning art, innovative imaging technology, Flux AI',
  author: 'Adhham Safwan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mirageai.vercel.app',
    site_name: 'Mirage AI',
    title: 'Mirage AI - Imagine. Generate. Create.',
    description:
      'Transform your ideas into stunning visuals with Mirage AI. Our cutting-edge AI technology brings your imagination to life.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MirageAI',
    creator: '@MirageAI',
    title: 'Mirage AI - AI-Powered Image Generation',
    description:
      'Transform your ideas into stunning visuals with Mirage AI. Our cutting-edge AI technology brings your imagination to life.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'google-site-verification': '0R28Xy-oyNhcE2_MB10Jrkoayy5JcPf7mkx89IIMySk',
  },
};

const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mirage AI",
  "alternateName": "Mirage AI",
  "url": "https://mirageai.vercel.app",
  "description": "Mirage AI is an AI-powered image generation tool that allows you to create stunning visuals from text descriptions extremely fast and in the best quality.",
  "sameAs": ["https://x.com/AdhhamDev"],
  "creator": {
    "@type": "Person",
    "name": "Adhham Safwan"
  },
  "applicationCategory": "AIApplication",
  "operatingSystem": "Web"
}`;

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script id='json-ld' type='application/ld+json'>
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
