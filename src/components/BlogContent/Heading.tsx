import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

const Heading: React.FC<{ children: ReactNode }> = ({ children }) => (
  <motion.h1
    className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {children}
  </motion.h1>
);

export default Heading;
