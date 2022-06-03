import React, { useEffect, useState, useRef } from 'react'
import './Languages.css'

const Languages = () => (
  <div data-aos="fade-up" className="lang-container">
    <div className="titulon-lang">Languages and Frameworks</div>
    <div className="languages" id="languages">
      <div className="ring" id="shape">
        <div className="face one">
          <div className="testo">Python</div>
        </div>
        <div className="face two">
          <div className="testo">Java</div>
        </div>
        <div className="face three">
          <div className="testo">JavaScript</div>
        </div>
        <div className="face four">
          <div className="testo">HTML</div>
        </div>
        <div className="face five">
          <div className="testo">CSS</div>
        </div>
        <div className="face six">
          <div className="testo">C++</div>
        </div>
        <div className="face seven">
          <div className="testo">C#</div>
        </div>
        <div className="face eight">
          <div className="testo">Flask</div>
        </div>
        <div className="face nine">
          <div className="testo">React Native</div>
        </div>
        <div className="face ten">
          <div className="testo">SQL</div>
        </div>
        <div className="face eleven">
          <div className="testo">React.js</div>
        </div>
        <div className="face twelve">
          <div className="testo">Kotlin</div>
        </div>
      </div>
    </div>
  </div>
)

export default Languages
