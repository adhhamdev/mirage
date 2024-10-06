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
      className='flex flex-col flex-1 p-4 border border-gray-200 dark:border-gray-700 rounded-3xl'>
      <div className='flex-1 mb-4 space-y-4 overflow-y-auto'>
        <AnimatePresence>
          {isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden'>
              <div className='absolute inset-0 shimmer-effect'></div>
            </motion.div>
          )}
          {generatedImage && !isGenerating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative w-full aspect-square'>
              <Image
                src={generatedImage}
                alt='Generated image'
                className='object-cover rounded-2xl'
                layout='fill'
              />
              <a
                href={generatedImage}
                download='generated_image.png'
                className='absolute flex items-center px-3 py-1 text-sm text-black transition-colors duration-200 bg-white border border-black rounded-full bottom-2 right-2 dark:text-white dark:bg-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-900'>
                <Download size={16} className='mr-1' /> Download
              </a>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center p-4 text-black bg-white border border-black dark:text-white dark:bg-black dark:border-white rounded-3xl'>
              <AlertCircle size={20} className='mr-2' />
              {error}
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
          className='flex-1 px-4 py-2 bg-white border border-gray-300 rounded-full dark:bg-black dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white'
        />
        <button
          type='submit'
          disabled={isGenerating || !prompt.trim()}
          className={`bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black rounded-full p-2 transition-colors duration-200 ${
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
