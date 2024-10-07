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
      <div className='flex flex-col justify-center items-center w-full h-full font-sans text-center bg-white'>
        <h1 className='text-[120px] font-extrabold m-0 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-600 bg-clip-text text-transparent filter-gradient leading-tight'>
          Mirage AI
        </h1>
        <p className='text-[60px] font-bold m-0 mt-4 text-gray-700'>
          Imagine. Generate. Create.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
