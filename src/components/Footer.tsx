import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-8 border-t border-gray-800 mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm flex items-center">
              &copy; {new Date().getFullYear()} Hemant. All rights reserved. Made with 
              <Heart className="mx-1 text-red-500" size={14} fill="currentColor" />
              and lots of coffee
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToTop}
              className="p-2 bg-gray-800 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;