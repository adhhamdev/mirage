/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'r4vigwzuc5addp4y.public.blob.vercel-storage.com',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
