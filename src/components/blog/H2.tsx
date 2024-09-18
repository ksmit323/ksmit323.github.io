import React from 'react';
import { Telescope } from 'lucide-react';

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h2 className="text-3xl font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 flex items-center" {...props}>
    <Telescope className="mr-2 text-blue-400" />
    {children}
  </h2>
);

export default H2;
