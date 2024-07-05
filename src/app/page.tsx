'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import StarField from '@/components/StarField';


// const LandingPage: React.FC = () => {
//   return (
//     <div className="relative min-h-screen bg-black overflow-hidden">
//       <StarField />
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white">
//         <motion.h1
//           className="text-6xl font-bold mb-4"
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           Welcome to My Cosmic Portfolio
//         </motion.h1>
//         <motion.p
//           className="text-xl mb-8"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           Exploring the Crypto Cosmos and the Blockchain Universe
//         </motion.p>
//         <motion.div
//           className="space-x-4"
//           initial={{ scale: 0.5, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.5 }}
//         >
//           <a href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
//             View Projects
//           </a>
//           <a href="/blog" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
//             Read Blog
//           </a>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const CosmicLandingPage = () => {
//   const [isExploring, setIsExploring] = useState(false);
//   const canvasRef = useRef(null);
//   const controls = useAnimation();
//   const speedRef = useRef(0.1);
//   const targetSpeedRef = useRef(2);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     let animationFrameId;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const stars = [];
//     const numStars = 1500;
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;

//     for (let i = 0; i < numStars; i++) {
//       stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         z: Math.random() * canvas.width,
//         o: Math.random(),
//       });
//     }

//     const animate = () => {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Smoothly accelerate
//       speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.01;

//       stars.forEach((star) => {
//         star.z -= speedRef.current;

//         if (star.z <= 0) {
//           star.z = canvas.width;
//         }

//         const x = (star.x - centerX) * (canvas.width / star.z);
//         const y = (star.y - centerY) * (canvas.width / star.z);

//         const size = (1 - star.z / canvas.width) * 4;
//         const opacity = (1 - star.z / canvas.width) * star.o;

//         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
//         ctx.fillRect(x + centerX, y + centerY, size, size);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   const pageLinks = [
//     { name: 'Projects', href: '/projects' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'About', href: '/about' },
//   ];

//   const handleExplore = () => {
//     setIsExploring(true);
//     controls.start({ opacity: 0, transition: { duration: 2 } });
//     targetSpeedRef.current = 2; // Start acceleration
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-black text-white">
//       <canvas ref={canvasRef} className="absolute inset-0" />
      
//       <motion.div 
//         className="absolute inset-0 flex flex-col items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 2 }}
//       >
//         <motion.h1 
//           className="text-6xl font-bold mb-8 text-center"
//           animate={{ scale: [1, 1.05, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         >
//           Accelerate into the Cosmic Unknown
//         </motion.h1>
//         <p className="text-xl mb-12 max-w-2xl text-center">
//           From gentle drift to lightspeed, experience the thrill of cosmic exploration.
//         </p>
        
//         {!isExploring && (
//           <motion.button
//             className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleExplore}
//           >
//             Initiate Launch Sequence
//           </motion.button>
//         )}
//       </motion.div>

//       <motion.div 
//         className="absolute inset-0 flex items-center justify-center"
//         initial={{ opacity: 0 }}
//         animate={controls}
//       >
//         <div className="flex flex-col space-y-8">
//           {pageLinks.map((link) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               className="text-2xl font-semibold hover:text-blue-400 transition-colors duration-300"
//               whileHover={{ scale: 1.1, x: 20 }}
//             >
//               {link.name}
//             </motion.a>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default CosmicLandingPage;

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header'; // Import the header

const CosmicLandingPage = () => {
  const [isExploring, setIsExploring] = useState(false);
  const canvasRef = useRef(null);
  const speedRef = useRef(0.1);
  const targetSpeedRef = useRef(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 2000; // Increased for a denser star field
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * canvas.width,
        o: Math.random(),
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.01;

      stars.forEach((star) => {
        star.z -= speedRef.current;

        if (star.z <= 0) {
          star.z = canvas.width;
        }

        const x = (star.x - centerX) * (canvas.width / star.z);
        const y = (star.y - centerY) * (canvas.width / star.z);

        const size = (1 - star.z / canvas.width) * 4;
        const opacity = (1 - star.z / canvas.width) * star.o;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(x + centerX, y + centerY, size, size);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleExplore = () => {
    setIsExploring(true);
    targetSpeedRef.current = 4; // Increased for more intensity
  };

  const navigationButtons = [
    { name: 'Projects', description: 'Venture into the unknown' },
    { name: 'Blog', description: 'Chronicles of cosmic discoveries' },
    { name: 'About', description: 'The voyager behind the journey' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" /> {/* Ensure the canvas covers the entire screen */}
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.h1 
          className="text-6xl font-bold mb-8 text-center"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          Brave the Cosmic Abyss
        </motion.h1>
        <p className="text-xl mb-12 max-w-2xl text-center">
          Embark on a perilous journey through the vast, unforgiving universe.
        </p>
        
        {!isExploring ? (
          <motion.button
            className="px-8 py-4 bg-transparent border-2 border-white rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
          >
            Launch into the Void
          </motion.button>
        ) : (
          <motion.div 
            className="flex space-x-6 items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {navigationButtons.map((button) => (
              <motion.a
                key={button.name}
                href={`/${button.name.toLowerCase()}`}
                className="group relative w-48 p-4 bg-transparent border border-white rounded-lg text-center hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-xl font-bold">{button.name}</span>
                <span className="absolute top-full left-0 w-full mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {button.description}
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CosmicLandingPage;
