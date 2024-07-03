import React, { ReactNode } from 'react';
import { Atom } from 'lucide-react';

const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h1 className="text-4xl font-bold mb-6 text-purple-400 flex items-center" {...props}>
    <Atom className="mr-2 text-purple-400" />
    {children}
  </h1>
);

export default H1;
