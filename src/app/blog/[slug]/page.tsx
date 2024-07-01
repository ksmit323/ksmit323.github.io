// Server Component
import { blogPosts } from '@/data/blogPosts';
import BlogPostContent from './BlogPostContent';
import { notFound } from 'next/navigation';



export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return <BlogPostContent post={post} />;
}