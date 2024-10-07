import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
        }}>
        <svg width='0' height='0'>
          <filter id='gradient'>
            <feColorMatrix
              type='matrix'
              values='0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 1 0'
            />
          </filter>
        </svg>
        <span
          style={{
            background: 'linear-gradient(to right, #1F2937, #475569, #52525B)',
            backgroundClip: 'text',
            color: 'transparent',
            filter: 'url(#gradient)',
          }}>
          M
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
