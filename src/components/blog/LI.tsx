import React from 'react';
import { Sparkle } from 'lucide-react';


const LI: React.FC<React.HTMLAttributes<HTMLLIElement>> = ({ children, ...props }) => {
  return (
    <li className="flex items-start space-x-2" {...props}>
      <Sparkle className="mt-1 text-blue-400 flex-shrink-0" size={16} />
      <span>{children}</span>
    </li>
  );
};

export default LI;