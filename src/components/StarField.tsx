import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';


const NUMBER_OF_STARS = 400;

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}

const StarField: React.FC = () => {
  const generateStar = useCallback((id: number): Star => {
    return {
      id,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    };
  }, []);

  const stars = useMemo(() => {
    return [...Array(NUMBER_OF_STARS)].map((_, i) => generateStar(i));
  }, [generateStar]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

export default StarField;