
import React from 'react';
import './Project.css'
const Project = ({ projects }) => {
  const projectData = [
    {
      name: 'HTML Project Site',
      description: 'This project demonstrates proficiency in HTML. It showcases various HTML elements and structures, highlighting web development skills.',
      link: 'https://purushotham-kuntumalla.github.io/htmlprojectsite/'
    },
    {
      name: 'Portfolio',
      description: 'A personal portfolio website that includes details about skills, projects, and contact information. It reflects professionalism and creativity.',
      link: 'https://purushotham-kuntumalla.github.io/portfolio/'
    },
    {
      name: 'E-Commerce',
      description: 'An online shopping platform featuring product listings, shopping cart, and checkout functionalities. It utilizes both front-end and back-end development skills.',
      link: 'https://purushotham-kuntumalla.github.io/e_commerce/'
    },
    
    {
      name: 'Calculator',
      description: 'Basic calculator functionality built using HTML, CSS, and JavaScript. Suitable for simple mathematical calculations.',
      link: 'https://purushotham-kuntumalla.github.io/calculator/'
    },
    {
      name: 'Temperature Converter',
      description: 'A temperature converter that allows users to convert temperatures between different units (Celsius, Fahrenheit). It features a user-friendly interface and illustrates knowledge of JavaScript and DOM manipulation.',
      link: 'https://purushotham-kuntumalla.github.io/temp-converter/'
    },
    {
      name: 'Quiz App',
      description: 'An interactive quiz application that supports multiple-choice questions and provides feedback on user performance.',
      link: 'https://purushotham-kuntumalla.github.io/QuizApp/'
    },
    {
      name: 'Quote Generator',
      description: 'A project that generates random quotes or inspirations. It features engaging and dynamic content and may utilize APIs or local data storage.',
      link: 'https://purushotham-kuntumalla.github.io/QuoteGenerator/'
    },
    {
      name: 'Fashion Styles',
      description: 'A project showcasing different fashion styles. It includes images, descriptions, and possibly links to fashion items, demonstrating design and layout skills.',
      link: 'https://purushotham-kuntumalla.github.io/FashionStyles/'
    },
    {
      name: 'Todo List JS',
      description: 'A task management application that allows users to add, delete, and mark tasks as completed. It incorporates local storage for persistence.',
      link: 'https://purushotham-kuntumalla.github.io/Todo-list-JS/'
    }
  ];


  return (
    <section>
      
      {projectData.map((work, idx) => (
        <div key={idx} className="experience-card">
          <div className="card">
          <h2 >{work.name}</h2>
          <p className='tp'> {work.description}</p>
          <a  href={work.link} target="_blank" rel="noopener noreferrer">
              <span class="material-symbols-outlined span">
live_tv
</span>
          </a>
          </div>
          
        </div>
      ))}

      
    </section>
      
    
    
    
  );
};

export default Project;
