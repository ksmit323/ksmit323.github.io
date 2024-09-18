'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { BlogPost } from '@/data/blogPosts';
import { MDXProvider } from '@mdx-js/react';
import { Star } from 'lucide-react';
import CosmicBackground from '@/components/CosmicBackground';
import { Heading, Divider, H1, H2, H3, H4, H5, H6, LI, OL } from './index';
import YouTubeEmbed from './YouTubeEmbed';
import LinkButton from './LinkButton';

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  li: LI,
  ol: OL,
  YouTubeEmbed,
  LinkButton
};

const BlogContent = ({ post }: { post: BlogPost }) => {
  if (!post) notFound();

  const BlogPostContent = dynamic(() => import(`@/data/${post.slug}.mdx`), {
    loading: () => <p>Loading...</p>,
  });

  return (
    <div className="min-h-screen bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
      <CosmicBackground />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-4 py-12"
      >
        <Heading>{post.title}</Heading>
        <motion.div
          className="text-blue-300 mb-6 flex items-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>Stardate: {post.date}</span>
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
        <Divider />
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
};

export default BlogContent;
