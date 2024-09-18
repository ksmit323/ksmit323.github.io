import { blogPosts } from '@/data/blogPosts';
import BlogContent from '@/components/blog/BlogContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) notFound();

  return <BlogContent post={post} />;
}