import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="card overflow-hidden group reveal transform perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0) rotateX(0)',
        transition: 'transform 0.3s ease'
      }}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
          aria-label="View GitHub Repository"
        >
          <Github size={18} />
        </a>
        <a 
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
          aria-label="View Live Demo"
        >
          <ExternalLink size={18} />
        </a>
      </div>
      
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: isHovered ? 'inset 0 0 20px 5px rgba(139, 92, 246, 0.15)' : 'none',
          transition: 'box-shadow 0.3s ease'
        }}
      ></div>
    </div>
  );
};

export default ProjectCard;