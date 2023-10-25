import React from "react";
import SkillCase from ".@/components/skillCase/SkillCase";
import skills from ".@/json/skills.json";

const SkillsPage = () => (
  <>
    <div className="PageIntro">
      <h3>Skills</h3>
      <p>This is my skills page which outlines my areas of knowledge</p>
    </div>
    <div className="PageDetail">
      {skills.map((skill) => (
        <SkillCase progress={skill.progress} title={skill.title} />
      ))}
    </div>
  </>
);

export default SkillsPage;
