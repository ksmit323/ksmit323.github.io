'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blogPosts';
import BlogPostCard from '@/components/BlogPostCard';
import StarField from '@/components/StarField';
import CosmicBackground from '@/components/CosmicBackground';


const CosmicChronicleNebula: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      <CosmicBackground />
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
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