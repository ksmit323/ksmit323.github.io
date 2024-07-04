import React from 'react';
import { Pickaxe } from 'lucide-react';

const H4: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h4 className="text-xl font-medium mb-3 text-blue-300 flex items-center" {...props}>
    <Pickaxe className="mr-2 text-blue-300" />
    {children}
  </h4>
);

export default H4;