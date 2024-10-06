import ImageGenerationInterface from '@/components/ImageGenerationInterface';
import ImageGenerationList from '@/components/ImageGenerationList';

export default function Home() {
  return (
    <main className='flex flex-col h-screen gap-4 p-4 md:flex-row md:p-6'>
      <ImageGenerationList />
      <ImageGenerationInterface />
    </main>
  );
}
