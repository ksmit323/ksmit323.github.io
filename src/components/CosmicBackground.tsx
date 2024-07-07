import StarField from './StarField';
import { motion } from 'framer-motion';


const Nebula = () => {
  return (
    <motion.div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(circle, rgba(63,94,251,0.2) 0%, rgba(252,70,107,0.1) 100%)',
      }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    />
  );
};

const CosmicBackground = () => {
  return (
    <>
      <StarField />
      <Nebula />
    </>
  );
};

export default CosmicBackground;