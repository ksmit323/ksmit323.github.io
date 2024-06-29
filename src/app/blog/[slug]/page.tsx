'use client';

import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';


export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;

    const post = blogPosts.find(post => post.slug === slug);

    if (!post) return <div>Post not found</div>;

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8 relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="text-gray-400 mb-4">
                    <span>{post.date}</span> • <span>{post.readTime}</span>
                </div>
                <p className="text-lg">{post.excerpt}</p>
                { /* add blog content here */ }
            </motion.div>
            <StarField />
        </div>
    );
}

const StarField = () => {
    return (
        <div className="fixed inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
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