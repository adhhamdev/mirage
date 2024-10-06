'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, Download, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ImageGenerationInterface() {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
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
      className='flex flex-col flex-1 p-4 bg-gray-100 rounded-3xl shadow-lg sm:p-6'>
      <div className='overflow-y-auto flex-1 mb-6 space-y-6'>
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='overflow-hidden relative mx-auto w-full bg-gray-200 rounded-2xl aspect-square max-w-[300px] sm:max-w-[400px]'>
              <div className='absolute inset-0 shimmer-effect'></div>
            </motion.div>
          )}
          {generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative mx-auto w-full aspect-square max-w-[300px] sm:max-w-[400px]'>
              <Image
                src={generatedImage}
                alt='Mirage AI Image'
                className='object-cover rounded-2xl'
                fill
                sizes='(max-width: 640px) 300px, 400px'
              />
              <a
                href={generatedImage}
                download='mirage_ai_image.png'
                className='flex absolute right-2 bottom-2 items-center px-3 py-1 text-xs font-medium text-white bg-black bg-opacity-50 rounded-full shadow-lg transition-colors duration-200 sm:right-4 sm:bottom-4 sm:px-4 sm:py-2 sm:text-sm hover:bg-opacity-70'>
                <Download size={14} className='mr-1 sm:mr-2' /> Download
              </a>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center p-4 text-red-800 bg-red-100 rounded-2xl dark:text-red-100 dark:bg-red-900'>
              <AlertCircle size={20} className='flex-shrink-0 mr-2' />
              <p>{error}</p>
            </motion.div>
          )}
        </AnimatePresence>
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
          className={`w-full sm:w-auto text-white rounded-full p-3 transition-colors duration-200 bg-black ${
            isGenerating || !prompt.trim()
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-800 dark:hover:bg-gray-200'
          }`}>
          <Send size={20} className='mx-auto' />
        </button>
      </form>
    </motion.div>
  );
}
