import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Mirage AI - AI-Powered Image Generation';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}>
        <svg width='0' height='0'>
          <filter id='gradient'>
            <feColorMatrix
              type='matrix'
              values='0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 1 0'
            />
          </filter>
        </svg>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 700,
            margin: 0,
            background: 'linear-gradient(to right, #1F2937, #475569, #52525B)',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'url(#gradient)',
          }}>
          Mirage AI
        </h1>
        <p style={{ fontSize: 40, margin: '20px 0', color: '#4B5563' }}>
          Imagine. Generate. Create.
        </p>
        <p
          style={{
            fontSize: 30,
            maxWidth: '80%',
            textAlign: 'center',
            color: '#6B7280',
          }}>
          Transform your ideas into stunning visuals with our AI-powered image
          generation
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
