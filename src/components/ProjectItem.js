import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesarr = technologies.map((list) => (
    <span key={list}>{list}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesarr}
      </div>
    </div>
  );
}

export default ProjectItem;
