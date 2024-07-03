import React from 'react';
import { Orbit } from 'lucide-react';

const Divider: React.FC = () => (
  <div className="flex items-center justify-center my-8">
    <div className="h-1 w-1/4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    <Orbit className="mx-4 text-yellow-300" size={24} />
    <div className="h-1 w-1/4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
  </div>
);

export default Divider;
