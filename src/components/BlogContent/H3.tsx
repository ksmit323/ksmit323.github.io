import React from 'react';
import { Earth } from 'lucide-react';

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h3 className="text-2xl font-medium mb-3 text-blue-100 flex items-center" {...props}>
    <Earth className="mr-2 text-purple-400" />
    {children}
  </h3>
);

export default H3;
