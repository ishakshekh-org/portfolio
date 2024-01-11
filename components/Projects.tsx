import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import React from "react";
import ProjectSingle from "./ProjectSingle";

const Projects = () => {
  return (
    <section className="mb-28 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>

      <div className="">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectSingle {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
