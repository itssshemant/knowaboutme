import { useCallback } from 'react';

export const useScrollReveal = () => {
  const setupScrollReveal = useCallback(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const reveal = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check to reveal elements that are already visible
    reveal();
    
    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);
  
  return { setupScrollReveal };
};