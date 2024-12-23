'use client';

import React from 'react';
import StarField from '@/components/StarField';
import ProjectCarousel from '../../components/projects/ProjectCarousel';

const ProjectsPage = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <StarField />
      <ProjectCarousel />
    </div>
  );
};

export default ProjectsPage;