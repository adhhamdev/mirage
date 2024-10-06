import ImageGenerationInterface from '@/components/ImageGenerationInterface';
import './globals.css';

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center p-4 min-h-screen bg-white sm:p-6 md:p-8'>
      <div className='w-full max-w-3xl'>
        <h1 className='mb-6 text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
          Mirage AI
        </h1>
        <ImageGenerationInterface />
      </div>
    </main>
  );
}
