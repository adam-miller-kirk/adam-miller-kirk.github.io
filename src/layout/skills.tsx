import React from "react";
import SkillCase from ".@/components/skillCase";
import competencies from ".@/json/competencies.json";
import "./skills.pcss";

const SkillsPage = () => (
  <>
    <div className="PageIntro">
      <h3>Skills</h3>
      <p>This is my skills page which outlines my areas of knowledge</p>
    </div>
    <div className="PageDetail">
      {competencies.map((competency) => (
        <div className="CompetencyGroup">
          <b>
            <p>{competency.name}</p>
          </b>
          <div className="CompetencySkillContainer">
            {competency.skills.map((skill) => (
              <SkillCase progress={skill.progress} title={skill.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

export default SkillsPage;
