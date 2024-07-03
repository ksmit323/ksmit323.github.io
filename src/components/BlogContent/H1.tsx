import React, { ReactNode } from 'react';
import { Earth } from 'lucide-react';

const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h1 className="text-4xl font-bold mb-6 text-blue-300 flex items-center" {...props}>
    <Earth className="mr-2 text-yellow-300" />
    {children}
  </h1>
);

export default H1;
