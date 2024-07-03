import React from 'react';
import { Telescope } from 'lucide-react';

const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h2 className="text-3xl font-semibold mb-4 text-blue-200 flex items-center" {...props}>
    <Telescope className="mr-2 text-blue-400" />
    {children}
  </h2>
);

export default H2;
