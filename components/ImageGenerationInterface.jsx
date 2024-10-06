'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Download, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageGenerationInterface() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(null);
  const [error, setError] = useState(null);

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
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
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
      className='flex flex-col flex-1 p-6 bg-white shadow-lg dark:bg-gray-800 rounded-3xl'>
      <div className='flex-1 mb-6 space-y-6 overflow-y-auto'>
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative w-full max-w-[512px] mx-auto aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 shimmer-effect'></div>
            </motion.div>
          )}
          {generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative w-full max-w-[512px] mx-auto aspect-square'>
              <Image
                src={generatedImage}
                alt='Mirage AI Image'
                className='object-cover rounded-2xl'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <a
                href={generatedImage}
                download='mirage_ai_image.png'
                className='absolute flex items-center px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-200 bg-white rounded-full shadow-lg bottom-4 right-4 dark:bg-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <Download size={16} className='mr-2' /> Download
              </a>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center p-4 text-red-800 bg-red-100 dark:text-red-100 dark:bg-red-900 rounded-2xl'>
              <AlertCircle size={20} className='flex-shrink-0 mr-2' />
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <form onSubmit={handleSubmit} className='flex items-center space-x-2'>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Describe the image you want to generate...'
          className='flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
        />
        <button
          type='submit'
          disabled={isGenerating || !prompt.trim()}
          className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 transition-colors duration-200 ${
            isGenerating || !prompt.trim()
              ? 'opacity-50 cursor-not-allowed'
              : ''
          }`}>
          <Send size={20} />
        </button>
      </form>
    </motion.div>
  );
}
