"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
// import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
// import Project from "./project";
// import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section 
    ref={ref} 
    id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Link href={`/project/${project.id}`} key={project.id}>
          <React.Fragment >
            <Project {...project} />
          </React.Fragment>
          </Link>
        ))}
      </div>
    </section>
  );
}