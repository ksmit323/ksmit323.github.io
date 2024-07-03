import React from 'react';
import { Rocket } from 'lucide-react';

const UL: React.FC<React.HTMLAttributes<HTMLUListElement>> = ({ children, ...props }) => (
  <ul className="list-none space-y-2 my-4 text-gray-200" {...props}>
    {React.Children.map(children, (child) => (
      <li className="flex items-start">
        <Rocket className="mr-2 mt-1 text-blue-400" size={16} />
        {child}
      </li>
    ))}
  </ul>
);

export default UL;
