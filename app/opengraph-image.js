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
          background: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
        }}>
        <h1 style={{ fontSize: 80, fontWeight: 700, margin: 0 }}>Mirage AI</h1>
        <p style={{ fontSize: 40, margin: '20px 0' }}>
          Imagine. Generate. Create.
        </p>
        <p style={{ fontSize: 30, maxWidth: '80%', textAlign: 'center' }}>
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
