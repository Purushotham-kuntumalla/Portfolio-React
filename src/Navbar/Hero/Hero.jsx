import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="hero-content">
        <h1>Hi, I'm Purushotham</h1>
        <p>Passionate Developer | Transforming ideas into Seamless and Visually Stunning Web Solutions</p>
      </div>
      <div className="hero-img">
        <div className="profile-container">
          <img className='profile' src={process.env.PUBLIC_URL + "/profile.jpg"} alt="Profile" />
        </div>
        <div className='tech-icons'>
          <div className="tech-icon">
            <img className='img' src="https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png" alt="HTML5" />
          </div>
          <div className="tech-icon">
            <img className='img' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="CSS3" />
          </div>
          <div className="tech-icon">
            <img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy19ikHM0ONUcrjiCv9c-mB5wh7eBlFowgY-L7erAsGA&s" alt="JavaScript" />
          </div>
          <div className="tech-icon">
            <img className='img' src={process.env.PUBLIC_URL + "/favicon.ico"} alt="React" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
