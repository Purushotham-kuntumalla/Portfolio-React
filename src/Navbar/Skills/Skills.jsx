import React from 'react'
import './Skills.css'
const Skills = () => {
  return (
    <section className='skills-container'>
          <h5>Technical Proficiency</h5>
          <div className="skills-content">
                    <div className="skills-card">
                          <p className='p'>React-Js</p>
                          <img className='react-js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                          <div className="progress-bar">
                                <div className="progress-r"></div>
                          </div>
              </div>

                    <div className="skills-card">
                    
                          <img className='js' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png" alt="" />
                          <div className="progress-bar">
                          <div className="progress"></div>
                          </div>
              </div>

                    <div className="skills-card">
                    <p className='p'>CSS</p>
                          <img className='css' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="" />
                          <div className="progress-bar">
                          <div className="progress-c"></div>
                          </div>
              </div>

                    <div className="skills-card">
                    <p className='p'>HTML</p>
                          <img className='html' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="" />
                          <div className="progress-bar">
                                <div className="progress-h">
                                    
                          </div>
                          </div>
              </div>
          </div>
    </section>
  )
}

export default Skills
