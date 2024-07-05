'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const pathname = usePathname();


  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Cosmic Chronicles', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="relative h-20">
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
            Kenneth Scott Smith
          </Link>
        </motion.div>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <motion.li key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.path} className={`text-lg font-medium ${
                  pathname === item.path
                    ? 'text-blue-300'
                    : 'text-white hover:text-blue-300'
                } transition-colors duration-300`}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
