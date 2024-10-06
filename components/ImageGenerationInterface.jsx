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
      className='flex flex-col flex-1 p-4 bg-white shadow-lg dark:bg-gray-800 rounded-3xl'>
      <div className='flex-1 mb-4 space-y-4 overflow-y-auto'>
        <AnimatePresence>
          {generatedImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='relative w-full aspect-square'>
              <Image
                src={generatedImage}
                alt='Generated image'
                className='object-fill rounded-2xl'
                width={400}
                height={400}
              />
              <a
                href={generatedImage}
                download='generated_image.png'
                className='absolute flex items-center px-3 py-1 text-sm text-blue-500 transition-colors duration-200 bg-white rounded-full bottom-2 right-2 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-gray-700'>
                <Download size={16} className='mr-1' /> Download
              </a>
            </motion.div>
          )}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center p-4 text-red-700 bg-red-100 dark:bg-red-900 dark:text-red-100 rounded-3xl'>
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
          className='flex-1 px-4 py-2 bg-gray-100 rounded-full dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <button
          type='submit'
          disabled={isGenerating || !prompt.trim()}
          className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors duration-200 ${
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
