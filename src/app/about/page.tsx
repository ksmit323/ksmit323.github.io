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
      size: Math.random() * 2 + _1,
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
    </div>
  )
}

export default CosmicAboutPage