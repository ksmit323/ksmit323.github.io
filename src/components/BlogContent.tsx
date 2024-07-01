'use client';

import React from 'react';
import { motion } from "framer-motion";
import { notFound } from 'next/navigation';
import dynamic from "next/dynamic";
import { BlogPost } from "@/data/blogPosts";
import { MDXProvider } from '@mdx-js/react';
import { Star, Rocket, Orbit, Earth, Telescope } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';



const CosmicHeading = ({ children }) => (
  <motion.h1
    className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    {children}
  </motion.h1>
);

const PlanetDivider = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-1 w-1/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    <Orbit className="mx-4 text-yellow-300" size={24} />
    <div className="h-1 w-1/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
  </div>
);

const H1 = ({ children }) => (
  <h1 className="text-4xl font-bold mb-6 text-blue-300 flex items-center">
    <Earth className="mr-2 text-yellow-300" />
    {children}
  </h1>
);

const H2 = ({ children }) => (
  <h2 className="text-3xl font-semibold mb-4 text-blue-200 flex items-center">
    <Telescope className="mr-2 text-blue-400" />
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-2xl font-medium mb-3 text-blue-100 flex items-center">
    <Earth className="mr-2 text-purple-400" />
    {children}
  </h3>
);

const UL = ({ children }) => (
  <ul className="list-none space-y-2 my-4 text-gray-200">
    {React.Children.map(children, (child) => (
      <li className="flex items-start">
        <Rocket className="mr-2 mt-1 text-blue-400" size={16} />
        {child}
      </li>
    ))}
  </ul>
);

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  ul: UL,
  Star,
  Rocket,
  Orbit,
  Earth,
  Telescope
};

export default function BlogContent({ post }: { post: BlogPost }) {
  if (!post) notFound();

  const BlogPostContent = dynamic(() => import(`@/content/${post.slug}.mdx`), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
      <CosmicBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-4 py-12"
      >
        <CosmicHeading>{post.title}</CosmicHeading>
        <motion.div
          className="text-blue-300 mb-6 flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>{post.date}</span>
          <Star size={16} className="text-yellow-300" />
          <span>{post.readTime}</span>
        </motion.div>
        <motion.p
          className="text-xl text-blue-100 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {post.excerpt}
        </motion.p>
        <PlanetDivider />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <MDXProvider components={components}>
            <div className="prose prose-invert max-w-none">
              <BlogPostContent />
            </div>
          </MDXProvider>
        </motion.div>
      </motion.div>
    </div>
  );
}