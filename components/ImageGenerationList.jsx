import { motion } from 'framer-motion';

export default function ImageGenerationList() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className='w-full md:w-64 p-4 bg-white dark:bg-gray-800 rounded-3xl shadow-lg'>
      <h2 className='text-2xl font-bold mb-4'>Mirage</h2>
      <p className='text-sm text-gray-600 dark:text-gray-400'>
        Generate stunning images using AI. Enter a prompt in the input field to
        create your masterpiece.
      </p>
    </motion.div>
  );
}
