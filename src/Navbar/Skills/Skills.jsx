import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', level: 80 },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png', level: 90 },
  { name: 'CSS3', image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png', level: 85 },
  { name: 'HTML5', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png', level: 95 },
  { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png', level: 75 },
  { name: 'Express.js', image: 'https://markovate.com/wp-content/uploads/2022/06/Is-Express.js-Framework-An-Ideal-Choice-For-Developing-Enterprise-Applications_@2x.png.webp', level: 70 },
  { name: 'Git', image: 'https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png', level: 80 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
