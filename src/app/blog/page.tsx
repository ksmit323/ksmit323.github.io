'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts, BlogPost } from '@/data/blogPosts';

const StarField: React.FC = () => {
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

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg p-6 mb-6 transition-all duration-300 relative overflow-hidden"
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 0 15px rgba(100, 200, 255, 0.5)'
      }}
      layoutId={`post-${post.id}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0"
          whileHover={{ opacity: 0.1 }}
        />
        <h2 className="text-2xl font-bold mb-2 text-blue-400 relative z-10">{post.title}</h2>
        <div className="flex items-center text-gray-400 mb-2 relative z-10">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="mr-4">{post.date}</span>
          <Clock className="w-4 h-4 mr-2" />
          <span>{post.readTime}</span>
        </div>
        <p className="text-gray-300 mb-4 relative z-10">{post.excerpt}</p>
        <div className="flex items-center text-blue-400 relative z-10">
          <span className="mr-2">Read more</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </Link>
    </motion.div>
  );
};

const CosmicChronicleNebula: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      <StarField />
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