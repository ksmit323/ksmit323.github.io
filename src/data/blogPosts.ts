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
    id: 6,
    title: "Zero Knowledge Bootcamp: My Six-Week Dive into the World of ZK Proofs",
    date: "2024-06-28",
    readTime: "5 min",
    excerpt: "Exploring the fascinating world of ZK proofs, ZK-SNARKs and the future of Cryptography",
    slug: "zkbootcamp"
  },
  {
    id: 5,
    title: "Vietnam Rust Web3 Hackathon: Becoming a finalist and a speaker at a Blockchain conference",
    date: "2024-06-07",
    readTime: "5 min",
    excerpt: "My experience building a market maker bot for a Rust Web3 hackathon in Vietnam",
    slug: "vietnam-rust-hackathon"
  },
  {
    id: 4,
    title: "Scaling Web3 Hackathon: Winning my Second Hackathon with Orderly Network",
    date: "2024-04-23",
    readTime: "5 min",
    excerpt: "Key takeaways from my experience winning the Orderly bounty for the Scaling Web3 Hackathon",
    slug: "scaling-web3-hackathon"
  },
  {
    id: 3,
    title: "Viction Blockchain Hackathon: GameFi and Winning my First Hackathon",
    date: "2024-01-15",
    readTime: "5 min",
    excerpt: "Diving head first into GameFi and winning a hackathon in the process",
    slug: "viction-hackathon"
  },
  {
    id: 2,
    title: "Journey into the Blockchain Cosmos: Expert Solidity Bootcamp",
    date: "2023-11-30",
    readTime: "8 min",
    excerpt: "A detailed account of my exploration into the depths of Solidity",
    slug: "expert-solidity-bootcamp"
  },
  {
    id: 1,
    title: "Journey into the Blockchain Cosmos: The Solidity Intensive Coding Bootcamp",
    date: "2023-08-30",
    readTime: "10 min",
    excerpt: "Beginning my journey into the world of Smart Contract development",
    slug: "solidity-blockchain-bootcamp"
  },
];