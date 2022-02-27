import React from 'react';
import { data } from '../data/DataForAllProjects';
import Card from './Card';
import ProjectModal from './ProjectModal';

export default function ProjectSection({ setModal }) {
  const cards = data.map((project) => (
    <Card
      key={project.id}
      project={project}
      onClick={() => setProject(project)}
    />
  ));

  function setProject(project) {
    setModal(<ProjectModal project={project} />);
  }
  return (
    <div className="project-section">
      <div className="project-container">
        <div className="item-one">
          <h1>Projects</h1>
        </div>
        <div className="item-two">
          Here is my contact information.I look forward to collaboratation.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro maxime
          nesciunt soluta fugit illo necessitatibus.
        </div>
        <div className="item-three">
          <ul>{cards}</ul>
        </div>
      </div>
    </div>
  );
}
