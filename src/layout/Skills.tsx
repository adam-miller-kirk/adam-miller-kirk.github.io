import React from "react";
import SkillCase from ".@/components/skillCase/SkillCase";
import skills from ".@/json/skills.json";

const SkillsPage = () => {
  // TODO insert search bar and results component

  return (
    <>
      <div className="PageIntro">
        <h3>Search</h3>
        <p>Search location below to discover it's weather!</p>
      </div>
      <div className="PageDetail">
        <p>Search coming soon</p>
        {skills.map((skill) => (
          <SkillCase progress={skill.progress} title={skill.title} />
        ))}
      </div>
    </>
  );
};

export default SkillsPage;
