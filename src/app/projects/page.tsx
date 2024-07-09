'use client';

// import React, { useState, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import StarField from '@/components/StarField';


interface NebulaProps {
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

// const Nebula: React.FC<NebulaProps> = ({ name, color, projects, position }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [selectedProject, setSelectedProject] = useState<string | null>(null);

//   const starPositions = useMemo(() => {
//     return projects.map(() => ({
//       x: Math.random() * 180 - 90,
//       y: Math.random() * 180 - 90,
//     }));
//   }, [projects]);

//   return (
//     <motion.div
//       className="absolute w-64 h-64"
//       style={{ 
//         left: `${position.x}%`, 
//         top: `${position.y}%`, 
//         transform: 'translate(-50%, -50%)'
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => {
//         setIsHovered(false);
//         setSelectedProject(null);
//       }}
//     >
//       <motion.div
//         className="w-full h-full rounded-full"
//         style={{ backgroundColor: color, opacity: 0.2 }}
//         animate={{ scale: isHovered ? 1.1 : 1 }}
//         transition={{ duration: 0.3 }}
//       />
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center text-white font-bold"
//         style={{ fontSize: '1.2rem' }}
//         animate={{ 
//           textShadow: isHovered 
//             ? ['0 0 5px #fff', '0 0 10px #fff', '0 0 15px #fff'] 
//             : '0 0 0px #fff'
//         }}
//         transition={{ duration: 0.5 }}
//       >
//         {name}
//       </motion.div>
//       {projects.map((project, index) => (
        
//         <motion.a
//           key={project.name}
//           href={project.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute w-3 h-3 bg-white rounded-full cursor-pointer"
//           style={{ left: '50%', top: '50%' }}
//           initial={{ x: 0, y: 0, opacity: 0 }}
//           animate={{
//             x: isHovered ? starPositions[index].x : 0,
//             y: isHovered ? starPositions[index].y : 0,
//             opacity: isHovered ? 1 : 0,
//             scale: selectedProject === project.name ? 2 : 1,
//           }}
//           transition={{ duration: 0.5 }}
//           onMouseEnter={() => setSelectedProject(project.name)}
//           onMouseLeave={() => setSelectedProject(null)}
//         />
//       ))}
//       <AnimatePresence>
//         {selectedProject && (
//           <motion.div
//             key={selectedProject}
//             className="absolute left-1/2 top-1/2 w-48 bg-gray-800 text-white text-xs rounded p-2"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <h3 className="font-bold mb-1">{selectedProject}</h3>
//             <p className="text-xs mb-2">
//               {projects.find(p => p.name === selectedProject)?.description}
//             </p>
//             <a 
//               href={projects.find(p => p.name === selectedProject)?.github} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-blue-300 hover:text-blue-100"
//             >
//               View on GitHub
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// const CosmicProjectsPage = () => {
//   const nebulai = [
//     {
//       name: 'Solidity Nebula',
//       color: 'rgba(60, 185, 200, 0.8)',
//       projects: [
//         { 
//           name: 'NFT Marketplace', 
//           github: 'https://github.com/yourusername/nft-marketplace',
//           description: 'A decentralized marketplace for trading unique digital assets.'
//         },
//         { 
//           name: 'DeFi Lending Protocol', 
//           github: 'https://github.com/yourusername/defi-lending',
//           description: 'A decentralized finance protocol enabling peer-to-peer lending.'
//         },
//       ],
//       position: { x: 25, y: 30 },
//     },
//     {
//       name: 'Rust Constellation',
//       color: 'rgba(230, 103, 47, 0.8)',
//       projects: [
//         { 
//           name: 'Blockchain Explorer', 
//           github: 'https://github.com/yourusername/blockchain-explorer',
//           description: 'A high-performance blockchain data visualization tool.'
//         },
//         { 
//           name: 'Cryptography Library', 
//           github: 'https://github.com/yourusername/crypto-lib',
//           description: 'A robust library for implementing various cryptographic algorithms.'
//         },
//       ],
//       position: { x: 75, y: 30 },
//     },
//     {
//       name: 'Python Galaxy',
//       color: 'rgba(55, 118, 171, 0.8)',
//       projects: [
//         { 
//           name: 'ML Trading Bot', 
//           github: 'https://github.com/yourusername/ml-trading-bot',
//           description: 'An AI-powered bot for algorithmic trading in cryptocurrency markets.'
//         },
//         { 
//           name: 'Data Visualization Tool', 
//           github: 'https://github.com/yourusername/data-viz-tool',
//           description: 'A powerful tool for creating interactive data visualizations.'
//         },
//       ],
//       position: { x: 50, y: 70 },
//     },
//   ];

//   return (
//       <div className="relative w-full h-screen bg-black overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-40" />
//       {/* <div className="absolute inset-0 flex flex-col items-center justify-center"> */}
//         <StarField />
//         <motion.h1 
//           className="text-white text-5xl font-bold mb-8"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//         </motion.h1>
//         <motion.h1 
//           className="text-white text-5xl font-bold mb-8"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//         </motion.h1>
//       {nebulai.map((nebula) => (
//         <Nebula key={nebula.name} {...nebula} />
//       ))}
//       </div>
//   );
// };

// export default CosmicProjectsPage;




// // -------------------------------------------------------------------------------------------------

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import StarField from '@/components/StarField';

// New component for pulsating stars
const PulsatingStar = ({ x, y, size, color }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1, 1.5, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, []);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        backgroundColor: color,
      }}
      animate={controls}
    />
  );
};

