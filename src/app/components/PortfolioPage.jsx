import React from 'react';
import {workData} from '../utils/portfolioData/workData';
import {serviceData} from '../utils/portfolioData/serviceData';

function PortfolioPage() {
  return (
    <section className="section portfolio">
      <h2 className="title">Portfolio</h2>
      <div className="tab-box">
        <div className="tab-list portfolio-list active">
          <h3>My Work</h3>
        </div>
        <div className="tab-list portfolio-list">
          <h3>My Service</h3>
        </div>
      </div>
      <div className="tab-wrapper">

        <div className="tab-grid portfolio-box work active">

          {workData.map((work) => (
            <div className="tab-item portfolio-item" key={work.id}>
              <div className="work-img">
                <img src={work.imgSrc} alt={work.title} />
              </div>
              <div className="work-info">
                <h4>{work.title}</h4>
                <p>{work.description}</p>
                <div className="tech-used">
                  <p>{work.techUsed}</p>
                </div>
                <div className="portfolio-icon work-icon">
                  <a href={work.previewLink}>
                    <i className="bx bx-arrow-back"></i>
                    <span className="tooltip">Preview</span>
                  </a>
                  <a href={work.githubLink}>
                    <i className="bx bxl-github"></i>
                    <span className="tooltip">Github Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
          </div>
        <div className="tab-grid portfolio-box service">
          {serviceData.map((service) => (
            <div className="tab-item portfolio-item" key={service.id}>
              <div className="portfolio-icon service-icon">
                <i className={`bx ${service.icon} icon`}></i>
                <a href="#"><i className='bx bx-arrow-back'></i></a>
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PortfolioPage;