'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header 
      className="bg-black bg-opacity-70 text-white p-4 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-6">
            {['Projects', 'Blog', 'About'].map((item) => (
              <motion.li key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${item.toLowerCase()}`} className="text-lg hover:text-blue-400 transition-colors duration-200">
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold hover:text-purple-400 transition-colors duration-200">
            Cosmic Portfolio
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;