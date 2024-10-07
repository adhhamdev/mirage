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
      <div className='flex justify-center items-center w-full h-full text-2xl font-bold bg-white'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-600 filter-gradient'>
          M
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
