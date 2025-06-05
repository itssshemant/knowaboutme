import React from 'react';
import { Code, Lightbulb, Smartphone, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title reveal">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 reveal">
            <div className="card h-full">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg mb-4">
                  Hello there! 👋 I'm <span className="text-gradient font-semibold">Hemant</span>, a passionate 
                  developer with a love for creating beautiful, functional websites and applications.
                </p>
                
                <p className="mb-4">
                  My journey in tech started when I was in college, tinkering with HTML and CSS to create simple websites.
                  That spark of interest quickly turned into a full-blown passion for web development, UI/UX design, 
                  and everything in between!
                </p>
                
                <p className="mb-4">
                  When I'm not coding, you'll find me exploring the latest tech trends, contributing to open-source projects,
                  or creating content about development on various platforms. I believe in learning by doing and sharing knowledge
                  with the community.
                </p>
                
                <p>
                  I approach each project with enthusiasm and a commitment to excellence, always looking for ways to push boundaries
                  and create exceptional digital experiences. Let's connect and build something amazing together!
                </p>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-purple-900 bg-opacity-40 rounded-full text-sm">Problem Solver</span>
                <span className="px-3 py-1 bg-blue-900 bg-opacity-40 rounded-full text-sm">Team Player</span>
                <span className="px-3 py-1 bg-indigo-900 bg-opacity-40 rounded-full text-sm">Fast Learner</span>
                <span className="px-3 py-1 bg-violet-900 bg-opacity-40 rounded-full text-sm">Detail Oriented</span>
                <span className="px-3 py-1 bg-purple-900 bg-opacity-40 rounded-full text-sm">Creative Thinker</span>
              </div>
            </div>
          </div>
          
          <div className="reveal">
            <div className="card h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Lightbulb className="mr-2 text-purple-400" size={20} />
                Fun Facts
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Code className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={18} />
                  <span>I've written over 100,000 lines of code (and deleted probably twice as many!)</span>
                </li>
                <li className="flex items-start">
                  <Coffee className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={18} />
                  <span>My productivity is directly proportional to my coffee consumption</span>
                </li>
                <li className="flex items-start">
                  <Smartphone className="mr-2 mt-1 text-blue-400 flex-shrink-0" size={18} />
                  <span>I've fixed more "tech issues" for family members than actual bugs in my code</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-300 mb-2">Current Status:</h4>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for new projects</span>
                </div>
              </div>
              
              <button className="mt-6 btn btn-secondary w-full group" id="secret-button">
                <span className="group-hover:hidden">Don't Click Me</span>
                <span className="hidden group-hover:inline">You Rebel! 🎉</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;