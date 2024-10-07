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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          backgroundColor: 'white',
        }}>
        <span
          style={{
            background: 'linear-gradient(to right, #1F2937, #4B5563, #4B5563)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
