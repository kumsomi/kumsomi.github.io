import React from "react";
import { ProjectCard } from "../components/projectCard/projectCard";

export const Projects = () => {
  return (
    <div>
      <h1>My Projects </h1>
      <div>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
