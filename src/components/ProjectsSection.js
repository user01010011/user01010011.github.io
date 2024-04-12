// src/components/ProjectsSection.js

import React, { useState } from "react";
import projectsList from "./ProjectContent";
import Project from "./Project";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

function ProjectsSection(props) {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const projectsToDisplay = projectsList.map((project) => (
    <Project project={project} key={project.id} />
  ));

  const priorityProjects = projectsToDisplay.slice(0, 4);
  const hiddenProjects = projectsToDisplay.slice(4);

  const moreProjectsClassName = showMoreProjects
    ? "gridContainer"
    : "gridContainer hidden";

  // function toggleMoreProjects() {

  // }

  return (
    <>
      <section id="recentWork" className="section">
        <h1>Recent Work</h1>
        <div className="gridContainer">{priorityProjects}</div>
      </section>

      <div className="buttonDiv">
        {showMoreProjects ? (
          <button onClick={() => setShowMoreProjects(!showMoreProjects)}>
            View Full Portfolio {"\u00A0"} <BsChevronUp />
          </button>
        ) : (
          <button onClick={() => setShowMoreProjects(!showMoreProjects)}>
            View Full Portfolio {"\u00A0"} <BsChevronDown />
          </button>
        )}
      </div>

      <section>
        <div className={moreProjectsClassName}>{hiddenProjects}</div>
      </section>
    </>
  );
}

export default ProjectsSection;
