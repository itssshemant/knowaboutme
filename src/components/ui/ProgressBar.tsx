import React from 'react';

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  color = 'from-purple-600 to-blue-500' 
}) => {
  return (
    <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${color} transition-all duration-500 ease-out`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;