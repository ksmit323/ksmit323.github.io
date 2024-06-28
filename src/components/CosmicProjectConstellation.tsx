'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Define types
interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  live: string;
  x?: number;
  y?: number;
}

interface StarProps {
  x: number;
  y: number;
  size: number;
  pulse: boolean;
}

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

// Mock data for projects
const projects: Project[] = [
  { id: 1, name: "Nebula Navigator", description: "A star-charting app for amateur astronomers", image: "/api/placeholder/400/300", github: "https://github.com/yourusername/nebula-navigator", live: "https://nebula-navigator.com" },
  { id: 2, name: "Quantum Quill", description: "A markdown editor that predicts your next words", image: "/api/placeholder/400/300", github: "https://github.com/yourusername/quantum-quill", live: "https://quantum-quill.com" },
  { id: 3, name: "Stellar Synth", description: "An audio synthesizer inspired by cosmic sounds", image: "/api/placeholder/400/300", github: "https://github.com/yourusername/stellar-synth", live: "https://stellar-synth.com" },
  // Add more projects as needed
];

const Star: React.FC<StarProps> = ({ x, y, size, pulse }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={size}
    fill="white"
    initial={{ opacity: 0.1, scale: 1 }}
    animate={{ opacity: 1, scale: pulse ? [1, 1.2, 1] : 1 }}
    transition={{ duration: 2, repeat: Infinity }}
  />
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
  <motion.div
    className="absolute"
    style={{ left: `${project.x}%`, top: `${project.y}%` }}
    whileHover={{ scale: 1.1 }}
    onClick={() => onSelect(project)}
  >
    <motion.div 
      className="w-4 h-4 bg-blue-400 rounded-full cursor-pointer"
      animate={{ boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.5)', '0 0 0 10px rgba(59, 130, 246, 0)'] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.div>
);

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    className="fixed inset-0 flex items-center justify-center z-50"
  >
    <div className="bg-gray-900 bg-opacity-70 absolute inset-0" onClick={onClose} />
    <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4 relative z-10">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">{project.name}</h2>
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex space-x-4">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
          <Github className="mr-2" /> GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded">
          <ExternalLink className="mr-2" /> Live Demo
        </a>
      </div>
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-400 hover:text-white">
        ×
      </button>
    </div>
  </motion.div>
);

const CosmicProjectConstellation: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [windowSize, setWindowSize] = useState({ width: 1000, height: 1000 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projectsWithPositions = projects.map(project => ({
    ...project,
    x: Math.random() * 80 + 10, // 10-90% of width
    y: Math.random() * 80 + 10, // 10-90% of height
  }));

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      <svg width="100%" height="100%">
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {[...Array(100)].map((_, i) => (
          <Star 
            key={i} 
            x={Math.random() * windowSize.width} 
            y={Math.random() * windowSize.height}
            size={Math.random() * 2}
            pulse={Math.random() > 0.8}
          />
        ))}
      </svg>

      {projectsWithPositions.map(project => (
        <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
      ))}

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default CosmicProjectConstellation;