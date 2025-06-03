import React from 'react';
// import styles from './HomePage.module.css'; 

const socialLinks = [
  { icon: 'bx bxl-github', tooltip: 'Github', href: 'https://github.com/Faizullah032?tab=repositories' },
  { icon: 'bx bxl-linkedin', tooltip: 'Linkedin', href: 'https://www.linkedin.com/in/faizullah-laghari-a675a62a0/' },
  { icon: 'bx bxl-twitter', tooltip: 'Twitter', href: 'https://twitter.com/' },
  { icon: 'bx bxl-youtube', tooltip: 'Youtube', href: 'https://www.youtube.com/' },
];

function HomePage() {
  return (
    <section className="section home active">
    <div className="home-info">
      <h3>Hello I'm</h3>
      <h1>Faizullah Laghari</h1>
      <p className="desc">
        From concept to creation, I’m here to make your ideas shine. I create modern, responsive, and user-friendly websites that align with your goals. Let’s collaborate to build something extraordinary!
      </p>
      <div className="btn-sci">
        <a href="#" className="btn">Download CV</a>
        <div className="sci">
          {socialLinks.map((link, index) => (
            <a href={link.href} key={index}>
              <i className={link.icon}></i>
              <span className="tooltip">{link.tooltip}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="img-wrapper">
      <div className="img-box home-img">
        <img src="images/hero-image.png" alt="" />
      </div>
    </div>
  </section>

  )
}

export default HomePage;