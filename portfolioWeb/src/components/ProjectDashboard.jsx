// ProjectDashboard.js
import React, { useState } from 'react';
import Projects from './Projects';
import SelectProjectCard from './SelectProjectCard';

const ProjectDashboard = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const resetSelection = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      
      <Projects onSelect={handleProjectSelect} />


         <SelectProjectCard 
       selectedProject={selectedProject} 
       resetSelection={resetSelection} 
       />
     
 
    </div>
  );
};

export default ProjectDashboard;
