import React from "react";

import { desktopProjects } from "./data";
import ProjectList from "./ProjectList";

export default function DesktopProjects() {
  return (
    <>
      {" "}
      <div id="desktop-section">
        <div className="text-section">
          <h2>Desktop projects</h2>
        </div>

        <ProjectList
          projects={desktopProjects}
          id="desktop-projects"
        ></ProjectList>
      </div>
    </>
  );
}
