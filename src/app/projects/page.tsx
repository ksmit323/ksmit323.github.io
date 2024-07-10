'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StarField from '@/components/StarField';

interface ProjectStarsProps {
  name: string;
  color: string;
  projects: {
    name: string;
    github: string;
    description: string;
  }[];
  position: {
    x: number;
    y: number;
  };
}

interface NebulaProps {
  color: string;
  size: number;
  x: number;
  y: number;
}

const Nebula: React.FC<NebulaProps> = ({ color, size, x, y }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute rounded-full ${isHovered ? 'blur-3xl' : 'blur-2xl'}`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: x,
        top: y,
      }}
      animate={{
        scale: isHovered ? [1, 1.1, 1] : [.6, .5, .6],
        opacity: [0.3, 0.4, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'circInOut',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};


const CosmicProjectsPage = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nebulae = [
    {
      color: 'rgba(60, 185, 200, 0.9)',
      size: 300,
      position: { x: 0.1, y: 0.15 },
    },
    {
      color: 'rgba(230, 103, 47, 0.9)',
      size: 330,
      position: { x: 0.75, y: .1 },
    },
    {
      color: 'rgba(55, 118, 171, 0.9)',
      size: 320,
      position: { x: 0.5, y: 0.55 },
    },
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b to-black opacity-30" />
      <StarField />
      
      <motion.h1 
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold text-center z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
      </motion.h1>

      {nebulae.map((nebula, index) => (
        <Nebula
          key={index}
          color={nebula.color}
          size={nebula.size}
          x={windowSize.width * nebula.position.x}
          y={windowSize.height * nebula.position.y}
        />
      ))}
    </div>
  );
};

export default CosmicProjectsPage;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------