import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Mirage AI - Imagine. Generate. Create.',
  description: 'Generate images from your words using AI',
  keywords:
    'AI, image generation, text-to-image, artificial intelligence, creative tools',
  author: 'Adhham Safwan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mirageai.vercel.app',
    site_name: 'Mirage AI',
    title: 'Mirage - Imagine. Generate. Create.',
    description: 'Generate stunning images from your words using AI',
  },
  twitter: {
    handle: '@MirageAI',
    site: '@MirageAI',
    cardType: 'summary_large_image',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
