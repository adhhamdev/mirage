'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function ImageGenerationList() {
  const [sessions, setSessions] = useState([{ id: 1, name: 'New Session' }]);

  const addSession = () => {
    const newSession = {
      id: Date.now(),
      name: `New Session ${sessions.length + 1}`,
    };
    setSessions([...sessions, newSession]);
  };

  const deleteSession = () => {
    setSessions(sessions.filter((session) => session.id !== id));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className='w-full p-4 bg-white shadow-lg md:w-64 dark:bg-gray-800 rounded-3xl'>
      <h2 className='mb-4 text-2xl font-bold'>Mirage</h2>
      <button
        onClick={addSession}
        className='flex items-center justify-center w-full px-4 py-2 mb-4 text-white transition-colors duration-200 bg-blue-500 rounded-full hover:bg-blue-600'>
        <Plus size={20} className='mr-2' /> New Session
      </button>
      <ul className='space-y-2'>
        <AnimatePresence>
          {sessions.map((session) => (
            <motion.li
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className='flex items-center justify-between px-4 py-2 bg-gray-100 rounded-full dark:bg-gray-700'>
              <span>{session.name}</span>
              <button
                onClick={() => deleteSession(session.id)}
                className='text-red-500 transition-colors duration-200 hover:text-red-600'>
                <Trash2 size={20} />
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </motion.div>
  );
}
