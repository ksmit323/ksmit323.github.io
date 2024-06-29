export interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Navigating the Quantum Realm: My Journey Through Advanced Physics",
    date: "2023-06-15",
    readTime: "8 min",
    excerpt: "Exploring the fascinating world of quantum mechanics and its implications for future technology.",
    slug: "quantum-realm-journey"
  },
  {
    id: 2,
    title: "Hackathon Triumph: Building a Neural Network from Scratch",
    date: "2023-07-22",
    readTime: "12 min",
    excerpt: "A detailed account of how I developed a neural network using only fundamental programming concepts.",
    slug: "neural-network-hackathon"
  },
  {
    id: 3,
    title: "The Future of AI: Insights from the Global Tech Summit",
    date: "2023-08-30",
    readTime: "10 min",
    excerpt: "Key takeaways and predictions about artificial intelligence from world-renowned experts at the summit.",
    slug: "ai-future-insights"
  },
  // Add more blog posts as needed
];