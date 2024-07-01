'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StarField from '@/components/StarField';


const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <StarField />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
        <motion.h1
          className="text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to My Cosmic Portfolio
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Exploring the Crypto Cosmos and the Blockchain Universe
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            View Projects
          </a>
          <a href="/blog" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Read Blog
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;

