'use client';

import React, { useState, useEffect, useMemo } from 'react';
import StarField from '@/components/StarField';
import ProjectCarousel from '../../components/ProjectCarousel';

const ProjectsPage = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <StarField />
      <ProjectCarousel />
    </div>
  );
};

export default ProjectsPage;