'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/blog/BlogPostCard';
import CosmicBackground from '@/components/CosmicBackground';


const CosmicChronicleNebula: React.FC = () => {
  return (
    <div className="min-h-screen bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      <CosmicBackground />
      <motion.h1
        className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Cosmic Chronicles 
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default CosmicChronicleNebula;