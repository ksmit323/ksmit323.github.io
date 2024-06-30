'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Download, ChevronRight } from 'lucide-react';


interface StarProps {
  id: number;
  x: number;
  y: number;
  size: number;
}

const CosmicAboutPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const [stars, setStars] = useState<StarProps[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
    })));
  }, []);

  const sections = ['bio', 'skill', 'achievements'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white p-8 relative overflow-hidden">
      {/* Star Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType:'reverse',
          }}
        />
      ))}

      {/* Nebula Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="container mx-auto relative z-10">
        <motion.h1
          className="text-6xl font-bold mb-8 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1}}
        >
          About this Cosmic Explorer
        </motion.h1>

        <div className="flex flex-col md: flex-row gap-8">
          {/* Profile picture */}
          <motion.div
            className="md:w-1/3"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-64 h-64 mx-auto">
              <div className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50 overflow-hidden">
                <img
                  src="/profile.png"
                  alt="Kenneth Smith"
                  className="w-full h-full object-cover"
                  />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-transparent"
                animate={{
                  borderColor: ['rgba(59, 130, 246, 0.5)', 'rgba(167, 139, 250, 0.5)'],
                  rotate: 360,
                }}
                transition={{
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CosmicAboutPage