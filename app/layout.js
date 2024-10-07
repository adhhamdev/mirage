import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Mirage AI - AI-Powered Image Generation',
  description:
    'Transform your ideas into stunning visuals with Mirage AI. Our cutting-edge AI technology brings your imagination to life through text-to-image generation.',
  keywords:
    'AI, image generation, text-to-image, artificial intelligence, creative tools, Mirage AI',
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
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
