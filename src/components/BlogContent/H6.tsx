import React from 'react';
import { Binary } from 'lucide-react';

const H6: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center" {...props}>
    <Binary className="mr-2 text-blue-300" />
    {children}
  </h3>
);

export default H6;
 