import React from 'react';
import './Skills.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png',
    'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png',
    'https://markovate.com/wp-content/uploads/2022/06/Is-Express.js-Framework-An-Ideal-Choice-For-Developing-Enterprise-Applications_@2x.png.webp',
    'https://www.biteinteractive.com/wp-content/uploads/2021/05/git-vs-github.png'
  ];

  return (
    <>
      <section className='skills-section'>
      <h2 className="skills-title">Skills</h2>
      <div className="skills-slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="skills-slide" key={index}>
              <div className="skills-image-container">
                <img src={image} alt={`Skill ${index}`} className="skills-image"/>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      </section>
      
    </>
  );
};

export default Skills;
