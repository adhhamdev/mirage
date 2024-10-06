import ImageGenerationInterface from '@/components/ImageGenerationInterface';
import ImageGenerationList from '@/components/ImageGenerationList';

export default function Home() {
  return (
    <main className='flex flex-col md:flex-row h-screen gap-6 p-6'>
      <ImageGenerationList />
      <ImageGenerationInterface />
    </main>
  );
}
