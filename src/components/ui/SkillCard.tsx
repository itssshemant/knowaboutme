import React, { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  icon, 
  description,
  className = ''
}) => {
  return (
    <div className={`card hover:scale-105 transition-all duration-300 reveal ${className}`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-800 text-purple-400 mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;