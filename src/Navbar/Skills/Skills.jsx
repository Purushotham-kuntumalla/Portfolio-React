import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const progressRefs = useRef([]);

  const skills = [
    { name: 'React', percentage: 70, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'JavaScript', percentage: 70, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png' },
    { name: 'CSS', percentage: 85, image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png' },
    { name: 'HTML', percentage: 90, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png' },
    { name: 'Node.js', percentage: 60, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
    { name: 'Express.js', percentage: 50, image: 'https://markovate.com/wp-content/uploads/2022/06/Is-Express.js-Framework-An-Ideal-Choice-For-Developing-Enterprise-Applications_@2x.png.webp' },
    { name: 'Git', percentage: 75, image: 'https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      progressRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          ref.style.width = `${skills[index].percentage}%`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check in case the element is already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skills]);

  return (
    <div className="skills-container">
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <h3>{skill.name}</h3>
            <div className="progress-bar">
              <div
                className="progress"
                ref={(el) => (progressRefs.current[index] = el)}
                style={{ width: '0%' }} // Initially set to 0
              />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
