'use client';

import React, { useState, useEffect, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StarProps {
  x: number;
  y: number;
}

const Star: React.FC<StarProps> = ({ x, y }) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      x,
      y,
      width: Math.random() * 2 + 1,
      height: Math.random() * 2 + 1,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
    }}
    transition={{
      duration: Math.random() * 3 + 2,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
);

interface StarFieldProps {
  children: ReactNode;
}

interface Star {
  id: number;
  x: number;
  y: number;
}

const StarField: React.FC<StarFieldProps> = ({ children }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        newStars.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
      }
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {stars.map((star) => (
        <Star key={star.id} x={star.x} y={star.y} />
      ))}
      {children}
    </div>
  );
};

interface ConstellationProps {
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

const Constellation: React.FC<ConstellationProps> = ({ name, color, projects, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const starPositions = useMemo(() => {
    return projects.map(() => ({
      x: Math.random() * 180 - 90,
      y: Math.random() * 180 - 90,
    }));
  }, [projects]);

  return (
    <motion.div
      className="absolute w-64 h-64"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`, 
        transform: 'translate(-50%, -50%)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedProject(null);
      }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        style={{ backgroundColor: color, opacity: 0.2 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-white font-bold"
        style={{ fontSize: '1.2rem' }}
        animate={{ 
          textShadow: isHovered 
            ? ['0 0 5px #fff', '0 0 10px #fff', '0 0 15px #fff'] 
            : '0 0 0px #fff'
        }}
        transition={{ duration: 0.5 }}
      >
        {name}
      </motion.div>
      {projects.map((project, index) => (
        <motion.a
          key={project.name}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute w-3 h-3 bg-white rounded-full cursor-pointer"
          style={{ left: '50%', top: '50%' }}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: isHovered ? starPositions[index].x : 0,
            y: isHovered ? starPositions[index].y : 0,
            opacity: isHovered ? 1 : 0,
            scale: selectedProject === project.name ? 2 : 1,
          }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setSelectedProject(project.name)}
          onMouseLeave={() => setSelectedProject(null)}
        />
      ))}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key={selectedProject}
            className="absolute left-1/2 top-1/2 w-48 bg-gray-800 text-white text-xs rounded p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-bold mb-1">{selectedProject}</h3>
            <p className="text-xs mb-2">
              {projects.find(p => p.name === selectedProject)?.description}
            </p>
            <a 
              href={projects.find(p => p.name === selectedProject)?.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100"
            >
              View on GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CosmicProjectsPage = () => {
  const constellations = [
    {
      name: 'Solidity Nebula',
      color: 'rgba(60, 185, 200, 0.8)',
      projects: [
        { 
          name: 'NFT Marketplace', 
          github: 'https://github.com/yourusername/nft-marketplace',
          description: 'A decentralized marketplace for trading unique digital assets.'
        },
        { 
          name: 'DeFi Lending Protocol', 
          github: 'https://github.com/yourusername/defi-lending',
          description: 'A decentralized finance protocol enabling peer-to-peer lending.'
        },
      ],
      position: { x: 25, y: 30 },
    },
    {
      name: 'Rust Constellation',
      color: 'rgba(230, 103, 47, 0.8)',
      projects: [
        { 
          name: 'Blockchain Explorer', 
          github: 'https://github.com/yourusername/blockchain-explorer',
          description: 'A high-performance blockchain data visualization tool.'
        },
        { 
          name: 'Cryptography Library', 
          github: 'https://github.com/yourusername/crypto-lib',
          description: 'A robust library for implementing various cryptographic algorithms.'
        },
      ],
      position: { x: 75, y: 30 },
    },
    {
      name: 'Python Galaxy',
      color: 'rgba(55, 118, 171, 0.8)',
      projects: [
        { 
          name: 'ML Trading Bot', 
          github: 'https://github.com/yourusername/ml-trading-bot',
          description: 'An AI-powered bot for algorithmic trading in cryptocurrency markets.'
        },
        { 
          name: 'Data Visualization Tool', 
          github: 'https://github.com/yourusername/data-viz-tool',
          description: 'A powerful tool for creating interactive data visualizations.'
        },
      ],
      position: { x: 50, y: 70 },
    },
  ];

  return (
    <StarField>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.h1 
          className="text-white text-5xl font-bold mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          WORK IN PROGRESS. THIS PAGE SHOULD BE IGNORED.
        </motion.h1>
        <motion.h1 
          className="text-white text-5xl font-bold mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ... FOR NOW.
        </motion.h1>
      </div>
      {constellations.map((constellation) => (
        <Constellation key={constellation.name} {...constellation} />
      ))}
    </StarField>
  );
};

export default CosmicProjectsPage;
