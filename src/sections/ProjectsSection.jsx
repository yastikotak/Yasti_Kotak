import React from 'react';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  const { title, items } = portfolioData.projects;

  return (
    <section id="projects" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
