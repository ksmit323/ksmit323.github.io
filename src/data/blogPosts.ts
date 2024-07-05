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
    readTime: "9 min",
    excerpt: "My journey through a ZK Bootcamp as told through an adventure story",
    slug: "zkbootcamp"
  },
  {
    id: 5,
    title: "Vietnam Rust Web3 Hackathon: Becoming a finalist and a speaker at a Blockchain conference",
    date: "2024-06-07",
    readTime: "8 min",
    excerpt: "My experience in the Vietnam Rust Hackathon as told through an adventure story",
    slug: "vietnam-rust-hackathon"
  },
  {
    id: 4,
    title: "Winning my Second Hackathon: Scaling Web3 Hackathon and the Orderly Network",
    date: "2024-04-23",
    readTime: "6 min",
    excerpt: "Key takeaways from my experience winning the Orderly bounty for the Scaling Web3 Hackathon",
    slug: "scaling-web3-hackathon"
  },
  {
    id: 3,
    title: "Winning my First Hackathon: GameFi and the Viction Blockchain Hackathon",
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