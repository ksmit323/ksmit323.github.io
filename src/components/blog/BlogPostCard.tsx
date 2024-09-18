import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/data/blogPosts';


interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
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
          className="absolute inset-0 bg-gradient-to-r opacity-0"
          whileHover={{ opacity: 0.1 }}
          />
        <h2 className="text-2xl font-bold mb-2 text-white-400 relative z-10">{post.title}</h2>
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

export default BlogPostCard;