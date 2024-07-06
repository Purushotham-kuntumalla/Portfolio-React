import React from 'react';
import './Project.css';

const projectData = [
  {
    name: 'Axios-based Shopping Cart',
    description: 'This project is a React-based shopping application that fetches product data from an API and allows users to add items to a cart. It uses the following features and technologies'
  },
  {
    name: 'React Image Slider',
    description: 'This project is a React-based image slider component that uses the react-slick library for a smooth and responsive carousel experience.'
  },
  {
    name: 'React Login Form',
    description: "This project is a simple React-based login form that captures user input for a name and password."
  },
  {
    name: "React Data Posting Form",
    description: "This project is a React-based form for posting user data to a server endpoint."
  },
  {
    name: 'React Profile Card Creator',
    description: "This project is a React-based application for creating and displaying profile cards."
  },
  {
    name: 'ReactJs Todo List',
    description: 'A task management application that allows users to add, delete, and mark tasks as completed.',
    link: 'https://purushotham-kuntumalla.github.io/react-todo/'
  },
  {
    name: 'WorkOut Tracker UI',
    description: 'A Work Out Tracker UI designed by using the HTML5, CSS3.',
    link: 'https://purushotham-kuntumalla.github.io/Dacoid-app/'
  },
  {
    name: 'Tax Calculator',
    description: 'Developed a fully functional tax calculator web application using HTML, CSS, Bootstrap, and JavaScript.',
    link: 'https://purushotham-kuntumalla.github.io/tax-calculation/'
  },
  {
    name: 'Social Media Application',
    description: 'Developed a fully functional Social Media web application using HTML, CSS, and JavaScript.',
    link: 'https://purushotham-kuntumalla.github.io/Social-media/'
  },
  {
    name: 'NodeJS Quiz Application',
    description: 'Using Nodejs, expressJs created an API designed a responsive Quiz application on Nodejs conceptsoperations.',
    link: 'https://github.com/Purushotham-kuntumalla/Quiz-Application-Nodejs'
  },
  {
    name: 'BOOK US NOW',
    description: 'Integrated REST APIs to fetch and display recommended and upcoming events data. Implemented responsive web design principles.',
    link: 'https://purushotham-kuntumalla.github.io/Book-Us-Now/'
  },
  {
    name: 'Multi-page Web Application with Express.js',
    description: 'Using Express.js, allowing users to navigate through multiple pages including a Home page, About page, and Login validation.',
    link: 'https://github.com/Purushotham-kuntumalla/Food-recipe'
  },
  {
    name: 'Projects web Site',
    description: 'This project demonstrates proficiency in HTML. It showcases various HTML elements and structures, highlighting web development skills.',
    link: 'https://purushotham-kuntumalla.github.io/htmlprojectsite/'
  },
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
    link: 'https://purushotham-kuntumalla.github.io/Tempo-Converter/'
  },
  {
    name: 'Quiz App',
    description: 'An interactive quiz application that supports multiple-choice questions and provides feedback on user performance.',
    link: 'https://purushotham-kuntumalla.github.io/Quiz-application/'
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
    link: 'https://purushotham-kuntumalla.github.io/TodoList/'
  }
];

const Project = () => {
  return (
    <div className="project-container">
      <h1 className='project-head'>Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-content">
              <h2 className='project-title'>{project.name}</h2>
              <p className='project-description'>{project.description}</p>
              {project.link &&(
                <a href={project.link} target="_blank" rel="noopener noreferrer" className='project-link'>
                  <span className="material-symbols-outlined span">
                    arrow_forward
                  </span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
