import React from 'react';
import './About.scss';

const skills = [
  { name: "HTML", className: "html", percent: "90%" },
  { name: "CSS", className: "css", percent: "90%" },
  { name: "JavaScript", className: "js", percent: "70%" },
  { name: "React.js", className: "react", percent: "80%" },
  { name: "SASS", className: "sass", percent: "85%" },
  { name: "MySQL", className: "mysql", percent: "70%" },
  { name: "Core Java", className: "core-java", percent: "75%" },
  { name: "Advanced Java", className: "advanced-java", percent: "60%" },
  { name: "GitHub", className: "github", percent: "90%" },
];

const About = () => {
  return (
    <div className='About'>
      <h1>Skills</h1>
      <div className='Skills'>
        <ul>
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <li>{skill.name}</li>
              <div className={`Animation ${skill.className}`} data-percent={skill.percent}>
                <div className="progress" style={{ width: skill.percent }}></div>
              </div>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
