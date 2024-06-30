// File: src/app/blog/[slug]/page.tsx
import { blogPosts } from '@/data/blogPosts';
import BlogPostClient from './BlogPostClient';

// Define the structure of a blog post
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

async function getPost(slug: string): Promise<BlogPost | undefined> {
  // In a real application, you might fetch this data from an API
  return blogPosts.find((post) => post.slug === slug);
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    //! Might want to handle this case differently, perhaps by redirecting to a 404 page
    return <div>Post not found</div>;
  }

  return <BlogPostClient post={post} />;
}