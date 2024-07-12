'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import StarField from '@/components/StarField';


// interface NebulaProps {
//   color: string;
//   size: number;
//   x: number;
//   y: number;
// }

// const Nebula: React.FC<NebulaProps> = ({ color, size, x, y }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       className={`absolute rounded-full ${isHovered ? 'blur-3xl' : 'blur-2xl'}`}
//       style={{
//         backgroundColor: color,
//         width: size,
//         height: size,
//         left: x,
//         top: y,
//       }}
//       animate={{
//         scale: isHovered ? [1, 1.1, 1] : [.6, .5, .6],
//         opacity: [0.3, 0.4, 0.3],
//       }}
//       transition={{
//         duration: 8,
//         repeat: Infinity,
//         repeatType: 'reverse',
//         ease: 'circInOut',
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     />
//   );
// };


// const CosmicProjectsPage = () => {
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const nebulae = [
//     {
//       color: 'rgba(60, 185, 200, 0.9)',
//       size: 300,
//       position: { x: 0.1, y: 0.15 },
//     },
//     {
//       color: 'rgba(230, 103, 47, 0.9)',
//       size: 330,
//       position: { x: 0.75, y: .1 },
//     },
//     {
//       color: 'rgba(55, 118, 171, 0.9)',
//       size: 320,
//       position: { x: 0.5, y: 0.55 },
//     },
//   ];

//   return (
//     <div className="relative w-full h-screen bg-black overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-b to-black opacity-30" />
//       <StarField />
      
//       <motion.h1 
//         className="absolute top-10 left-1/2 transform -translate-x-1/2 text-white text-5xl font-bold text-center z-10"
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//       </motion.h1>

//       {nebulae.map((nebula, index) => (
//         <Nebula
//           key={index}
//           color={nebula.color}
//           size={nebula.size}
//           x={windowSize.width * nebula.position.x}
//           y={windowSize.height * nebula.position.y}
//         />
//       ))}
//     </div>
//   );
// };

// export default CosmicProjectsPage;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

{/* <motion.span
className="ml-1 flex-shrink-0"
initial={{ rotate: 0 }}
animate={{ rotate: 360 }}
transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
>
✦
</motion.span>

 */}

// interface ProjectStarsProps {
//   name: string;
//   color: string;
//   projects: {
//     name: string;
//     github: string;
//     description: string;
//   }[];
//   position: {
//     x: number;
//     y: number;
//   };
// }

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
  projects: ProjectStarsProps['projects'];
}

const Star: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const randomDelay = Math.random() * 5;
  const randomDuration = 3 + Math.random() * 2;

  return (
    <motion.span
      className="absolute text-white text-opacity-80"
      style={{ left: `${x}px`, top: `${y}px`, fontSize: '10px' }}
      initial={{ scale: 0.5, opacity: 0.5 }}
      animate={{
        scale: [0.5, 1, 0.5],
        opacity: [0.5, 1, 0.5],
        rotate: 360,
      }}
      transition={{
        duration: randomDuration,
        repeat: Infinity,
        delay: randomDelay,
        ease: "easeInOut",
      }}
    >
      ✦
    </motion.span>
  );
};

const Nebula: React.FC<NebulaProps> = ({ color, size, x, y, projects }) => {
  const [isHovered, setIsHovered] = useState(false);

  const stars = useMemo(() => {
    return projects.map((project, index) => ({
      x: Math.random() * size,
      y: Math.random() * size,
    }));
  }, [projects, size]);

  return (
    <motion.div
      className={`absolute rounded-full ${isHovered ? 'blur-3xl' : 'blur-2xl'} overflow-visible`}
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        left: x,
        top: y,
        position: 'absolute',
      }}
      animate={{
        // scale: isHovered ? [1, 1.1, 1] : [0.6, 0.5, 0.6],
        scale: [1, 1.1, 1],
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
    >
      {stars.map((star, index) => (
        <Star key={index} x={star.x} y={star.y} />
      ))}
    </motion.div>
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

  const nebulae: ProjectStarsProps[] = [
    {
      name: "JavaScript",
      color: 'rgba(60, 185, 200, 0.9)',
      projects: [
        { name: "Project 1", github: "https://github.com/user/project1", description: "A cool JS project" },
        { name: "Project 2", github: "https://github.com/user/project2", description: "Another awesome JS project" },
      ],
      position: { x: 0.1, y: 0.15 },
    },
    {
      name: "Python",
      color: 'rgba(230, 103, 47, 0.9)',
      projects: [
        { name: "Project 3", github: "https://github.com/user/project3", description: "A neat Python project" },
        { name: "Project 4", github: "https://github.com/user/project4", description: "An amazing Python project" },
      ],
      position: { x: 0.75, y: 0.1 },
    },
    {
      name: "TypeScript",
      color: 'rgba(55, 118, 171, 0.9)',
      projects: [
        { name: "Project 5", github: "https://github.com/user/project5", description: "A fantastic TS project" },
        { name: "Project 6", github: "https://github.com/user/project6", description: "An incredible TS project" },
      ],
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
        CODING NEBULAE - WORK IN PROGRESS !!!!
      </motion.h1>

      {nebulae.map((nebula, index) => (
        <Nebula
          key={index}
          color={nebula.color}
          size={300 + Math.random() * 50}
          x={windowSize.width * nebula.position.x}
          y={windowSize.height * nebula.position.y}
          projects={nebula.projects}
        />
      ))}
    </div>
  );
};

export default CosmicProjectsPage;