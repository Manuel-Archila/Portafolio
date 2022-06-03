import React from 'react'
import './Project-right.css'

const ProjectRight = ({image, desc, title}) => (
  <div data-aos="fade-right" className="project-container1">
    <div className="projdesc1">
      <div className="project-title1">
        {title}
      </div>
      <div className="project-desc1">
        {desc}
      </div>
    </div>
    <div className="projimage1">
      <div style={{ backgroundImage: `url(${image})` }} className="project-image1" />
    </div>
  </div>
)

export default ProjectRight
