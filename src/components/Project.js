import React from "react";

function Project({ project }) {
  const linksToDisplay = project.links.map((link, index) => {
    return index !== 0 ? (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        key={link.text}
        className="projectLink"
      >
        | {"\u00A0"} {link.text}
      </a>
    ) : (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        key={link.text}
        className="projectLink"
      >
        {link.text}
      </a>
    );
  });
  return (
    <>
      <div className="tile">
        <div className="imgContainer">
          <img
            src={project.image}
            alt={project.alt_text}
            className="thumbnail"
          />
          <div className="middle">
            <div className="viewButton">
              <a href={project.repository} target="_blank" rel="noreferrer">
                View
              </a>
            </div>
          </div>
        </div>
        <span className="titleInfo">
          <h4>{project.title}</h4>
          <div className="projectLinksContainer">{linksToDisplay}</div>
        </span>
        <h5>{project.languages}</h5>
        <p>{project.description}</p>
      </div>
    </>
  );
}

export default Project;
