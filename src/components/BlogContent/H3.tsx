import React from 'react';
import { Rocket } from 'lucide-react';

const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h3 className="text-xl font-medium mb-3 text-blue-300 flex items-center" {...props}>
    <Rocket className="mr-2 text-blue-300" />
    {children}
  </h3>
);

export default H3;
 