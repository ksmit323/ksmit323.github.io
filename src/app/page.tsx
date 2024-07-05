'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const LandingPage = () => {
  const [isExploring, setIsExploring] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const speedRef = useRef(0.1);
  const targetSpeedRef = useRef(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: { x: number; y: number; z: number; o: number; }[] = [];
    const numStars = 2000; // Increase for a denser star field
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
    targetSpeedRef.current = 18; // Increase for more intensity
  };

  const navigationButtons = [
    { name: 'Projects', description: 'Venture into the unknown', href: 'projects' },
    { name: 'Cosmic Chronicles', description: 'Chronicles of cosmic discoveries', href: 'blog' },
    { name: 'About', description: 'The voyager behind the journey', href: 'about' },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />
      
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >      
        {!isExploring ? (
          <motion.button
            className="mb-24 px-8 py-4 bg-transparent border-2 border-white rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300"
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
              <motion.div
                key={button.name}
                className="mb-24 group relative w-60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href={ button.href }
                  className="block p-4 bg-transparent border border-white rounded-lg text-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <span className="text-xl font-bold">{button.name}</span>
                </motion.a>
                <span className="absolute top-full left-0 w-full text-center mt-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {button.description}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default LandingPage;
