import React, { ReactNode } from 'react';

const BlueHighlight: React.FC<{ children: ReactNode}> = ({ children }) => (
  <span style={{
    color: '#007bff',
    fontWeight: 'bold',
    textShadow: '0 0 5px #007bff',
  }}>
    {children}
  </span>
);

export default BlueHighlight;