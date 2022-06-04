import React, { useEffect } from 'react'
import './Skillset.css'

const Skillset = () => {
  const toggle = () => {
    const menu = document.querySelector('.menu')
    menu.classList.toggle('active')
  }

  const asignli = () => {
    const lis = document.querySelectorAll('li')
    lis.forEach((e, i) => {
      e.style.setProperty('--i', i)
    })
  }

  useEffect(() => {
    asignli()
  }, [])

  return (
    <div data-aos="fade-down" className="skills-container">
      <div className="skillset-title">Skillset</div>
      <div className="menu">
        <div className="toggle" onClick={toggle}>
          <div className="texto">Click me</div>
        </div>
        <li>
          <div className="figma" />
        </li>
        <li>
          <div className="git" />
        </li>
        <li>
          <div className="eslint" />
        </li>
        <li>
          <div className="tests" />
        </li>
        <li>
          <div className="unity" />
        </li>
        <li>
          <div className="postgres" />
        </li>
        <li>
          <div className="android" />
        </li>
        <li>
          <div className="scrum" />
        </li>
      </div>
    </div>
  )
}

export default Skillset
