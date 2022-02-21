import React from "react";
import Logos from "./Logos";

export default function ProjectList({ projects, id }) {
  return (
    <article id={id}>
      {projects.map((project, index) => {
        return (
          <section key={index} className="project-tile" id={project.id}>
            <h3 className="project-title-container">
              {project.h3}
              <span className="logos-span">
                <Logos logos={project.logos} />
              </span>
            </h3>
            <p>{project.p}</p>

            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <img src={project.src} alt={project.alt} />
            </a>
          </section>
        );
      })}
    </article>
  );
}
