import React from "react";
import Logos from "./Logos";

export default function ProjectList({ projects, id }) {
  return (
    <article id={id}>
      {projects.map((project, index) => {
        return (
          <section key={index} className="project-tile" id={project.id}>
            <Logos logos={project.logos}></Logos>

            <h3>{project.h3}</h3>
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
