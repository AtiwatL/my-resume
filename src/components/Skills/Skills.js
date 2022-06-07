import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { programmingskill } from "./data";
import { softskill } from "./data";
import "./Skills.scss";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I have</h5>
      <h2>My Skill</h2>

      <div className="container skills__container">
        <div className="programming__skill">
          <h3>Programming Skills</h3>
          <div className="skill__content">
            {programmingskill.map(({ id, language, level }) => (
              <article className="skill__details" key={id}>
                <BsPatchCheckFill className="skill__details-icon" />
                <div>
                  <h4>{language}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="soft__skill">
          <h3>Soft Skills</h3>
          <div className="skill__content">
            {softskill.map(({ id, skill, level }) => (
              <article className="skill__details" key={id}>
                <BsPatchCheckFill className="skill__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">{level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
