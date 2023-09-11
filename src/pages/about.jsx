import React from "react";
import SkillCard from "../components/skillCard";

export const About = () => {
  return (
    <div className="about-section">
      <p className="section-text-p1 secondary">Explore My</p>
      <p className="section-text-p2">Web development Skills</p>
      <div className="skill-card-container">
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
};
