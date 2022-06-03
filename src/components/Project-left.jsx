import React from 'react'
import './Project-left.css'

const ProjectLeft = ({image, desc, title}) => (
  <div data-aos="fade-left" className="project-container">
    <div className="projimage">
      <div style={{ backgroundImage: `url(${image})` }} className="project-image" />
    </div>
    <div className="projdesc">
      <div className="project-title">
        {title}
      </div>
      <div className="project-desc">
        {desc}
      </div>
    </div>
  </div>
)

export default ProjectLeft
