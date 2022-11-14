import React from "react";
import "./SkillCase.pcss";

const SkillCase = ({ progress, title }) => {
  let level, colour;

  if (progress) {
    if (progress <= 20) {
      level = 1;
      colour = "red";
    } else if (progress > 20 && progress <= 40) {
      level = 2;
      colour = "green";
    } else if (progress > 40 && progress <= 60) {
      level = 3;
      colour = "blue";
    } else if (progress > 60 && progress <= 80) {
      level = 4;
      colour = "orange";
    } else if (progress > 80 && progress <= 100) {
      level = 5;
      colour = "purple";
    } else {
      level = 6;
      colour = "grey";
    }
  }

  return (
    <div className="SkillCase">
      <h3 className="SkillCaseLevel">{level}</h3>
      <div className="SkillCaseBar">
        <p className="SkillCaseTitle">{title}</p>
        <p
          className="SkillCaseProgress"
          style={{
            background: `linear-gradient(to right, ${colour} ${progress}%, #000000 ${progress}%) `,
          }}
        />
      </div>
    </div>
  );
};

export default SkillCase;
