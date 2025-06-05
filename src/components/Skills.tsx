import React from 'react';
import { Terminal } from 'lucide-react';

const Skills: React.FC = () => {
  const languages = [
    "Python 🐍",
    "C++ 🚀",
    "C 💻",
    "HTML 🌐",
    "JavaScript ⚡",
    "CSS 🎨"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal">Tech Arsenal</h2>
        
        <div className="card p-8 reveal">
          <div className="flex items-center mb-6">
            <Terminal className="text-purple-400 mr-3" size={24} />
            <h3 className="text-xl font-bold">Command Center</h3>
          </div>
          
          <div className="terminal-window bg-gray-900 p-6 rounded-lg border border-purple-500">
            <div className="flex flex-wrap gap-4">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                >
                  <div className="px-4 py-2 bg-gray-800 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-purple-900">
                    <span className="text-lg">{lang}</span>
                  </div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-green-400 font-mono">
              <p className="typing-animation">$ loading_skills.exe</p>
              <p className="typing-animation delay-1">$ initializing_brain.bat</p>
              <p className="typing-animation delay-2">$ coffee_level: OPTIMAL ☕</p>
              <p className="typing-animation delay-3">$ status: Ready to Code! 🚀</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;