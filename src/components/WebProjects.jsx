import React from "react";
import { webProjects } from "./data";
import ProjectList from "./ProjectList";

export default function WebProjects() {
  return (
    <>
      {" "}
      <div id="web-section">
        <div className="text-section">
          <h2>Web projects</h2>
        </div>

        <ProjectList projects={webProjects} id="projects"></ProjectList>
      </div>
    </>
  );
}
