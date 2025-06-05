import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (!typingTextRef.current) return;
    
    const typingText = typingTextRef.current;
    const phrases = ["Frontend Developer", "AI Enthusiast", "Content Creator", "Tech Explorer"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50;
      } else {
        typingText.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    setTimeout(type, 1000);
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 md:order-1 order-2 reveal">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-gradient">Hemant</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-6 text-gray-300 flex">
              I'm a <span ref={typingTextRef} className="text-gradient ml-2"></span>
              <span className="animate-pulse ml-1">|</span>
            </h2>
            <p className="text-gray-400 text-lg mb-4 max-w-lg">
              Crafting engaging digital experiences with clean code and creative solutions. Let's build something amazing together!
            </p>
            <p className="text-purple-400 text-xl mb-8 font-semibold italic">"While they scroll, I compile!"</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#" className="btn btn-secondary flex items-center gap-2">
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2 reveal">
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/hero.png" 
                alt="Hemant Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown className="animate-bounce" size={24} />
      </a>
    </section>
  );
};

export default Hero;