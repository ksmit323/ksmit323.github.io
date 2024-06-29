'use client';

import { motion } from 'framer-motion';
import { BlogPost } from './page';

const BlogPostClient = ({ post }: { post: BlogPost }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-300">{post.title}</h1>
        <div className="text-gray-400 mb-4">
          <span>{post.date}</span> • <span>{post.readTime}</span>
        </div>
        <p className="text-lg text-blue-100">{post.excerpt}</p>
        {/* add blog content here */}
      </motion.div>
      <CosmicBackground />
    </div>
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

const StarField = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(200)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </div>
  );
};

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

export default BlogPostClient;