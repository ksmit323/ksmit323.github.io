// Client Component
'use client';

import { motion } from "framer-motion";
import { notFound } from 'next/navigation';
import dynamic from "next/dynamic";
import { BlogPost } from "@/data/blogPosts";
import CosmicBackground from "@/components/CosmicBackground";


export default async function BlogPostContent({ post }: { post: BlogPost }) {
  if (!post) notFound();

  const BlogPostContent = dynamic(() => import(`../../../content/${post.slug}.mdx`), {
    loading: () => <p>Loading...</p>,
  });

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
        <BlogPostContent />
      </motion.div>
      <CosmicBackground />
    </div>
  );
}