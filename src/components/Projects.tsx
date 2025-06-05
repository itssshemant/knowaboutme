import React from 'react';
import { Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal">Projects</h2>
        
        <div className="card p-8 text-center reveal">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-purple-400 mr-3" size={24} />
            <h3 className="text-2xl font-bold">Something Amazing is Cooking! 👨‍🍳</h3>
          </div>
          
          <div className="relative group cursor-pointer mx-auto max-w-2xl">
            <div className="p-8 bg-gray-800 rounded-lg transform transition-all duration-500 hover:scale-105">
              <p className="text-xl mb-4">🚧 Project Laboratory Under Construction 🚧</p>
              <p className="text-gray-400 mb-6">
                Mixing code with creativity, debugging with determination, and sprinkling some magic dust...
              </p>
              <div className="flex justify-center space-x-4">
                <span className="animate-bounce">🔨</span>
                <span className="animate-bounce delay-100">⚡</span>
                <span className="animate-bounce delay-200">💻</span>
                <span className="animate-bounce delay-300">🎨</span>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;