// Enhanced Nebula component
const Nebula: React.FC<NebulaProps> = ({ name, color, projects, position }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const controls = useAnimation();

  const starPositions = useMemo(() => {
    return projects.map(() => ({
      x: Math.random() * 180 - 90,
      y: Math.random() * 180 - 90,
    }));
  }, [projects]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, []);

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
      animate={controls}
    >
      <motion.div
        className="w-full h-full rounded-full relative overflow-hidden"
        style={{ backgroundColor: color, opacity: 0.2 }}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Add swirling effect */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            mixBlendMode: 'screen',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>
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
      {/* Add pulsating stars inside the nebula */}
      {[...Array(5)].map((_, i) => (
        <PulsatingStar
          key={i}
          x={Math.random() * 100}
          y={Math.random() * 100}
          size={Math.random() * 4 + 2}
          color={color}
        />
      ))}
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
            className="absolute left-1/2 top-1/2 w-48 bg-gray-800 bg-opacity-80 text-white text-xs rounded p-2 backdrop-filter backdrop-blur-sm"
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
              Explore Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CosmicProjectsPage = () => {
  const nebulae = [
    {
      name: 'Solidity Singularity',
      color: 'rgba(60, 185, 200, 0.8)',
      projects: [
        { 
          name: 'Quantum Contract Forge', 
          github: 'https://github.com/yourusername/quantum-contract-forge',
          description: 'Harness the power of quantum algorithms in smart contracts.'
        },
        { 
          name: 'Nebula DeFi Protocol', 
          github: 'https://github.com/yourusername/nebula-defi',
          description: 'Decentralized finance at the edge of the known universe.'
        },
      ],
      position: { x: 25, y: 30 },
    },
    {
      name: 'Rust Event Horizon',
      color: 'rgba(230, 103, 47, 0.8)',
      projects: [
        { 
          name: 'Wormhole Explorer', 
          github: 'https://github.com/yourusername/wormhole-explorer',
          description: 'Navigate through the fabric of spacetime with unparalleled speed.'
        },
        { 
          name: 'Quantum Crypto Vault', 
          github: 'https://github.com/yourusername/quantum-crypto-vault',
          description: 'Unbreakable encryption using the mysteries of quantum entanglement.'
        },
      ],
      position: { x: 75, y: 30 },
    },
    {
      name: 'Python Nebula Cluster',
      color: 'rgba(55, 118, 171, 0.8)',
      projects: [
        { 
          name: 'Cosmic AI Oracle', 
          github: 'https://github.com/yourusername/cosmic-ai-oracle',
          description: 'Predict the future of the universe with machine learning.'
        },
        { 
          name: 'Galactic Data Cartographer', 
          github: 'https://github.com/yourusername/galactic-data-cartographer',
          description: 'Map the unknown reaches of data across the galaxy.'
        },
      ],
      position: { x: 50, y: 70 },
    },
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-40" />
      <StarField />
      <motion.h1 
        className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold mb-8 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Cosmic Project Nebulae
      </motion.h1>
      {nebulae.map((nebula) => (
        <Nebula key={nebula.name} {...nebula} />
      ))}
    </div>
  );
};

export default CosmicProjectsPage;