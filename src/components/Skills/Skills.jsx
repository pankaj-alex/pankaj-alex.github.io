import React from "react";
import { SkillItems } from "./SkillsItems";
import "./Skills.css";

const Skills = (props) => {
  return (
    <section className="skills_section" id="skills">
      <h1 className="skills-title section_title" data-aos="fade-up">
        Skills
      </h1>
      <div className="skills-list">
        {SkillItems.map((skill, idx) => (
          <SkillCategory
            name={skill.name}
            items={skill.items}
            key={skill.name}
          ></SkillCategory>
        ))}
      </div>
    </section>
  );
};

const SkillCategory = ({ name, items }) => {
  return (
    <div className="skill-category-container" data-aos="fade-up">
      <div className="skill-title">
        <div className="arrow-img-container">
          <img src="assets/skills/arrow.svg" alt="arrow bullet" />
        </div>
        <h3>{name}</h3>
      </div>
      <div className="skills_container">
        {items.map((item, idx) => (
          <SkillBubble name={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

const SkillBubble = ({ name }) => {
  return (
    <div className="skill-bubble-container">
      <img src={`assets/skills/` + name + `.svg`} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default Skills;
