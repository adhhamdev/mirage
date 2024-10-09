import ImageGenerationInterface from '@/components/ImageGenerationInterface';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <main
      className={`flex flex-col justify-center items-center p-4 min-h-screen bg-gradient-to-b from-white to-gray-100 sm:p-6 md:p-8 ${poppins.className}`}>
      <div className='w-full max-w-3xl'>
        <h1 className='mb-8 text-4xl font-bold text-center sm:text-5xl md:text-6xl'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-slate-700 to-zinc-600 drop-shadow-[0_2px_2px_rgba(255,255,255,0.1)]'>
            Mirage AI
          </span>
          <span className='block mt-2 text-lg text-gray-600 sm:text-xl md:text-2xl'>
            Imagine. Generate. Create.
          </span>
        </h1>
        <ImageGenerationInterface />
      </div>
    </main>
  );
}
