'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Download, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const aspectRatios = [
  { label: '1:1', value: 'square', width: 512, height: 512 },
  { label: '4:3', value: 'standard', width: 512, height: 384 },
  { label: '16:9', value: 'widescreen', width: 512, height: 288 },
  { label: '9:16', value: 'portrait', width: 288, height: 512 },
];

export default function ImageGenerationInterface() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState(null);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState(
    aspectRatios[0]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);
    setError(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          width: selectedAspectRatio.width,
          height: selectedAspectRatio.height,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image, please try again.');
      }

      const data = await response.json();
      setGeneratedImage(data.imageUrl);
    } catch (err) {
      setError(
        'An error occurred while generating the image. Please try again.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='flex flex-col flex-1 p-2 bg-gray-100 rounded-3xl shadow-lg sm:p-4'>
      <div className='overflow-y-auto flex-1 pt-1 mb-6 space-y-6'>
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='overflow-hidden relative mx-auto w-full bg-gray-100 rounded-3xl aspect-square max-w-[400px]'>
              <div className='absolute inset-0 shimmer-effect'></div>
            </motion.div>
          )}
          {generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative mx-auto w-full max-w-[400px]'
              style={{
                aspectRatio: `${selectedAspectRatio.width} / ${selectedAspectRatio.height}`,
              }}>
              <Image
                src={generatedImage}
                alt='Mirage AI Image'
                className='object-cover rounded-3xl'
                fill
                sizes='(max-width: 640px) 300px, 400px'
              />
              <a
                href={generatedImage}
                download='mirage_ai_image.png'
                className='flex absolute right-2 bottom-2 items-center px-3 py-1 text-xs font-medium text-white bg-black bg-opacity-50 rounded-full shadow-lg transition-colors duration-200 sm:right-4 sm:bottom-4 sm:px-4 sm:py-2 sm:text-sm hover:bg-opacity-70'
                target='_blank'
                rel='noopener noreferrer'>
                <Download size={14} className='mr-1 sm:mr-2' /> Download
              </a>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center p-4 text-red-800 bg-red-100 rounded-2xl'>
              <AlertCircle size={20} className='flex-shrink-0 mr-2' />
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='mb-4'>
        <p className='mb-2 text-sm font-medium text-gray-700'>
          Select aspect ratio:
        </p>
        <div className='flex flex-wrap gap-2'>
          {aspectRatios.map((ratio) => (
            <label
              key={ratio.value}
              className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-full cursor-pointer transition-colors duration-200 ${
                selectedAspectRatio.value === ratio.value
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}>
              <input
                type='radio'
                name='aspectRatio'
                value={ratio.value}
                checked={selectedAspectRatio.value === ratio.value}
                onChange={() => setSelectedAspectRatio(ratio)}
                className='sr-only'
              />
              {ratio.label}
            </label>
          ))}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2'>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Describe the image you want to generate...'
          className='px-4 py-3 w-full bg-white rounded-full border border-gray-300 sm:flex-1 focus:outline-none focus:ring-2 focus:ring-gray-500'
        />
        <button
          type='submit'
          disabled={isGenerating || !prompt.trim()}
          className={`flex items-center w-full justify-center sm:w-auto text-white rounded-full p-3 transition-colors duration-200 bg-black ${
            isGenerating || !prompt.trim()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-800'
          }`}>
          <Send size={20} className='mr-2 sm:mx-auto' />
          <span className='block sm:hidden'>Generate</span>
        </button>
      </form>
    </motion.div>
  );
}
