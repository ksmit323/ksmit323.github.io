import React from 'react';
import { Hammer } from 'lucide-react';

const H5: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => (
  <h5 className="text-l font-medium mb-4 text-blue-300 flex items-center" {...props}>
    <Hammer className="mr-4 text-blue-300" size={24} /> {/* Set a fixed size */}
    <span className="flex-1">{children}</span> {/* Wrap text in a flex container */}
  </h5>
);

export default H5;