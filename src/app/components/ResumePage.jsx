import React from 'react';
import { experienceData } from '../utils/resumeData/experienceData';
import { skillsData } from '../utils/resumeData/skillsData';
import { educationData } from '../utils/resumeData/educationData';
import { tabs } from '../utils/resumeData/Tabs';


function ResumePage() {
  return (

    <section className="section resume">
      <h2 className="title">Resume</h2>
      <div className="tab-box">
        {tabs.map((tab) => (
          <div className={`tab-list resume-list ${tab.id === 'experience' ? 'active' : ''}`} key={tab.id}>
            <h3>{tab.label}</h3>
          </div>
        ))}
      </div>
      <div className="tab-wrapper">
        <div className="tab-grid resume-box experience active">

          {experienceData.map((item) => (
            <div className="tab-item resume-item" key={item.id}>
              <h4>{item.period}</h4>
              <h4>{item.position}</h4>
              <h4>{item.company}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="tab-grid resume-box skills">
          {skillsData.map((skill, index) => (
            <div className="tab-item resume-item" key={index}>
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="tab-grid resume-box education">
          {educationData.map((edu) => (
            <div className="tab-item resume-item" key={edu.id}>
              <h4>{edu.period}</h4>
              <h4>{edu.degree}</h4>
              <h4>{edu.institution}</h4>
              <p>{edu.description}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default ResumePage;